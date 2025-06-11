"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const brandLogos = [
  "/images/brands/UPWORK.png",
  "/images/brands/KVORKK.png",
  "/images/brands/DEMOD.png",
  "/images/brands/FIVERR.png",
  "/images/brands/FREELANCER.png",
  "/images/brands/3DD.png",
];

export default function BrandCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full lg:w-[900px] mx-auto bg-customblack py-10">
      <Slider {...settings}>
        {brandLogos.map((logo, index) => (
          <div key={index} className="px-4">
            <div className="h-[80px] flex items-center justify-center">
              <Image
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-full object-contain"
                width={100}
                height={80}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
