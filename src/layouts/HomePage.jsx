import React, { useRef, useEffect, useState } from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section8_2 from "../components/Section8_2";
import Section8_3 from "../components/Section8_3";
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

  // Track if we've reached Section 8 or beyond
  const [passedSection8, setPassedSection8] = useState(false);

  // New state for effects reset
  const [effectsReset, setEffectsReset] = useState(false);

  // --- CURSOR INTENSITY STATE (for blinking and dimming) ---
  const [cursorIntensity, setCursorIntensity] = useState(0.8); // 0.8 = bright, decrements by 0.2 per section
  const [isBlinking, setIsBlinking] = useState(false);

  // --- DIM CURSOR ON SCROLL: 0.8, 0.6, 0.4, 0.2 for sections 1-4 ---
  useEffect(() => {
    const sectionRefs = [section1Ref, section2Ref, section3Ref, section4Ref];
    const handleDim = () => {
      if (effectsReset || passedSection8) return;
      let sectionsPassedCount = 0;
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // If the bottom of the section is above the top of the viewport, it's passed
          if (rect.bottom < 0) {
            sectionsPassedCount += 1;
          }
        }
      });
      // Start at 0.8, decrement by 0.2 for each section passed, min 0.2
      const newIntensity = Math.max(0.2, 0.8 - sectionsPassedCount * 0.2);
      setCursorIntensity(newIntensity);
      setIsBlinking(false); // Only blink at section 6/7
    };
    window.addEventListener("scroll", handleDim, { passive: true });
    handleDim();
    return () => window.removeEventListener("scroll", handleDim);
  }, [effectsReset, passedSection8]);

  // --- BLINKING EFFECT FOR SECTION 6 AND 7 ---
  useEffect(() => {
    const checkBlinkSections = () => {
      if (!effectsReset && !passedSection8) {
        let shouldBlink = false;
        [section6Ref, section7Ref].forEach((ref) => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height || (rect.bottom - rect.top);
            const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
            const visibleRatio = visibleHeight / sectionHeight;
            if (visibleRatio > 0.3) {
              shouldBlink = true;
            }
          }
        });
        setIsBlinking(shouldBlink);
      } else {
        setIsBlinking(false);
      }
    };
    window.addEventListener("scroll", checkBlinkSections, { passive: true });
    checkBlinkSections();
    return () => {
      window.removeEventListener("scroll", checkBlinkSections);
      setIsBlinking(false);
    };
  }, [effectsReset, passedSection8]);

  // --- BLINKING LOGIC (separate from scroll for less lag) ---
  useEffect(() => {
    let blinkInterval;
    if (isBlinking) {
      blinkInterval = setInterval(() => {
        setCursorIntensity((prev) => (prev === 0.2 ? 0.05 : 0.2));
      }, 180); // Fast blink for less lag
    }
    return () => {
      if (blinkInterval) clearInterval(blinkInterval);
    };
  }, [isBlinking]);

  // --- DEAD BULB AT SECTION 8 ---
  useEffect(() => {
    if (passedSection8 && !effectsReset) {
      setCursorIntensity(0); // Dead bulb
      setIsBlinking(false);
    } else if (!effectsReset) {
      setCursorIntensity(0.8); // Restore to bright if reset
    }
  }, [passedSection8, effectsReset]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Get positions of trigger sections
      const section2Top = section2Ref.current?.offsetTop || Infinity;
      const section5Top = section5Ref.current?.offsetTop || Infinity;
      const section8Top = section8Ref.current?.offsetTop || Infinity;

      // Check if we've passed each trigger section
      const isPastSection2 = scrollY + windowHeight / 2 >= section2Top;
      const isPastSection5 = scrollY + windowHeight / 2 >= section5Top;
      const isPastSection8 = scrollY + windowHeight / 2 >= section8Top;

      setCloudActive(isPastSection2);
      setRainActive(isPastSection5);
      setFloodActive(isPastSection8);

      // Cloud overlay progress (for fade-in effect)
      if (section2Ref.current) {
        const s2 = section2Ref.current.getBoundingClientRect();
        const fadeStart = windowHeight;
        const fadeEnd = 0;
        let progress = 1 - Math.min(Math.max((s2.top - fadeEnd) / (fadeStart - fadeEnd), 0), 1);
        setCloudProgress(progress);
      }

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
        if (section8Vis > 0.3) {
          setPassedSection8(true);
        }
      }

      setSection6FadeProgress(Math.max(0, Math.min(1, section6Vis)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <FloodBackground progress={floodActive && !effectsReset ? 1 : 0} animationDuration={2} />
      <Section1 ref={section1Ref} />
      <Section2 ref={section2Ref} />
      <Section3 ref={section3Ref} />
      <Section4 ref={section4Ref} />
      <Section5 ref={section5Ref} textProgress={1} />
      <Section6 ref={section6Ref} progress={section6FadeProgress} />
      <Section7 ref={section7Ref} />
      <Section8 ref={section8Ref} />
      <Section8_2 />
      <Section8_3 />
      <Section9 onReset={resetEnvironment} />
      <TopRightActions visible={effectsReset} onRetry={handleRetry} onHelp={handleHelp} />
    </div>
  );
};

export default HomePage;
