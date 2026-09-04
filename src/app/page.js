import HeroBanner from "../components/HeroBanner";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <HowWeWorkSection />
      <ContactSection />
    </>
  );
}
