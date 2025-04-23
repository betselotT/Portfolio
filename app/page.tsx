import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import ResumeSection from "@/components/resume-section";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />

        <ResumeSection />

        <ContactSection />
      </div>
    </main>
  );
}
