import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and AWS. Managing a team of 5 developers and implementing CI/CD pipelines.",
      achievements: [
        "Increased application performance by 60%",
        "Reduced deployment time by 40%",
        "Mentored 3 junior developers",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and e-commerce platforms. Collaborated with design teams to create pixel-perfect implementations.",
      achievements: [
        "Built 15+ client websites",
        "Improved mobile UX scores by 35%",
        "Implemented design system used across all projects",
      ],
    },
    {
      title: "Web Developer",
      company: "Startup Ventures",
      period: "2018 - 2020",
      description:
        "Created landing pages and marketing websites. Worked with various CMS platforms and integrated third-party APIs.",
      achievements: [
        "Delivered 30+ projects on time",
        "Increased conversion rates by 25%",
        "Established automated testing workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My professional journey in web development
          </motion.p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-3 mb-2 md:mb-0">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    Key Achievements:
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
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
