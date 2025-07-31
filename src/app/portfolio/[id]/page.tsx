"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "@/components/banner";
import Devider from "@/components/devider";
import Footer from "@/components/footer";
import Image from "next/image";

type ImageItem = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

const images: ImageItem[] = [
  { src: "/images/interior1.webp", width: 400, height: 600 },
  { src: "/images/interior2.webp", width: 600, height: 400 },
  { src: "/images/interior3.webp", width: 500, height: 500 },
  { src: "/images/interior1.webp", width: 400, height: 500 },
  { src: "/images/interior2.webp", width: 500, height: 300 },
  { src: "/images/interior3.webp", width: 600, height: 500 },
  { src: "/images/interior1.webp", width: 400, height: 400 },
  { src: "/images/interior2.webp", width: 500, height: 600 },
];

const ProjectDetails = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <Banner
        devider="portfolio"
        title1="Explore Our Amazing"
        title2={"Professional Cases"}
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <Devider text="Works" count={"01"} />
      {/* Masonry Grid Container */}
      <div className="p-4 pt-12 sm:pb-12 container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index % 5 === 0 ? "lg:row-span-2" : ""
              } ${index % 3 === 0 ? "sm:col-span-2" : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src={image.src}
                alt={image.alt || `Project ${index + 1}`}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover rounded-md hover:brightness-90 transition duration-300"
                placeholder="blur"
                blurDataURL="/placeholder.jpg" // Add a small placeholder image
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="mt-[50px] mb-[50px] sm:mb-[100px]">
        <Devider text="Call to action" />
        <motion.div
          className="text-center sm:mt-[40px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[34px] md:text-[68px] font-extrabold mt-3 md:mt-[20px] text-customwhite text-center leading-[40px]">
            Do you have{" "}
            <span className="text-transparent stroke-text">a project?</span>
          </h1>
        </motion.div>

        <motion.div
          className="text-customwhite text-[10px] tracking-widest font-semibold mt-[40px] sm:mt-[60px] flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="py-2 w-[150px] border-[2px] rounded-[3px] border-customwhite hover:text-[#DF0303] cursor-pointer transition duration-500"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            LET&apos;S DISCUSS
          </motion.button>
          <motion.button
            className="w-[150px] hover:text-[#DF0303] cursor-pointer transition duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PORTFOLIO
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default ProjectDetails;
