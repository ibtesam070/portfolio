import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Avatar, AvatarImage } from "../ui/avatar";

interface IHoverTextProps {
  text: string;
  hoverContentText: string;
  textClasses?: string;
  hoverContentImage?: string;
}

const HoverText = ({
  hoverContentText,
  text,
  hoverContentImage,
  textClasses,
}: IHoverTextProps) => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <p className={`cursor-help ${textClasses}`}>{text}</p>
      </HoverCardTrigger>
      <HoverCardContent className="flex gap-2 bg-gray-200">
        {hoverContentImage && (
          <Avatar>
            <AvatarImage src={hoverContentImage} alt="ICON" />
          </Avatar>
        )}
        <p>{hoverContentText}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverText;
