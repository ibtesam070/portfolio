import CareerCard from "@/components/career-card";
import Timeline from "@/components/ui/timeline";
import { CAREER_TIMELINE } from "@/constants/career";
import React from "react";

const CareerSection = () => {
  const careerCards = CAREER_TIMELINE.map((c) => {
    return <CareerCard careerItem={c} key={c.id} />;
  });

  return (
    <section className="flex flex-col mt-20">
      <h1 className="text-2xl font-semibold">💼 My Career</h1>
      <Timeline items={careerCards} className="mt-8" />
    </section>
  );
};

export default CareerSection;
