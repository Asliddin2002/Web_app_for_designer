"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import DotGrid from "../dots-animation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { useWindowSize } from "../hooks/useWindowSIze";

function HomePageCarousel() {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const { isSm } = useWindowSize();

  const settings = {
    dots: !isSm,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "w-full h-full",
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
      setProgress(0);
    },
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          right: "30px",
          bottom: "50%",
          transform: "translateY(50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "1px",
          zIndex: 20,
          width: "40px",
        }}
      >
        {dots}
      </div>
    ),
    customPaging: () => (
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "20px" }}
      >
        <div
          style={{
            width: "10px",
            height: "3px",
            borderRadius: "50px",
            backgroundColor: "#E1E1E1",
            transition: "all 0.5s ease",
          }}
          className="dot-item"
        />
      </div>
    ),
  };

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 10000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress((prev) => {
        return Math.abs(newProgress - prev) > 0.5 ? newProgress : prev;
      });

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        sliderRef.current?.slickNext();
      } else if (e.key === "ArrowLeft") {
        sliderRef.current?.slickPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        sliderRef.current?.slickNext();
      } else if (e.deltaY < 0) {
        sliderRef.current?.slickPrev();
      }
    };

    const sliderContainer = document.querySelector(
      ".slider-container"
    ) as HTMLElement | null;
    if (sliderContainer) {
      sliderContainer.addEventListener("wheel", handleWheel);
      return () => sliderContainer.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <div className="slider-container h-screen overflow-hidden relative z-10 ">
      <div className="hidden md:block absolute inset-0 -z-10">
        <DotGrid
          dotSize={2}
          gap={35}
          baseColor="#363636"
          activeColor="#363636"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Progress Bar */}
      <div className=" hidden md:block absolute bottom-[40px] left-[13.5%] 3xl:left-[28%] w-[350px]  h-[2px] bg-[#585454] z-40 rounded-full overflow-hidden">
        <div
          className="h-full bg-customred transition-all duration-100 ease-linear rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="relative"></div>
      <Slider ref={sliderRef} {...settings}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`h-screen w-full relative slide content bg-customblack ${
              i === activeSlide ? "active-content" : "inactive-content"
            } ${i === activeSlide ? "active-slide" : "inactive-slide"}`}
          >
            <div
              className={`slide flex flex-col z-40 bg-[rgba(20,20,20,0.7)] w-[92%]  md:w-auto  md:bg-transparent absolute py-6 px-10 md:p-0 bottom-0 pb-[60px] md:pb-0 md:bottom-auto md:top-[50%] md:-left-[90px] 3xl:left-[200px] md:-translate-y-[50%] transition-transform duration-800 content ${
                i === activeSlide ? "active-content" : "inactive-content"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-[25px] h-[3px] bg-customred rounded-2xl"></div>
                <span className="text-[10px] font-bold tracking-widest text-[#939393]">
                  INTERIOR DESIGN
                </span>
              </div>
              <h1 className="text-[34px] md:text-[68px] font-extrabold mt-3 md:mt-[40px] text-customwhite">
                Little Cottage
              </h1>
              <h1 className="text-[34px] md:text-[68px] font-extrabold text-transparent stroke-text mt-3 md:mt-[50px] max-w-[600px]">
                Concept
              </h1>
              <p className="mt-6 md:mt-[50px] text-[13px] text-customwhite md:w-[340px] leading-relaxed tracking-wide font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                nihil inventore in nemo ullam explicabo.
              </p>
              <div className="text-customwhite text-[10px] tracking-widest font-semibold mt-[30px] flex flex-col sm:flex-row sm:items-center gap-3">
                <button className="py-2 w-[150px] border-[2px] rounded-[3px] border-customwhite hover:text-[#DF0303] cursor-pointer transition duration-500">
                  OPEN CASE
                </button>
                <button className="w-[150px] hover:text-[#DF0303] cursor-pointer transition duration-500">
                  ALL PROJECTS
                </button>
              </div>
            </div>
            <div className="h-full md:w-[80vw] relative bg-current overflow-hidden">
              <div className="absolute left-0 h-[200vh] top-0 bottom-0 w-[350px] 3xl:w-[400px] bg-customblack blur-[150px] z-10 "></div>

              <div className="absolute left-0 top-0 bottom-0 right-0 bg-customblack opacity-40 z-20"></div>
              <Image
                src={`/images/interior${i + 1}.webp`}
                alt="carousel image"
                width={1920}
                height={1080}
                className={`carousel-image object-cover w-full h-full transition-transform duration-800 image ${
                  i === activeSlide ? "active-image" : "inactive-image"
                }`}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[90px] bg-customblack z-10"></div>

      <style jsx global>{`
        .slick-slide {
          display: flex !important;
          justify-content: end;
          align-items: center;
        }

        .slick-active .dot-item {
          width: 20px !important;
          background-color: #ff0000 !important;
          height: "2px";
        }
      `}</style>
    </div>
  );
}

export default HomePageCarousel;
