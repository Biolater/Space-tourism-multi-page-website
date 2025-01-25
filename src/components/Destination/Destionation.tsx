import MoonImage from "../../assets/destination/image-moon.webp";

const PLANETS = ["MOON", "MARS", "EUROPA", "TITAN"];

const Destionation = () => {
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
          <div className="flex flex-col gap-400">
            <div className="flex flex-col items-center">
              <img
                src={MoonImage}
                className="w-[14.25rem] h-[14.25rem]"
                alt=""
              />
            </div>
            <div className="flex gap-600 justify-center">
              {PLANETS.map((planet, idx) => (
                <button
                  className="text-preset-8 font-barlow uppercase tracking-[0.125rem] "
                  key={idx}
                >
                  {planet}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destionation;
