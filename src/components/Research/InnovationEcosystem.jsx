import React from "react";
import Link from "next/link";

const InnovationEcosystem = () => {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="w-10/12 mx-auto">
        <div className="rounded-2xl border border-gray-200 p-8 lg:p-10 bg-gradient-to-r from-[#fff8e6] to-[#f5f8ff]">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Collaboration, Incubation & Research Support
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl">
            SVGOI supports research through mentoring cells, domain labs,
            publication guidance, and cross-functional teamwork. Students and
            faculty are encouraged to collaborate with industry experts,
            hospitals, legal practitioners, and entrepreneurs for outcome-based
            innovation.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              Mentorship for ideation, design, and publication
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              Industry and institutional partnerships for applied research
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              Innovation opportunities through events and project showcases
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#fea700] text-white font-medium hover:bg-[#e39a00] transition"
            >
              Connect With Research Cell
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-400 text-gray-800 font-medium hover:bg-white transition"
            >
              Join SVGOI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationEcosystem;