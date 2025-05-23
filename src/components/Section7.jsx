import React, { useState, useEffect } from "react";

const images = [
  {
    src: "/yolanda.png",
    caption: "Award Winning Yolanda Photo",
    description:
      "TIME's top 10 photo of 2013. Taken by Agence France-Presse. The photo captures the strong religious belief of Filipinos. However, seen in the background is the devastation of the typhoon Yolanda.",
  },
  {
    src: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/487999289_1211450337222497_2886091924358709083_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D5EF_8PM42IQ7kNvwEdBKu2&_nc_oc=AdnPfp3HFwWvSTm30W9fQRNEhyfYNceeX7uVCqzs-YTme2Ew4h9tQx1NhOy1Ic1xZLQ&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=JkRoU1eebhg34STEFrRynw&oh=00_AfICKR7u8zA-7xPjTf17kEL2YyQF95BnUIJi9goMAcU0oQ&oe=683649F6",
    caption: "This is where your taxes go!",
    description:
      "A signage informing the public about the projects of the LGU, but something is wrong in the background.",
  },
  {
    src: "https://images.gmanews.tv/webpics/2020/11/2020-11-12T234101Z_148202793_RC2Z1K9GQH3E_RTRMADP_3_ASIA-STORM-PHILIPPINES_2020_11_13_18_49_26_0.JPG",
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
      // bg-transparent ensures no background color
    >
      <div
        className="flex flex-col items-center justify-center w-full"
        style={{ height: "100%" }}
      >
        <div
          className="flex items-center justify-center w-full"
          style={{ height: "60vh", gap: "2.5rem", position: "relative" }}
        >
          <button
            onClick={prevImage}
            className="bg-black/0 border-none text-white text-2xl px-4 py-2 rounded-full cursor-pointer absolute"
            style={{
              left: "calc(50% - 40vw)", // closer to image
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <img
            src={images[current].src}
            alt={images[current].caption}
            className="rounded-xl object-contain bg-black/0"
            style={{
              maxHeight: "55vh",
              maxWidth: "75vw",
              boxShadow: "0 0 20px 2px #fff5",
              margin: "0 2.5rem",
            }}
          />
          <button
            onClick={nextImage}
            className="bg-black/0 border-none text-white text-2xl px-4 py-2 rounded-full cursor-pointer absolute"
            style={{
              right: "calc(50% - 40vw)", // closer to image
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        <div
          className="mt-8 text-center w-[80vw] max-w-xl"
          style={{
            color: "#fff",
            textShadow: "0 2px 16px #000, 0 0 8px #fff8",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "0.5rem",
              fontWeight: 700,
              color: "#fff",
              background: "rgba(0, 0, 0, 0.45)", // more transparent for overlays
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              borderRadius: "0.6rem",
              padding: "0.3em 1em",
              boxShadow: "0 0 8px #000c",
              letterSpacing: "0.01em",
              display: "inline-block",
              textShadow: "0 0 6px #000",
            }}
          >
            {images[current].caption}
          </h2>
          <p
            className="text-lg opacity-85 mt-2"
            style={{ textAlign: "center" }}
          >
            {images[current].description}
          </p>
        </div>
      </div>
    </section>
  );
});

export default Section7;
