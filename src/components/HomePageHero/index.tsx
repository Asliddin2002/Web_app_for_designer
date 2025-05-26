"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import banner from "../../../public/BannerImage.png";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={"/BannerImage.png"}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto mt-auto mb-[80px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fadeIn">
            Tursunaliyev Hasanbek
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-12 animate-fadeIn delay-100">
            I am an interior, exterior and graphic designer!
          </p>
        </div>

        <button
          onClick={() => {
            document.getElementById("portfolio")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className={`absolute bottom-0 animate-bounce transition-opacity duration-300 cursor-pointer ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll down"
        >
          <div className="w-6 h-12 rounded-full border-2 border-white flex items-center justify-center cursor-pointer">
            <div className="w-[2px] h-2 bg-white rounded-full animate-scrollPulse"></div>
          </div>
          <span className="text-[9px] relative -left-[9px] font-extrabold tracking-[1px]">
            SCROLL
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
