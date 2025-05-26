import React from "react";
import Devider from "../seperator";

import Image from "next/image";

import exterior_image from "../../../public/portfolio_img/exterior.png";
import interior_image from "../../../public/portfolio_img/interior.png";
import graphic_image from "../../../public/portfolio_img/graphic.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Exterior Design",
      description:
        "Modern architectural designs for residential and commercial spaces.",
      image: exterior_image,
      category: "Architecture",
    },
    {
      id: 2,
      title: "Interior Design",
      description:
        "Elegant and functional interior spaces tailored to client needs.",
      image: interior_image,
      category: "Interior",
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Creating harmonious outdoor living environments.",
      image: graphic_image,
      category: "Landscape",
    },
  ];
  return (
    <section id="portfolio">
      <Devider title="Portfolio" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group w-full h-64 flex flex-row border-b border-gray-200 pb-8"
            >
              <div className=" h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="w-2/3 pl-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
