import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glow-border">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story & Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience crafting 
                digital solutions that make a difference. My journey began with curiosity about 
                how things work on the web, and it's evolved into a career dedicated to building 
                exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud technologies, and have a 
                keen eye for design. I believe great software is not just functional—it's 
                beautiful, intuitive, and makes people's lives easier.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Available for projects</span>
              </div>
            </div>

            <Button className="group glow-primary hover:glow-primary hover:scale-105 transition-all duration-300">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Stats & Quick Facts */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center group hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">What I Bring</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Clean, maintainable code architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Performance-first mindset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Strong communication & collaboration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Continuous learning & adaptation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;