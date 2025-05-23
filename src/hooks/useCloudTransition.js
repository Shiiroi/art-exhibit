import { useEffect, useRef, useState } from "react";

// Custom hook to manage cloud transition based on scroll and section2 visibility
export default function useCloudTransition() {
  const [showCloud, setShowCloud] = useState(false);
  const section2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!section2Ref.current) return;
      const rect = section2Ref.current.getBoundingClientRect();
      setShowCloud(rect.top < window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { showCloud, section2Ref };
}
