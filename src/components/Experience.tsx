import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Junior Executive",
    company: "Aggrandize Ventures Pvt. Ltd",
    period: "2022 - 2026",
    type: "Full-time",
    responsibilities: [
      "Built user-friendly web applications using ReactJS",
      "Developed reusable shared components and utility methods",
      "Leveraged Material-UI, React Hook Forms, Redux Toolkit, and TailwindCSS",
      "Implemented Login with AD Integration and Email reading using Azure and Google Cloud services",
      "Developed 5+ team projects using C# and MVC frameworks",
      "Utilized DevExtreme and Bootstrap for functional web applications",
    ],
  },
  {
    title: "Online Trainer (Freelancer)",
    company: "BITA Academy",
    period: "2021 - 2024",
    type: "Freelance",
    responsibilities: [
      "Scheduled online training programs and developed learning materials",
      "Created video lectures, interactive modules, quizzes, and written content",
      "Tailored materials to specific learning platforms and target audiences",
    ],
  },
  {
    title: "Graduate Engineering Trainee",
    company: "Samsung India Pvt Ltd",
    period: "2013 (3 Months)",
    type: "Internship",
    responsibilities: [
      "Maintained quality through Six Sigma implementation",
      "Investigated and resolved GMAP-related issues",
      "Supported Global Manufacturing Execution System (GMES)",
      "Delivered stock status reports and managed delivery orders",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className={`card-glow border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 mt-1">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <span className="px-2 py-1 text-xs rounded-md bg-secondary/20 text-secondary border border-secondary/30">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ml-16">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="card-glow border-border/50 bg-card/50 backdrop-blur-sm max-w-4xl mx-auto animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-4 justify-center">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">B.Tech - Information Technology</p>
              <p className="text-primary">Indira Institute of Engineering and Technology</p>
              <p className="text-muted-foreground">2008 - 2012 • GPA: 8.0 / 10.0</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
