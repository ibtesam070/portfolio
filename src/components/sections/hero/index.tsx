import HoverText from "@/components/hover-text";
import SocialButton from "@/components/social-button";
import {
  EMAIL_ACCOUNT_LINK,
  GITHUB_ACCOUNT_LINK,
  LINKEDIN_ACCOUNT_LINK,
  PROPERTYLOOP_DESCRIPTION,
  PROPERTYLOOP_ICON,
} from "@/constants/values";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col pt-36">
      <p className="text-primary text-xl">Hey there!, I&apos;m-</p>
      <p className="text-6xl font-bold">Ibtesam</p>
      <p className="text-6xl font-bold">Ansari.</p>

      <p className="text-gray-400 mt-6 text-xl">
        <span className="text-white">Software Engineer.</span> A self-taught
        developer with an interest in Computer Science.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        🚀 Currently specializing in Fullstack (React / Node)
      </p>
      <div className="flex gap-1 text-sm text-gray-500">
        <p>⚡ Fullstack Engineer at</p>
        <HoverText
          text="PropertyLoop"
          hoverContentText={PROPERTYLOOP_DESCRIPTION}
          hoverContentImage={PROPERTYLOOP_ICON}
          textClasses="text-primary"
        />
      </div>

      <div className="flex mt-8 gap-3">
        <SocialButton
          text="Github"
          link={GITHUB_ACCOUNT_LINK}
          icon={<FaGithub className="text-primary" />}
        />
        <SocialButton
          text="LinkedIn"
          link={LINKEDIN_ACCOUNT_LINK}
          icon={<FaLinkedin className="text-primary" />}
        />
        <SocialButton
          text="Email"
          link={EMAIL_ACCOUNT_LINK}
          icon={<FaEnvelope className="text-primary" />}
        />
      </div>
    </section>
  );
};

export default HeroSection;
