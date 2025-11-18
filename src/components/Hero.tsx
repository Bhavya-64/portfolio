import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] via-[hsl(var(--hero-gradient-to))] to-[hsl(var(--hero-gradient-accent))] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--hero-gradient-accent))]/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-white animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Bhavya Sree K
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Computer Science Engineering Student
            </p>
            <p className="text-lg mb-8 text-blue-50 max-w-2xl leading-relaxed">
              BTech student at Woxsen University specializing in AI, IoT, and Full-Stack Development. 
              Research Assistant with hands-on experience in developing innovative solutions for real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
  href="/K.Bhavyasree_resume.pdf"
  download="K_Bhavyasree_Resume.pdf"
  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all rounded-lg text-lg font-medium"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
  </svg>
  Download Resume
</a>
              <Button variant="outline" size="lg" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                View Projects
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Bhavya-64" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/bhavya-sree-900908293/" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:bhavyasreekuppam@gmail.com"
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
              <img
                src={profileImage}
                alt="Bhavya Sree K"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-8 border-white/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
