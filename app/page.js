import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import OpenSourceSection from "./components/homepage/open-source";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutSection />
      <Experience />
      <Skills />
      <OpenSourceSection />
      <Education />
      <ContactSection />
    </>
  );
}
