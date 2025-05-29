"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Slide = {
  id: number;
  src: string;
};

const originalSlides: Slide[] = [
  { id: 1, src: "/images/interior.jpg" },
  { id: 2, src: "/images/interior.jpg" },
  { id: 3, src: "/images/interior.jpg" },
];

// Create clones for seamless infinite scroll
const slides = [
  originalSlides[originalSlides.length - 1], // clone of last
  ...originalSlides,
  originalSlides[0], // clone of first
];

const FullPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const startXRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  // Auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [currentIndex]);

  const startAutoScroll = () => {
    stopAutoScroll();
    timeoutRef.current = setTimeout(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const goToSlide = (index: number) => {
    setTransitionEnabled(true);
    setCurrentIndex(index);
  };

  const handleStart = (clientX: number) => {
    stopAutoScroll();
    setIsDragging(true);
    startXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const distance = clientX - startXRef.current;
    setOffsetX(distance);
  };

  const handleEnd = () => {
    setIsDragging(false);
    const threshold = slideWidth * 0.2;

    if (offsetX > threshold) {
      goToSlide(currentIndex - 1);
    } else if (offsetX < -threshold) {
      goToSlide(currentIndex + 1);
    }

    setOffsetX(0);
    startAutoScroll();
  };

  // Reset to real slide after transition to clone
  useEffect(() => {
    if (!transitionEnabled) return;

    const handleTransitionEnd = () => {
      setTransitionEnabled(false);

      if (currentIndex === slides.length - 1) {
        // Jump to real first
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        // Jump to real last
        setCurrentIndex(slides.length - 2);
      }

      setTimeout(() => setTransitionEnabled(true), 0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [currentIndex]);

  // Touch and mouse handlers
  const handleTouchStart = (e: React.TouchEvent) =>
    handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
  const handleMouseUp = () => handleEnd();
  const handleMouseLeave = () => {
    if (isDragging) handleEnd();
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative touch-none"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(calc(-${
            currentIndex * 100
          }vw + ${offsetX}px))`,
          transition:
            transitionEnabled && !isDragging ? "transform 0.5s ease" : "none",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0"
            style={{ userSelect: "none" }}
          >
            <Image
              src={slide.src}
              alt="Slide"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullPageCarousel;
