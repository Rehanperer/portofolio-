import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "TailwindCSS", "Framer Motion"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "FastAPI", "Django", "PostgreSQL", "MongoDB"],
      icon: "⚙️"
    },
    {
      title: "Tools & Cloud",
      skills: ["Docker", "AWS", "Git", "Figma", "Vercel", "GitHub Actions"],
      icon: "☁️"
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "Bash"],
      icon: "💻"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glow-border">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies to deliver 
            cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gradient">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Responsive Design", "RESTful APIs", "GraphQL", "WebSocket", 
              "Testing (Jest/Cypress)", "CI/CD", "Microservices", "Performance Optimization",
              "SEO", "Accessibility", "UI/UX Design", "Agile/Scrum"
            ].map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="text-sm glow-border hover:bg-card-hover transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;