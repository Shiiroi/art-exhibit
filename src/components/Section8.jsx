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
      className="w-screen h-screen flex items-center justify-center text-white overflow-hidden relative bg-transparent z-10"
    >
      <div className="flex items-center justify-center gap-8 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
        <div className="flex flex-col items-end justify-center max-w-[400px] w-full">
          <h1 className="text-4xl font-extrabold mb-3 text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Resiliency
          </h1>
          <p className="text-[1.15rem] leading-[1.7] opacity-90 text-justify drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            An artwork by Kelly Ronveaux that shows how the resiliency of
            Filipinos is taken advantage of by powerful people like politicians.
            They stay comfortable while others suffer due to incompetent
            disaster prevention.
          </p>
        </div>
        <img
          src="https://philippinereporter.com/wp-content/uploads/2020/11/Resilience-Art-by-Kelly-Ronveaux--636x659.jpg"
          alt="Community rebuilding after disaster"
          className="max-w-[480px] max-h-[65vh] rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.2)]"
        />
      </div>
    </section>
  );
});

const Section8 = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    className="w-screen h-screen flex items-center justify-center text-white overflow-hidden relative bg-transparent z-10"
  >
    <div className="flex items-center justify-center gap-8">
      {/* IMAGE LEFT */}
      <img
        src="https://philippinereporter.com/wp-content/uploads/2020/11/Resilience-Art-by-Kelly-Ronveaux--636x659.jpg"
        alt="Community rebuilding after disaster"
        className="max-w-[480px] max-h-[65vh] rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.2)]"
      />
      {/* TEXT RIGHT */}
      <div className="flex flex-col items-start justify-center max-w-[400px] w-full">
        <h1 className="text-4xl font-extrabold mb-3 text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] w-full text-left">
          Resiliency
        </h1>
        <p className="text-[1.15rem] leading-[1.7] opacity-90 text-justify drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
          An artwork by Kelly Ronveaux that shows how the resiliency of
          Filipinos is taken advantage of by powerful people like politicians.
          They stay comfortable while others suffer due to incompetent
          disaster prevention.
        </p>
      </div>
    </div>
  </section>
));

export default Section8;
