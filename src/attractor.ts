import { Particle } from "./particle.js";

import tinycolor from "https://esm.sh/tinycolor2";

export class Attractor {
  private shapeMatrix: boolean[][] = [];
  private matrixWidth: number = 0;
  private matrixHeight: number = 0;
  private matrixHalfWidth: number = 0;
  private matrixHalfHeight: number = 0;
  private nearestX: Int16Array | null = null;
  private nearestY: Int16Array | null = null;
  private debugImage: HTMLImageElement | null = null;
  private attractorColor: string;
  private attractorColorObj: tinycolor.Instance;
  private backgroundColor: string;
  private loadingColor: string;
  private nearestCollisionPoints: Map<string, { x: number; y: number }> =
    new Map();

  constructor(
    public x: number,
    public y: number,
    svg: SVGElement | string,
    attractorColor: string,
    backgroundColor: string,
    loadingColor: string
  ) {
    this.attractorColor = attractorColor;
    this.attractorColorObj = tinycolor(attractorColor);
    this.backgroundColor = backgroundColor;
    this.loadingColor = loadingColor;
    const svgElement = typeof svg === "string" ? this.parseSVGString(svg) : svg;
    if (svgElement) {
      this.createShapeMatrix(svgElement);
    }
  }

  private parseSVGString(svgString: string): SVGElement | null {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const svgElement = doc.documentElement;

    if (svgElement instanceof SVGElement) {
      return svgElement;
    }

    console.error("Failed to parse SVG string");
    return null;
  }
  private force = 2;

  private getSVGDimensions(svg: SVGElement): { width: number; height: number } {
    // Try to get width and height from attributes
    const widthAttr = svg.getAttribute("width");
    const heightAttr = svg.getAttribute("height");

    let width = 0;
    let height = 0;

    if (widthAttr && heightAttr) {
      // Parse width/height (could be "800px", "800", etc.)
      width = parseFloat(widthAttr);
      height = parseFloat(heightAttr);
    }

    // If no width/height, try viewBox
    if (!width || !height) {
      const viewBox = svg.getAttribute("viewBox");
      if (viewBox) {
        const parts = viewBox.split(/\s+/);
        if (parts.length >= 4) {
          // viewBox format: "x y width height"
          width = parseFloat(parts[2]) || 0;
          height = parseFloat(parts[3]) || 0;
        }
      }
    }

    // Default fallback
    if (!width || !height) {
      width = 1000;
      height = 1000;
    }

    return { width, height };
  }

  private createShapeMatrix(svg: SVGElement) {
    // Get SVG dimensions from attributes
    let { width, height } = this.getSVGDimensions(svg);

    // If we have a viewBox, use it to determine the proper scale
    // Otherwise use the width/height directly
    const viewBox = svg.getAttribute("viewBox");
    let viewBoxWidth = width;
    let viewBoxHeight = height;

    if (viewBox) {
      const parts = viewBox.split(/\s+/);
      if (parts.length >= 4) {
        viewBoxWidth = parseFloat(parts[2]) || width;
        viewBoxHeight = parseFloat(parts[3]) || height;
      }
    }
    // Use a reasonable resolution (use viewBox dimensions scaled up, or width/height)
    // If width/height are much larger than viewBox, use viewBox scaled
    const targetSize = Math.max(viewBoxWidth, viewBoxHeight, 100);
    const scale = Math.max(1, Math.floor(400 / targetSize)); // Scale to ~800px
    width = targetSize * scale;
    height = targetSize * scale;

    // Create an offscreen canvas
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Failed to get 2d context");
      return;
    }

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    const svgClone = svg.cloneNode(true) as SVGElement;

    // Create an image from the modified SVG
    const svgData = new XMLSerializer().serializeToString(svgClone);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      // Draw the SVG image to the canvas
      ctx.drawImage(img, 0, 0, width, height);

      // Store the image and URL for debugging
      this.debugImage = img;

      // Read pixel data
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      // Create matrix: black pixels = inside (true), white/other = outside (false)
      this.matrixWidth = width;
      this.matrixHeight = height;
      this.matrixHalfWidth = width / 2;
      this.matrixHalfHeight = height / 2;
      this.shapeMatrix = [];

      for (let y = 0; y < height; y++) {
        this.shapeMatrix[y] = [];
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          // Check if pixel is black (or very close to black)
          // Using a threshold to account for anti-aliasing
          const isBlack = r < 128 && g < 128 && b < 128;
          this.shapeMatrix[y][x] = isBlack;
        }
      }

      const trueCount = this.shapeMatrix.flat().filter(Boolean).length;
      const totalPixels = width * height;
      console.log(`Shape matrix created: ${width}x${height}`);
      console.log(
        `Has true values: ${trueCount} out of ${totalPixels} pixels (${(
          (trueCount / totalPixels) *
          100
        ).toFixed(2)}%)`
      );
      this.computeNearestNeighborField(width, height);
    };

    img.onerror = (error) => {
      console.error("Error loading SVG:", error);
      URL.revokeObjectURL(url);
    };

    img.src = url;
  }
  // Helper method to check if a point is inside the shape
  isPointInside(worldX: number, worldY: number): boolean {
    if (this.shapeMatrix.length === 0) {
      return false;
    }

    // Convert world coordinates to matrix coordinates
    const matrixX = Math.floor(worldX - this.x + this.matrixHalfWidth);
    const matrixY = Math.floor(worldY - this.y + this.matrixHalfHeight);

    // Check bounds
    if (
      matrixX < 0 ||
      matrixX >= this.matrixWidth ||
      matrixY < 0 ||
      matrixY >= this.matrixHeight
    ) {
      return false;
    }

    return this.shapeMatrix[matrixY][matrixX];
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.debugImage && this.matrixWidth > 0 && this.matrixHeight > 0) {
      const drawX = this.x - this.matrixHalfWidth;
      const drawY = this.y - this.matrixHalfHeight;
      ctx.save();
      ctx.globalAlpha = 0.7;
      //   ctx.drawImage(
      //     this.debugImage,
      //     drawX,
      //     drawY,
      //     this.matrixWidth,
      //     this.matrixHeight
      //   );
      ctx.restore();
    } else {
      ctx.save();
      ctx.fillStyle = this.loadingColor;
      ctx.font = "20px Arial";
      ctx.fillText("Loading SVG...", this.x - 50, this.y);
      ctx.restore();
    }
  }

  private computeNearestNeighborField(width: number, height: number) {
    this.nearestX = new Int16Array(width * height).fill(-1);
    this.nearestY = new Int16Array(width * height).fill(-1);
    // Use a typed array for the queue to avoid GC overhead
    const queue = new Int32Array(width * height);
    let head = 0;
    let tail = 0;

    for (let y = 0; y < height; y++) {
      const row = this.shapeMatrix[y];
      for (let x = 0; x < width; x++) {
        if (row[x]) {
          const idx = y * width + x;
          this.nearestX[idx] = x;
          this.nearestY[idx] = y;
          queue[tail++] = idx;
        }
      }
    }

    while (head < tail) {
      const idx = queue[head++];
      const nx = this.nearestX[idx];
      const ny = this.nearestY[idx];
      const x = idx % width;
      const y = (idx / width) | 0;

      // Use standard 8-way connectivity for distance transform
      const dxs = [0, 0, -1, 1, -1, 1, -1, 1];
      const dys = [-1, 1, 0, 0, -1, -1, 1, 1];

      for (let i = 0; i < 8; i++) {
        const nx_c = x + dxs[i];
        const ny_c = y + dys[i];

        if (nx_c >= 0 && nx_c < width && ny_c >= 0 && ny_c < height) {
          const nextIdx = ny_c * width + nx_c;
          if (this.nearestX[nextIdx] === -1) {
            this.nearestX[nextIdx] = nx;
            this.nearestY[nextIdx] = ny;
            queue[tail++] = nextIdx;
          }
        }
      }
    }
    console.log("Nearest neighbor field computed");
  }

  findNearestCollisionPoint(
    particle: Particle
  ): { x: number; y: number; distance: number } | null {
    if (!this.nearestX || !this.nearestY) return null;

    const matrixX = Math.floor(particle.x - this.x + this.matrixHalfWidth);
    const matrixY = Math.floor(particle.y - this.y + this.matrixHalfHeight);

    const clampedX = Math.max(0, Math.min(this.matrixWidth - 1, matrixX));
    const clampedY = Math.max(0, Math.min(this.matrixHeight - 1, matrixY));

    const idx = clampedY * this.matrixWidth + clampedX;
    const nx = this.nearestX[idx];
    const ny = this.nearestY[idx];

    if (nx === -1) return null;

    const worldNx = this.x - this.matrixHalfWidth + nx;
    const worldNy = this.y - this.matrixHalfHeight + ny;
    const dx = particle.x - worldNx;
    const dy = particle.y - worldNy;

    return {
      x: worldNx,
      y: worldNy,
      distance: Math.sqrt(dx * dx + dy * dy),
    };
  }

  applyForce(particle: Particle) {
    const result = this.findNearestCollisionPoint(particle);
    if (result) {
      const dist = result.distance;
      const colorIntensity = Math.min(1, 1 / (1 + dist / 10));

      const c1 = particle.defaultColor.toRgb();
      const c2 = this.attractorColorObj.toRgb();

      const r = c1.r + (c2.r - c1.r) * colorIntensity;
      const g = c1.g + (c2.g - c1.g) * colorIntensity;
      const b = c1.b + (c2.b - c1.b) * colorIntensity;

      particle.color = tinycolor({ r, g, b });
      particle.size = 1 + colorIntensity;

      if (this.isPointInside(particle.x, particle.y)) {
        particle.vx *= 0.5;
        particle.vy *= 0.5;
        return;
      }

      const force = this.force / Math.max(dist, 1) ** 2;
      particle.applyForce({
        x: (result.x - particle.x) * force,
        y: (result.y - particle.y) * force,
      });
    }
  }
}
