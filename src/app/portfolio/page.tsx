import Banner from "@/components/banner";
import Devider from "@/components/devider";
import Footer from "@/components/footer";
import ProjectList from "@/components/portfolio";
import React from "react";

const Projects = () => {
  return (
    <section id="portfolio">
      <Banner
        devider="portfolio"
        title1="Explore Our Amazing"
        title2={"Professional Cases"}
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectList />
      {/* <Devider text="Portfolio" count={"01"} /> */}
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

export default Projects;
