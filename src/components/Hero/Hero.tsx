const Hero = () => {
  return (
    <main className="hero isolate flex flex-col min-h-[calc(100svh-5.5rem)]">
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
      <div className="flex-grow flex justify-center items-center">
        <button className="w-36 after:content-[''] hover:after:bg-white/20 after:transition-colors after:duration-500 after:block after:rounded-full after:z-[-1] relative after:w-72 after:h-72 after:bg-white/0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 h-36 rounded-full bg-white text-black text-preset-4">
          EXPLORE
        </button>
      </div>
    </main>
  );
};

export default Hero;
