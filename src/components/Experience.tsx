import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Research Assistant",
      company: "Woxsen University",
      duration: "Current",
      description: "Working on AI-based projects and contributing to the development and publication of multiple research papers in the field of artificial intelligence.",
      achievements: [
        "Published multiple research papers in AI field",
        "Leading AI-based research projects",
        "Collaborating with faculty on cutting-edge AI research",
      ],
    },
    {
      role: "Developer and Test Automation Intern",
      company: "Volante Technologies",
      duration: "Paid Internship",
      description: "Contributed to automation processes and gained hands-on experience in enterprise financial technology solutions.",
      achievements: [
        "Worked on automation processes",
        "Gained experience in financial technology solutions",
        "Contributed to enterprise-level projects",
      ],
    },
    {
      role: "Technical Executive",
      company: "CiviGlo-Innovations",
      duration: "Contract",
      description: "Designed and developed innovative machines specifically for smart city applications.",
      achievements: [
        "Designed innovative machines for smart cities",
        "Developed IoT-based solutions",
        "Contributed to urban technology advancement",
      ],
    },
    {
      role: "Software Development Intern",
      company: "CodSoft",
      duration: "Remote",
      description: "Gained hands-on experience in front-end and back-end development, working on projects and enhancing technical skills.",
      achievements: [
        "Developed full-stack applications",
        "Enhanced front-end and back-end skills",
        "Worked remotely on diverse projects",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-l-secondary hover:border-l-accent">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-secondary to-orange-500 rounded-lg shadow-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-secondary font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>{achievement}</span>
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

export default Experience;
