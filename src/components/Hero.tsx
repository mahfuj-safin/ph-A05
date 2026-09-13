import heroImage from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="flex items-center px-10 py-10 container mx-auto">
        {/* hero text and button */}
        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-gray-900">
            Build Your Idea
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 w-4/5 text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="text-white rounded-[10px] bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3">
              Explore Technologies
            </button>
            <button className="text-gray-700 border border-gray-300 rounded-lg px-6 py-3 ">
              Learn More
            </button>
          </div>
        </div>

        {/* hero image */}
        <div className="w-1/2">
          <img src={heroImage} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
