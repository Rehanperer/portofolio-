import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Award, Code, Zap, Heart, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useInView, useCountUp } from "@/hooks/useAnimations";

const About = () => {
  const [sectionRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  const achievements = [
    { number: 50, suffix: "+", label: "Projects Completed", icon: Code },
    { number: 3, suffix: "+", label: "Years Experience", icon: Calendar },
    { number: 15, suffix: "+", label: "Technologies", icon: Zap },
    { number: 100, suffix: "%", label: "Passion", icon: Heart },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const StatCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
    const count = useCountUp(achievement.number, 2000, statsInView);
    const Icon = achievement.icon;

    return (
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className="text-center group glass-card hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardContent className="p-4 md:p-6 relative">
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              whileHover={{ rotate: 10 }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-gradient mb-1 md:mb-2 tabular-nums">
              {count}{achievement.suffix}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              {achievement.label}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-electric/5 blur-3xl" />

      <motion.div
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 glow-border-animated px-4 py-2">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating impactful digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Story & Info */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-electric rounded-full" />
                <h3 className="text-xl md:text-2xl font-semibold">My Journey</h3>
              </div>

              <div className="glass-card rounded-2xl p-4 md:p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  I'm a passionate full-stack developer with over{" "}
                  <span className="text-primary font-medium">3 years of experience</span>{" "}
                  crafting digital solutions that make a difference. My journey began with
                  curiosity about how things work on the web, and it's evolved into a career
                  dedicated to building exceptional user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  I specialize in{" "}
                  <span className="text-primary font-medium">modern JavaScript frameworks</span>,
                  cloud technologies, and have a keen eye for design. I believe great software
                  is not just functional—it's beautiful, intuitive, and makes people's lives easier.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <motion.div
                className="flex items-center space-x-2 glass-card rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>Colombo, Sri Lanka</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 glass-card rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="w-4 h-4 text-primary" />
                <span>Coffee Enthusiast</span>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="group glow-primary hover:glow-primary-intense transition-all duration-300 w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
                <motion.span
                  className="ml-2"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats & Quick Facts */}
          <div className="space-y-6 md:space-y-8" ref={statsRef}>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {achievements.map((achievement, index) => (
                <StatCard key={achievement.label} achievement={achievement} index={index} />
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-4 md:p-6 relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-base md:text-lg">What I Bring</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Clean, maintainable code architecture",
                      "Performance-first mindset",
                      "Strong communication & collaboration",
                      "Continuous learning & adaptation",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-3 text-muted-foreground text-sm md:text-base"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-electric flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;