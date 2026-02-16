import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  // Magnetic button effect
  const MagneticButton = ({ children, onClick, variant = "default", className = "" }: any) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Only apply effect on desktop
      if (window.innerWidth >= 768) {
        x.set((e.clientX - centerX) * 0.15);
        y.set((e.clientY - centerY) * 0.15);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        style={{ x: xSpring, y: ySpring }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          ref={ref}
          size="lg"
          onClick={onClick}
          variant={variant}
          className={`btn-magnetic btn-glow ${className}`}
        >
          {children}
        </Button>
      </motion.div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as any;

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as any;

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as any;

  const name = "Rehan Perera";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden"
    >
      {/* Decorative elements - visible on larger screens */}
      <div className="hidden md:block absolute top-32 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-electric/30 blur-xl animate-float" />
      <div className="hidden md:block absolute bottom-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple/30 to-primary/30 blur-xl animate-float-delayed" />
      <div className="hidden md:block absolute top-1/3 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-electric/30 to-purple/30 blur-xl animate-float-slow" />

      {/* Mobile-optimized decorative elements */}
      <div className="md:hidden absolute top-20 right-4 w-10 h-10 rounded-full bg-primary/20 blur-lg animate-float opacity-60" />
      <div className="md:hidden absolute bottom-24 left-4 w-8 h-8 rounded-full bg-electric/20 blur-lg animate-float-delayed opacity-60" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Available badge with glow */}
        <motion.div variants={itemVariants}>
          <Badge
            variant="outline"
            className="mb-6 md:mb-8 glow-border-animated px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-base"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary animate-pulse" />
            Available for Projects
          </Badge>
        </motion.div>

        {/* Main heading with 3D effect */}
        <motion.div variants={itemVariants} className="mb-4 md:mb-8">
          <h1 className="text-responsive-h1 font-bold leading-[1.1]">
            <span className="block text-foreground mb-1 md:mb-2">Hi, I'm</span>
            <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
              <motion.span
                className="block text-gradient-animated text-glow"
                variants={nameVariants}
              >
                {name}
              </motion.span>
            </div>
          </h1>
        </motion.div>

        {/* Typewriter effect */}
        <motion.div
          variants={itemVariants}
          className="h-10 md:h-16 flex items-center justify-center mb-6 md:mb-8"
        >
          <span className="text-lg md:text-3xl text-muted-foreground whitespace-nowrap">
            I'm a{" "}
            <span className="text-gradient font-semibold inline-block min-w-[160px] sm:min-w-[200px] md:min-w-[280px] text-left">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[2px] md:w-[3px] h-5 md:h-8 bg-primary ml-1 align-middle"
              />
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-responsive-p text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-2 md:px-4"
        >
          I build clean, fast web stuff. Usually found tinkering with
          new tech or making things look pixel-perfect.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-10 md:mb-16"
        >
          <MagneticButton
            onClick={scrollToProjects}
            className="w-full sm:w-auto h-12 md:h-auto group glow-primary hover:glow-primary-intense transition-all duration-300 text-sm md:text-lg px-6 md:px-8"
          >
            View My Work
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </MagneticButton>

          <MagneticButton
            variant="outline"
            onClick={scrollToContact}
            className="w-full sm:w-auto h-12 md:h-auto glow-border hover:bg-card-hover transition-all duration-300 text-sm md:text-lg px-6 md:px-8"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-1.5 md:gap-3 max-w-2xl mx-auto px-2 md:px-4"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 1 + index * 0.05,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="secondary"
                className={`text-[10px] md:text-sm py-1 md:py-2 px-2 md:px-4 cursor-default
                  bg-gradient-to-r ${tech.color} bg-clip-text text-transparent
                  border border-primary/20 hover:border-primary/50 
                  hover:shadow-lg hover:shadow-primary/20 transition-all duration-300
                  backdrop-blur-sm bg-card/50`}
              >
                {tech.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;