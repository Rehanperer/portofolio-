import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import LoadingSpinner from "@/components/LoadingSpinner";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="min-h-screen relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Global animated background */}
          <AnimatedBackground />

          {/* Scroll progress indicator */}
          <ScrollProgress />

          {/* Navigation */}
          <Navigation />

          {/* Main content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-border/50 relative z-10">
              <div className="max-w-6xl mx-auto text-center">
                <motion.p
                  className="text-muted-foreground text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  © {new Date().getFullYear()}{" "}
                  <span className="text-gradient font-medium">Rehan Perera</span>
                </motion.p>
              </div>
            </footer>
          </main>
        </motion.div>
      )}
    </>
  );
};

export default Index;
