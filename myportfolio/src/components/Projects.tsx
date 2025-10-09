import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AgriConnect – E-commerce Platform",
      description: "An intuitive and responsive e-commerce platform for agricultural products, designed to connect farmers with buyers through a modern web interface.",
      role: "Frontend Developer",
      features: [
        "Product listing and catalog",
        "Shopping cart management",
        "User authentication system",
        "Order tracking functionality",
        "Responsive design for all devices"
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      icon: <ShoppingCart className="h-6 w-6" />,
      github: "#",
      live: "#"
    }
  ];

  const internship = {
    title: "Full Stack Java Intern",
    company: "L & T Software Solutions, Vijayawada",
    description: "Gained hands-on experience in full-stack Java development, working on enterprise-level applications and learning industry best practices.",
    skills: ["Java", "Spring Framework", "Database Design", "Software Testing"],
    duration: "Internship Experience"
  };

  return (
    <section id="projects" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Experience</h2>
            <p className="text-muted-foreground text-lg">
              Showcasing my development work and professional experience
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Featured Project */}
            <Card className="portfolio-card fade-in-delay-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {projects[0].icon}
                  {projects[0].title}
                </CardTitle>
                <Badge variant="outline" className="w-fit">
                  {projects[0].role}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {projects[0].description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {projects[0].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech) => (
                      <Badge key={tech} className="skill-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" disabled>
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Internship Experience */}
            <Card className="portfolio-card fade-in-delay-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>
                  {internship.title}
                </CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <Badge variant="outline">{internship.company}</Badge>
                  <Badge variant="secondary">{internship.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {internship.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <Badge key={skill} className="skill-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;