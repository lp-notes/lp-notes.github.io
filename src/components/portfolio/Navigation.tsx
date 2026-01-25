import { cn } from "@/lib/utils";

type Section = "intro" | "experience" | "skills" | "interests";

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const sections: { id: Section; label: string }[] = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills & Education" },
  { id: "interests", label: "Interests" },
];

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="flex items-center justify-center gap-3 p-6 flex-wrap">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={cn(
            "nav-pill",
            activeSection === section.id && "nav-pill-active"
          )}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
