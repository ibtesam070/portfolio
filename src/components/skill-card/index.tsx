import { ISkill } from "@/constants/skill";
import Image from "next/image";
import React from "react";

interface ISkillCardProps {
  skill: ISkill;
}

const SkillCard = ({ skill }: ISkillCardProps) => {
  return (
    <div className="flex items-center p-3 rounded-xl bg-gray-800 hover:bg-gray-900 cursor-pointer min-h-20">
      <Image src={skill.imageUrl} height={40} width={40} alt="logo" />
      <p className="font-semibold ml-3">{skill.name}</p>
    </div>
  );
};

export default SkillCard;
