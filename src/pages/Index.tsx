import { useState } from "react";
import Navigation from "@/components/portfolio/Navigation";
import IntroSection from "@/components/portfolio/IntroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import InterestsSection from "@/components/portfolio/InterestsSection";

type Section = "intro" | "experience" | "skills" | "interests";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("intro");

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "experience":
        return <ExperienceSection />;
      case "skills":
        return <SkillsSection />;
      case "interests":
        return <InterestsSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main>{renderSection()}</main>
    </div>
  );
};

export default Index;
