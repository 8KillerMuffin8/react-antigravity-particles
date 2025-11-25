import { WAVE_LIFESPAN } from "./constants.js";
const FORCE_STRENGTH = 0.001;
export class Wave {
    constructor(x, y, radius, bornAt) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.bornAt = bornAt;
        this.age = 0;
        this.strength = 0;
    }
    update(dt) {
        this.radius += 10;
        this.age = dt - this.bornAt;
        this.strength = Math.max(0, ((WAVE_LIFESPAN - this.age) / this.age));
    }
    draw(ctx) { }
    pushParticles(particles) {
        particles.forEach((particle) => {
            const distance = particle.dist({ x: this.x, y: this.y });
            if (Math.abs(distance - this.radius) < 10) {
                particle.applyForce({ x: (particle.x - this.x) * FORCE_STRENGTH * this.strength, y: (particle.y - this.y) * FORCE_STRENGTH * this.strength });
            }
        });
    }
}
