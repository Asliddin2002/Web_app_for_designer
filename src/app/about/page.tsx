import React from "react";
import Banner from "@/components/banner";
import Devider from "@/components/devider";
import Image from "next/image";
import SectionTittle from "@/components/tittles/SectionTittle";

export const metadata = {
  title: "About",
  description: "Description of the home page",
};

const About = () => {
  return (
    <section id="about">
      <Banner />
      <Devider text="Avtobiografiya" count={"01"} />
      <div className=" flex items-center justify-center mt-[50px]">
        <Image
          src={"/images/Avatar.png"}
          alt="Avatar image"
          width={300}
          height={317.8}
          className=" rounded-full border-4 border-white"
        />
      </div>
      <div className=" my-[50px] font-extrabold flex flex-col items-center">
        <SectionTittle title="I am Hasanbek Tursunaliyev." />
        <p className="text-center text-sm mt-[30px] w-full px-3 md:px-0 md:w-[700px] leading-[22px] mx-auto text-[#8B8B8B] font-normal">
          I have more than 4 years of experience in the field of design, mainly
          working in the field of graphic design . I have worked with many
          companies as an online Freelancer! I was born on 13.04.2001 in Kasbi
          district of Kashkadarya region. I am 23 years old. I studied at school
          from 2008-2017, at academic lyceum from 2017-2019, and at university
          from 2019-2023.
        </p>
        <button className="py-2 w-[150px] border-[2px] text-xs tracking-wide rounded-[3px] border-customwhite hover:text-[#DF0303] cursor-pointer transition duration-500  mt-[30px]">
          DOWNLOAD MY CV
        </button>
        <div className="h-[552px] overflow-hidden mt-[100px] relative">
          <Image
            src="/images/video.jpg"
            alt="video"
            width={920}
            height={552}
            className=" object-cover"
          />
          <div className=" absolute top-0 bottom-0 left-0 right-0 bg-customblack opacity-40"></div>
          <div className="w-[80px] h-[80px] border-[2px] border-customwhite rounded-full bg-[#141414]/20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
            <Image
              src="/images/playIcon.png"
              role="button"
              alt="play icon"
              width={20}
              height={20}
              className=" absolute top-[50%] left-[55%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Devider text="Avtobiografiya" count={"02"} />
    </section>
  );
};

export default About;
