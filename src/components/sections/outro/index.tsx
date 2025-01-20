import SocialButton from "@/components/social-button";
import {
  GITHUB_ACCOUNT_LINK,
  LINKEDIN_ACCOUNT_LINK,
  EMAIL_ACCOUNT_LINK,
} from "@/constants/values";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const OutroSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-20 my-40">
      <h1 className="text-4xl font-bold">Keep In Touch.</h1>
      <p className="mt-12 text-gray-400">I&apos;m currently specializing in </p>
      <p className="text-primary">Fullstack Development</p>
      <p className="mt-8 text-gray-400 w-full text-center">
        Feel free to get in touch and talk more about your projects.
      </p>

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

export default OutroSection;
