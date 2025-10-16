import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
      color: "tech-cyan",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
      color: "tech-purple",
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Git", "Docker", "AWS"],
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A comprehensive toolkit for building modern web applications
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
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
