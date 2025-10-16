import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const PortfolioNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors text-sm xl:text-base ${
                activeSection === "home" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors text-sm xl:text-base ${
                activeSection === "about" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`transition-colors text-sm xl:text-base ${
                activeSection === "skills" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-colors text-sm xl:text-base ${
                activeSection === "projects" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`transition-colors text-sm xl:text-base ${
                activeSection === "experience" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors text-sm xl:text-base ${
                activeSection === "contact" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="xl:h-10 xl:px-6">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className={`block w-full text-left transition-colors py-2 ${
                activeSection === "home" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`block w-full text-left transition-colors py-2 ${
                activeSection === "about" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`block w-full text-left transition-colors py-2 ${
                activeSection === "skills" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`block w-full text-left transition-colors py-2 ${
                activeSection === "projects" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`block w-full text-left transition-colors py-2 ${
                activeSection === "experience" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`block w-full text-left transition-colors py-2 ${
                activeSection === "contact" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </button>
            <Button className="w-full" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
