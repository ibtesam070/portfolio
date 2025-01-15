import Container from "@/components/container";
import AboutSection from "@/components/sections/about";
import CareerSection from "@/components/sections/career";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <Container className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <div className="h-96" />
    </Container>
  );
}
