import React from "react";

const colleges = [
  {
    name: "SVIET - Engineering & Technology",
    highlights: [
      "Prototype development in core and emerging engineering domains",
      "Industry-defined capstone and innovation challenges",
      "Conference papers and technology demonstration models",
    ],
  },
  {
    name: "SVCP - College Of Pharmacy",
    highlights: [
      "Drug formulation and quality-oriented lab studies",
      "Pharmacology and healthcare awareness projects",
      "Publication and presentation activities in pharmacy R&D",
    ],
  },
  {
    name: "SVCMT - Management & Technology",
    highlights: [
      "Market intelligence and strategy case research",
      "Entrepreneurship and startup model analysis",
      "Behavioral and organizational research initiatives",
    ],
  },
  {
    name: "SVCL - Law & Policy Interface",
    highlights: [
      "Legal research linked with technology and society",
      "Policy reviews with socio-economic context",
      "Seminars, legal drafting, and documentation projects",
    ],
  },
];

const ResearchByCollege = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#f7f9fc]">
      <div className="w-10/12 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          College-Wise Research Showcase
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl">
          Each institution contributes to a shared innovation ecosystem while
          advancing domain-specific research outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {colleges.map((college) => (
            <article
              key={college.name}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#1d2a44]">
                {college.name}
              </h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                {college.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-[#fea700] mt-[2px]">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchByCollege;