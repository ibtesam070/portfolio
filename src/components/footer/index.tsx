import React from "react";
import {
  NEXTJS_DESCRIPTION,
  NEXTJS_ICON,
  SHADCN_DESCRIPTION,
  SHADCN_ICON,
  VERCEL_DESCRIPTION,
  VERCEL_ICON,
} from "@/constants/values";
import HoverText from "../hover-text";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center text-sm mb-8">
      <p>Designed and Developed by Ibtesam Ansari.</p>
      <div className="flex gap-1">
        <p>Built with</p>
        <HoverText
          text="Next.js"
          hoverContentText={NEXTJS_DESCRIPTION}
          hoverContentImage={NEXTJS_ICON}
          textClasses="text-primary"
        />
        <p>&</p>
        <HoverText
          text="ShadCN"
          hoverContentText={SHADCN_DESCRIPTION}
          hoverContentImage={SHADCN_ICON}
          textClasses="text-primary"
        />
        <p>.</p>
        <p>Hosted on</p>
        <HoverText
          text="Vercel"
          hoverContentText={VERCEL_DESCRIPTION}
          hoverContentImage={VERCEL_ICON}
          textClasses="text-primary"
        />
        <p>.</p>
      </div>
    </footer>
  );
};

export default Footer;
