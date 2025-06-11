import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-[#8B8B8B] py-6 text-sm container mx-auto h-[100px] flex items-center justify-between">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1054px]">
        <div className="text-sm">KhoAs ©2025</div>

        <div className="flex gap-6 text-lg">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            Facebook
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href="#"
            aria-label="Behance"
            className="hover:text-white transition"
          >
            Behance
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            className="hover:text-white transition"
          >
            Dribble
          </a>
        </div>

        <div className="text-sm">Tursunaliyev Hasanbek</div>
      </div>
    </footer>
  );
}

export default Footer;
