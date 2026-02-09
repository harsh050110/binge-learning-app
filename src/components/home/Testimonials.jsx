const Testimonials = () => {
  return (
    <section className="py-24 bg-[#4b136f]">
      <div className="max-w-[1470px] mx-auto px-6 bg-[#4b136f]">
        <h2 className="text-center text-yellow-500 text-3xl font-bold">
          What Our Students Say
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-[#3b0a5f] rounded-xl p-8 text-white/80">
            <p>
              "Binge Learning has been a turning point in my career.
              The mentors made learning easy and effective!"
            </p>
            <p className="mt-4 text-yellow-400">
              – Pooja Bisht, Graphic Design
            </p>
          </div>

          <div className="bg-[#3b0a5f] rounded-xl p-8 text-white/80">
            <p>
              "Joining Binge Learning was the best decision I made.
              The practical style improved my creativity."
            </p>
            <p className="mt-4 text-yellow-500">
              – Subham Sinha, CAD Course
            </p>
          </div>

          <div className="bg-[#3b0a5f] rounded-xl p-8 text-white/80">
            <p>
              "Personal attention and guidance made me confident
              to build my design career."
            </p>
            <p className="mt-4 text-yellow-500">
              – Sourya Jain, 3D Design
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
