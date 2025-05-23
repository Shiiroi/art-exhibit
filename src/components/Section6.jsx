import React from "react";

const Section6 = React.forwardRef(({ progress = 0 }, ref) => {
  // Start showing content earlier and compress the progression range
  const adjustedProgress = progress < 0.05 ? 0 : (progress - 0.05) / 0.5; // Compress to first 50% of scroll
  
  // Define text elements with smaller intervals that still look staggered
  const textElements = [
    {
      text: "However...",
      delay: 0,
      fontSize: "3rem",
      fontWeight: "bold",
    },
    {
      text: "Should that always be the case?",
      delay: 0.15, // Changed back to 0.15
      fontSize: "1.8rem",
    },
    {
      text: "Shouldn't someone be held accountable?",
      delay: 0.3, // Changed back to 0.3
      fontSize: "1.5rem",
    }
  ];

  // Calculate progress with wider windows for appearance
  const getElementProgress = (elementIndex) => {
    const element = textElements[elementIndex];
    const startPoint = element.delay;
    const endPoint = startPoint + 0.3; // Give more room for each element to fully appear
    
    if (adjustedProgress < startPoint) return 0;
    if (adjustedProgress > endPoint) return 1;
    return (adjustedProgress - startPoint) / (endPoint - startPoint);
  };

  return (
    <>
      <section
        ref={ref}
        data-section6
        style={{
          width: "100vw",
          height: "100vh", // Reduced slightly from 300vh
          background: "transparent",
          position: "relative",
        }}
      />
      
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          pointerEvents: adjustedProgress > 0.05 ? "auto" : "none",
          opacity: adjustedProgress > 0 ? 1 : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            maxWidth: "800px",
            padding: "2rem",
          }}
        >
          {textElements.map((item, index) => {
            const elementProgress = getElementProgress(index);
            
            return (
              <div
                key={index}
                style={{
                  opacity: elementProgress,
                  transform: `translateY(${30 * (1 - elementProgress)}px)`,
                  transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                  fontSize: item.fontSize,
                  fontWeight: item.fontWeight || "normal",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default Section6;