import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Moon, Sun, Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as any;

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as any;

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "glass border-b border-primary/10 shadow-lg shadow-primary/5"
        : "bg-transparent"
        }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="outline"
              className="glow-border-animated font-bold text-lg md:text-xl px-3 md:px-5 py-2 md:py-2.5 cursor-pointer hover:bg-primary/10 transition-colors"
              onClick={() => scrollToSection("#hero")}
            >
              <span className="text-gradient">RP</span>
            </Badge>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-5 py-2.5 text-sm lg:text-base font-medium transition-colors duration-300 link-underline ${isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-electric mx-4"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/Rehanperer", "_blank")}
                className="w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all rounded-xl"
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://www.linkedin.com/in/rehan-perera-09a9752b6", "_blank")}
                className="w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all rounded-xl"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all rounded-xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Larger tap targets */}
          <div className="md:hidden flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/Rehanperer", "_blank")}
              className="w-11 h-11 hover:bg-primary/10 rounded-xl"
            >
              <Github className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://www.linkedin.com/in/rehan-perera-09a9752b6", "_blank")}
              className="w-11 h-11 hover:bg-primary/10 rounded-xl"
            >
              <Linkedin className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-11 h-11 hover:bg-primary/10 rounded-xl"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 hover:bg-primary/10 rounded-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop - tap anywhere to close */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="absolute top-0 left-0 right-0 glass border-b border-primary/10 shadow-2xl pt-6 pb-12 px-6 rounded-b-[2rem]"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Close button at top of menu */}
              <div className="flex items-center justify-between mb-6">
                <Badge
                  variant="outline"
                  className="glow-border-animated font-bold text-lg px-3 py-2 cursor-pointer"
                  onClick={() => {
                    scrollToSection("#hero");
                    setIsOpen(false);
                  }}
                >
                  <span className="text-gradient">RP</span>
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-xl bg-card/50 active:bg-primary/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-col space-y-2">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-xl font-semibold py-4 px-6 rounded-2xl text-left transition-all flex items-center justify-between active:scale-[0.98] ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground active:text-foreground active:bg-card/50"
                        }`}
                      custom={i}
                      variants={menuItemVariants}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="mobileActive"
                          className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Social links in mobile menu */}
                <motion.div
                  className="flex items-center gap-3 pt-6 mt-4 border-t border-border/50"
                  custom={navItems.length}
                  variants={menuItemVariants}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      window.open("https://github.com/Rehanperer", "_blank");
                      setIsOpen(false);
                    }}
                    className="flex-1 h-14 rounded-2xl glow-border border-primary/20 bg-card/50 active:bg-primary/20"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      window.open("https://www.linkedin.com/in/rehan-perera-09a9752b6", "_blank");
                      setIsOpen(false);
                    }}
                    className="flex-1 h-14 rounded-2xl glow-border border-primary/20 bg-card/50 active:bg-primary/20"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;