import Image from "next/image";
import React from "react";
import Devider from "../devider";

type Props = {
  title1: string;
  title2: string;
  desc: string;
  devider: string;
};

const Banner = ({ title1, title2, desc, devider }: Props) => {
  return (
    <header className="relative h-[80vh]  w-full flex items-center justify-center overflow-hidden">
      <div className=" absolute top-0 left-0 bottom-0 z-10 w-full">
        <div className="absolute left-0 top-0 bottom-0 right-0 bg-customblack opacity-90 z-20"></div>
        <Image
          src={`/images/about_page_banner.webp`}
          alt="carousel image"
          width={1920}
          height={1080}
          className={`carousel-image object-cover w-full h-full transition-transform duration-800 image`}
        />
      </div>
      <div className=" absolute flex flex-col items-center space-y-4 z-20">
        <Devider text={devider} />
        <div className=" text-center">
          <h1 className="text-[34px] md:text-[68px] font-extrabold mt-3 md:mt-[20px] text-customwhite text-center">
            {title1}
          </h1>
          <h1 className="text-[34px] md:text-[68px] font-extrabold text-transparent stroke-text mt-3 md:mt-[50px]">
            {title2}
          </h1>
        </div>
        <h5 className=" text-customwhite font-medium text-sm mt-[30px] tracking-wide">
          {desc}
          <span className=" font-light text-xs text-[#939393]"></span>
        </h5>
        <div className="flex flex-col items-center space-y-7 mt-4">
          <div
            role="button"
            className="w-5 h-8 border-2 border-white rounded-full flex items-start justify-center p-1 cursor-pointer"
          >
            <div className="w-[3px] h-[3px] bg-white rounded-full animate-scroll-dot"></div>
          </div>

          <p className="text-[11px] font-semibold tracking-[2px] text-customwhite uppercase">
            Scroll Down
          </p>
        </div>
      </div>
      <div className="absolute left-0 right-0 -bottom-[130px] h-[250px] pointer-events-none z-10 ">
        <div className="h-[250px] bg-customblack blur-[50px]"></div>
      </div>
    </header>
  );
};

export default Banner;
