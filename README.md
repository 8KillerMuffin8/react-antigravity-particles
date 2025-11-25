# React AntiGravity Particles

A React component library for creating beautiful particle animations with SVG attractors. Particles flow and react to SVG shapes, creating dynamic visual effects perfect for interactive UIs. Inspired by Google's Anti Gravity code editor.

## Example

[View live demo →](https://8KillerMuffin8.github.io/react-antigravity-particles)

## Installation

```bash
npm install react-antigravity-particles
# or
yarn add react-antigravity-particles
# or
pnpm add react-antigravity-particles
```

## Peer Dependencies

This library requires React 16.8.0 or higher and React DOM 16.8.0 or higher as peer dependencies.

## Usage

```tsx
import { ParticleAnimation } from 'react-antigravity-particles';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ParticleAnimation
      svgElement={
        <svg viewBox="0 0 100 100" width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="black" />
        </svg>
      }
      width={800}
      height={600}
      isActive={isActive}
      attractorColor="#3492eb"
    />
  );
}
```

## Props

### Required Props

| Prop           | Type                   | Description                                                                                          |
| -------------- | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| `svgElement` | `React.ReactElement` | SVG element that defines the attractor shape. Particles will be drawn toward this shape when active. |

### Optional Props

| Prop                             | Type        | Default                      | Description                                                              |
| -------------------------------- | ----------- | ---------------------------- | ------------------------------------------------------------------------ |
| `width`                        | `number`  | `window.innerWidth / 1.5`  | Width of the canvas in pixels                                            |
| `height`                       | `number`  | `window.innerHeight / 1.5` | Height of the canvas in pixels                                           |
| `resolution`                   | `number`  | `15`                       | Spacing between particles (lower = more particles)                       |
| `particlePositionRandomOffset` | `number`  | `6`                        | Random offset applied to particle positions for natural distribution     |
| `particleRestoreForce`         | `number`  | `0.0005`                   | Strength of the force pulling particles back to their original positions |
| `windForce`                    | `number`  | `0.05`                     | Strength of the ambient wind effect                                      |
| `particleDefaultColor`         | `string`  | `"black"`                  | Default color of particles (CSS color string)                            |
| `particleDefaultSize`          | `number`  | `1`                        | Default size of particles in pixels                                      |
| `particleActiveSize`           | `number`  | `1.5`                      | Size multiplier for particles when near the attractor                    |
| `particleLifespan`             | `number`  | `20000`                    | Maximum lifespan of particles in milliseconds                            |
| `attractorColor`               | `string`  | `"#3492eb"`                | Color particles change to when near the attractor shape                  |
| `attractorBackgroundColor`     | `string`  | `"white"`                  | Background color used when processing the SVG                            |
| `attractorLoadingColor`        | `string`  | `"rgba(255, 255, 0, 0.5)"` | Color shown while the SVG is being processed                             |
| `waveLifespan`                 | `number`  | `1000`                     | Duration of waves created when activating in milliseconds                |
| `isActive`                     | `boolean` | `false`                    | When `true`, particles are attracted to the SVG shape and change color |

## Examples

### Click to Activate

```tsx
import { useState } from 'react';
import { ParticleAnimation } from 'react-antigravity-particles';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      <ParticleAnimation
        svgElement={
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 4.8L18.5 20H5.5L12 6.8z" />
          </svg>
        }
        width={500}
        height={400}
        isActive={isActive}
        attractorColor="skyblue"
      />
    </div>
  );
}
```

### License

MIT
