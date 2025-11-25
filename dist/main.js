import { LIFESPAN, WAVE_LIFESPAN } from "./constants.js";
import { Particle } from "./particle.js";
import { Wave } from "./wave.js";
import { Attractor } from "./attractor.js";
const WIDTH = window.innerWidth / 1.5;
const HEIGHT = window.innerHeight / 1.5;
const EDGE_EXTENSION = 50; // Amount to extend calculations beyond visible area
const EXTENDED_WIDTH = WIDTH + EDGE_EXTENSION * 2;
const EXTENDED_HEIGHT = HEIGHT + EDGE_EXTENSION * 2;
const RESOLUTION = 15;
const POS_RANDOM_OFFSET = 6;
const ATTRACTOR_FORCE = 0.0005;
const PARTICLE_DEFAULT_COLOR = "black";
const ATTRACTOR_COLOR = "#3492eb";
const ATTRACTOR_BACKGROUND_COLOR = "white";
const ATTRACTOR_LOADING_COLOR = "rgba(255, 255, 0, 0.5)";
async function loadSVG(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load SVG: ${response.statusText}`);
    }
    return await response.text();
}
let particles = [];
const waves = [];
const positions = [];
let attractor = null;
loadSVG("./icon.svg")
    .then((svgString) => {
    attractor = new Attractor(EDGE_EXTENSION + WIDTH / 2, EDGE_EXTENSION + HEIGHT / 2, svgString, ATTRACTOR_COLOR, ATTRACTOR_BACKGROUND_COLOR, ATTRACTOR_LOADING_COLOR);
})
    .catch((error) => {
    console.error("Error loading SVG:", error);
});
for (let i = 0; i < EXTENDED_WIDTH / RESOLUTION; i++) {
    for (let j = 0; j < EXTENDED_HEIGHT / RESOLUTION; j++) {
        const posX = i * RESOLUTION +
            (Math.random() * POS_RANDOM_OFFSET - POS_RANDOM_OFFSET / 2) +
            (j % 2 === 0 ? (EXTENDED_WIDTH % RESOLUTION) / 2 : 0);
        const posY = j * RESOLUTION +
            (Math.random() * POS_RANDOM_OFFSET - POS_RANDOM_OFFSET / 2);
        positions.push({
            x: posX,
            y: posY,
        });
        particles.push(new Particle(posX, posY, 0, 0, performance.now(), LIFESPAN * Math.random(), EXTENDED_WIDTH, EXTENDED_HEIGHT, PARTICLE_DEFAULT_COLOR));
    }
}
let applySvgForce = false;
// document.addEventListener("mouseenter", () => {
//   applySvgForce = true;
// });
// document.addEventListener("mouseleave", () => {
//   applySvgForce = false;
//   particles.forEach((particle) => {
//     particle.color = particle.defaultColor.clone();
//   });
// });
document.addEventListener("mousedown", () => {
    applySvgForce = !applySvgForce;
    waves.push(new Wave(EDGE_EXTENSION + WIDTH / 2, EDGE_EXTENSION + HEIGHT / 2, 10, performance.now()));
    particles.forEach((particle) => {
        particle.color = particle.defaultColor.clone();
        particle.size = 1;
    });
});
const canvas = document.getElementById("canvas");
if (canvas) {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    console.log("Canvas initialized:", canvas.width, "x", canvas.height);
    const ctx = canvas.getContext("2d");
    if (ctx) {
        function animate(dt) {
            if (waves.length > 0) {
                waves.forEach((wave) => {
                    wave.update(dt);
                    wave.pushParticles(particles);
                });
                for (let i = waves.length - 1; i >= 0; i--) {
                    if (dt - waves[i].bornAt > WAVE_LIFESPAN) {
                        waves.splice(i, 1);
                    }
                }
            }
            for (let i = 0; i < positions.length; i++) {
                if (dt - particles[i]?.bornAt > particles[i]?.lifespan ||
                    particles[i]?.isOutOfBounds()) {
                    const newParticle = new Particle(positions[i].x, positions[i].y, 0, 0, dt, LIFESPAN * Math.random(), EXTENDED_WIDTH, EXTENDED_HEIGHT, PARTICLE_DEFAULT_COLOR);
                    particles[i] = newParticle;
                }
            }
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
            // Translate context to center visible area within extended coordinate system
            ctx?.save();
            ctx?.translate(-EDGE_EXTENSION, -EDGE_EXTENSION);
            particles.forEach((particle, index) => {
                const distFromAttractor = particle.dist(positions[index]);
                particle.applyForce({
                    x: (positions[index].x - particle.x) *
                        (ATTRACTOR_FORCE * distFromAttractor),
                    y: (positions[index].y - particle.y) *
                        (ATTRACTOR_FORCE * distFromAttractor),
                });
                if (applySvgForce) {
                    attractor?.applyForce(particle);
                }
                particle.update(dt);
            });
            attractor?.draw(ctx);
            particles.forEach((particle) => particle.draw(ctx));
            if (waves.length > 0) {
                waves.forEach((wave) => wave.draw(ctx));
            }
            ctx?.restore();
            requestAnimationFrame(animate);
        }
        animate(0);
    }
}
