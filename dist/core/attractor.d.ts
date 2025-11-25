import { Particle } from './particle';
export declare class Attractor {
    x: number;
    y: number;
    private shapeMatrix;
    private matrixWidth;
    private matrixHeight;
    private matrixHalfWidth;
    private matrixHalfHeight;
    private nearestX;
    private nearestY;
    private debugImage;
    private particleActiveSize;
    private attractorColorObj;
    private backgroundColor;
    private loadingColor;
    constructor(x: number, y: number, svg: SVGElement | string, attractorColor: string, backgroundColor: string, loadingColor: string, particleActiveSize?: number);
    private parseSVGString;
    private attractionForce;
    private getSVGDimensions;
    private createShapeMatrix;
    isPointInside(worldX: number, worldY: number): boolean;
    draw(ctx: CanvasRenderingContext2D): void;
    private computeNearestNeighborField;
    findNearestCollisionPoint(particle: Particle): {
        x: number;
        y: number;
        distance: number;
    } | null;
    applyForce(particle: Particle): void;
}
