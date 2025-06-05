"use client";
import { useState, useEffect } from "react";

export function useWindowSize() {
  const isWindow = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isWindow ? window.innerWidth : 0,
    height: isWindow ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
    }
  }, []);

  return {
    windowSize,
    isMd: windowSize.width < 1024,
    isSm: windowSize.width < 768,
    isLg: windowSize.width < 1280,
    isXl: windowSize.width < 1536,
    is2Xl: windowSize.width < 1920,
    is3Xl: windowSize.width >= 1920,
  };
}
