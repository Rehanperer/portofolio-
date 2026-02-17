import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const isMobile = useIsMobile();

  const roles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Creative Coder"
  ];

  const techStack = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", color: "from-green-400 to-emerald-500" },
    { name: "Python", color: "from-yellow-400 to-orange-500" },
    { name: "PostgreSQL", color: "from-indigo-400 to-purple-500" },
    { name: "AWS", color: "from-orange-400 to-amber-500" },
  ];

  // Typewriter effect
  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Desktop-only magnetic button
  const DesktopMagneticButton = ({ children, onClick, variant = "default", className = "" }: any) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * 0.15);
      y.set((e.clientY - (rect.top + rect.height / 2)) * 0.15);
    };
    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
      <motion.div
        style={{ x: xSpring, y: ySpring }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
      >
        <Button ref={ref} size="lg" onClick={onClick} variant={variant}
          className={`btn-magnetic btn-glow ${className}`}>
          {children}
        </Button>
      </motion.div>
    );
  };

  const name = "Rehan Perera";

  // ── MOBILE VERSION ── Ultra-lightweight, no Framer Motion at all ──
  if (isMobile) {
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-5 pt-20 pb-10 overflow-hidden">
        <div className="relative z-20 text-center max-w-5xl mx-auto w-full">
          {/* Badge */}
          <div>
            <Badge variant="outline" className="mb-5 glow-border-animated px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Available for Projects
            </Badge>
          </div>

          {/* Heading */}
          <div className="mb-3">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1]">
              <span className="block text-foreground mb-1">Hi, I'm</span>
              <span className="block text-gradient-animated text-glow">{name}</span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="h-12 flex items-center justify-center mb-5">
            <span className="text-xl sm:text-2xl text-muted-foreground whitespace-nowrap">
              I'm a{" "}
              <span className="text-gradient font-semibold inline-block min-w-[180px] sm:min-w-[220px] text-left">
                {displayText}
                <span className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle animate-blink" />
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-1 leading-relaxed">
            I build clean, fast web stuff. Usually found tinkering with
            new tech or making things look pixel-perfect.
          </p>

          {/* CTA Buttons — plain, instant, no motion wrapper */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 w-full px-4 sm:px-0">
            <Button size="lg" onClick={scrollToProjects}
              className="w-full sm:w-auto h-14 group glow-primary transition-all duration-150 text-base px-8 active:scale-[0.97]">
              View My Work
              <span className="ml-2 inline-block">→</span>
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}
              className="w-full sm:w-auto h-14 glow-border transition-all duration-150 text-base px-8 active:scale-[0.97]">
              Get In Touch
            </Button>
          </div>

          {/* Tech badges — static, no spring animation */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto px-2">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className={`text-xs py-1.5 px-3 cursor-default
                  bg-gradient-to-r ${tech.color} bg-clip-text text-transparent
                  border border-primary/20 transition-colors duration-200
                  bg-card/50`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── DESKTOP VERSION ── Full Framer Motion experience ──
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  } as any;

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  } as any;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-5 pt-20 pb-10 md:py-20 overflow-hidden">
      {/* Decorative elements - desktop only */}
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-electric/30 blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple/30 to-primary/30 blur-xl animate-float-delayed" />
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-electric/30 to-purple/30 blur-xl animate-float-slow" />

      <motion.div
        className="relative z-20 text-center max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <Badge variant="outline" className="mb-5 md:mb-8 glow-border-animated px-4 py-2 text-base">
            <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
            Available for Projects
          </Badge>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-3 md:mb-8">
          <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1]">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <motion.span className="block text-gradient-animated text-glow" variants={nameVariants}>
              {name}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="h-16 flex items-center justify-center mb-8">
          <span className="text-3xl text-muted-foreground whitespace-nowrap">
            I'm a{" "}
            <span className="text-gradient font-semibold inline-block min-w-[280px] text-left">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[3px] h-8 bg-primary ml-1 align-middle"
              />
            </span>
          </span>
        </motion.div>

        <motion.p variants={itemVariants}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto px-4 leading-relaxed">
          I build clean, fast web stuff. Usually found tinkering with
          new tech or making things look pixel-perfect.
        </motion.p>

        <motion.div variants={itemVariants}
          className="flex flex-row gap-4 justify-center items-center mb-16">
          <DesktopMagneticButton onClick={scrollToProjects}
            className="group glow-primary hover:glow-primary-intense transition-all duration-300 text-lg px-8">
            View My Work
            <motion.span className="ml-2 inline-block" animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </DesktopMagneticButton>
          <DesktopMagneticButton variant="outline" onClick={scrollToContact}
            className="glow-border hover:bg-card-hover transition-all duration-300 text-lg px-8">
            Get In Touch
          </DesktopMagneticButton>
        </motion.div>

        <motion.div variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto px-4">
          {techStack.map((tech, index) => (
            <motion.div key={tech.name}
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="secondary"
                className={`text-sm py-2 px-4 cursor-default
                  bg-gradient-to-r ${tech.color} bg-clip-text text-transparent
                  border border-primary/20 hover:border-primary/50
                  hover:shadow-lg hover:shadow-primary/20 transition-all duration-300
                  backdrop-blur-sm bg-card/50`}>
                {tech.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - desktop only */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;