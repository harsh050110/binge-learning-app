const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden rounded-b-[2.5rem]">
      

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">

        <div>
          <p className="uppercase tracking-widest text-sm text-yellow-400 mb-4">
            Learn • Practice • Succeed
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            We Turn Learners <br /> Into Professionals
          </h1>
        </div>

        <div className="max-w-xl">
          <p className="text-white/80 text-lg mb-6">
            Unlock your potential with Binge Learning. Master Graphic Design,
            3D, CAE, CAD, and AI tools through expert mentorship, live classes,
            and industry-focused training.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-full font-medium">
              View Courses
            </button>

            <button className="border border-white/40 hover:bg-white/10 transition px-6 py-3 rounded-full font-medium">
              Book Demo
            </button>
          </div>
        </div>

      </div>


    </section>
  );
};

export default Hero;
