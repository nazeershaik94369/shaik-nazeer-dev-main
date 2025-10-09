import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">
              Get to know more about my journey and aspirations
            </p>
          </div>
          
          <Card className="portfolio-card fade-in-delay-1">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">
                    Career Objective
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Passionate software engineer with strong interest in developing innovative web 
                    solutions and ensuring quality through effective testing. Eager to apply skills 
                    in web development and software QA to deliver impactful user experiences and 
                    contribute to product excellence.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="portfolio-card p-6">
                    <h4 className="font-semibold text-primary mb-2">Problem Solving</h4>
                    <p className="text-muted-foreground">
                      Strong analytical skills with experience in competitive programming
                    </p>
                  </div>
                  
                  <div className="portfolio-card p-6">
                    <h4 className="font-semibold text-primary mb-2">Web Development</h4>
                    <p className="text-muted-foreground">
                      Full-stack development with modern frameworks and technologies
                    </p>
                  </div>
                  
                  <div className="portfolio-card p-6">
                    <h4 className="font-semibold text-primary mb-2">Quality Assurance</h4>
                    <p className="text-muted-foreground">
                      Committed to delivering high-quality, tested software solutions
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;