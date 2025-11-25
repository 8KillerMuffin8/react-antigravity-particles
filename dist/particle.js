import tinycolor from "https://esm.sh/tinycolor2";
const FADE_IN_DURATION = 500;
const FADE_OUT_DURATION = 500;
const DAMPING_FACTOR = 0.95;
const MAX_VELOCITY = 0.5;
export class Particle {
    constructor(x, y, vx, vy, bornAt, lifespan, width, height, defaultColor) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.bornAt = bornAt;
        this.lifespan = lifespan;
        this.size = 1;
        this.mass = 1;
        this.age = 0;
        this.width = width;
        this.height = height;
        this.defaultColor = tinycolor(defaultColor);
        this.color = tinycolor(defaultColor);
    }
    isOutOfBounds() {
        return (this.x <= 0 ||
            this.x >= this.width ||
            this.y <= 0 ||
            this.y >= this.height);
    }
    update(dt) {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.vx = this.vx * DAMPING_FACTOR;
        this.vy = this.vy * DAMPING_FACTOR;
        this.vx = Math.max(Math.min(this.vx, MAX_VELOCITY), -MAX_VELOCITY);
        this.vy = Math.max(Math.min(this.vy, MAX_VELOCITY), -MAX_VELOCITY);
        this.age = dt - this.bornAt;
        if (this.x <= 0) {
            this.vx = -this.vx;
            this.x = 1;
        }
        if (this.x >= this.width) {
            this.vx = -this.vx;
            this.x = this.width - 1;
        }
        if (this.y <= 0) {
            this.vy = -this.vy;
            this.y = 1;
        }
        if (this.y >= this.height) {
            this.vy = -this.vy;
            this.y = this.height - 1;
        }
    }
    draw(ctx) {
        ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.rect(this.x, this.y, this.size, this.size);
        let opacity = 1;
        if (this.age < FADE_IN_DURATION) {
            opacity = Math.min(this.age / FADE_IN_DURATION, 1);
        }
        else if (this.age > this.lifespan - FADE_OUT_DURATION) {
            opacity = Math.max((this.lifespan - this.age) / FADE_OUT_DURATION, 0);
        }
        this.color.setAlpha(opacity);
        ctx.fillStyle = this.color.toRgbString();
        ctx.fill();
    }
    dist(particle) {
        return Math.sqrt((this.x - particle.x) ** 2 + (this.y - particle.y) ** 2);
    }
    applyForce(force) {
        this.vx += force.x / this.mass;
        this.vy += force.y / this.mass;
    }
}
