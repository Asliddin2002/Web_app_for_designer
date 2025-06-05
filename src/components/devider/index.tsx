import React from "react";

type Props = { text: string; count?: string };

const Devider = ({ text, count }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {count && (
        <h1 className="text-[34px] md:text-[68px] font-extrabold text-[#292929] stroke-text mt-3 md:mt-[50px] opacity-10 mb-[20px]">
          {count}
        </h1>
      )}

      <div className="w-[25px] h-[3px] bg-customred rounded-2xl "></div>
      <span className="text-[10px] font-bold tracking-widest text-[#939393] uppercase ">
        {text}
      </span>
    </div>
  );
};

export default Devider;
