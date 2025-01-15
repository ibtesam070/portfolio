"use client";

import { ICareerItem } from "@/constants/career";
import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

interface ICareerCardProps {
  careerItem: ICareerItem;
}

const CareerCard = ({ careerItem }: ICareerCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Card className="rounded-sm p-4 bg-gray-200">
      <CardTitle className="font-normal text-lg flex flex-col">
        <div className="flex justify-between items-start">
          <p>{careerItem.company}</p>
          <p className="text-sm text-nowrap">{careerItem.year}</p>
        </div>
        <p className="text-sm text-primary-dark">{careerItem.role}</p>
      </CardTitle>
      <CardContent className="pl-0 max-w-64 mt-4">
        <div
          className={`text-gray-600 text-sm ${!expanded ? "line-clamp-3" : ""}`}
        >
          {careerItem.description}
        </div>
        <p onClick={() => setExpanded(!expanded)} className=" text-sm">
          {expanded ? "Read Less." : "Read more."}
        </p>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
