const experiences = [
  {
    role: "Python Full stack Developer - AI ",
    company: "United Whole Mortgage",
    period: "2024 - Present",
    description:
    "building reliable Python backends, integrating LLMs, creating data pipelines, and developing React dashboards to deliver secure, compliant, and high-quality insights that genuinely help brokers work faster and smarter.",
  },
  {
    role: "Full Stack Developer",
    company: "Fiserv, Inc.",
    period: "2022 - 2024",
    description:
      "Built and shipped FinTech products using Python, React, and Angular, working on everything from secure payment flows and fraud detection to real-time analytics, all running at scale on Azure",
  },
  {
    role: "Software Developer",
    company: "Prudential Financial, Inc",
    period: "2020 - 2022",
    description:
      "Modernized legacy retirement and document systems with scalable Django backends and React frontends, optimizing performance, reliability, and self-service while ensuring full regulatory compliance.",
  },
  {
    role: "Software Engineer",
    company: "DXC Technology",
    period: "2019 - 2020",
    description:
      "Updated an internal insurance web portal, building both back-end and front-end features to make daily operations easier, speed up processes, and create a smoother experience for users.",
  },
    {
    role: "Software Engineer",
    company: "Infosys Limited",
    period: "2018 - 2019",
    description:
      "Worked on Python-based backend applications, improving ETL pipelines, building RESTful APIs, and collaborating with cross-functional teams to deliver reliable, scalable, and efficient solutions using Django, Flask, SQL/NoSQL databases, and modern DevOps tools.",
  },
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)] animate-fade-in">
      {/* Left Panel - Pink */}
      <div className="lg:w-2/5 bg-pink-panel flex items-center justify-center p-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black-panel mb-4">
            Experience
          </h2>
          <p className="text-black-panel/80 text-lg">
            My professional journey
          </p>
        </div>
      </div>

      {/* Right Panel - Black */}
      <div className="lg:w-3/5 bg-black-panel flex items-center p-8 lg:p-16">
        <div className="w-full max-w-2xl">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="mb-1">
                  <span className="text-primary text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
