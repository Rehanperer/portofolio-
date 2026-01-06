import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skillsWithLevels = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 82, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "Docker", level: 78, category: "DevOps" },
  ];

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
    <section id="skills" className="py-12 md:py-20 px-4 bg-card/20">
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

        {/* Interactive Skills Chart */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">
            Skill Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsWithLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress
                  value={animate ? skill.level : 0}
                  className="h-2"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
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
                        className="text-xs py-1.5 px-3 hover:bg-primary/20 hover:text-primary transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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