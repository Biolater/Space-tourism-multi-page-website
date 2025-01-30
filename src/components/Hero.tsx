const Hero = () => {
  return (
    <main className="isolate lg:pt-[8rem]">
      <div className="flex flex-col lg:flex-row lg:max-w-6xl mx-auto lg:items-center lg:justify-between lg:min-h-svh">
        <div className="p-6 text-center lg:text-start space-y-300 lg:space-y-0">
          <h3 className="text-preset-6 md:text-[1.75rem] font-light font-barlow tracking-[0.15rem]">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-preset-1 md:text-[9rem]">SPACE</h1>
          <p className="text-preset-9 text-blue-300 md:text-base max-w-[30rem] mx-auto font-barlow font-light">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="p-6 flex-grow lg:flex-grow-0 flex justify-center items-center">
          <div className="w-72 h-72 md:w-[24.5rem] md:h-[24.5rem] relative flex items-center justify-center rounded-full bg-white/0 transition-colors duration-500 group">
            {/* Parent background changes only when button is hovered */}
            <div className="absolute w-full h-full rounded-full bg-white/0 transition-colors duration-500 group-hover:bg-white/20"></div>
            <a
              href="/destination"
              className="w-36 h-36 flex items-center justify-center md:w-[17rem] md:h-[17rem] rounded-full bg-white text-black text-preset-4 relative z-10 group-hover:text-opacity-60 transition-colors duration-500"
            >
              EXPLORE
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
