import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "IT Support Technician",
      company: "Hospital (Confidential)",
      period: "May 2024 – Present",
      description:
        "Provides technical support and troubleshooting across hospital systems. Manages installations, configurations, and ensures network stability and data security.",
      achievements: [
        "Installed and configured computer systems and devices to support hospital operations.",
        "Assisted with patient information systems and records management.",
        "Maintained and monitored the hospital’s LAN and Internet connectivity to ensure 99% uptime.",
        "Collaborated with the IT team to implement system security updates and preventive maintenance procedures.",
      ],
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "Jan 2025 – Present",
      description:
        "Develops responsive and scalable web applications for clients using modern web technologies and frameworks.",
      achievements: [
        "Built a Business Monitoring & Sales System with AI functionality and cryptocurrency payment integration.",
        "Created APIs and optimized UI/UX for various client projects.",
        "Designed and deployed scalable databases using MySQL and Firebase to support real-time data access.",
        "Integrated third-party APIs including payment gateways and analytics tools with role-based authentication for enhanced security.",
      ],
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-Employed",
      period: "Sept 2023 – Present",
      description:
        "Designs creative brand identities, digital content, and marketing visuals for businesses and individuals.",
      achievements: [
        "Designed brand logos, social media graphics, and visual assets using Photoshop and Canva.",
        "Created visual prototypes and layouts for websites and mobile apps.",
        "Ensured brand consistency across digital platforms and client marketing materials.",
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
            My professional journey across IT, software development, and design.
          </motion.p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + index}
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
