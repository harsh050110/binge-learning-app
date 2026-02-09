import React from "react";

const CAE = () => {
  return (
    <section className="bg-[#2a073f] text-white">
      {/* HERO SECTION */}
      <div className="max-w-[1470px] mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Computer Aided Engineering (CAE) Course
          </h1>

          <p className="text-white/80 max-w-xl mb-8 leading-relaxed">
            Master simulation-driven engineering with industry-standard CAE
            tools. Learn structural, thermal, and fluid simulations used by
            automotive, aerospace, and manufacturing industries.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Live Projects
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Industry Mentors
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Internship Assistance
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Simulation Focused
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white/5 rounded-3xl p-6">
          <img
            src="https://images.unsplash.com/photo-1581092919534-09a5c2c6f1d9"
            alt="CAE Simulation"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* COURSE OVERVIEW */}
      <div className="max-w-[1470px] mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10">Course Overview</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Industry-Oriented Curriculum
              </h3>
              <p className="text-white/80">
                Learn CAE concepts from fundamentals to advanced simulations,
                aligned with real-world engineering problems and workflows.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Hands-on Simulation Practice
              </h3>
              <p className="text-white/80">
                Perform real simulations including stress analysis, thermal
                analysis, and CFD using industry tools.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Expert Mentorship
              </h3>
              <p className="text-white/80">
                Learn from experienced CAE professionals with real industry
                exposure in automotive and manufacturing domains.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">
              Practical Exposure & Career Support
            </h3>

            <ul className="space-y-4 text-white/80">
              <li>✔ Real-world engineering simulation projects</li>
              <li>✔ Internship & placement assistance</li>
              <li>✔ Resume & interview preparation</li>
              <li>✔ Industry-recognized skill development</li>
              <li>✔ Portfolio-building simulation cases</li>
            </ul>
          </div>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="bg-[#3b0a5f] py-24">
        <div className="max-w-[1470px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CAE Fundamentals",
                points: [
                  "Introduction to CAE & simulation",
                  "Engineering problem-solving approach",
                  "Mesh generation basics",
                ],
              },
              {
                title: "Structural Analysis (FEA)",
                points: [
                  "Stress & strain analysis",
                  "Static & dynamic simulations",
                  "Failure & deformation analysis",
                ],
              },
              {
                title: "Thermal Analysis",
                points: [
                  "Heat transfer fundamentals",
                  "Steady & transient thermal analysis",
                  "Thermal stress coupling",
                ],
              },
              {
                title: "CFD Basics",
                points: [
                  "Fluid flow fundamentals",
                  "Boundary conditions",
                  "Flow visualization & results",
                ],
              },
              {
                title: "Industry Tools",
                points: [
                  "ANSYS Workbench",
                  "HyperMesh basics",
                  "Post-processing techniques",
                ],
              },
              {
                title: "Professional Skills",
                points: [
                  "Simulation report writing",
                  "Engineering decision-making",
                  "Industry project workflow",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl text-black p-6"
              >
                <h3 className="font-semibold text-lg mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {item.points.map((p, idx) => (
                    <li key={idx}>✔ {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="max-w-[1470px] mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose Binge Learning for CAE?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Industry-expert CAE mentors",
            "Simulation-driven learning approach",
            "Live engineering projects",
            "Internship & placement support",
            "Career-focused curriculum",
            "Hands-on tool experience",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 text-center"
            >
              <p className="text-white/90 font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAE;
