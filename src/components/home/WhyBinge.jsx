const features = [
  {
    icon: "💡",
    title: "Expert Faculty",
    desc: "Learn from industry professionals with real-world experience",
  },
  {
    icon: "💼",
    title: "Internship with Live Projects",
    desc: "Hands-on training with real client-based projects",
  },
  {
    icon: "🎯",
    title: "Job Ready Courses",
    desc: "Curriculum designed to make you placement-ready",
  },
  {
    icon: "📺",
    title: "Live Classes",
    desc: "Interactive live sessions with doubt-solving support",
  },
  {
    icon: "⚡",
    title: "Practical Learning",
    desc: "Focus on tools, workflows, and real industry skills",
  },
];

const WhyBinge = () => {
  return (
    <section className="py-24 bg-[#4b136f] text-black">
      <div className="max-w-[1470px] mx-auto px-6">

        <div className="mb-16">
          <p className="uppercase tracking-widest text-sm text-gray-400">
            WHY BINGE LEARNING
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Excellence in <span className="text-yellow-500">every aspect</span>
          </h2>
        </div>

        <div className="max-w-3xl space-y-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyBinge;
