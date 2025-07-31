"use client";
import React from "react";

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: value.trim() === "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
      message: formData.message.trim() === "",
    };
    setErrors(newErrors);
    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="max-w-[750px] mx-auto p-6">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 text-center text-customwhite my-6">
        Write us a message
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs  tracking-widest text-customwhite mb-3 font-semibold"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 rounded border-[2px] border-gray-300 focus:outline-none focus:border-customred transition-colors duration-300"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className=" text-customwhite text-xs font-semibold px-1 py-[2px]  bg-customred tracking-wider mt-3 relative z-10">
                <div className="absolute -top-[5px] w-[8px] h-[8px] rotate-45 bg-customred left-2 z-0"></div>
                THIS VALUE IS REQUIRED.
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-xs  tracking-widest text-customwhite mb-3  font-semibold"
            >
              LAST NAME
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 rounded border-[2px] border-gray-300 focus:outline-none focus:border-customred transition-colors duration-300"
              placeholder="Johnson"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className=" text-customwhite text-xs font-semibold px-1 py-[2px]  bg-customred tracking-wider mt-3 relative z-10">
                <div className="absolute -top-[5px] w-[8px] h-[8px] rotate-45 bg-customred left-2 z-0"></div>
                THIS VALUE IS REQUIRED.
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs  tracking-widest text-customwhite mb-3  font-semibold"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded border-[2px] border-gray-300 focus:outline-none focus:border-customred transition-colors duration-300"
              placeholder="Type yourmail@here"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className=" text-customwhite text-xs font-semibold px-1 py-[2px]  bg-customred tracking-wider mt-3 relative z-10">
                <div className="absolute -top-[5px] w-[8px] h-[8px] rotate-45 bg-customred left-2 z-0"></div>
                THIS VALUE IS REQUIRED.
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs  tracking-widest text-customwhite mb-3  font-semibold"
            >
              PHONE
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded border-[2px] border-gray-300 focus:outline-none focus:border-customred transition-colors duration-300"
              placeholder="+0 (000) 000 00 00"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className=" text-customwhite text-xs font-semibold px-1 py-[2px]  bg-customred tracking-wider mt-3 relative z-10">
                <div className="absolute -top-[5px] w-[8px] h-[8px] rotate-45 bg-customred left-2 z-0"></div>
                THIS VALUE IS REQUIRED.
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs  tracking-widest text-customwhite mb-3  font-semibold"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 border-[2px] text-customwhite rounded focus:outline-none focus:border-customred transition-colors duration-300"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className=" text-customwhite text-xs font-semibold px-1 py-[2px]  bg-customred tracking-wider mt-3 relative z-10">
              <div className="absolute -top-[5px] w-[8px] h-[8px] rotate-45 bg-customred left-2 z-0"></div>
              THIS VALUE IS REQUIRED.
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button className="py-[18px] text-customwhite  tracking-widest  font-semibold w-full sm:w-[200px] border-[2px] text-xs rounded-[3px] border-customwhite hover:text-[#DF0303] cursor-pointer transition duration-500">
            SEND MESSAGE
          </button>

          <p className=" hidden sm:block text-[9px] sm:text-sm text-gray-500 tracking-wide">
            <span className=" text-customred ">*</span> We promise not to share
            your personal information with third parties.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
