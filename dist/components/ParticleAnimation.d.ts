import { default as React } from 'react';
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
export declare const ParticleAnimation: React.FC<ParticleAnimationProps>;
export {};
