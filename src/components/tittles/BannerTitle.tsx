import React from "react";

type Props = {
  text: string;
};
const BannerTitle = ({ text }: Props) => {
  const words = text.trim().split(/\s+/);

  let firstPart = "";
  let secondPart = "";

  if (words.length <= 2) {
    firstPart = text;
  } else if (words.length <= 4) {
    firstPart = words.slice(0, -1).join(" ");
    secondPart = words.slice(-1).join(" ");
  } else {
    firstPart = words.slice(0, -2).join(" ");
    secondPart = words.slice(-2).join(" ");
  }

  return (
    <div className=" text-center">
      <h1 className="text-[34px] md:text-[68px] font-extrabold mt-3 md:mt-[20px] text-customwhite text-center">
        {firstPart}
      </h1>
      {secondPart && (
        <h1 className="text-[34px] md:text-[68px] font-extrabold text-transparent stroke-text mt-3 md:mt-[50px]">
          {secondPart}
        </h1>
      )}
    </div>
  );
};

export default BannerTitle;
