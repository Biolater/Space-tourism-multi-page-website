import { useState } from "react";
import MoonImage from "../../assets/destination/image-moon.webp";
import MarsImage from "../../assets/destination/image-mars.webp";
import EuropaImage from "../../assets/destination/image-europa.webp";
import TitanImage from "../../assets/destination/image-europa.webp";

const PLANETS = [
  {
    label: "MOON",
    img: MoonImage,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
  },
  {
    label: "MARS",
    img: MarsImage,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    label: "EUROPA",
    img: EuropaImage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    label: "TITAN",
    img: TitanImage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
  },
];

const Destionation = () => {
  const [planet, setPlanet] = useState("MOON");
  const handlePlanetSelect = (planetName: string) => setPlanet(planetName);
  return (
    <main className="destination min-h-svh">
      <div className="pt-[5.5rem] ">
        <div className="p-6 flex flex-col gap-800">
          <div className="flex items-center justify-center gap-6">
            <span className="font-bold font-barlow text-white">01</span>
            <h1 className="text-center font-barlow tracking-[0.15rem]">
              PICK YOUR DESTINATION
            </h1>
          </div>
          <div className="flex flex-col gap-800">
            <div className="flex flex-col items-center">
              <img
                src={
                  PLANETS.find((planetItem) => planetItem.label === planet)?.img
                }
                className="w-[10.25rem] h-[10.25rem]"
                alt={`${planet} image`}
              />
            </div>
            <div className="flex gap-400 justify-center">
              {PLANETS.map((planetItem, idx) => (
                <button
                  onClick={() => handlePlanetSelect(planetItem.label)}
                  className={`text-preset-8 pb-3 transition-colors duration-500 font-barlow uppercase tracking-[0.125rem] ${
                    planetItem.label === planet
                      ? "border-b-[0.1875rem]"
                      : "border-b-[0.1875rem] border-white/0 hover:border-white/70"
                  }`}
                  key={idx}
                >
                  {planetItem.label}
                </button>
              ))}
            </div>
            <div className="flex text-center flex-col gap-400">
              <h2 className="text-preset-2">{planet}</h2>
              <p className="text-preset-9 font-barlowRegular font-thin">
                {
                  PLANETS.find((planetItem) => planetItem.label === planet)
                    ?.description
                }
              </p>
              <hr className="h-px bg-white opacity-20" />
              <div className="flex flex-col gap-300">
                <div className="flex flex-col gap-150">
                  <p className="text-preset-7 font-barlow font-normal">
                    AVG. DISTANCE
                  </p>
                  <p className="text-preset-6 text-[1.75rem] font-normal">
                    {
                      PLANETS.find((planetItem) => planetItem.label === planet)
                        ?.distance
                    }
                  </p>
                </div>
                <div className="flex flex-col gap-150">
                  <p className="text-preset-7 font-barlow font-normal">
                    EST. TRAVEL TIME
                  </p>
                  <p className="text-preset-6 text-[1.75rem] font-normal">
                    {
                      PLANETS.find((planetItem) => planetItem.label === planet)
                        ?.time
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destionation;
