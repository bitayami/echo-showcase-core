import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Logistics Project",
    description: "Comprehensive logistics and management platform built with modern React technologies.",
    url: "https://test.shalx.asia",
    tech: ["React JS", "Tailwind CSS", "React MUI"],
    type: "Team Project",
  },
  {
    title: "CRM Application",
    description: "Customer Relationship Management system for Aggrandize Ventures with advanced features.",
    url: "https://crm.aggrandizeventure.com",
    tech: ["React JS", "Tailwind CSS", "React MUI"],
    type: "Team Project",
  },
  {
    title: "HRMS Platform",
    description: "Human Resource Management System with comprehensive HR functionalities.",
    url: "https://hrms.shal.asia",
    tech: ["C#.NET", "DevExtreme", "Bootstrap", "jQuery"],
    type: "Team Project",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world applications I've built and contributed to
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-glow border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {project.type}
                  </Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/30"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/bitayami', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};
