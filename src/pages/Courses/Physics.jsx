const PhysicsOfDesign = () => {
  return (
    <section className="bg-[#2a073f] text-yellow-500">
      {/* HERO */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Physics of Design
          </h1>
          <p className="text-white/80 leading-relaxed mb-6">
            Understand the physics behind real-world products. Learn how forces,
            motion, fluids, heat, and materials influence design decisions in
            engineering and product development.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Statics",
              "Dynamics",
              "Fluid Mechanics",
              "Thermal Physics",
              "Material Behavior",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Placeholder */}
        <div className="h-[260px] bg-white/5 rounded-2xl flex items-center justify-center">
          <span className="text-white/40">
            Physics-Based Design Visual
          </span>
        </div>
      </div>

      {/* CORE CONCEPTS */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Concepts You Will Master
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Statics & Strength of Materials
            </h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>• Forces, moments & equilibrium</li>
              <li>• Stress, strain & deformation</li>
              <li>• Failure & safety factors</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Dynamics & Motion
            </h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>• Velocity & acceleration</li>
              <li>• Energy & momentum</li>
              <li>• Impact & vibration basics</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Fluid Mechanics
            </h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>• Pressure, lift & drag</li>
              <li>• Flow behavior & turbulence</li>
              <li>• Real-world airflow examples</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Thermal Physics
            </h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>• Heat transfer modes</li>
              <li>• Thermal expansion</li>
              <li>• Temperature-driven failures</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DESIGN WORKFLOW */}
      <div className="bg-[#3b0a5f]">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Physics-Driven Design Workflow
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 p-6 rounded-2xl">
              <h4 className="font-semibold mb-2">Understand Physics</h4>
              <p className="text-sm text-white/80">
                Analyze forces, motion & energy
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h4 className="font-semibold mb-2">Design the Product</h4>
              <p className="text-sm text-white/80">
                Apply physics to shape & material
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h4 className="font-semibold mb-2">Validate with CAE</h4>
              <p className="text-sm text-white/80">
                Verify performance using simulation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Physics of Design Matters
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Design safer and stronger products",
            "Reduce trial-and-error in engineering",
            "Improve performance and efficiency",
            "Foundation for CAE & simulations",
            "Better decision-making as a designer",
            "Industry-relevant problem solving",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-2xl text-center"
            >
              <p className="text-white/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysicsOfDesign;
