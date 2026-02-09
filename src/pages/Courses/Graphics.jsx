import { Link } from "react-router-dom";

const GraphicDesign = () => {
  return (
    <section className="bg-gradient-to-b from-[#2b0a3d] to-[#120016] text-white">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Graphic Designing Course – <br />
            <span className="text-yellow-500">
              Master Creativity with Binge Learning
            </span>
          </h1>

          <p className="text-gray-300 mb-6">
            Transform your creativity into a career. Live projects, internship &
            placement assistance.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Live Projects",
              "Internship Included",
              "Placement Assistance",
              "AI Tools",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold">
              Enroll Now
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-xl">
              View Curriculum
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159"
            alt="Graphic Design"
            className="rounded-2xl shadow-xl"
          />
          <span className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            Industry Certified • Professional Course
          </span>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { value: "1000+", label: "Students Trained" },
          { value: "95%", label: "Placement Rate" },
          { value: "20+", label: "Hiring Partners" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl py-6 text-center"
          >
            <h3 className="text-3xl font-bold text-yellow-500">
              {stat.value}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
      {/* COURSE OVERVIEW + PRACTICAL SUPPORT */}
<div className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8">
  
  {/* LEFT CONTENT */}
  <div className="lg:col-span-2 space-y-6">
    <p className="text-gray-300 leading-relaxed">
      Our 18-week Graphic Designing Course covers every essential design
      software and creative process you need to become an industry-ready
      professional. Alongside theory and practice, students work on live
      client projects and real-time assignments that simulate professional
      environments.
    </p>

    {/* Feature Cards */}
    <div className="bg-white/5 rounded-2xl p-6">
      <h4 className="text-lg font-semibold mb-2">
        Flexible Duration Options
      </h4>
      <p className="text-gray-400 text-sm">
        Choose between 18-week regular batch or 6-week fast-track intensive
        program
      </p>
    </div>

    <div className="bg-white/5 rounded-2xl p-6">
      <h4 className="text-lg font-semibold mb-2">
        Comprehensive Curriculum
      </h4>
      <p className="text-gray-400 text-sm">
        Master 6 industry-standard software tools including Adobe Creative
        Suite and AI-powered design tools
      </p>
    </div>

    <div className="bg-white/5 rounded-2xl p-6">
      <h4 className="text-lg font-semibold mb-2">
        Expert Mentorship
      </h4>
      <p className="text-gray-400 text-sm">
        Learn from industry professionals with 10+ years of real-world design
        experience
      </p>
    </div>
  </div>

  {/* RIGHT CARD */}
  <div className="bg-white/5 rounded-2xl p-6 h-fit">
    <h4 className="text-xl font-semibold mb-4">
      Practical Exposure & Career Support
    </h4>

    <ul className="space-y-4 text-sm text-gray-300">
      <li>
        <span className="font-semibold text-white">Live Client Projects</span>
        <br />
        Work on real-world projects for actual clients and gain hands-on
        experience
      </li>

      <li>
        <span className="font-semibold text-white">Professional Portfolio</span>
        <br />
        Build a stunning portfolio showcasing your best work
      </li>

      <li>
        <span className="font-semibold text-white">Guaranteed Internship</span>
        <br />
        Every student receives an internship opportunity
      </li>

      <li>
        <span className="font-semibold text-white">Placement Assistance</span>
        <br />
        Resume building, interview prep, and hiring partner access
      </li>
    </ul>
  </div>
</div>


      {/* WHAT YOU WILL LEARN */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold  text-yellow-500 text-center mb-4">
          What You Will Learn
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Master 6 industry-standard software tools with hands-on training
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Adobe Photoshop",
              points: [
                "Raster graphics fundamentals",
                "Image editing & retouching",
                "Compositing & effects",
                "Design for print & digital",
              ],
            },
            {
              title: "Adobe Illustrator",
              points: [
                "Vector illustrations",
                "Logo & branding design",
                "Typography & iconography",
                "Packaging design",
              ],
            },
            {
              title: "Adobe InDesign",
              points: [
                "Page layouts",
                "Brochures & magazines",
                "Publishing workflows",
                "Editorial design",
              ],
            },
            {
              title: "CorelDRAW",
              points: [
                "Vector layouts",
                "Professional logo creation",
                "Print-ready artwork",
                "Color management",
              ],
            },
            {
              title: "Canva Pro",
              points: [
                "Fast design templates",
                "Social media creatives",
                "Brand kit workflows",
                "Marketing designs",
              ],
            },
            {
              title: "AI Design Tools",
              points: [
                "AI-powered creativity",
                "Image generation",
                "Automation workflows",
                "Latest AI design trends",
              ],
            },
          ].map((tool, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4">{tool.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {tool.points.map((p, j) => (
                  <li key={j}>✔ {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

  
    </section>
  );
};

export default GraphicDesign;
