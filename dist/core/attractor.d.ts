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
    private attractorColor;
    private attractorColorObj;
    private backgroundColor;
    private loadingColor;
    private nearestCollisionPoints;
    constructor(x: number, y: number, svg: SVGElement | string, attractorColor: string, backgroundColor: string, loadingColor: string);
    private parseSVGString;
    private force;
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
