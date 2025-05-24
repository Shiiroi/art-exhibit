import React, { useState, useEffect } from "react";

const images = [
  {
    src: "/yolanda.png",
    caption: "Award Winning Yolanda Photo",
    description:
      "TIME's top 10 photo of 2013. Taken by Agence France-Presse. The photo captures the strong religious belief of Filipinos. However, seen in the background is the devastation of the typhoon Yolanda.",
  },
  {
    src: "/malapitan.jpg",
    caption: "This is where your taxes go!",
    description:
    "The photo speaks for itself.",
  },
  {
    src: "/aerial.JPG",
    caption: "Ulysses Aftermath",
    description:
      "A flood in Manila cause by Typhoon Ulysses. The capital of the Philippines.",
  },
];

const Section7 = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section
      ref={ref}
      data-section7="true"
      className="w-screen h-screen flex items-center justify-center text-white overflow-hidden relative bg-transparent"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center justify-center w-full h-[60vh] gap-10 relative">
          <button
            onClick={prevImage}
            className="absolute left-[calc(50%-25vw)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none text-white text-2xl px-4 py-2 rounded-full cursor-pointer"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <img
            src={images[current].src}
            alt={images[current].caption}
            className="rounded-xl object-contain bg-transparent max-h-[55vh] max-w-[75vw] shadow-[0_0_20px_2px_rgba(255,255,255,0.33)] mx-10"
          />
          <button
            onClick={nextImage}
            className="absolute right-[calc(50%-25vw)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none text-white text-2xl px-4 py-2 rounded-full cursor-pointer"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Container for text that matches image width */}
        <div className="flex flex-col items-center max-w-[50vw] w-full mt-6">
          <h2 className="text-4xl mb-2 font-bold text-white bg-black/40 backdrop-blur-sm rounded-xl py-1 px-4 shadow-[0_0_8px_rgba(0,0,0,0.8)] tracking-wide inline-block drop-shadow-[0_0_6px_#000]">
            {images[current].caption}
          </h2>
          <p className="text-lg opacity-85 mt-2 text-center max-w-[50vw] w-full">
            {images[current].description}
          </p>
        </div>
      </div>
    </section>
  );
});

export default Section7;
