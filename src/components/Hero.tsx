import heroImage from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center gap-8 px-4 py-10 container mx-auto md:px-8 lg:flex-row lg:gap-10 lg:px-10 lg:py-14">
        {/* hero text and button */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Build Your Idea
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 w-full text-sm leading-6 text-gray-500 md:mt-6 md:w-4/5 md:text-base">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex flex-col gap-3 mt-7 sm:flex-row sm:gap-4">
            <button className="text-white text-sm rounded-[10px] bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3">
              Explore Technologies
            </button>
            <button className="text-gray-700 border border-gray-300 rounded-lg px-6 py-3 text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* hero image */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImage}
            alt=""
            className="mx-auto w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
