const Hero = () => {
  return (
    <main className="hero isolate pt-[5.5rem] flex flex-col">
      <div className="p-6 text-center space-y-300">
        <h3 className="text-preset-6 font-barlow tracking-[0.15rem]">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-preset-1">SPACE</h1>
        <p className="text-preset-9 font-barlow font-light">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="p-6 flex-grow flex justify-center items-center">
        <div className="w-72 h-72 relative flex items-center justify-center rounded-full bg-white/0 transition-colors duration-500 group">
          {/* Parent background changes only when button is hovered */}
          <div className="absolute w-full h-full rounded-full bg-white/0 transition-colors duration-500 group-hover:bg-white/20"></div>
          <button className="w-36 h-36 rounded-full bg-white text-black text-preset-4 relative z-10 group-hover:text-opacity-60 transition-colors duration-500">
            EXPLORE
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
