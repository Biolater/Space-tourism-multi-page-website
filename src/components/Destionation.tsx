import { useState } from "react";
import MoonImage from "../assets/destination/image-moon.webp";
import MarsImage from "../assets/destination/image-mars.webp";
import EuropaImage from "../assets/destination/image-europa.webp";
import TitanImage from "../assets/destination/image-europa.webp";

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

const Destination = () => {
  const [planet, setPlanet] = useState("MOON");
  const [fade, setFade] = useState(false);

  const handlePlanetSelect = (planetName: string) => {
    setFade(true); // Trigger fade-out
    setTimeout(() => {
      setPlanet(planetName); // Change planet after fade-out
      setFade(false); // Trigger fade-in
    }, 200); // Duration of fade-out (matches CSS transition)
  };

  const selectedPlanet = PLANETS.find(
    (planetItem) => planetItem.label === planet
  );

  return (
    <main className="container mx-auto">
      <div>
        <div className="p-6 flex flex-col gap-800 sm:gap-600">
          <div className="flex items-center justify-center sm:justify-start gap-6">
            <span className="font-bold font-barlow text-white/25">01</span>
            <h1 className="text-center font-barlow tracking-[0.15rem]">
              PICK YOUR DESTINATION
            </h1>
          </div>
          <div className="flex flex-col gap-800 sm:max-w-[32rem] lg:max-w-full lg:flex-row mx-auto">
            {/* Image */}
            <div
              className={`flex flex-col lg:basis-1/2 items-center transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={selectedPlanet?.img}
                className="w-[10.25rem] h-[10.25rem] sm:w-[17.5rem] sm:h-[17.5rem] md:w-[24.5rem] md:h-[24.5rem] object-contain"
                alt={`${planet} image`}
              />
            </div>

            <div className="flex-col gap-800 flex lg:basis-1/2">
              {/* Buttons */}
              <div className="flex gap-400 justify-center lg:justify-start">
                {PLANETS.map((planetItem, idx) => (
                  <button
                    onClick={() => handlePlanetSelect(planetItem.label)}
                    className={`text-preset-8 pb-3 transition-colors duration-300 font-barlow uppercase tracking-[0.125rem] ${
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

              {/* Details */}
              <div
                className={`flex text-center lg:text-left flex-col gap-400 transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <h2 className="text-preset-2 sm:text-[5rem]">{planet}</h2>
                <p className="text-preset-9 text-base font-barlowRegular font-thin">
                  {selectedPlanet?.description}
                </p>
                <hr className="h-px bg-white opacity-20" />
                <div className="flex flex-col gap-300 sm:flex-row sm:justify-center">
                  <div className="flex flex-col gap-150 sm:flex-grow">
                    <p className="text-preset-7 font-barlow font-normal">
                      AVG. DISTANCE
                    </p>
                    <p className="text-preset-6 text-[1.75rem] sm:text-[2rem] font-normal">
                      {selectedPlanet?.distance}
                    </p>
                  </div>
                  <div className="flex flex-col gap-150 sm:flex-grow">
                    <p className="text-preset-7 font-barlow font-normal">
                      EST. TRAVEL TIME
                    </p>
                    <p className="text-preset-6 text-[1.75rem] sm:text-[2rem] font-normal">
                      {selectedPlanet?.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
