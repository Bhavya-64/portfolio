import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "Software Tools",
      skills: ["Adobe Illustrator", "Photoshop", "Git", "MongoDB"],
    },
    {
      category: "Technical Expertise",
      skills: ["Data Structures & Algorithms", "Artificial Intelligence", "Internet of Things (IoT)", "Django", "React", "Flutter"],
    },
    {
      category: "Frameworks & Technologies",
      skills: ["TensorFlow", "GANs", "CLIP", "DeepFace", "RFID", "Edge AI"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/30">
              <h3 className="text-2xl font-semibold mb-4 text-foreground bg-gradient-to-r from-primary to-[hsl(var(--hero-gradient-to))] bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="text-sm py-2 px-4 bg-gradient-to-r from-primary/10 to-[hsl(var(--hero-gradient-to))]/10 hover:from-primary/20 hover:to-[hsl(var(--hero-gradient-to))]/20 border border-primary/20 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
