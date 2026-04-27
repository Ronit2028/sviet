import React from "react";
import Header from "@/components/Research/Header";
import FocusAreas from "@/components/Research/FocusAreas";
import ResearchByCollege from "@/components/Research/ResearchByCollege";
import ResearchOutput from "@/components/Research/ResearchOutput";
import InnovationEcosystem from "@/components/Research/InnovationEcosystem";

export const metadata = {
  title: "Research",
  description:
    "Explore research and development initiatives across SVIET and SVGOI institutions.",
  alternates: {
    canonical: "/research",
  },
};

const page = () => {
  return (
    <main>
      <Header />
      <FocusAreas />
      <ResearchByCollege />
      <ResearchOutput />
      <InnovationEcosystem />
    </main>
  );
};

export default page;