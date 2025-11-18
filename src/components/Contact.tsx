import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities. Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-[hsl(var(--hero-gradient-to))] rounded-lg shadow-md">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:bhavyasreekuppam@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      bhavyasreekuppam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent to-purple-500 rounded-lg shadow-md">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Nellore, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Connect with me
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm active on professional networks and open to discussing opportunities,
                  collaborations, or just connecting with fellow developers.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="https://www.linkedin.com/in/bhavya-sree-900908293/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start gap-3" size="lg">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn Profile
                    </Button>
                  </a>
                  <a href="https://github.com/Bhavya-64" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start gap-3" size="lg">
                      <Github className="h-5 w-5" />
                      GitHub Profile
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
