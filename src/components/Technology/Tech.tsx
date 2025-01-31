import SectionHeading from "../SectionHeading";
import LaunchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import LaunchVechileLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import SpaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import SpaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import TechItem from "./TechItem";
import { useState } from "react";

const TECHNOLOGIES = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: LaunchVehicle,
    imageLandscape: LaunchVechileLandscape,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: Spaceport,
    imageLandscape: SpaceportLandscape,
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: SpaceCapsule,
    imageLandscape: SpaceCapsuleLandscape,
  },
];

const Tech = () => {
  const [fade, setFade] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, description, image, imageLandscape } = TECHNOLOGIES[activeIndex];
  const handleClick = (idx: number) => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setFade(false);
    }, 200);
  };
  return (
    <main className="mx-auto xl:ps-12">
      <div className="xl:min-h-[calc(100svh-7.5rem)] xl:flex xl:flex-col">
        <div className="p-6 pb-0 lg:p-6">
          <SectionHeading number={3} title="Space Launch 101" />
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-6 xl:items-center xl:justify-center">
          <img
            className={`mt-24 xl:hidden transition-opacity mb-8 h-[17.5rem] md:h-[25rem] lg:h-[30rem] w-full object-cover ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            src={image}
            alt="launch vehicle"
          />
          <div className="xl:max-w-2xl w-full xl:h-[40rem] relative">
            <img
              src={imageLandscape}
              alt=""
              className={`hidden transition-opacity ${fade ? "opacity-0" : "opacity-100"} xl:block w-full h-full object-cover absolute inset-0`}
            />
          </div>
          <div className="p-6 xl:p-0 pt-0 xl:-order-1 xl:flex xl:gap-16">
            <div className="flex items-center justify-center xl:flex-col gap-4 mb-10">
              {Array.from({ length: 3 }).map((_, index) => (
                <TechItem
                  onClick={() => handleClick(index)}
                  key={index}
                  isActive={index === activeIndex}
                  idx={index}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 text-center xl:text-left">
              <div
                className={`rank-details transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="uppercase text-white/50 text-preset-4 md:text-2xl">
                  THE TERMINOLOGY…
                </p>
                <h3 className="uppercase text-preset-3 md:text-[2.5rem]">
                  {name}
                </h3>
              </div>
              <p
                className={`description font-barlow font-light leading-6 mx-auto md:max-w-md xl:text-lg transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tech;
