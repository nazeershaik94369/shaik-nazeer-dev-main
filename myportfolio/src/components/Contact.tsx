import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Download, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "nazeershaik94369@gmail.com",
      href: "mailto:nazeershaik94369@gmail.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9014584253",
      href: "tel:+919014584253",
      action: "Call Now"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "shaik-nazeer-810ab5283",
      href: "https://www.linkedin.com/in/shaik-nazeer-810ab5283/",
      action: "View Profile"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "nazeershaik94369",
      href: "https://github.com/nazeershaik94369",
      action: "View Repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Let's connect and discuss opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="fade-in-delay-1">
              <Card className="portfolio-card h-full">
                <CardHeader>
                  <CardTitle className="gradient-text">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3 text-muted-foreground mb-6">
                    <MapPin className="h-5 w-5" />
                    <span>Vijayawada, Andhra Pradesh, India</span>
                  </div>
                  
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="text-primary">{contact.icon}</div>
                        <div>
                          <div className="font-medium">{contact.label}</div>
                          <div className="text-muted-foreground text-sm">{contact.value}</div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? "_blank" : undefined}
                          rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {contact.action}
                        </a>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="fade-in-delay-2">
              <Card className="portfolio-card h-full">
                <CardHeader>
                  <CardTitle className="gradient-text">Let's Work Together</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in hearing about new opportunities, 
                    especially in web development and software engineering roles. 
                    Whether you have a project in mind or just want to chat about 
                    technology, feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <p className="font-medium">What I'm looking for:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Frontend/Full-stack Developer positions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Internship opportunities
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Collaborative projects
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Mentorship opportunities
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button size="lg" className="w-full" asChild>
                      <a href="mailto:nazeershaik94369@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </a>
                    </Button>
                    
                    <a href="/Resume" download>
                      <Button variant="outline" size="lg" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;