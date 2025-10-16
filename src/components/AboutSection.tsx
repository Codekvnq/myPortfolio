import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="about" className="py-20 bg-gradient-subtle px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground text-center mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm a software developer and web designer with a passion for creating beautiful, 
            functional, and user-centered digital experiences. With expertise in modern web 
            technologies and a keen eye for design, I bring ideas to life through code.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 h-full">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
