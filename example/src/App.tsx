import { useState } from "react";
import { ParticleAnimation } from "react-antigravity-particles";

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
        <div
          onClick={() => setIsClickActive((prev) => !prev)}
          style={{ position: "relative", width: "500px", height: "400px" }}
        >
          <div
            style={{
              position: "absolute",
              gap: "8px",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontSize: "32px",
              fontFamily: "sans-serif",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                backgroundColor: "white",
                border: "1px solid lightgray",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              Some chip
            </div>
            <span style={{fontSize: '50px', fontFamily: 'sans-serif', fontWeight: 'lighter'}}>
            Click me
            </span>
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "50px",
                color: "white",
                backgroundColor: "black",
                border: "none",
                cursor: "pointer",
              }}
            onClick={(e) => {e.stopPropagation();}}
            >
              Call to action
            </button>
          </div>
          <ParticleAnimation
            svgElement={
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400"
                width="400"
                height="400"
              >
                <defs>
                  <image
                    width="319"
                    height="471"
                    id="img1"
                    href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzE5IiBoZWlnaHQ9IjQ3MSIgdmlld0JveD0iMCAwIDMxOSA0NzEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMTguNzk4IDE4OS43MzZDMzE5LjE1NyAxNjYuMTAzIDI5MC4zNDEgMTQ0Ljc2NSAyNDEuNzMzIDEzMi42NjdMMjQwLjY4NyAxMzIuNDAyTDIxNi4wMjMgODIuNzE2TDI5NC42MTggOTYuMjgwOEwxNTEuNzI3IDBMODUuNjgyIDEyOC44MjdMODQuNTczNyAxMjkuMDQ2QzMxLjk4NDUgMTM5LjM2NCAwLjM3NDc2MyAxNjAuMjk2IDAuMDAwMTI5MjgzIDE4NS4wMjJDLTAuMjE4NDA3IDE5OS43NDIgMTAuNjE0OCAyMTMuNTU3IDMxLjM5MTMgMjI1LjA5MlYyMDguOTgzQzE5LjgyNDUgMjAxLjM2NSAxMy43MjExIDE5My4xMzkgMTMuODQ2IDE4NS4yNDFDMTQuMDMzMyAxNzIuMDA0IDMzLjc2NCAxNTIuODE5IDg4Ljc1NzEgMTQyLjM0NUM5My41MDI0IDE0MS40NCA5OC40NTA3IDE0MC42MjggMTAzLjQ0NiAxMzkuOTQxQzEwMy43NzQgMTM5Ljg5NCAxMDQuMTAxIDEzOS44NDggMTA0LjQ0NSAxMzkuODAxQzEwNC41MjMgMTM5LjgwMSAxMDQuNjMyIDEzOS43NyAxMDQuNzU3IDEzOS43NTRMMTIxLjQ1OSAxMjguNjRDMTIzLjY5MiAxMjcuMDk0IDEyNi40NTUgMTI1LjE5IDEyOC45MjEgMTIzLjQ3M0MxMjIuOTg5IDEyMy44NDggMTE2Ljk5NSAxMjQuMzYzIDExMS4wMTcgMTI1LjAxOEwxMDYuNjkzIDEyNS40ODdMMTU4LjE3NCAyNS4wMzhMMjE4LjU1MiA2NS43MzI2TDE4NS42IDYwLjAzNUwyMTkuMzE3IDEyNy45NjlMMjE0LjgzNyAxMjcuMjY2QzIwNy4xNDEgMTI2LjA0OSAxOTkuMTE4IDEyNS4wNjUgMTkwLjkwNyAxMjQuMzE2TDIxNi44ODIgMTQxLjYxMUMyMTcuMDA3IDE0MS42NDMgMjE3LjE0NyAxNDEuNjU4IDIxNy4yNzIgMTQxLjY4OUMyMTcuNTA2IDE0MS43MjEgMjE3LjY5NCAxNDEuNzUyIDIxNy44OTYgMTQxLjc5OUwyMTguMjg3IDE0MS44NjFDMjIyLjcyIDE0Mi42NDIgMjI2Ljk5NyAxNDMuNDY5IDIzMS4wNCAxNDQuMzc0QzI4NS45MjQgMTU2LjQ1NiAzMDUuMTU1IDE3Ni4yNDkgMzA0Ljk2OCAxODkuNTMzQzMwNC44NTggMTk3LjI0NSAyOTguODAyIDIwNS4xMTIgMjg3LjQyMiAyMTIuMzI0VjIyOC4yNDVDMzA3Ljc0NiAyMTcuNDI4IDMxOC41OTUgMjA0LjE2IDMxOC44MTMgMTg5Ljc1MkwzMTguNzk4IDE4OS43MzZaIiBmaWxsPSIjMDQyRDJFIi8+CjxwYXRoIGQ9Ik0xNTkuOTY5IDExOC45NzdMNDMuODE2NSAxOTYuMjkyVjQ3MC40NDVIMjc2LjEwNVYxOTYuMjkyTDE1OS45NjkgMTE4Ljk3N1pNMTE0LjQwNCA0NTcuNzdIOTkuMDU5NFYyMzEuMDU0TDExNC40MDQgMjIwLjg0NlY0NTcuNzdaTTI2My4yNTggNDU3Ljc3SDE2MC44NThWMTM1Ljk3NkwyNjMuMjU4IDIwNC41MDJWNDU3Ljc3WiIgZmlsbD0iIzA0MkQyRSIvPgo8cGF0aCBkPSJNMjA0LjIzOCA0NTcuNzcxSDIyMC45MDlWMjkxLjAyOEwyMDQuMjM4IDI3OS44ODNWNDU3Ljc3MVoiIGZpbGw9IiMwNDJEMkUiLz4KPHBhdGggZD0iTTIwNC4yMzggMjQ5LjEwMUwyMjAuOTA5IDI2MC4yMTVWMjMxLjkxNUwyMDQuMjM4IDIyMC44NDhWMjQ5LjEwMVoiIGZpbGw9IiMwNDJEMkUiLz4KPC9zdmc+Cg=="
                  />
                </defs>
                <style></style>
                <use
                  id="acqwiz"
                  href="#img1"
                  transform="matrix(.631,0,0,.631,99,51)"
                />
              </svg>
            }
            width={500}
            height={400}
            particleDefaultColor="rgba(0, 0, 0, 0.8)"
            attractorColor="olivegreen"
            isActive={isClickActive}
            particleActiveSize={1.75}
            resolution={12}
          />
        </div>
        <div
          onMouseEnter={() => setIsHoverActive(true)}
          onMouseLeave={() => setIsHoverActive(false)}
          style={{ position: "relative", width: "500px", height: "400px" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontSize: "32px",
              fontFamily: "sans-serif",
            }}
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
