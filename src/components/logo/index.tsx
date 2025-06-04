import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="absolute left-0 top-0 w-[168px] h-[90px] bg-customblack z-40 flex items-center justify-center gap-[32px]">
      <Image src={"/TURSUNALIYEV.webp"} alt="logo" width={100} height={36.71} />
    </div>
  );
};

export default Logo;
