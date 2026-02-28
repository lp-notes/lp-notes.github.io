import { Heart, Edit, Monitor, Coffee, BookOpen } from "lucide-react";

const interests = [
  {
    icon: BookOpen,
    title: "Reading & Learning",
    description:
      "Whether it’s exploring the latest tech or diving into a fictional world, I love spending time with a good book.",
  },
  {
    icon: Edit,
    title: "Blogging",
    description:
      "I enjoy writing tech blogs to share ideas and playing relaxing games to unwind.",
  },
  {
    icon: Monitor,
    title: "Movies & Web Surfing",
    description:
      "Movies, dramas, and a little web surfing are my go-to ways to relax and pick up random interesting stuff.",
  },
  {
    icon: Coffee,
    title: "Coffee & Nature",
    description:
      "Just me, a cup of coffee, a sunset, and a little patch of nature to breathe in.",
  },

];

const InterestsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)] animate-fade-in">
      {/* Left Panel - Pink */}
      <div className="lg:w-2/5 bg-pink-panel flex items-center justify-center p-8 lg:p-12">
        <div className="text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-black-panel" />
          <h2 className="text-4xl lg:text-5xl font-bold text-black-panel mb-4">
            Interests
          </h2>
          <p className="text-black-panel/80 text-lg">Beyond the code</p>
        </div>
      </div>

      {/* Right Panel - Black */}
      <div className="lg:w-3/5 bg-black-panel flex items-center p-8 lg:p-16">
        <div className="w-full max-w-2xl">
          <div className="space-y-8">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <div key={index} className="interest-item">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {interest.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;

