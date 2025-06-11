"use client";

// components/VideoSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-[552px] w-[920px] overflow-hidden mt-[100px] relative">
        <Image
          src="/images/video.jpg"
          alt="video"
          width={920}
          height={552}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-customblack opacity-40"></div>
        <div
          role="button"
          onClick={() => setIsOpen(true)}
          className="w-[80px] h-[80px] border-[2px] border-customwhite rounded-full bg-[#141414]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
        >
          <Image
            src="/images/playIcon.png"
            alt="play icon"
            width={20}
            height={20}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[60%] max-h-[100%]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl z-10 cursor-pointer"
              >
                &times;
              </button>

              <video
                controls
                autoPlay
                className="w-full  rounded-lg object-contain"
              >
                <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
