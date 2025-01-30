import Douglas from "../assets/crew/image-douglas-hurley.webp";
import Mark from "../assets/crew/image-mark-shuttleworth.webp";
import Victor from "../assets/crew/image-victor-glover.webp";
import Anousheh from "../assets/crew/image-anousheh-ansari.webp";
import { useState } from "react";

const CREW_DATA = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: Douglas,
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: Mark,
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: Victor,
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: Anousheh,
  },
];

const Crew = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const handleDotClick = (index: number) => {
    if (index !== selectedIndex) {
      setFade(true);
      setTimeout(() => {
        setSelectedIndex(index);
        setFade(false);
      }, 200); // Duration of fade transition
    }
  };
  const crewInfo = CREW_DATA[selectedIndex];
  return (
    <main className="container mx-auto p-6 md:pb-0 lg:py-12">
      <div className="flex flex-col gap-800">
        <div className="flex items-center justify-center sm:justify-start gap-6">
          <span className="font-bold font-barlow text-white/25">02</span>
          <h1 className="text-center font-barlow tracking-[0.15rem]">
            MEET YOUR CREW
          </h1>
        </div>
        <div className="flex flex-col gap-400 lg:flex-row">
          <div className="explanation md:max-w-md md:mx-auto lg:mx-0 lg:max-w-full text-center lg:text-left flex flex-col gap-800 lg:basis-1/2">
            <div className="rank-description flex flex-col gap-6 lg:mt-auto">
              <div
                className={`rank-details transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="uppercase text-white/50 text-preset-4 md:text-2xl">
                  {crewInfo.role}
                </p>
                <h3 className="uppercase text-preset-3 md:text-[2.5rem]">
                  {crewInfo.name}
                </h3>
              </div>
              <p
                className={`description font-barlow font-light leading-6 lg:max-w-sm lg:text-lg transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                {crewInfo.description}
              </p>
            </div>
            <div className="dots flex gap-200 justify-center lg:justify-start lg:mt-auto lg:gap-10">
              {Array.from({ length: 4 }, (_, index) => (
                <span
                  onClick={() => handleDotClick(index)}
                  key={index}
                  className={`size-[0.625rem] cursor-pointer transition-all duration-300 lg:size-[0.9375rem] rounded-full block ${
                    index === selectedIndex ? "bg-white" : "bg-white/50"
                  }`}
                ></span>
              ))}
            </div>
          </div>
          <div
            className={`commander-image lg:basis-1/2 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <img
              src={crewInfo.image}
              className="max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              alt={crewInfo.name}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
