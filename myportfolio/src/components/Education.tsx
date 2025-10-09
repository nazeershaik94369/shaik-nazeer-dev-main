import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "GMR Institute of Technology",
      duration: "2022 – Present",
      cgpa: "7.77",
      icon: <GraduationCap className="h-6 w-6" />,
      status: "Pursuing"
    },
    {
      degree: "Intermediate – MPC",
      institution: "Intermediate Education",
      duration: "2020 – 2022",
      cgpa: "85.7%",
      icon: <BookOpen className="h-6 w-6" />,
      status: "Completed"
    },
    {
      degree: "SSC",
      institution: "Secondary Education",
      duration: "2019 – 2020",
      cgpa: "78%",
      icon: <BookOpen className="h-6 w-6" />,
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Data Analytics Course",
      provider: "IBM on edX",
      description: "Comprehensive course covering data analysis, visualization, and statistical methods",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Full-Stack Web Development Course",
      provider: "Udemy",
      description: "Complete web development course covering frontend and backend technologies",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-muted-foreground text-lg">
              My academic journey and continuous learning
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Timeline */}
            <div className="fade-in-delay-1">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="portfolio-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        {edu.icon}
                        <div>
                          <div className="text-lg">{edu.degree}</div>
                          <div className="text-sm font-normal text-muted-foreground">
                            {edu.institution}
                          </div>
                        </div>
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <Badge variant="outline">{edu.duration}</Badge>
                        <Badge variant="secondary">CGPA: {edu.cgpa}</Badge>
                        <Badge 
                          variant={edu.status === "Pursuing" ? "default" : "outline"}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="fade-in-delay-2">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="portfolio-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        {cert.icon}
                        <div>
                          <div className="text-lg">{cert.title}</div>
                          <div className="text-sm font-normal text-muted-foreground">
                            {cert.provider}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;