import SectionHeading from "../SectionHeading";
import TechnologyImage from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import TechnologyImage2 from "../../assets/technology/image-spaceport-landscape.jpg";
import TechItem from "./TechItem";
import { useState } from "react";

const Tech = () => {
  const [fade, setFade] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (idx: number) => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setFade(false);
    }, 200);
  };
  return (
    <main className="mx-auto">
      <div>
        <div className="p-6 pb-0">
          <SectionHeading number={3} title="Space Launch 101" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <img
            className={`mt-24 lg:hidden transition-opacity mb-8 h-[17.5rem] md:h-[25rem] w-full object-cover ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            src={TechnologyImage}
            alt="launch vehicle"
          />
          <img src={TechnologyImage2} alt="" className="hidden lg:block" />
          <div className="p-6 pt-0 lg:-order-1 lg:flex lg:gap-16">
            <div className="flex items-center justify-center lg:flex-col gap-4 mb-10">
              {Array.from({ length: 3 }).map((_, index) => (
                <TechItem
                  onClick={() => handleClick(index)}
                  key={index}
                  isActive={index === activeIndex}
                  idx={index}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div
                className={`rank-details transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="uppercase text-white/50 text-preset-4 md:text-2xl">
                  THE TERMINOLOGY…
                </p>
                <h3 className="uppercase text-preset-3 md:text-[2.5rem]">
                  LAUNCH VEHICLE
                </h3>
              </div>
              <p
                className={`description font-barlow font-light leading-6 mx-auto md:max-w-md lg:text-lg transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tech;
