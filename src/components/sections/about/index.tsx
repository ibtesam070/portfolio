import { DOTS_SVG, PROFILE_PIC } from "@/constants/values";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col mt-20">
      <p className="text-2xl font-semibold">⚡ About Me</p>
      <p className="text-gray-400 text-sm mt-4">
        Hey! I&apos;m Ibtesam Ansari, a{" "}
        <span className="text-primary">Full-Stack Engineer</span> with a strong
        passion for learning cutting-edge technologies and building impactful
        <span className="text-primary"> web applications</span>.
        <br />
        <br />
        My expertise lies in crafting solutions that prioritize performance,
        usability, and modern design principles. Having worked in a{" "}
        <span className="text-primary">SaaS company</span>, I have experience
        creating various <span className="text-primary">AI</span> integrated
        applications that save 100+ manual hours, further enhancing efficiency
        and productivity.
        <br />
        <br />
        When I&apos;m not coding, I enjoy playing video games 🎮, reading books 📖 or
        watching Netflix 🍿.
      </p>
      <div className="relative p-6">
        <Image
          src={DOTS_SVG}
          alt=""
          width={100}
          height={100}
          className="absolute -right-1 top-12 text-gray-600 invert-[0.1]"
        />
        <Image
          src={PROFILE_PIC}
          alt="Profile Image"
          height={400}
          width={400}
          className="rounded-full self-center mt-8"
        />
      </div>
    </section>
  );
};

export default AboutSection;
