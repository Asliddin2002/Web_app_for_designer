// components/Loader.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
    setShouldRender(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsVisible(false);
          setTimeout(() => setShouldRender(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [pathname]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-customblack transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 "
      }`}
    >
      <div
        className={`mb-8 transition duration-800 ${
          isVisible ? " scale-100 opacity-100" : " scale-125 opacity-0"
        }`}
      >
        <Image
          src={"/TURSUNALIYEV.webp"}
          alt="logo"
          width={100}
          height={36.71}
          quality={85}
          priority
        />
      </div>

      <div
        className={`w-64 h-[5px] bg-[#414040] rounded-full overflow-hidden transition duration-800 ${
          isVisible ? " scale-100 opacity-100" : " scale-125 opacity-0"
        }`}
      >
        <div
          className="h-full bg-[#FF0000] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p
        className={`mt-6 text-gray-600 dark:text-gray-300 tracking-[4px] text-xs font-semibold transition duration-800 ${
          isVisible ? " scale-100 opacity-100" : " scale-125 opacity-0"
        }`}
      >
        PLEASE WAIT
      </p>
    </div>
  );
}
