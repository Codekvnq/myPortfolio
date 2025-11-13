import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "./../assets/project1.png";
import project2 from "./../assets/project2.png";
import project3 from "./../assets/project3.png";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Business Monitoring and Sales Management System",
      description:
        "A complete business intelligence tool that tracks sales, expenses, and performance in real time — featuring dashboards, reports, and team collaboration tools.",
      image: project1,
      tags: ["React", "TypeScript", "Chart.js", "Node.js"],
      demo: "https://branchsync1.netlify.app/",
      github: "https://github.com/Codekvnq/ChikaFranciscaChidimma",
    },
    {
      title: "Plant Organic Fertilizer Website",
      description:
        "A clean, eco-friendly web platform showcasing organic fertilizers and sustainable farming solutions — with detailed product listings, educational resources, and an easy contact system.",
      image: project2,
      tags: ["Next.js", "Tailwind", "Contentful", "SEO"],
      demo: "https://toponeplus.netlify.app", 
      github: "https://github.com/Codekvnq/top-one-plus", 
    },
    {
      title: "E.K Royals School Complex Website",
      description:
        "An engaging and informative school website designed for students from Creche to JHS — featuring admission details, academic programs, news updates, and a user-friendly interface for parents and teachers.",
      image: project3,
      tags: ["React", "Framer Motion", "Firebase", "Tailwind"],
      demo: "https://ekroyalsschoolcomplex.netlify.app", 
      github: "https://github.com/Codekvnq/ekroyals-school-website", 
    },
  ];


  return (
    <section id="projects" className="py-20 bg-gradient-subtle px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Some of my recent work that I'm proud of
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden bg-card border-border hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
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
