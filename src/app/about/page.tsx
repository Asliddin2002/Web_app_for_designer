import React from "react";
import Banner from "@/components/banner";
import Devider from "@/components/devider";

export const metadata = {
  title: "About",
  description: "Description of the home page",
};

const About = () => {
  return (
    <section id="about">
      <Banner />
      <Devider text="Avtobiografiya" count={"01"} />
    </section>
  );
};

export default About;
