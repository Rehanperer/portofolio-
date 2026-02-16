import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Briefcase,
  Coffee,
  Sparkles,
  GraduationCap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Counter = ({ value, duration = 2, delay = 0 }: { value: number; duration?: number; delay?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        let start = 0;
        const end = value;
        const totalMiliseconds = duration * 1000;
        const incrementTime = totalMiliseconds / end;

        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [value, duration, isInView, delay]);

  return <span ref={countRef}>{count}</span>;
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const achievements = [
    { label: "Years Experience", number: "2", suffix: "+", icon: Award },
    { label: "Projects Completed", number: "15", suffix: "+", icon: Briefcase },
    { label: "Happy Clients", number: "10", suffix: "+", icon: Sparkles },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden px-4" ref={sectionRef}>
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <Badge variant="outline" className="mb-4 glow-border px-4 py-1.5 text-sm">
            My Journey
          </Badge>
          <h2 className="text-responsive-h2 font-bold mb-4 md:mb-6 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-electric mx-auto rounded-full glow-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Stats Section - Bottom on mobile, Left on Desktop */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                className="glass-card p-5 md:p-8 rounded-3xl text-center group hover:glow-primary transition-all duration-300"
              >
                <div className="mb-3 md:mb-4 inline-flex p-3 md:p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-gradient-animated">
                  <Counter value={parseInt(stat.number)} duration={2} delay={0.2} />
                  {stat.suffix}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Text Content - Top on mobile, Right on Desktop */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 md:p-12 rounded-[2.5rem] border border-primary/10 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-primary/20">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                The Mission
              </h3>
              <div className="space-y-4 md:space-y-6 text-responsive-p text-muted-foreground leading-relaxed">
                <p>
                  I'm a developer who just loves building things that work well and
                  look even better. My coding background keeps me focused on the
                  details, but I’ve always got a soft spot for great design.
                </p>
                <p>
                  With <span className="text-foreground font-semibold">2+ years</span> of
                  hands-on experience, I focus on building things people actually
                  enjoy using. My goal is simple: create tech that solves problems
                  and looks great doing it.
                </p>
              </div>

              <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Clean & maintainable code",
                  "Pixel-perfect UI/UX",
                  "High performance standards",
                  "Responsive & accessible design",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white" />
                    </div>
                    <span className="text-sm md:text-base font-medium group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-12"
              >
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  Let's Work Together
                  <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;