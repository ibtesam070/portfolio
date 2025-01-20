import Container from "@/components/container";
import AboutSection from "@/components/sections/about";
import CareerSection from "@/components/sections/career";
import HeroSection from "@/components/sections/hero";
import OutroSection from "@/components/sections/outro";
import SkillSection from "@/components/sections/skill";

export default function Home() {
  return (
    <Container className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <SkillSection />
      <OutroSection />
    </Container>
  );
}
