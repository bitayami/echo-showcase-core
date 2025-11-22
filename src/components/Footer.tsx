import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>by Yamini K</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bitayami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/yamini-k-4567a724"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="mailto:nkyamini@gmail.com"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yamini K. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
