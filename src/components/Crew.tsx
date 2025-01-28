import CommanderImage from "../assets/crew/image-douglas-hurley.webp";

const Crew = () => {
  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-col gap-800">
        <div className="flex items-center justify-center sm:justify-start gap-6">
          <span className="font-bold font-barlow text-white">02</span>
          <h1 className="text-center font-barlow tracking-[0.15rem]">
            MEET YOUR CREW
          </h1>
        </div>
        <div className="flex flex-col gap-400">
          <div className="explanation text-center flex flex-col gap-800">
            <div className="rank-description flex flex-col gap-6">
              <div className="rank-details">
                <p className="uppercase text-white/50 text-preset-4">
                  commander
                </p>
                <h3 className="uppercase text-preset-3">Douglas Hurley</h3>
              </div>
              <p className="description">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
            <div className="dots flex gap-300">
              {Array.from({ length: 3 }, (_, index) => (
                <span
                  key={index}
                  className={`size-3 rounded-full block bg-white ${
                    index === 0 ? "active" : ""
                  }`}
                ></span>
              ))}
            </div>
          </div>
          <div className="commander-image">
            <img src={CommanderImage} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
