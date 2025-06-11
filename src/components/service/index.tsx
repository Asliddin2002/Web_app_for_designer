import React from "react";

const Services = () => {
  return (
    <section className=" bg-customblack text-customwhite pt-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 space-y-[60px] w-[700px]">
        {/* Card 1 */}
        <div className="text-center space-y-6">
          <h3 className="text-[22px] font-bold">
            Digital Strategy in <br /> Interior Design
          </h3>
          <p className="text-[#8B8B8B] text-sm w-[300px] mx-auto leading-[24px]">
            Using digital technologies to plan, promote, and enhance interior
            design.
          </p>
          <button className="uppercase tracking-[2px] text-xs font-semibold hover:text-[#DF0303] cursor-pointer transition duration-500">
            Order a Service
          </button>
        </div>

        {/* Card 2 */}
        <div className="text-center space-y-6">
          <h3 className="text-[22px] font-bold">
            Interior
            <br /> Design
          </h3>
          <p className="text-[#8B8B8B] text-sm w-[300px] mx-auto leading-[24px] ">
            We create modern and minimalist interiors that suit your taste.
          </p>
          <button className="uppercase tracking-[2px] text-xs font-semibold hover:text-[#DF0303] cursor-pointer transition duration-500">
            Order a Service
          </button>
        </div>

        {/* Card 3 */}
        <div className="text-center space-y-6">
          <h3 className="text-[22px] font-bold">
            Furniture Arrangement
            <br /> and Color Harmony
          </h3>
          <p className="text-[#8B8B8B] text-sm w-[300px] mx-auto leading-[24px]">
            We design your space for comfort and aesthetic perfection.
          </p>
          <button className="uppercase tracking-[2px] text-xs font-semibold hover:text-[#DF0303] cursor-pointer transition duration-500">
            Order a Service
          </button>
        </div>

        {/* Card 4 */}
        <div className="text-center space-y-6">
          <h3 className="text-[22px] font-bold">
            3D Visualization and
            <br />
            Planning
          </h3>
          <p className="text-[#8B8B8B] text-sm w-[300px] mx-auto leading-[24px]">
            See your project in advance and achieve perfection.
          </p>
          <button className="uppercase tracking-[2px] text-xs font-semibold hover:text-[#DF0303] cursor-pointer transition duration-500">
            Order a Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
