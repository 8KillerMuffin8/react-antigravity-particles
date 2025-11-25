import React, { useEffect, useRef, useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Particle } from "../core/particle";
import { Wave } from "../core/wave";
import { Attractor } from "../core/attractor";

interface ParticleAnimationProps {
  width?: number;
  height?: number;
  resolution?: number;
  particlePositionRandomOffset?: number;
  particleRestoreForce?: number;
  windForce?: number;
  particleDefaultColor?: string;
  particleDefaultSize?: number;
  particleActiveSize?: number;
  particleLifespan?: number;
  attractorColor?: string;
  attractorBackgroundColor?: string;
  attractorLoadingColor?: string;
  svgElement?: React.ReactElement;
  waveLifespan?: number;
  isActive?: boolean;
}

const EDGE_EXTENSION = 50;

export const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  width = window.innerWidth / 1.5,
  height = window.innerHeight / 1.5,
  resolution = 15,
  particlePositionRandomOffset = 6,
  particleRestoreForce = 0.0005,
  windForce = 0.05,
  particleDefaultColor = "black",
  particleDefaultSize = 1,
  particleActiveSize = 1.5,
  particleLifespan = 20000,
  attractorColor = "#3492eb",
  attractorBackgroundColor = "white",
  attractorLoadingColor = "rgba(255, 255, 0, 0.5)",
  svgElement,
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
          EDGE_EXTENSION + width / 2,
          EDGE_EXTENSION + height / 2,
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
  }, [isActive, width, height, waveLifespan]);

  // Memoize svgString to prevent re-initialization when svgElement prop changes reference but content is same
  const svgString = useMemo(() => {
    return svgElement ? renderToStaticMarkup(svgElement) : null;
  }, [svgElement]);

  // Initialize attractor separately
  useEffect(() => {
    if (svgString) {
      attractorRef.current = new Attractor(
        EDGE_EXTENSION + width / 2,
        EDGE_EXTENSION + height / 2,
        svgString,
        attractorColor,
        attractorBackgroundColor,
        attractorLoadingColor,
        particleActiveSize
      );
    } else {
      attractorRef.current = null;
    }
  }, [
    svgString,
    width,
    height,
    attractorColor,
    attractorBackgroundColor,
    attractorLoadingColor,
    particleActiveSize,
  ]);

  // Main animation loop and particle initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const extendedWidth = width + EDGE_EXTENSION * 2;
    const extendedHeight = height + EDGE_EXTENSION * 2;

    const particles = particlesRef.current;
    particles.length = 0;

    const waves = wavesRef.current;
    const positions: { x: number; y: number }[] = [];
    let animationFrameId: number;

    // Initialize Particles
    for (let i = 0; i < extendedWidth / resolution; i++) {
      for (let j = 0; j < extendedHeight / resolution; j++) {
        const positionX =
          i * resolution +
          (Math.random() * particlePositionRandomOffset - particlePositionRandomOffset / 2) +
          (j % 2 === 0 ? (extendedWidth % resolution) / 2 : 0);
        const positionY =
          j * resolution +
          (Math.random() * particlePositionRandomOffset - particlePositionRandomOffset / 2);
        positions.push({
          x: positionX,
          y: positionY,
        });
        particles.push(
          new Particle(
            positionX,
            positionY,
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

    const animate = (deltaTime: number) => {
      const timeInSeconds = deltaTime * 0.001;
      const windX = Math.sin(timeInSeconds * 0.5) * Math.cos(timeInSeconds * 0.3) * windForce;
      const windY = Math.cos(timeInSeconds * 0.4) * Math.sin(timeInSeconds * 0.2) * windForce;

      if (waves.length > 0) {
        waves.forEach((wave) => {
          wave.update(deltaTime);
          wave.pushParticles(particles);
        });
        for (let i = waves.length - 1; i >= 0; i--) {
          if (deltaTime - waves[i].bornAt > waveLifespan) {
            waves.splice(i, 1);
          }
        }
      }

      for (let i = 0; i < positions.length; i++) {
        if (
          deltaTime - particles[i]?.bornAt > particles[i]?.lifespan ||
          particles[i]?.isOutOfBounds()
        ) {
          const newParticle = new Particle(
            positions[i].x,
            positions[i].y,
            0,
            0,
            deltaTime,
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

      ctx.save();
      ctx.translate(-EDGE_EXTENSION, -EDGE_EXTENSION);

      const attractor = attractorRef.current;

      particles.forEach((particle, index) => {
        const distanceFromAttractor = particle.dist(positions[index]);

        particle.applyForce({
          x:
            (positions[index].x - particle.x) *
              (particleRestoreForce * distanceFromAttractor) +
            windX,
          y:
            (positions[index].y - particle.y) *
              (particleRestoreForce * distanceFromAttractor) +
            windY,
        });

        // Apply attractor force if active
        if (isActiveRef.current) {
          attractor?.applyForce(particle);
        } else {
          particle.color = particle.defaultColor.clone();
          particle.size = particle.defaultSize;
        }

        particle.update(deltaTime);
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
    resolution,
    particlePositionRandomOffset,
    particleRestoreForce,
    windForce,
    particleDefaultColor,
    particleDefaultSize,
    particleLifespan,
    waveLifespan,
  ]);

  return <canvas ref={canvasRef} />;
};
