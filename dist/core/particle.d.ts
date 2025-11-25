import { default as tinycolor } from 'tinycolor2';
interface Point {
    x: number;
    y: number;
}
export declare class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    bornAt: number;
    lifespan: number;
    size: number;
    defaultSize: number;
    private mass;
    private age;
    color: tinycolor.Instance;
    defaultColor: tinycolor.Instance;
    private width;
    private height;
    constructor(x: number, y: number, vx: number, vy: number, bornAt: number, lifespan: number, width: number, height: number, defaultColor: string, defaultSize: number);
    isOutOfBounds(): boolean;
    update(dt: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
    dist(particle: Particle | Point): number;
    applyForce(force: {
        x: number;
        y: number;
    }): void;
}
export {};
