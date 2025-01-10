import React, { ReactNode } from "react";

interface ISocialButtonProps {
  text: string;
  icon: ReactNode;
  link: string;
}

const SocialButton = ({ icon, link, text }: ISocialButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 cursor-pointer py-2 px-4 rounded-md"
    >
      {icon}
      <p className="text-sm">{text}</p>
    </a>
  );
};

export default SocialButton;
