const FloodBackground = ({ progress = 0 }) => (
  <div
    className="flood-svg-container"
    style={{
      left: 0,
      right: 0,
      bottom: 0,
      width: "100vw",
      height: "200px",
      pointerEvents: "none",
      zIndex: 2,
      position: "fixed",
      opacity: progress,
      transform: `translateY(${30 * (1 - progress)}px)`,
      transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)",
    }}
  >
    <svg
      viewBox="0 0 1440 270"
      width="100%"
      height="270"
      className="flood-svg"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        pointerEvents: "none",
      }}
      preserveAspectRatio="none"
    >
      <path
        className="flood-svg1"
        d="M0,170 Q300,230 720,160 T1440,170 V270 H0 Z"
        fill="rgba(30,30,30,0.35)"
      >
        <animate
          attributeName="d"
          dur="8s"
          repeatCount="indefinite"
          values="
            M0,170 Q300,230 720,160 T1440,170 V270 H0 Z;
            M0,180 Q400,210 720,180 T1440,170 V270 H0 Z;
            M0,170 Q300,230 720,160 T1440,170 V270 H0 Z
          "
        />
      </path>
      <path
        className="flood-svg2"
        d="M0,200 Q400,260 720,190 T1440,200 V270 H0 Z"
        fill="rgba(90,90,90,0.18)"
      >
        <animate
          attributeName="d"
          dur="12s"
          repeatCount="indefinite"
          values="
            M0,200 Q400,260 720,190 T1440,200 V270 H0 Z;
            M0,210 Q500,240 720,210 T1440,200 V270 H0 Z;
            M0,200 Q400,260 720,190 T1440,200 V270 H0 Z
          "
        />
      </path>
    </svg>
  </div>
);

export default FloodBackground;
