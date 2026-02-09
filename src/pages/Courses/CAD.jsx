const CAD = () => {
  return (
    <section className="bg-gradient-to-b from-[#2b0a3d] to-[#120016] text-white">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CAD Course – <br />
            <span className="text-yellow-500">
              Draft, Design & Build with Precision
            </span>
          </h1>

          <p className="text-gray-300 mb-6">
            Learn professional 2D & 3D drafting used in mechanical, civil and
            architectural industries with live projects and internship support.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {["AutoCAD", "2D + 3D Drafting", "Live Projects", "Internship"].map(
              (item, i) => (
                <span
                  key={i}
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">
            Enroll Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="CAD"
          className="rounded-2xl shadow-xl"
        />
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-6 mb-20">
        {[
          { value: "700+", label: "Students Trained" },
          { value: "92%", label: "Placement Rate" },
          { value: "15+", label: "Industry Partners" },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-xl py-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">{s.value}</h3>
            <p className="text-gray-300">{s.label}</p>
          </div>
        ))}
      </div>

      {/* OVERVIEW */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 text-gray-300">
          <p>
            This CAD course focuses on professional drafting workflows,
            precision drawing standards, and real-world engineering practices
            used across industries.
          </p>

          {[
            "Industry-oriented curriculum",
            "Hands-on drafting assignments",
            "Professional certification support",
          ].map((t, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              {t}
            </div>
          ))}
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-4">
            Practical Exposure
          </h4>
          <ul className="space-y-3 text-sm">
            <li>✔ Industrial drawings</li>
            <li>✔ Real project files</li>
            <li>✔ Internship support</li>
            <li>✔ Placement assistance</li>
          </ul>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You Will Learn
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ["AutoCAD Basics", ["2D drafting", "Layers", "Dimensions"]],
            ["3D Modelling", ["Solid modelling", "Isometric views"]],
            ["Layouts & Printing", ["Plotting", "Scale management"]],
          ].map(([title, items], i) => (
            <div key={i} className="bg-white text-black rounded-2xl p-6">
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="text-sm space-y-2">
                {items.map((x, j) => (
                  <li key={j}>✔ {x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default CAD;
