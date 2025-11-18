import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BTech in Computer Science Engineering",
      institution: "Woxsen University, Hyderabad",
      duration: "2023 - 2027",
      cgpa: "8.3/10",
      highlights: [
        "Specialization in Artificial Intelligence and Internet of Things (IoT)",
        "Research Assistant working on AI-based projects",
        "Published multiple research papers in AI field",
      ],
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Nellore, AP",
      duration: "2021 - 2023",
      cgpa: "9.63/10",
      highlights: [
        "Focused on Mathematics, Physics, and Chemistry",
        "Strong foundation in analytical and problem-solving skills",
      ],
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Sri Chaitanya Techno School, Nellore, AP",
      duration: "2020 - 2021",
      cgpa: "10/10",
      highlights: [
        "Perfect CGPA demonstrating academic excellence",
        "Strong foundation in Science and Mathematics",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-l-primary hover:border-l-secondary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-[hsl(var(--hero-gradient-to))] rounded-lg shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="font-semibold text-foreground">
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
