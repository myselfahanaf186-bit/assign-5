const Hero = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Side */}
          <div>

            <p className="text-sm font-semibold text-pink-500 mb-4">
              BUILD YOUR DEVELOPMENT STACK
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Your{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Dev Stack
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-600 leading-7">
              Choose the right technologies and build your perfect
              development stack for modern web projects.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button
                className="px-6 py-3 rounded-full text-white font-medium
                bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500
                hover:opacity-90 transition"
              >
                Explore Technologies
              </button>

              <button
                className="px-6 py-3 rounded-full border border-gray-300
                text-gray-700 font-medium hover:border-pink-400
                hover:text-pink-500 transition"
              >
                Learn More
              </button>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src="/assets/banner-stack.png"
              alt="Development stack illustration"
              className="w-full max-w-md lg:max-w-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;