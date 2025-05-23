import React, { useRef, useEffect, useState } from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";
import CloudOverlay from "../components/CloudOverlay";
import CustomCursor from "../components/CustomCursor";
import FloodBackground from "../components/FloodBackground";
import RainBackdrop from "../components/RainBackdrop";
import TopRightActions from "../components/TopRightActions";

const HomePage = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);

  const [cloudActive, setCloudActive] = useState(false);
  const [rainActive, setRainActive] = useState(false);
  const [floodActive, setFloodActive] = useState(false);

  const [cloudProgress, setCloudProgress] = useState(0);
  const [section6FadeProgress, setSection6FadeProgress] = useState(0);

  // Track if we've scrolled past trigger sections
  const [passedSection2, setPassedSection2] = useState(false);
  const [passedSection3, setPassedSection3] = useState(false);
  const [passedSection4, setPassedSection4] = useState(false);

  // Track if we've reached Section 8 or beyond
  const [passedSection8, setPassedSection8] = useState(false);

  // New state for effects reset
  const [effectsReset, setEffectsReset] = useState(false);

  // --- CURSOR INTENSITY STATE (for blinking and dimming) ---
  const [cursorIntensity, setCursorIntensity] = useState(0.8); // 0.8 = bright, decrements by 0.1 per section

  // --- BLINKING EFFECT FOR SECTION 7 ---
  useEffect(() => {
    let blinkInterval;
    // Only blink if Section 7 is visible and overlays are not reset
    const handleBlink = () => {
      setCursorIntensity((prev) => (prev === 0.3 ? 0.05 : 0.3));
    };
    // Section 7 visibility logic
    const checkSection7 = () => {
      if (!effectsReset && section7Ref.current) {
        const rect = section7Ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height || (rect.bottom - rect.top);
        const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
        const visibleRatio = visibleHeight / sectionHeight;
        if (visibleRatio > 0.3) {
          if (!blinkInterval) {
            blinkInterval = setInterval(handleBlink, 250);
          }
          // Dimmer in Section 7
          setCursorIntensity(0.3);
        } else {
          if (blinkInterval) {
            clearInterval(blinkInterval);
            blinkInterval = null;
          }
          setCursorIntensity(0.9); // Restore to bright when leaving Section 7
        }
      } else {
        if (blinkInterval) {
          clearInterval(blinkInterval);
          blinkInterval = null;
        }
        setCursorIntensity(0.9);
      }
    };
    window.addEventListener("scroll", checkSection7, { passive: true });
    checkSection7();
    return () => {
      window.removeEventListener("scroll", checkSection7);
      if (blinkInterval) clearInterval(blinkInterval);
      setCursorIntensity(0.9);
    };
  }, [effectsReset]);

  // --- DIM CURSOR WHEN SCROLLING TO SECTION 8+ ---
  useEffect(() => {
    if (passedSection8 && !effectsReset) {
      setCursorIntensity(0); // Dead bulb
    } else if (!effectsReset) {
      setCursorIntensity(0.9); // Restore to bright if reset
    }
  }, [passedSection8, effectsReset]);

  // --- DIM CURSOR ON FIRST SCROLL DOWN AND EACH SECTION PASSED ---
  useEffect(() => {
    // List of refs for sections to track
    const sectionRefs = [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref];
    const handleDim = () => {
      if (effectsReset || passedSection8) return;
      
      let sectionsPassedCount = 0;
      const windowHeight = window.innerHeight;
      
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // If section is above the viewport (passed), increment count
          if (rect.bottom < windowHeight * 0.3) {
            sectionsPassedCount += 1;
          }
        }
      });
      
      // Start at 0.8, decrement by 0.1 for each section passed, min 0.1
      const newIntensity = Math.max(0.1, 0.8 - sectionsPassedCount * 0.1);
      setCursorIntensity(newIntensity);
    };
    window.addEventListener("scroll", handleDim, { passive: true });
    handleDim();
    return () => window.removeEventListener("scroll", handleDim);
  }, [effectsReset, passedSection8]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Get positions of trigger sections
      const section2Top = section2Ref.current?.offsetTop || Infinity;
      const section3Top = section3Ref.current?.offsetTop || Infinity;
      const section4Top = section4Ref.current?.offsetTop || Infinity;

      // Check if we've passed each trigger section
      const isPastSection2 = scrollY + windowHeight / 2 >= section2Top;
      const isPastSection3 = scrollY + windowHeight / 2 >= section3Top;
      const isPastSection4 = scrollY + windowHeight / 2 >= section4Top;

      // Update our "passed section" states
      if (isPastSection2) setPassedSection2(true);
      if (!isPastSection2 && passedSection2) setPassedSection2(false);

      if (isPastSection3) setPassedSection3(true);
      if (!isPastSection3 && passedSection3) setPassedSection3(false);

      if (isPastSection4) setPassedSection4(true);
      if (!isPastSection4 && passedSection4) setPassedSection4(false);

      // Keep effects active once we've passed their sections
      setCloudActive(passedSection2);
      setRainActive(passedSection3);
      setFloodActive(passedSection4);

      // Section refs for determining current section (for other effects)
      // (Removed: currentSection, section7Vis)
      // let maxVisible = 0;
      // let currentSection = 0;
      // sectionRefs.forEach((ref, idx) => {
      //   if (ref.current) {
      //     const rect = ref.current.getBoundingClientRect();
      //     const sectionHeight = rect.height || (rect.bottom - rect.top);
      //     const visibleHeight = Math.max(
      //       0,
      //       Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
      //     );
      //     const visibleRatio = visibleHeight / sectionHeight;
      //     if (visibleRatio > maxVisible) {
      //       maxVisible = visibleRatio;
      //       currentSection = idx;
      //     }
      //   }
      // });

      // Cloud overlay progress (for fade-in effect)
      if (section2Ref.current) {
        const s2 = section2Ref.current.getBoundingClientRect();
        const fadeStart = windowHeight;
        const fadeEnd = 0;
        let progress = 1 - Math.min(Math.max((s2.top - fadeEnd) / (fadeStart - fadeEnd), 0), 1);
        setCloudProgress(progress);
      }

      // Rain visible on Section 3 or any part of Section 4 (for animation, not for persistence)
      // Flood progress (for animation, not for persistence)
      // Section 5 visibility
      // Section 6 visibility
      let section6Vis = 0;
      const section6 = document.querySelector('[data-section6]');
      if (section6) {
        const rect = section6.getBoundingClientRect();
        const sectionHeight = rect.height || (rect.bottom - rect.top);
        const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
        section6Vis = visibleHeight / sectionHeight;
      }

      // Section 8 visibility - once we've seen it, keep the cursor dead
      let section8Vis = 0;
      const section8 = document.querySelector('[data-section8]');
      if (section8) {
        const rect = section8.getBoundingClientRect();
        const sectionHeight = rect.height || (rect.bottom - rect.top);
        const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
        section8Vis = visibleHeight / sectionHeight;
        
        // If we pass section 8, set passedSection8 to true permanently
        if (section8Vis > 0.3) {
          setPassedSection8(true);
        }
      }

      setSection6FadeProgress(Math.max(0, Math.min(1, section6Vis)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [passedSection2, passedSection3, passedSection4]);

  // Add this reset function
  const resetEnvironment = () => {
    setEffectsReset(true);
    setCloudActive(false);
    setRainActive(false);
    setFloodActive(false);
    setPassedSection8(false); // Re-enable the bright cursor
    setCursorIntensity(0.8); // Restore to bright
  };

  // Handlers for TopRightActions
  const handleRetry = () => {
    setEffectsReset(false);
    setCloudActive(false);
    setRainActive(false);
    setFloodActive(false);
    setPassedSection8(false);
    setCursorIntensity(0.8);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHelp = () => {
    alert("Help is on the way! (You can customize this action.)");
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      <CustomCursor
        lightIntensity={cursorIntensity}
        lightColor={passedSection8 && !effectsReset ? "#888" : "#fffbe6"}
        dead={passedSection8 && !effectsReset}
      />
      {/* Cloud, Rain, and Flood overlays persist from their section onward */}
      <CloudOverlay progress={cloudActive && !effectsReset ? cloudProgress : 0} />
      <RainBackdrop visible={rainActive && !effectsReset} />
      <FloodBackground progress={floodActive && !effectsReset ? 1 : 0} />
      <Section1 ref={section1Ref} />
      <Section2 ref={section2Ref} />
      <Section3 ref={section3Ref} />
      <Section4 ref={section4Ref} />
      <Section5 ref={section5Ref} textProgress={1} />
      <Section6 ref={section6Ref} progress={section6FadeProgress} />
      <Section7 ref={section7Ref} />
      <Section8 ref={section8Ref} />
      <Section9 onReset={resetEnvironment} />
      <TopRightActions visible={effectsReset} onRetry={handleRetry} onHelp={handleHelp} />
    </div>
  );
};

export default HomePage;
