import React from "react";

const NUM_DROPS = 100; // Increase to make the rain feel fuller

const RainBackdrop = ({ visible }) => (
  <div
    className="rain"
    style={{
      opacity: visible ? 1 : 0,
      transition: "opacity 0.7s",
      pointerEvents: "none",
    }}
  >
    {Array.from({ length: NUM_DROPS }).map((_, i) => {
      // Start some drops further left for diagonal coverage
      const left = Math.random() * 115 - 15;
      const delay = Math.random();
      const duration = 0.8 + Math.random() * 0.7;
      const top = Math.random() * 100;
      return (
        <div
          key={i}
          className="rain-drop"
          style={{
            left: `${left}vw`,
            top: `-${top}vh`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            transform: "rotate(-15deg)",
          }}
        />
      );
    })}
  </div>
);

export default RainBackdrop;
