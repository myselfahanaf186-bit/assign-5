const Hero = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build Your
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                {" "}Dev Stack
              </span>
            </h1>

            <p className="mt-5 text-gray-600 leading-7">
              Choose the right technologies and build your perfect
              development stack for modern web projects.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">

              <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500">
                Explore Technologies
              </button>

              <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700">
                Learn More
              </button>

            </div>
          </div>

          {/* Right side */}
          <div className="flex justify-center">
            <img
              src="/assets/banner-stack.png"
              alt="Developer stack"
              className="w-full max-w-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;