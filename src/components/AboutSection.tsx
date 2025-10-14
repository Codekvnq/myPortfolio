import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap, Users } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and seamless user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams to deliver outstanding results.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            I'm a software developer and web designer with a passion for creating beautiful, 
            functional, and user-centered digital experiences. With expertise in modern web 
            technologies and a keen eye for design, I bring ideas to life through code.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
