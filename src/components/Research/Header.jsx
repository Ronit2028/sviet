import React from "react";

const RESEARCH_HERO_VIDEO_URL = "https://youtu.be/03zrCv0nJ2s";

const Header = () => {
  return (
    <section className="bg-gradient-to-br from-[#0b1220] via-[#1a2338] to-[#0f1a2f] text-white">
      <div className="w-10/12 mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#fea700] text-sm tracking-[0.2em] uppercase mb-4">
              Research & Development
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Research At SVIET, Powered By The SVGOI Innovation Culture
            </h1>
            <p className="text-gray-200 mt-6 text-base lg:text-lg leading-relaxed">
              From applied engineering projects to pharmacy innovation and social
              impact studies, our research ecosystem promotes real-world
              problem solving, publication quality, and industry collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                Sponsored Projects
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                Publications
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                Patents & IPR
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/30">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={RESEARCH_HERO_VIDEO_URL}
                title="SVGOI Research Overview"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="px-4 py-3 text-xs md:text-sm text-gray-200 border-t border-white/10">
              Replace video URL in this file to update the hero video anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;