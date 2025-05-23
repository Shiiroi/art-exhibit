import React, { useEffect, useState } from "react";

const CustomCursor = ({ lightIntensity = 0.7, lightColor = "#fffbe6", dead = false }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Hide the default cursor */}
      <style>{`body { cursor: none !important; }`}</style>
      {/* Light glow */}
      {!dead && (
        <div
          style={{
            position: "fixed",
            left: pos.x - 40,
            top: pos.y - 40,
            width: 80,
            height: 80,
            pointerEvents: "none",
            zIndex: 9999,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${lightColor} ${lightIntensity * 80}%, transparent 100%)`,
            opacity: lightIntensity,
            filter: "blur(8px)",
            transition: "opacity 0.2s, background 0.2s"
          }}
        />
      )}
      {/* Light bulb SVG */}
      <svg
        style={{
          position: "fixed",
          left: pos.x - 16,
          top: pos.y - 16,
          width: 32,
          height: 32,
          pointerEvents: "none",
          zIndex: 10000,
          opacity: dead ? 0.4 : 1,
          filter: dead ? "grayscale(1)" : "none",
          transition: "opacity 0.2s, filter 0.2s"
        }}
        viewBox="0 0 32 32"
      >
        <ellipse
          cx="16"
          cy="14"
          rx="10"
          ry="12"
          fill={dead ? "#bbb" : "#fffbe6"}
          stroke={dead ? "#888" : "#e0c200"}
          strokeWidth="2"
        />
        <rect
          x="12"
          y="22"
          width="8"
          height="6"
          rx="2"
          fill={dead ? "#888" : "#e0c200"}
        />
        <rect
          x="14"
          y="28"
          width="4"
          height="2"
          rx="1"
          fill={dead ? "#444" : "#aaa"}
        />
        {/* Optionally, add a crack or X for more "dead" effect */}
        {dead && (
          <line
            x1="10"
            y1="10"
            x2="22"
            y2="22"
            stroke="#888"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
      </svg>
    </>
  );
};

export default CustomCursor;
