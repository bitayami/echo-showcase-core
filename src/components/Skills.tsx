import { Code2, Database, Layout, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React JS", "Material-UI", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Redux Toolkit"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["C#", ".NET Core", ".NET Framework", "MVC", "Azure Services", "Google Cloud"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["SQL Server", "DevExtreme", "Bootstrap", "jQuery", "Axios"],
  },
  {
    title: "Other Skills",
    icon: Code2,
    skills: ["Python Basics", "React Hook Forms", "AD Integration", "Email Integration"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-glow border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-muted text-sm font-medium border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
