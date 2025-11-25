import { useState } from "react";
import { ParticleAnimation } from "particles";

function App() {
  const [isClickActive, setIsClickActive] = useState(false);
  const [isHoverActive, setIsHoverActive] = useState(false);

  return (
    <div
      style={{ width: "100vw", height: "100vh", margin: 0, overflow: "hidden" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <div onClick={() => setIsClickActive((prev) => !prev)} style={{position: 'relative', width: '500px', height: '400px'}}>
          <div style={{position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontSize: '32px', fontFamily: 'sans-serif'}}>
            Click me
          </div>
          <ParticleAnimation
            svgElement={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="100px"
                height="100px"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            }
            width={500}
            height={400}
            particleDefaultColor="blue"
            attractorColor="red"
            isActive={isClickActive}
          />
        </div>
        <div
          onMouseEnter={() => setIsHoverActive(true)}
          onMouseLeave={() => setIsHoverActive(false)}
          style={{ position: "relative", width: "500px", height: "400px" }}
        >
          <div
            style={{position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontSize: '32px', fontFamily: 'sans-serif'}}
          >
            Hover me
          </div>
          <ParticleAnimation
            svgElement={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="100px"
                height="100px"
              >
                <path d="M12 2L2 22h20L12 2zm0 4.8L18.5 20H5.5L12 6.8z" />
              </svg>
            }
            width={500}
            height={400}
            particleDefaultColor="black"
            attractorColor="skyblue"
            isActive={isHoverActive}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
