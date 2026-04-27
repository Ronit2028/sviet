import React from "react";

const focusAreas = [
  {
    title: "Sustainable Engineering",
    description:
      "Energy systems, green manufacturing, smart infrastructure, and practical engineering models for regional impact.",
  },
  {
    title: "Pharmaceutical & Healthcare Research",
    description:
      "Formulation development, pharmacovigilance awareness, quality validation, and healthcare-focused innovation.",
  },
  {
    title: "AI, Data & Emerging Tech",
    description:
      "Machine learning prototypes, IoT integrations, automation use-cases, and data-driven campus-industry projects.",
  },
  {
    title: "Society, Policy & Management",
    description:
      "Applied management studies, entrepreneurship development, and social impact research aligned to national priorities.",
  },
];

const FocusAreas = () => {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="w-10/12 mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Core Research Focus Areas
          </h2>
          <p className="text-gray-600 mt-4">
            Multidisciplinary themes guide student and faculty work across the
            SVGOI institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#1d2a44]">{area.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;