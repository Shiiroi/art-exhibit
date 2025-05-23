import React, { useRef, useEffect, useState, forwardRef } from "react";

const images = [
  "https://steemitimages.com/0x0//https://steemitimages.com/DQmVPAFRh8XF1vR5ZT43YvzpHqxA2eYFawCLdHbzM6eD3Nf/FB_IMG_1505230269517.jpg",
  "https://barokandtakya.com/wp-content/uploads/2020/11/resilient-in-filipino-still-playing-basketball-in-flood.jpg",
  "https://steemitimages.com/0x0//https://steemitimages.com/DQmc1swrMfNUMDPCyS8T7Mo3fCqLJGHXyZnVE1Kuv9tBbfL/FB_IMG_1505230232707.jpg",
  "https://steemitimages.com/0x0//https://steemitimages.com/DQmci68MTPhLTH7eWuisyAaRN6GkonLk92psr249t2jHWtX/FB_IMG_1505230238960.jpg",
  "https://steemitimages.com/0x0//https://steemitimages.com/DQmaN4N4x7PVk2XfDY94XxE8A9HmBzTpTC8czWigMWXLtEv/FB_IMG_1505230227376.jpg",
];

const Section3 = forwardRef((props, ref) => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const allImages = [...images, ...images];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let animationFrame;
    let speed = 1;
    const scroll = () => {
      if (!isPaused) {
        carousel.scrollLeft += speed;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div ref={ref} className="min-h-screen w-full bg-transparent flex items-center justify-center relative z-10">
      <div className="bg-transparent px-8 py-4 rounded-xl shadow-xl max-w-4xl w-full mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Baha ka lang, Pinoy kami
        </h1>
        <div
          className="w-full max-w-3xl overflow-hidden pointer-events-auto mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex flex-row"
            ref={carouselRef}
            style={{
              width: "100%",
              overflow: "hidden",
              scrollBehavior: "auto",
              scrollbarWidth: "none",
            }}
          >
            {allImages.map((src, idx) => (
              <div
                className="flex-shrink-0 w-80 h-80 flex items-center justify-center"
                key={idx}
                style={{ minWidth: "20rem", minHeight: "20rem" }}
              >
                <img
                  src={src}
                  alt={`Carousel ${idx + 1}`}
                  className="rounded-lg shadow-2xl object-cover w-full h-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl text-white mt-8 text-center max-w-2xl mx-auto">
            The collection of photographs showcases how Filipinos find ways to
            have fun despite the current situation. "Baha ka lang, Pinoy kami",
            a memorable phrase that embodies each picture. Flood and typhoons won't stop the people
            to do the things they love, and smile all throughout.
        </p>
      </div>
    </div>
  );
});

export default Section3;