import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/hero-character.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold glow-text">
                Yamini K
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Highly motivated IT Developer with 3+ years of experience in Front End and .NET Development. 
              Passionate about building user-friendly web applications and collaborating with teams to deliver exceptional solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 glow-border"
                onClick={() => window.open('https://github.com/bitayami', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://www.linkedin.com/in/yamini-k-4567a724', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:nkyamini@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                nkyamini@gmail.com
              </a>
              <a href="tel:9840147578" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                9840147578
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-up">
            <div className="relative float-animation">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow-pulse" />
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-glow-secondary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-glow/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-2xl">
                <img 
                  src={heroCharacter} 
                  alt="Yamini K - Web Developer" 
                  className="w-full max-w-md rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
