const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black font-titleFont"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Oti Isaac</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>lorem, ipsum</span>
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide"></p>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
