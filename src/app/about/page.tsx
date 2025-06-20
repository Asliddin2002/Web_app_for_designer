import React from "react";
import Banner from "@/components/banner";
import Devider from "@/components/devider";
import Image from "next/image";
import SectionTittle from "@/components/tittles/SectionTittle";
import VideoSection from "@/components/video/Video";
import Services from "@/components/service";
import BrandCarousel from "@/components/brands";
import Footer from "@/components/footer";

export const metadata = {
  title: "About",
  description: "Description of the home page",
};

const About = () => {
  return (
    <section id="about">
      <Banner
        devider="About me"
        title1="Hasanbek Tursunaliyev"
        title2={"Interior Designer"}
        desc="I am an interior, exterior and graphic designer!"
      />
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
        <VideoSection />
      </div>
      <Devider text="Services" count={"02"} />
      <Services />

      <Devider text="Brands" count={"03"} />
      <BrandCarousel />
      <div className="mt-[50px] mb-[100px]">
        <Devider text="Call to action" />
        <div className=" text-center mt-[40px]">
          <h1 className="text-[34px] md:text-[68px] font-extrabold mt-3 md:mt-[20px] text-customwhite text-center">
            Do you have{" "}
            <span className=" text-transparent stroke-text ">a project?</span>
          </h1>
        </div>
        <div className="text-customwhite text-[10px] tracking-widest  font-semibold mt-[60px] flex items-center justify-center gap-3 ">
          <button className="py-2 w-[150px] border-[2px] rounded-[3px] border-customwhite hover:text-[#DF0303] cursor-pointer transition duration-500">
            LET'S DISCUSS
          </button>
          <button className="w-[150px] hover:text-[#DF0303] cursor-pointer transition duration-500">
            PORTFOLIO
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
