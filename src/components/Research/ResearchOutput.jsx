import React from "react";

const stats = [
  { value: "50+", label: "Annual Research Projects" },
  { value: "75+", label: "Conference/Journal Contributions" },
  { value: "20+", label: "Industry & Clinical Engagements" },
  { value: "10+", label: "Innovation/Prototype Pipelines" },
];

const ResearchOutput = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#101827] text-white">
      <div className="w-10/12 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold">Research Output Snapshot</h2>
        <p className="text-gray-300 mt-4 max-w-3xl">
          A performance-driven culture ensures each academic session contributes
          measurable research progress and visibility.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/15 bg-white/5 p-5"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#fea700]">
                {item.value}
              </p>
              <p className="text-sm text-gray-200 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchOutput;