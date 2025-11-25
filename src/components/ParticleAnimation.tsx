import React, { useEffect, useRef, useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Particle } from "../core/particle";
import { Wave } from "../core/wave";
import { Attractor } from "../core/attractor";

interface ParticleAnimationProps {
  width?: number;
  height?: number;
  edgeExtension?: number;
  gridSize?: number;
  resolution?: number;
  posRandomOffset?: number;
  attractorForce?: number;
  windForce?: number;
  particleDefaultColor?: string;
  particleDefaultSize?: number;
  attractorColor?: string;
  attractorBackgroundColor?: string;
  attractorLoadingColor?: string;
  svgElement?: React.ReactElement;
  particleLifespan?: number;
  waveLifespan?: number;
  isActive?: boolean;
}

export const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  width = window.innerWidth / 1.5,
  height = window.innerHeight / 1.5,
  edgeExtension = 50,
  gridSize = 30,
  resolution = 15,
  posRandomOffset = 6,
  attractorForce = 0.0005,
  windForce = 0.05,
  particleDefaultColor = "black",
  particleDefaultSize = 1,
  attractorColor = "#3492eb",
  attractorBackgroundColor = "white",
  attractorLoadingColor = "rgba(255, 255, 0, 0.5)",
  svgElement,
  particleLifespan = 20000,
  waveLifespan = 1000,
  isActive = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Refs to keep track of internal state
  const particlesRef = useRef<Particle[]>([]);
  const wavesRef = useRef<Wave[]>([]);
  const isActiveRef = useRef(isActive);
  const attractorRef = useRef<Attractor | null>(null);

  // Update active state ref and handle wave triggering
  useEffect(() => {
    isActiveRef.current = isActive;
    if (isActive) {
      // Trigger wave when becoming active
      wavesRef.current.push(
        new Wave(
          edgeExtension + width / 2,
          edgeExtension + height / 2,
          10,
          performance.now(),
          waveLifespan
        )
      );
      particlesRef.current.forEach((particle) => {
        particle.color = particle.defaultColor.clone();
        particle.size = particle.defaultSize;
      });
    }
  }, [isActive, width, height, edgeExtension, waveLifespan]);

  // Memoize svgString to prevent re-initialization when svgElement prop changes reference but content is same
  const svgString = useMemo(() => {
    return svgElement ? renderToStaticMarkup(svgElement) : null;
  }, [svgElement]);

  // Initialize attractor separately
  useEffect(() => {
    if (svgString) {
      attractorRef.current = new Attractor(
        edgeExtension + width / 2,
        edgeExtension + height / 2,
        svgString,
        attractorColor,
        attractorBackgroundColor,
        attractorLoadingColor
      );
    } else {
      attractorRef.current = null;
    }
  }, [
    svgString, 
    width, 
    height, 
    edgeExtension, 
    attractorColor, 
    attractorBackgroundColor, 
    attractorLoadingColor
  ]);


  // Main animation loop and particle initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const extendedWidth = width + edgeExtension * 2;
    const extendedHeight = height + edgeExtension * 2;
    const gridCols = Math.ceil(extendedWidth / gridSize);
    const gridRows = Math.ceil(extendedHeight / gridSize);

    const grid: Particle[][] = new Array(gridCols * gridRows)
      .fill(null)
      .map(() => []);

    const particles = particlesRef.current;
    // Only re-initialize particles if dimensions or resolution change significantly
    // For now, we'll keep the existing logic of clearing and re-populating on these prop changes
    particles.length = 0; 
    
    const waves = wavesRef.current;
    const positions: { x: number; y: number }[] = [];
    let animationFrameId: number;

    // Initialize Particles
    for (let i = 0; i < extendedWidth / resolution; i++) {
      for (let j = 0; j < extendedHeight / resolution; j++) {
        const posX =
          i * resolution +
          (Math.random() * posRandomOffset - posRandomOffset / 2) +
          (j % 2 === 0 ? (extendedWidth % resolution) / 2 : 0);
        const posY =
          j * resolution +
          (Math.random() * posRandomOffset - posRandomOffset / 2);
        positions.push({
          x: posX,
          y: posY,
        });
        particles.push(
          new Particle(
            posX,
            posY,
            0,
            0,
            performance.now(),
            particleLifespan * Math.random(),
            extendedWidth,
            extendedHeight,
            particleDefaultColor,
            particleDefaultSize
          )
        );
      }
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const animate = (dt: number) => {
      const time = dt * 0.001; // Convert to seconds
      const windX = Math.sin(time * 0.5) * Math.cos(time * 0.3) * windForce;
      const windY = Math.cos(time * 0.4) * Math.sin(time * 0.2) * windForce;

      if (waves.length > 0) {
        waves.forEach((wave) => {
          wave.update(dt);
          wave.pushParticles(particles);
        });
        for (let i = waves.length - 1; i >= 0; i--) {
          if (dt - waves[i].bornAt > waveLifespan) {
            waves.splice(i, 1);
          }
        }
      }

      for (let i = 0; i < positions.length; i++) {
        if (
          dt - particles[i]?.bornAt > particles[i]?.lifespan ||
          particles[i]?.isOutOfBounds()
        ) {
          const newParticle = new Particle(
            positions[i].x,
            positions[i].y,
            0,
            0,
            dt,
            particleLifespan * Math.random(),
            extendedWidth,
            extendedHeight,
            particleDefaultColor,
            particleDefaultSize
          );
          particles[i] = newParticle;
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Reset Grid
      for (let i = 0; i < grid.length; i++) {
        grid[i].length = 0;
      }

      // 2. Populate Grid
      particles.forEach((p) => {
        const col = Math.floor(p.x / gridSize);
        const row = Math.floor(p.y / gridSize);
        if (col >= 0 && col < gridCols && row >= 0 && row < gridRows) {
          grid[row * gridCols + col].push(p);
        }
      });

      ctx.save();
      ctx.translate(-edgeExtension, -edgeExtension);

      const attractor = attractorRef.current;

      particles.forEach((particle, index) => {
        const distFromAttractor = particle.dist(positions[index]);

        particle.applyForce({
          x:
            (positions[index].x - particle.x) *
              (attractorForce * distFromAttractor) +
            windX,
          y:
            (positions[index].y - particle.y) *
              (attractorForce * distFromAttractor) +
            windY,
        });
        
        // Apply attractor force if active
        if (isActiveRef.current) {
          attractor?.applyForce(particle);
        } else {
          particle.color = particle.defaultColor.clone();
          particle.size = particle.defaultSize;
        }
        
        particle.update(dt);
      });

      attractor?.draw(ctx);
      particles.forEach((particle) => particle.draw(ctx));
      if (waves.length > 0) {
        waves.forEach((wave) => wave.draw(ctx));
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    width,
    height,
    edgeExtension,
    gridSize,
    resolution,
    posRandomOffset,
    attractorForce,
    windForce,
    particleDefaultColor,
    particleDefaultSize,
    particleLifespan,
    waveLifespan,
    // Attractor dependencies are moved to separate effect, and reference is used here
    // SVG element is no longer a dependency here to avoid reload
  ]);

  return <canvas ref={canvasRef} />;
};
