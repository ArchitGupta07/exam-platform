import ExamsSection from "@/components/dashboard/exams-section/examsSection";
import HeroSection from "@/components/dashboard/hero-section/heroSection";
import Image from "next/image";

import React from "react";

const DashBoard = () => {
  return (
    <section>
      <HeroSection />
      <ExamsSection />
    </section>
  );
};

export default DashBoard;
