import React, { useRef, useEffect, useState, forwardRef } from "react";

const images = [
  "https://media.philstar.com/images/articles/floods_2018-07-17_21-41-41.jpg",
  "https://sa.kapamilya.com/absnews/abscbnnews/media/2020/news/11/12/20201112-typhoon-ulysses-pnp-rescue-afp-s.jpg",
  "https://assets.grab.com/wp-content/uploads/sites/12/2024/07/29150743/PHOTO-RELEASE-GrabBayanihan-1-1536x1024.jpg",
  "https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/43331129_2146271855392009_3910059074326102016_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Yr-uBEe4Ue8Q7kNvwEQPwPJ&_nc_oc=Adn9MBgjx5Qk-Wd7MivIWK4wRRyFHWmMtQLJmZ8DS1EkXZlrY85gTNRa6u3iCTwHOM0&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=C0wIh5Zgd7nTHR7_7DKDyA&oh=00_AfKBWcYeiPn1DWP44-kpxNwF9t56ObBeIat85wdQlo-cpA&oe=68564C01",
  "https://jefmenguin.com/wp-content/uploads/2021/07/bayanihan.jpg",
];

const Section4 = forwardRef((props, ref) => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const allImages = [...images, ...images]; // for infinite scroll

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let animationFrame;
    let speed = 1;
    const scroll = () => {
      if (!isPaused) {
        carousel.scrollTop += speed;
        if (carousel.scrollTop >= carousel.scrollHeight / 2) {
          carousel.scrollTop = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0 w-full max-w-6xl mx-auto px-4 py-16"
    >
      {/* Text */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-white">Bayanihan</h2>
        <p className="text-white text-2xl">
          The word that represents the unity and cooperation of Filipinos. The
          photographs shows that even in the face of calamity, the "bayanihan"
          spirit shines through. The community comes together and help one
          another to overcome the challenges.
        </p>
      </div>
      {/* Right: Custom Vertical Carousel */}
      <div className="w-full md:w-[40%] flex justify-center md:ml-0">
        <div
          className="relative h-[32rem] w-80 overflow-hidden rounded-2xl shadow-2xl bg-base-100"
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: "none" }}
        >
          {/* Fade overlays */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-base-100/90 to-transparent z-20" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-base-100/90 to-transparent z-20" />
          <div className="pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-base-100/80 to-transparent z-20" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-base-100/80 to-transparent z-20" />
          <div className="flex flex-col" style={{ minHeight: "200%" }}>
            {allImages.map((src, idx) => (
              <div
                className="flex-shrink-0 h-64 w-full flex items-center justify-center"
                key={idx}
                style={{ minHeight: "16rem" }}
              >
                <img
                  src={src}
                  alt={`Vertical Carousel ${idx + 1}`}
                  className="object-cover h-60 w-72 rounded-xl border border-base-300 shadow-2xl transition-shadow duration-300 hover:shadow-[0_8px_32px_8px_rgba(0,0,0,0.25)]"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section4;
