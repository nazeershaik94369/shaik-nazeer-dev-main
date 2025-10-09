import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-4 gradient-text">
              Shaik Nazeer
            </div>
            <p className="text-background/80 mb-6">
              Passionate Software Engineer & Web Developer
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/nazeershaik94369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors p-2"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-nazeer-810ab5283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors p-2"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:nazeershaik94369@gmail.com"
                className="text-background/80 hover:text-background transition-colors p-2"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-background/20">
            <p className="text-background/60 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-400" /> by Shaik Nazeer
            </p>
            <p className="text-background/40 text-sm mt-2">
              © 2024 Shaik Nazeer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;