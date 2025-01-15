import React, { ReactNode } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { Separator } from "./separator";

interface ITimelineProps {
  items: ReactNode[];
  className?: string;
}

const TimelineNode = ({ item }: { item: ReactNode }) => {
  return (
    <div className="flex w-full h-full mt-6">
      <div className="flex flex-col items-center mx-3">
        <div className="flex items-center justify-center p-2 rounded-full bg-primary-dark">
          <FaSquarePlus className="text-white" />
        </div>
        <Separator orientation="vertical" className="bg-gray-400 h-full mt-1" />
      </div>
      <div className="w-full">{item}</div>
    </div>
  );
};

const Timeline = ({ items, className }: ITimelineProps) => {
  return (
    <ul className={`flex flex-col w-full items-center ${className || ""}`}>
      {items.map((item, index) => {
        return <TimelineNode item={item} key={index} />;
      })}
    </ul>
  );
};

export default Timeline;
