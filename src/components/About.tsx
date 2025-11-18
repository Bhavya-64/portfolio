import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            I am a BTech Computer Science Engineering student at Woxsen University with expertise in 
            Artificial Intelligence, Internet of Things (IoT), and Full-Stack Development. As a Research 
            Assistant, I work on AI-based projects and have contributed to multiple research publications. 
            I have completed internships at leading companies including Volante Technologies and CodSoft, 
            gaining hands-on experience in software development, automation, and innovative technology solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gradient-to-br from-primary to-[hsl(var(--hero-gradient-to))] rounded-full mb-4 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground">
                BTech in CSE from Woxsen University with 8.3 CGPA. Strong academic 
                background with 9.63 in Intermediate and perfect 10 CGPA in schooling
              </p>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-secondary/50">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gradient-to-br from-secondary to-orange-500 rounded-full mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <p className="text-muted-foreground">
                Proficient in Python, JavaScript, SQL, and web technologies. 
                Experienced with AI, IoT, Data Structures, and design tools
              </p>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent/50">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gradient-to-br from-accent to-purple-500 rounded-full mb-4 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <p className="text-muted-foreground">
                Research Assistant, internships at Volante Technologies, CodSoft, 
                and CiviGlo-Innovations in development and automation
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
