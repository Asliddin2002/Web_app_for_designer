"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/_TURSUNALIYEV.png";

const navlinks = [
  { id: "#", name: "Home" },
  { id: "portfolio", name: "Portfolio" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "logo", name: "Logo" },
  { id: "skills", name: "Skills" },
  { id: "testimonial", name: "Testimonial" },
  { id: "famouse", name: "Famouse" },
  { id: "contact", name: "Contact" },
];

// Mobile Header Component
const MobileHeader = ({
  activeLink,
  handleSmoothScroll,
  isScrolled,
}: {
  activeLink: string;
  handleSmoothScroll: (id: string) => void;
  isScrolled: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex-1 flex justify-center">
          <Image src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-md ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {isMenuOpen ? "x" : "="}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black  backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? " opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 h-full flex flex-col space-y-6 overflow-y-auto">
            {navlinks.map((nav) => (
              <button
                key={nav.id}
                onClick={() => {
                  handleSmoothScroll(nav.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-2 text-lg font-medium transition-colors ${
                  activeLink === nav.id ? "text-green-500" : "text-gray-800"
                }`}
              >
                {nav.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Desktop Header Component
const DesktopHeader = ({
  activeLink,
  handleSmoothScroll,
  isScrolled,
}: {
  activeLink: string;
  handleSmoothScroll: (id: string) => void;
  isScrolled: boolean;
}) => {
  return (
    <>
      <ul className="flex justify-center items-center space-x-8">
        {navlinks.map((nav, i) =>
          i === 4 ? (
            <li key="logo" className="ml-4 mr-[50px]">
              <Image src={logo} alt="Logo" className="h-10 w-auto" />
            </li>
          ) : (
            <li key={nav.id} className="relative group cursor-pointer">
              <button
                onClick={() => handleSmoothScroll(nav.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isScrolled
                    ? "text-black hover:text-green-500"
                    : "text-white hover:text-gray-200"
                } ${isScrolled && activeLink === nav.id && "text-green-500"} `}
              >
                {nav.name}
                {!isScrolled && (
                  <span
                    className={`absolute left-0 -bottom-3 h-[1px] transition-all duration-300 ${
                      activeLink === nav.id
                        ? "w-full bg-green-500"
                        : "w-0 group-hover:w-full bg-current"
                    }`}
                  ></span>
                )}
              </button>
            </li>
          )
        )}
      </ul>
    </>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > window.innerHeight * 0.5);
      setLastScrollY(currentScrollY);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          currentScrollY >= sectionTop - 300 &&
          currentScrollY < sectionTop + sectionHeight - 300
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSmoothScroll = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed w-full transition-all duration-500 z-50 ${
        isVisible ? "top-0" : "-top-20"
      }`}
    >
      <nav
        className={`px-4 py-3 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent "
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {isMobile ? (
            <MobileHeader
              activeLink={activeLink}
              handleSmoothScroll={handleSmoothScroll}
              isScrolled={isScrolled}
            />
          ) : (
            <DesktopHeader
              activeLink={activeLink}
              handleSmoothScroll={handleSmoothScroll}
              isScrolled={isScrolled}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
