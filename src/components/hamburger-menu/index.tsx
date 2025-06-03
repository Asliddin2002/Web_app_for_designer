"use client";
import { useState, useEffect } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
      if (!isOpen) {
        // When opening, show contact panel after a delay
        setTimeout(() => setShowContact(true), 150);
      } else {
        // When closing, hide contact panel immediately
        setShowContact(false);
      }
    }
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <div
        className="absolute right-0 top-0 w-[168px] h-[90px] bg-customblack z-40 flex items-center justify-center gap-[32px]"
        onClick={toggleMenu}
      >
        <span className="text-[10px] font-semibold tracking-[3px] text-customwhite">
          MENU
        </span>
        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer w-[17px] h-[17px]">
          <div
            className={`w-[17px] h-[2.5px] bg-customwhite rounded-2xl transition-all duration-300 ${
              isOpen
                ? "w-[20px] h-[3px] transform -rotate-45 translate-y-[6.5px]"
                : ""
            }`}
          ></div>
          <div
            className={`w-[17px] h-[2.5px] bg-customwhite rounded-2xl transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-[17px] h-[2.5px] bg-customwhite rounded-2xl transition-all duration-300 ${
              isOpen
                ? "w-[20px] h-[3px] transform rotate-45 -translate-y-[6.5px]"
                : ""
            }`}
          ></div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-30 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "duration-800 ease-out translate-x-full"
        }`}
      >
        <div className="container mx-auto h-full flex">
          <div className="h-full flex flex-col justify-center pl-[215px] w-1/2">
            <nav className="space-y-8">
              <a
                href="#"
                className="block text-white text-4xl font-light hover:text-gray-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-white text-4xl font-light hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block text-white text-4xl font-light hover:text-gray-300 transition-colors"
              >
                Works
              </a>
              <a
                href="#"
                className="block text-white text-4xl font-light hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-white text-4xl font-light hover:text-gray-300 transition-colors"
              >
                Blog
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Panel (Right Side) */}
      <div
        className={`fixed right-0 top-0 h-full w-[563px] bg-customblack z-30 transform transition-transform ${
          isOpen
            ? "translate-x-0 duration-500 ease-out"
            : "translate-x-full duration-100 ease-in"
        } ${showContact ? "" : "translate-x-full"}`}
        style={{
          transitionDelay: isOpen ? "150ms" : "0ms",
        }}
      >
        <div className="h-full flex flex-col justify-center pl-[40px]">
          <div className="space-y-8 text-white">
            <div>
              <p className="text-sm text-gray-400">COUNTRY:</p>
              <p className="text-lg">Uzbekistan</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">CITY:</p>
              <p className="text-lg">Tashkent</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">ADRESS:</p>
              <p className="text-lg">Yunusobod 13\12\34</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">EMAIL:</p>
              <p className="text-lg">tursunaliyev@mail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">PHONE:</p>
              <p className="text-lg">+(998) 99 556 59 67</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
