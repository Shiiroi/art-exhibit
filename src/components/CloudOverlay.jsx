// src/components/CloudOverlay.js
import React from "react";

const CloudOverlay = ({ progress = 0 }) => {
  // Clamp progress between 0 and 1.2 to allow clouds to stay in until partway through Section 3
  const clamped = Math.max(0, Math.min(progress, 1.2));
  // For progress >= 1, clouds are fully in and stay in until progress > 1.1
  const leftStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "50vw",
    objectFit: "cover",
    zIndex: 0,
    pointerEvents: "none",
    transform:
      clamped >= 1
        ? "translateX(0%)"
        : `translateX(${-100 + clamped * 100}%)`,
    opacity: clamped >= 1 ? 1 : clamped,
    transition:
      "transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1)",
  };
  const rightStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "50vw",
    objectFit: "cover",
    zIndex: 0,
    pointerEvents: "none",
    transform:
      clamped >= 1
        ? "translateX(0%)"
        : `translateX(${100 - clamped * 100}%)`,
    opacity: clamped >= 1 ? 1 : clamped,
    transition:
      "transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1)",
  };
  return (
    <>
      <img
        src="/cloud.svg"
        alt="Cloud Left"
        style={leftStyle}
        aria-hidden
      />
      <img
        src="/cloud1.svg"
        alt="Cloud Right"
        style={rightStyle}
        aria-hidden
      />
    </>
  );
};

export default CloudOverlay;
