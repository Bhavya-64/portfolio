import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wearable Sensor Belt with IoT System",
      description: "Implemented a forensic sketch generator for fall prevention in elderly people using GANs, CLIP, and DeepFace. The system allows users to generate sketches from text descriptions and monitors elderly movements.",
      technologies: ["IoT", "GANs", "CLIP", "DeepFace", "Python"],
    },
    {
      title: "Portable Insight Collection Device",
      description: "Real-Time Adaptive Feedback Mechanism that dynamically adjusts survey questions based on user responses and emotional cues. Features Edge AI Processing for instant insights with on-device analysis, ensuring enhanced data privacy without requiring continuous internet connectivity.",
      technologies: ["Edge AI", "IoT", "Real-time Processing", "ML"],
    },
    {
      title: "MediCare Health Plus",
      description: "Developed a smart hospital management system using Django, React, Flutter, and MongoDB with real-time appointment and stock tracking. Followed Agile (Scrum) methodology to ensure iterative development, collaboration, and efficient project delivery.",
      technologies: ["Django", "React", "Flutter", "MongoDB"],
    },
    {
      title: "E-Speed Breaker (Ongoing Research)",
      description: "Smart system using RFID and RF readers for intelligent speed control and toll collection. Features flat electric speed breaker that monitors vehicle speed, detects overspeeding, issues penalties, enables automatic braking, and facilitates seamless toll collection.",
      technologies: ["RFID", "RF Readers", "IoT", "Smart Systems"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projects & Research
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative projects combining AI, IoT, and full-stack development to solve real-world problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary/40 group">
              <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary border border-secondary/30 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
