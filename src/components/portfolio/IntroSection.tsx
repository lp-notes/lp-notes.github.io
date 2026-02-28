import { Github, Linkedin, BookOpen } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const IntroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)] animate-fade-in">
      {/* Left Panel - Pink */}
      <div className="lg:w-2/5 bg-pink-panel flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="text-center">
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mx-auto mb-6 border-4 border-black-panel shadow-2xl">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-black-panel mb-6">
            Software Developer
          </h2>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/lakshmi-prasanna-k-31a538191/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/lp-notes"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://hashnode.com/@lpblogs"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Blog"
            >
              <BookOpen size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel - Black */}
      <div className="lg:w-3/5 bg-black-panel flex items-center p-8 lg:p-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Hello, I am <span className="text-primary">LAKSHMI PRASANNA</span>
          </h1>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm lg:text-base">
            <p>
              A passionate software developer with over 6 years of experience building 
              scalable web applications and solving complex problems. I specialize in 
              full-stack development with a focus on creating clean, efficient, and 
              maintainable code.
            </p>
            <p>
              My journey in tech started when I wrote my first "Hello World" program 
              and realized the power of code to transform ideas into reality. Since then, 
              I have improved my skills in various programming languages and frameworks,
              and have successfully delivered multiple projects that meet client requirements 
              and exceed expectations.
      
            </p>
            <p>
              I am proficient in modern web technologies including React, TypeScript, 
              Node.js, and Python. I have a strong foundation in system design, 
              database architecture, and cloud services. I believe in writing code 
              that not only works but is also readable and testable.
            </p>
            <p>
              When I am not coding, you will find me exploring new technologies,
              or writing technical blog posts to share knowledge with the developer community, 
              or enjoying my personal time by watching movies or reading books 
              or by spending time with family.I am always eager to learn and take on new challenges.
            </p>
            <p>
              I am currently open to exciting pportunities where I can contribute 
              my skills and grow as a developer, especially with latest Tech stacks. 
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

