import { Particle } from "./particle";

import tinycolor from "tinycolor2";

export class Attractor {
  private shapeMatrix: boolean[][] = [];
  private matrixWidth: number = 0;
  private matrixHeight: number = 0;
  private matrixHalfWidth: number = 0;
  private matrixHalfHeight: number = 0;
  private nearestX: Int16Array | null = null;
  private nearestY: Int16Array | null = null;
  private debugImage: HTMLImageElement | null = null;
  private particleActiveSize: number = 1;
  private attractorColorObj: tinycolor.Instance;
  private backgroundColor: string;
  private loadingColor: string;
  constructor(
    public x: number,
    public y: number,
    svg: SVGElement | string,
    attractorColor: string,
    backgroundColor: string,
    loadingColor: string,
    particleActiveSize: number = 1
  ) {
    this.attractorColorObj = tinycolor(attractorColor);
    this.backgroundColor = backgroundColor;
    this.loadingColor = loadingColor;
    this.particleActiveSize = particleActiveSize;

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
  private attractionForce = 2;

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
          const index = y * width + x;
          this.nearestX[index] = x;
          this.nearestY[index] = y;
          queue[tail++] = index;
        }
      }
    }

    while (head < tail) {
      const index = queue[head++];
      const nearestX = this.nearestX[index];
      const nearestY = this.nearestY[index];
      const x = index % width;
      const y = (index / width) | 0;

      // Use standard 8-way connectivity for distance transform
      const deltaXs = [0, 0, -1, 1, -1, 1, -1, 1];
      const deltaYs = [-1, 1, 0, 0, -1, -1, 1, 1];

      for (let i = 0; i < 8; i++) {
        const neighborX = x + deltaXs[i];
        const neighborY = y + deltaYs[i];

        if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height) {
          const nextIndex = neighborY * width + neighborX;
          if (this.nearestX[nextIndex] === -1) {
            this.nearestX[nextIndex] = nearestX;
            this.nearestY[nextIndex] = nearestY;
            queue[tail++] = nextIndex;
          }
        }
      }
    }
  }

  findNearestCollisionPoint(
    particle: Particle
  ): { x: number; y: number; distance: number } | null {
    if (!this.nearestX || !this.nearestY) return null;

    const matrixX = Math.floor(particle.x - this.x + this.matrixHalfWidth);
    const matrixY = Math.floor(particle.y - this.y + this.matrixHalfHeight);

    const clampedX = Math.max(0, Math.min(this.matrixWidth - 1, matrixX));
    const clampedY = Math.max(0, Math.min(this.matrixHeight - 1, matrixY));

    const index = clampedY * this.matrixWidth + clampedX;
    const nearestX = this.nearestX[index];
    const nearestY = this.nearestY[index];

    if (nearestX === -1) return null;

    const worldNearestX = this.x - this.matrixHalfWidth + nearestX;
    const worldNearestY = this.y - this.matrixHalfHeight + nearestY;
    const deltaX = particle.x - worldNearestX;
    const deltaY = particle.y - worldNearestY;

    return {
      x: worldNearestX,
      y: worldNearestY,
      distance: Math.sqrt(deltaX * deltaX + deltaY * deltaY),
    };
  }

  applyForce(particle: Particle) {
    const collisionPoint = this.findNearestCollisionPoint(particle);
    if (collisionPoint) {
      const distance = collisionPoint.distance;
      const colorIntensity = Math.min(1, 1 / (1 + distance / 10));

      const defaultColorRgb = particle.defaultColor.toRgb();
      const attractorColorRgb = this.attractorColorObj.toRgb();

      const red = defaultColorRgb.r + (attractorColorRgb.r - defaultColorRgb.r) * colorIntensity;
      const green = defaultColorRgb.g + (attractorColorRgb.g - defaultColorRgb.g) * colorIntensity;
      const blue = defaultColorRgb.b + (attractorColorRgb.b - defaultColorRgb.b) * colorIntensity;

      particle.color = tinycolor({ r: red, g: green, b: blue });
      particle.size = Math.max(1, colorIntensity * this.particleActiveSize);

      if (this.isPointInside(particle.x, particle.y)) {
        particle.vx *= 0.5;
        particle.vy *= 0.5;
        return;
      }

      const force = this.attractionForce / Math.max(distance, 1) ** 2;
      particle.applyForce({
        x: (collisionPoint.x - particle.x) * force,
        y: (collisionPoint.y - particle.y) * force,
      });
    }
  }
}
