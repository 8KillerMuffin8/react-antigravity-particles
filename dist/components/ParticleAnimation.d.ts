import { default as React } from 'react';
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
export declare const ParticleAnimation: React.FC<ParticleAnimationProps>;
export {};
