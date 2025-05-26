// components/PortfolioSeparator.js
import Image from "next/image";
import devider from "../../../public/devider.png";

const Devider = ({ title }: { title: string }) => {
  return (
    <div className="portfolio-separator flex flex-col items-center justify-center my-12 gap-8">
      <h2 className="text-4xl font-black font-gilroy">{title}</h2>
      <Image
        src={devider}
        alt="Portfolio separator line"
        width={80}
        height={10}
        className="separator-image"
      />
    </div>
  );
};

export default Devider;
