import React from "react";

const Section5 = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      data-section5
      style={{
        width: "100vw",
        height: "120vh", // Increased from 100vh to 200vh
        background: "rgba(0,0,0,0.7)",
      }}
    />
  );
});

export default Section5;
