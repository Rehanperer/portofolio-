import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Layout,
  Terminal,
  Cloud,
  Zap,
  Cpu,
  Palette,
  Database
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: any;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Crafting beautiful, responsive, and performance-driven user interfaces.",
    icon: Layout,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 95 }
    ]
  },
  {
    title: "Languages & Core",
    description: "Strong foundation in fundamental programming languages and architectures.",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "C", level: 80 },
      { name: "Python", level: 82 },
      { name: "TypeScript", level: 90 }
    ]
  },
  {
    title: "Backend & Cloud",
    description: "Building scalable server-side systems and leveraging cloud infrastructure.",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Cloudflare", level: 90 },
      { name: "Render", level: 85 },
      { name: "AWS", level: 75 }
    ]
  },
  {
    title: "Design & Tools",
    description: "Designing intuitive user experiences and utilizing modern toolchains.",
    icon: Palette,
    skills: [
      { name: "UI/UX", level: 88 },
      { name: "SEO", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % skillCategories.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeSkills = skillCategories[activeCategory];

  // ── Skill content (shared between mobile and desktop) ──
  const SkillContent = () => (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <div className="inline-flex p-3 md:p-4 rounded-2xl bg-primary/10 text-primary">
            {React.createElement(activeSkills.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
          </div>
          <h3 className="text-2xl md:text-5xl font-bold text-foreground">
            {activeSkills.title}
          </h3>
          <p className="text-sm md:text-xl text-muted-foreground leading-relaxed">
            {activeSkills.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {activeSkills.skills.map((skill) => (
            <Badge key={skill.name} variant="secondary"
              className="px-3 md:px-5 py-1.5 md:py-2.5 rounded-xl md:rounded-2xl text-xs md:text-base bg-primary/5 text-primary border border-primary/10 transition-all duration-200">
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4 md:space-y-8">
        {activeSkills.skills.map((skill) => (
          <div key={skill.name} className="space-y-2 md:space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm md:text-lg font-bold text-foreground">{skill.name}</span>
              <span className="text-[10px] md:text-sm font-medium text-primary/80">{skill.level}%</span>
            </div>
            <div className="h-2 md:h-3.5 bg-primary/5 rounded-full overflow-hidden border border-primary/5">
              <div
                className="h-full bg-gradient-to-r from-primary to-electric rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden px-4">
      {/* Decorative Orbs - desktop only */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-electric/10 rounded-full blur-3xl animate-float-delayed" />
        </>
      )}

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <Badge variant="outline" className="mb-4 glow-border px-4 py-1.5 text-sm">
            My Expertise
          </Badge>
          {isMobile ? (
            <h2 className="text-responsive-h2 font-bold mb-4 text-foreground">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
          ) : (
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-responsive-h2 font-bold mb-4 md:mb-6 text-foreground"
            >
              Technical <span className="text-gradient">Arsenal</span>
            </motion.h2>
          )}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-electric mx-auto rounded-full glow-primary mb-10 md:mb-16" />

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-4xl mx-auto mb-8">
            {skillCategories.map((category, idx) => (
              <Button
                key={category.title}
                variant={activeCategory === idx ? "default" : "outline"}
                onClick={() => {
                  setActiveCategory(idx);
                  setIsAutoPlaying(false);
                }}
                className={`h-10 md:h-14 px-4 md:px-8 rounded-xl md:rounded-2xl text-xs md:text-lg font-bold transition-all duration-200 active:scale-[0.97] ${activeCategory === idx
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-card/40 border-primary/20 hover:border-primary/40"
                  }`}
              >
                <category.icon className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                {category.title}
              </Button>
            ))}
          </div>

          {/* Auto-play Progress Bar */}
          {!isMobile ? (
            <div className="max-w-md mx-auto h-1 bg-primary/10 rounded-full overflow-hidden mb-12 md:mb-16">
              <AnimatePresence mode="wait">
                {isAutoPlaying && (
                  <motion.div
                    key={activeCategory}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-primary glow-primary"
                  />
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="max-w-md mx-auto h-1 bg-primary/10 rounded-full overflow-hidden mb-12">
              {isAutoPlaying && (
                <div className="h-full bg-primary rounded-full animate-progress-bar" />
              )}
            </div>
          )}
        </div>

        {/* Skills Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-12">
            {isMobile ? (
              // Mobile: instant switch, no animation
              <div className="glass p-6 rounded-[2rem] border border-primary/10 shadow-2xl relative overflow-hidden">
                <SkillContent />
              </div>
            ) : (
              // Desktop: animated tab switch
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="glass p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-primary/10 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700" />
                  <SkillContent />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;