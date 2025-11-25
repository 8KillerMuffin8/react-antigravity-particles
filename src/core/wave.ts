import { Particle } from "./particle";

const FORCE_STRENGTH = 0.001;

export class Wave {
  private age = 0;
  public strength = 0;
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public bornAt: number,
    public lifespan: number
  ) {}

  update(deltaTime: number) {
    this.radius += 10;
    this.age = deltaTime - this.bornAt;
    this.strength = Math.max(0, ((this.lifespan - this.age) / this.age));
  }

  draw(ctx: CanvasRenderingContext2D) {}

  pushParticles(particles: Particle[]) {
    particles.forEach((particle) => {
      const distance = particle.dist({ x: this.x, y: this.y });
      if (Math.abs(distance - this.radius) < 10) {
        particle.applyForce({ x: (particle.x - this.x) * FORCE_STRENGTH * this.strength, y: (particle.y - this.y) * FORCE_STRENGTH * this.strength });
      }
    });
  }
}

