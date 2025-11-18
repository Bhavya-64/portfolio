import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Crash Course on Python",
      organization: "Google",
      description: "Comprehensive introduction to Python programming fundamentals",
    },
    {
      title: "Machine Learning with Python",
      organization: "IBM",
      description: "Advanced machine learning concepts and implementations using Python",
    },
    {
      title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
      organization: "DeepLearning.ai",
      description: "Deep learning frameworks and neural network implementation",
    },
    {
      title: "Introduction to IoT and Embedded Systems",
      organization: "University of California, Irvine",
      description: "Fundamentals of Internet of Things and embedded system design",
    },
    {
      title: "Accenture UK - Developer and Technology",
      organization: "Accenture",
      description: "Professional development program in enterprise technology solutions",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications from leading organizations and universities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent/40">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-accent to-purple-500 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {cert.organization}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
