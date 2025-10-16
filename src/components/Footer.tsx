import { Code2, Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DevPortfolio
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Building beautiful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="font-semibold text-foreground mb-2">Quick Links</h3>
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-semibold text-foreground mb-2">Connect</h3>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
