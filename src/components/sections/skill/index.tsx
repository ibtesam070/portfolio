import SkillCard from "@/components/skill-card";
import { SKILLS } from "@/constants/skill";
import React from "react";

const SkillSection = () => {
  return (
    <div className="w-full mt-20 flex flex-col">
      <h1 className="text-2xl font-semibold text-white">🥷 Skills</h1>
      <ul className="grid grid-cols-2 gap-3 mt-8">
        {SKILLS.map((skill, index) => {
          return <SkillCard skill={skill} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default SkillSection;
