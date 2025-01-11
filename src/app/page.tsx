import Container from "@/components/container";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <Container className="flex flex-col">
      <HeroSection />
      <AboutSection />
    </Container>
  );
}
