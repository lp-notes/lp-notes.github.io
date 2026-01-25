import { GraduationCap, Code2 } from "lucide-react";

const skills = [
"Python",
"JavaScript",
"TypeScript",
"Django",
"Flask",
"FastAPI",
"React",
"Angular",
"SQL",
"PostgreSQL",
"MongoDB",
"REST APIs",
"Pandas",
"NumPy",
"LangChain",
"Azure AI",
"AWS",
"Docker",
"Kubernetes",
"CI/CD"
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Northern Arizona University",    
  },

];

const SkillsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)] animate-fade-in">
      {/* Left Panel - Pink */}
      <div className="lg:w-2/5 bg-pink-panel flex items-center justify-center p-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black-panel mb-4">
            Skills &<br />Education
          </h2>
          <p className="text-black-panel/80 text-lg">
            What I bring to the table
          </p>
        </div>
      </div>

      {/* Right Panel - Black */}
      <div className="lg:w-3/5 bg-black-panel flex items-center p-8 lg:p-16">
        <div className="w-full max-w-2xl space-y-12">
          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-foreground">
                Technical Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="text-foreground font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">
                    {edu.institution} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
