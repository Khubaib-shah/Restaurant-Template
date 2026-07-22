import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRestaurant } from "../../context/RestaurantContext";
import { motion, AnimatePresence } from "motion/react";

export const HeroBanner: React.FC = () => {
  const { config } = useRestaurant();
  const slides = config.heroSlides;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const preloadLinks = slides.slice(0, 2).map((slide) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = slide.imageUrl;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      preloadLinks.forEach((link) => document.head.removeChild(link));
    };
  }, [slides]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      id="hero-banner-container"
      className="w-full bg-transparent px-2 sm:px-4 lg:px-6 mt-4 mb-2 lg:mt-6 select-none shrink-0"
    >
      <div
        id="hero-banner-slider"
        className="relative w-full h-[180px] md:h-[calc(100dvh-162px)] bg-gray-900 overflow-hidden rounded-2xl lg:rounded-[2rem] border-2 border-white shadow-lg lg:shadow-xl"
      >
        {/* Slides Slider with Framer Motion AnimatePresence */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? "100%" : "-100%",
                  zIndex: 2,
                }),
                center: {
                  x: 0,
                  zIndex: 2,
                },
                exit: (dir: number) => ({
                  x: dir > 0 ? "-30%" : "30%",
                  zIndex: 1,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full shadow-2xl"
            >
              {/* Dark Dimming overlay */}
              {slides[current].promoLabel && (
                <div className="absolute inset-0 bg-black/45 z-10" />
              )}

              <motion.img
                variants={{
                  enter: { scale: 1.15 },
                  center: { scale: 1 },
                  exit: { scale: 1.05 },
                }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                src={slides[current].imageUrl}
                alt={slides[current].promoHeadline || "Food Promotion"}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading={current === 0 ? "eager" : "lazy"}
                fetchPriority={current === 0 ? "high" : "auto"}
              />

              {/* Revealing White Overlay Effect */}
              <motion.div
                variants={{
                  enter: { opacity: 0.5 },
                  center: { opacity: 0 },
                  exit: { opacity: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 bg-white pointer-events-none z-[5]"
              />

              {/* Slider Text Overlay Content (Centered) */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center  text-text-inverse px-6">
                {slides[current].promoLabel && (
                  <span className="text-[7px] md:text-sm font-extrabold tracking-[0.25em] text-gray-200 uppercase drop-shadow-md leading-none mb-1.5 md:mb-3">
                    {slides[current].promoLabel}
                  </span>
                )}
                {slides[current].promoHeadline && (
                  <h1 className="text-lg md:text-6xl font-extrabold tracking-tight leading-none  text-text-inverse drop-shadow-lg mb-1.5 md:mb-3">
                    {slides[current].promoHeadline}
                  </h1>
                )}
                {slides[current].promoSub && (
                  <p className="text-[8px] md:text-lg font-bold tracking-widest text-gray-100 uppercase drop-shadow-md">
                    {slides[current].promoSub}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-background-card/10 hover:bg-background-card/20 active:scale-90 flex items-center justify-center  text-text-inverse cursor-pointer backdrop-blur-sm transition-all border border-white/15"
          aria-label="Previous slide"
        >
          <ChevronLeft size={14} className="lg:hidden" />
          <ChevronLeft size={20} className="hidden lg:block" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-background-card/10 hover:bg-background-card/20 active:scale-90 flex items-center justify-center  text-text-inverse cursor-pointer backdrop-blur-sm transition-all border border-white/15"
          aria-label="Next slide"
        >
          <ChevronRight size={14} className="lg:hidden" />
          <ChevronRight size={20} className="hidden lg:block" />
        </button>

        {/* Slide Dot Paginations */}
        <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-1 lg:h-2 rounded-full transition-all cursor-pointer ${idx === current
                ? "w-3 lg:w-5 bg-background-card"
                : "w-1 lg:w-2 bg-background-card/40"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Secure Payments Badge (Bottom Right) */}
        <div
          id="secure-payments-badge"
          className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 z-30 bg-background-card/95 border border-brand-primary/15 rounded-md lg:rounded-lg py-0.5 px-1.5 lg:py-1 lg:px-2.5 flex items-center gap-1 lg:gap-1.5 shadow-md backdrop-blur-sm select-none"
        >
          <span className="text-[5px] md:text-[9px] md:font-extrabold tracking-wide text-text-secondary uppercase">
            SECURE PAYMENTS
          </span>
          <div className="flex gap-0.5 lg:gap-1 items-center">
            {/* Mock Visa vector */}
            <span className="text-[8px] lg:text-[10px] font-extrabold italic text-blue-800 tracking-tighter">
              VISA
            </span>
            <span className="text-[8px] lg:text-[10px] font-extrabold italic text-red-600 tracking-tighter">
              MC
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
