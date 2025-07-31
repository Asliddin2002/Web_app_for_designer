import Banner from "@/components/banner";
import ContactForm from "@/components/contact-form";
import Devider from "@/components/devider";
import Footer from "@/components/footer";
import React from "react";

const Contacts = () => {
  return (
    <section id="contact">
      <Banner
        devider="Contacts"
        title1="Do you have any questions?"
        title2={"Write us a message."}
        desc="Lorem ipsum dolor sit amet, consectetur. Adipisicing elit suscipit, at."
      />
      <div className="flex mx-auto max-w-[550px] justify-between mb-[70px]">
        <div className="flex flex-col items-center">
          <Devider text="Location" count={"01"} />
          <h3 className="text-[22px] font-bold mt-[35px] mb-6">
            Welcome to visit
          </h3>
          <p className=" text-gray-300 text-center font-medium text-sm  tracking-wide">
            Tashkent, Yunusubod
          </p>
          <p className=" text-customwhite text-center font-medium text-sm  tracking-wide">
            Kulol Qo&apos;rg&apos;on 34/14
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Devider text="Contact" count={"02"} />
          <h3 className="text-[22px] font-bold mt-[35px]  mb-6">
            Shall we talk?
          </h3>
          <p className=" text-gray-300 text-center font-medium text-sm  tracking-wide">
            Email: mireya.inbox@mail.com
          </p>
          <p className=" text-customwhite text-center font-medium text-sm  tracking-wide">
            Phone: +4 9(054) 996 84 25
          </p>
          <p className=" text-customwhite text-center font-medium text-sm  tracking-wide">
            Telegram: @TursunaliyevH
          </p>
        </div>
      </div>
      <Devider text="Contact form" count={"03"} />
      <ContactForm />
      <div className="mt-[50px] mb-[100px]">
        <Devider text="Call to action" />
        <div className=" text-center mt-[40px] ">
          <h1 className="text-[34px] md:text-[68px] font-extrabold mt-3 md:mt-[20px] text-customwhite text-center">
            Do you have{" "}
            <span className=" text-transparent stroke-text ">a project?</span>
          </h1>
        </div>
        <div className="text-customwhite text-[10px] tracking-widest  font-semibold mt-[60px] flex items-center justify-center gap-3 ">
          <button className="py-2 w-[150px] border-[2px] rounded-[3px] border-customwhite hover:text-[#DF0303] cursor-pointer transition duration-500">
            LET&apos;S DISCUSS
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

export default Contacts;
