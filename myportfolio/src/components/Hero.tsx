import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import shaikPhoto from "@/assets/shaik-nazeer-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <div className="mb-8">
              <img
                src={shaikPhoto}
                alt="Shaik Nazeer - Software Engineer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-primary/20 shadow-lg animate-float"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Shaik Nazeer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate Software Engineer & Web Developer
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate software engineer with strong interest in developing innovative web solutions 
              and ensuring quality through effective testing. Eager to apply skills in web development 
              and software QA to deliver impactful user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/nazeershaik94369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-nazeer-810ab5283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:nazeershaik94369@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;