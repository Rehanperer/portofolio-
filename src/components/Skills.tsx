import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useAnimations";

const Skills = () => {
  const [sectionRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillsWithLevels = [
    { name: "React", level: 95, category: "Frontend", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 90, category: "Frontend", color: "from-blue-400 to-indigo-500" },
    { name: "Next.js", level: 85, category: "Frontend", color: "from-gray-400 to-gray-600" },
    { name: "Node.js", level: 88, category: "Backend", color: "from-green-400 to-emerald-500" },
    { name: "Python", level: 82, category: "Backend", color: "from-yellow-400 to-orange-500" },
    { name: "PostgreSQL", level: 80, category: "Database", color: "from-indigo-400 to-purple-500" },
    { name: "AWS", level: 75, category: "Cloud", color: "from-orange-400 to-amber-500" },
    { name: "Docker", level: 78, category: "DevOps", color: "from-blue-400 to-cyan-500" },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "TailwindCSS", "Framer Motion"],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "FastAPI", "Django", "PostgreSQL", "MongoDB"],
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Cloud",
      skills: ["Docker", "AWS", "Git", "Figma", "Vercel", "GitHub Actions"],
      icon: "☁️",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "Bash"],
      icon: "💻",
      color: "from-orange-500 to-red-500",
    },
  ];

  const additionalSkills = [
    "Responsive Design",
    "RESTful APIs",
    "GraphQL",
    "WebSocket",
    "Testing (Jest/Cypress)",
    "CI/CD",
    "Microservices",
    "Performance Optimization",
    "SEO",
    "Accessibility",
    "UI/UX Design",
    "Agile/Scrum",
  ];

  // Auto-rotate categories on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % skillCategories.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [skillCategories.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const SkillBar = ({ skill, index }: { skill: (typeof skillsWithLevels)[0]; index: number }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isInView, skill.level, index]);

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm md:text-base">{skill.name}</span>
          <span className="text-xs md:text-sm text-muted-foreground tabular-nums">
            {skill.level}%
          </span>
        </div>
        <div className="h-2 md:h-3 bg-secondary/50 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative progress-glow`}
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-electric/5 blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 rounded-full bg-purple/5 blur-3xl" />

      <motion.div
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 glow-border-animated px-4 py-2">
            Technical Skills
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies to deliver
            cutting-edge solutions.
          </p>
        </motion.div>

        {/* Interactive Skills Chart */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
            <span className="text-gradient">Skill Proficiency</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {skillsWithLevels.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skill Categories - Desktop Grid, Mobile Carousel */}
        <motion.div variants={itemVariants}>
          {/* Mobile: Show single category with navigation dots */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${activeCategory * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {skillCategories.map((category, index) => (
                  <div key={category.title} className="w-full flex-shrink-0 px-2">
                    <Card className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className="text-5xl mb-4"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {category.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-4 text-gradient">
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {category.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs py-1.5 px-3 bg-primary/10"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-4">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === activeCategory
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card
                  className={`group glass-card border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden relative h-full`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <CardContent className="p-6 text-center relative">
                    <motion.div
                      className="text-4xl md:text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + i * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs py-1.5 px-3 bg-primary/10 hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-12 md:mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
            <span className="text-gradient">Additional Expertise</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="outline"
                  className="text-xs md:text-sm glow-border hover:bg-primary/10 transition-all duration-300 cursor-default py-1.5 md:py-2 px-3 md:px-4"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;