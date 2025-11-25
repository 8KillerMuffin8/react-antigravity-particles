import { Particle } from './particle';
export declare class Wave {
    x: number;
    y: number;
    radius: number;
    bornAt: number;
    lifespan: number;
    private age;
    strength: number;
    constructor(x: number, y: number, radius: number, bornAt: number, lifespan: number);
    update(dt: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
    pushParticles(particles: Particle[]): void;
}
