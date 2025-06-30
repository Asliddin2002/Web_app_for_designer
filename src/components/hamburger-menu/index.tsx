"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import EditIcon from "../icons/EditIcon";
import { useAmIAdmin } from "@/hooks/useAmIAdmin";
import { useRouter } from "next/navigation";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { span } from "framer-motion/client";

const navLink = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/portfolio", label: "Works" },
  { id: 4, path: "/contact", label: "Contact" },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isAdmin = useAmIAdmin();

  console.log("pathname", pathname);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
      if (!isOpen) {
        setTimeout(() => setShowContact(true), 150);
      } else {
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

  const isInEditPage = pathname.includes("edit");

  const handleJumpToUpdatePage = (e: any) => {
    e.preventDefault();
    if (isAdmin) {
      if (isInEditPage) {
        router.back();
      } else {
        router.push(`${pathname}/edit`);
      }
    }
  };

  return (
    <>
      <div
        className={`absolute right-0 top-0  h-[90px] bg-customblack z-40 flex items-center justify-center gap-[32px] ${
          isAdmin ? "w-[188px]" : "w-[168px]"
        }`}
      >
        {isAdmin && (
          <button
            onClick={handleJumpToUpdatePage}
            className="border-[1.5px] border-customwhite rounded-sm p-2 w-[30px] h-[30px] flex items-center justify-center text-customwhite hover:text-customred cursor-pointer hover:border-customred transition-colors duration-300"
          >
            {isInEditPage ? (
              <div className=" rotate-180">
                <ArrowRightIcon />
              </div>
            ) : (
              <EditIcon />
            )}
          </button>
        )}
        <span className="text-[10px] font-semibold tracking-[3px] text-customwhite">
          MENU
        </span>
        <div
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center gap-1 cursor-pointer w-[17px] h-[17px]"
          role="button"
        >
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
          isOpen
            ? "translate-x-0"
            : "duration-500 md:duration-800 ease-out translate-x-full"
        }`}
      >
        <div className="container mx-auto h-full flex">
          <div className="h-full flex flex-col justify-center  items-center  sm:pl-[50px] lg:pl-[215px] w-full sm:w-1/2">
            <nav className="space-y-8">
              {navLink.map((nav) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={nav.id}
                  href={nav.path}
                  className={`block text-xl sm:text-4xl font-semibold hover:text-gray-300 transition-colors ${
                    pathname === nav.path ? "text-customred" : "text-white"
                  }`}
                >
                  {nav.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Panel (Right Side) */}
      <div
        className={`hidden sm:block fixed right-0 top-0 h-full w-[350px] xl:w-[563px] 3xl:w-[1050px] bg-customblack z-30 transform transition-transform ${
          isOpen
            ? "translate-x-0 duration-500 ease-out"
            : "translate-x-full duration-100 ease-in"
        } ${showContact ? "" : "translate-x-full"}`}
        style={{
          transitionDelay: isOpen ? "150ms" : "0ms",
        }}
      >
        <div className="h-full flex flex-col justify-center pl-[40px]">
          <div className="space-y-8 text-white tracking-widest">
            <div>
              <p className="text-xs text-gray-400">COUNTRY:</p>
              <p className="text-md text-gray-400">Uzbekistan</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">CITY:</p>
              <p className="text-md text-gray-400">Tashkent</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">ADRESS:</p>
              <p className="text-md text-gray-400">Yunusobod 13\12\34</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">EMAIL:</p>
              <p className="text-md text-gray-400">tursunaliyev@mail.com</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">PHONE:</p>
              <p className="text-md text-gray-400">+(998) 99 556 59 67</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
