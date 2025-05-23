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
  const [cursorIntensity, setCursorIntensity] = useState(0.8);
  const [rainVisible, setRainVisible] = useState(false);
  const [floodProgress, setFloodProgress] = useState(0);
  const [section5Visible, setSection5Visible] = useState(0);
  const [section6FadeProgress, setSection6FadeProgress] = useState(0);
  const [section7Visible, setSection7Visible] = useState(false);
  const [section8Visible, setSection8Visible] = useState(false);

  // Blinking effect for Section 7
  useEffect(() => {
    let blinkInterval;

    if (section7Visible) {
      blinkInterval = setInterval(() => {
        setCursorIntensity((prev) => (prev === 0.3 ? 0.05 : 0.3));
      }, 250);
    }

    return () => {
      if (blinkInterval) clearInterval(blinkInterval);
    };
  }, [section7Visible]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Section refs for determining current section
      const sectionRefs = [
        section1Ref,
        section2Ref,
        section3Ref,
        section4Ref,
        section5Ref,
        section6Ref,
        section7Ref,
        section8Ref,
      ];

      let maxVisible = 0;
      let currentSection = 0;

      sectionRefs.forEach((ref, idx) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const sectionHeight = rect.height || (rect.bottom - rect.top);
          const visibleHeight = Math.max(
            0,
            Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
          );
          const visibleRatio = visibleHeight / sectionHeight;
          if (visibleRatio > maxVisible) {
            maxVisible = visibleRatio;
            currentSection = idx;
          }
        }
      });

      // Cloud: appears at Section 2 and stays until you scroll back above Section 2
      setCloudActive(currentSection >= 1);

      // Rain: appears at Section 3 and stays until you scroll back above Section 3
      setRainActive(currentSection >= 2);

      // Flood: appears at Section 4 and stays until you scroll back above Section 4
      setFloodActive(currentSection >= 3);

      // Section 7 visibility
      setSection7Visible(currentSection === 6);

      // Cursor intensity for sections 1-6
      if (currentSection < 6) {
        const intensityBySection = [0.8, 0.7, 0.6, 0.5, 0.4, 0.3];
        setCursorIntensity(intensityBySection[currentSection]);
      }

      // Cloud overlay progress (for fade-in effect)
      if (section2Ref.current) {
        const s2 = section2Ref.current.getBoundingClientRect();
        const fadeStart = windowHeight;
        const fadeEnd = 0;
        let progress = 1 - Math.min(Math.max((s2.top - fadeEnd) / (fadeStart - fadeEnd), 0), 1);
        setCloudProgress(progress);
      }

      // Rain visible on Section 3 or any part of Section 4 (for animation, not for persistence)
      let rainAnim = false;
      if (section3Ref.current && section4Ref.current) {
        const s3 = section3Ref.current.getBoundingClientRect();
        const s4 = section4Ref.current.getBoundingClientRect();
        const section3Height = s3.height || (s3.bottom - s3.top);
        const visibleHeight3 = Math.max(0, Math.min(windowHeight, s3.bottom) - Math.max(0, s3.top));
        const section4InView = s4.bottom > 0 && s4.top < windowHeight;
        rainAnim = (visibleHeight3 / section3Height) >= 0.7 || section4InView;
      }
      setRainVisible(rainAnim);

      // Flood progress (for animation, not for persistence)
      let floodProg = 0;
      if (section4Ref.current) {
        const s4 = section4Ref.current.getBoundingClientRect();
        const sectionHeight = s4.height || (s4.bottom - s4.top);
        const visibleHeight = Math.max(0, Math.min(windowHeight, s4.bottom) - Math.max(0, s4.top));
        floodProg = (visibleHeight / sectionHeight) >= 0.7 ? 1 : 0;
      }
      setFloodProgress(floodProg);

      // Section 5 visibility
      let section5Vis = 0;
      const section5 = document.querySelector('[data-section5]');
      if (section5) {
        const rect = section5.getBoundingClientRect();
        const sectionHeight = rect.height || (rect.bottom - rect.top);
        const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
        section5Vis = visibleHeight / sectionHeight;
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

      // Section 7 visibility
      let section7Vis = 0;
      const section7 = document.querySelector('[data-section7]');
      if (section7) {
        const rect = section7.getBoundingClientRect();
        const sectionHeight = rect.height || (rect.bottom - rect.top);
        const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
        section7Vis = visibleHeight / sectionHeight;
        setSection7Visible(section7Vis > 0.3);
      }

      // Section 8 visibility
      let section8Vis = 0;
      const section8 = document.querySelector('[data-section8]');
      if (section8) {
        const rect = section8.getBoundingClientRect();
        const sectionHeight = rect.height || (rect.bottom - rect.top);
        const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
        section8Vis = visibleHeight / sectionHeight;
        setSection8Visible(section8Vis > 0.3);
      }

      setSection5Visible(section5Vis >= 0.5 || section6Vis > 0 ? 1 : 0);
      setSection6FadeProgress(Math.max(0, Math.min(1, section6Vis)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      <CustomCursor
        lightIntensity={section8Visible ? 0 : cursorIntensity}
        lightColor={section8Visible ? "#888" : "#fffbe6"}
        dead={section8Visible}
      />
      {/* Cloud, Rain, and Flood overlays persist from their section onward */}
      <CloudOverlay progress={cloudActive ? cloudProgress : 0} />
      <RainBackdrop visible={rainActive} />
      <FloodBackground progress={floodActive ? 1 : 0} />
      <Section1 ref={section1Ref} />
      <Section2 ref={section2Ref} />
      <Section3 ref={section3Ref} />
      <Section4 ref={section4Ref} />
      <Section5 ref={section5Ref} textProgress={1} />
      <Section6 ref={section6Ref} progress={section6FadeProgress} />
      <Section7 ref={section7Ref} />
      <Section8 ref={section8Ref} />
      <Section9 />
    </div>
  );
};

export default HomePage;
