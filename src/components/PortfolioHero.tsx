import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const PortfolioHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary font-mono text-lg">Hi, my name is</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Alex Johnson
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
                I build things for the web
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                A passionate software developer and web designer specializing in creating exceptional digital experiences. 
                I focus on building accessible, human-centered products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-glow"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <Button variant="ghost" size="sm" className="ml-2">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glowing rings */}
              <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-pulse" />
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow">
                <img
                  src={profileImage}
                  alt="Alex Johnson - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card px-4 py-2 rounded-full border border-border shadow-card animate-float">
                <span className="text-sm font-medium">💻 Developer</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card px-4 py-2 rounded-full border border-border shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-sm font-medium">🎨 Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
