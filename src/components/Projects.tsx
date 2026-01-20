import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Star, GitFork, Eye, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "@/hooks/useAnimations";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [sectionRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing via Stripe, order management, and a complete admin dashboard for inventory management.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      category: "fullstack",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 45, forks: 12, watchers: 8 },
      images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"],
      challenges: "Implementing real-time inventory updates and handling concurrent user sessions.",
      results: "Achieved 99.9% uptime and processed over $100k in transactions.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application with drag-and-drop functionality and team workspaces.",
      longDescription: "A collaborative task management platform featuring real-time updates, drag-and-drop kanban boards, team workspaces, file attachments, and advanced filtering options.",
      tech: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
      category: "frontend",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 32, forks: 8, watchers: 15 },
      images: ["https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"],
      challenges: "Implementing real-time collaboration without conflicts and optimizing for mobile devices.",
      results: "Improved team productivity by 40% for beta users.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface for AI conversations with real-time streaming, markdown support, and conversation history.",
      longDescription: "An advanced chat interface for AI interactions featuring real-time message streaming, markdown rendering, conversation history, export functionality, and custom AI model integration.",
      tech: ["React", "Python", "FastAPI", "OpenAI", "WebSocket"],
      category: "fullstack",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 28, forks: 6, watchers: 12 },
      images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"],
      challenges: "Handling real-time streaming and maintaining conversation context across sessions.",
      results: "Reduced response time by 60% compared to traditional request-response patterns.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, charts, and weather alerts using modern APIs.",
      longDescription: "A comprehensive weather application with interactive charts, location-based forecasting, severe weather alerts, and historical weather data visualization.",
      tech: ["Vue.js", "Chart.js", "Weather API", "Geolocation"],
      category: "frontend",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 18, forks: 4, watchers: 7 },
      images: ["https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop"],
      challenges: "Handling multiple API integrations and creating responsive data visualizations.",
      results: "Achieved 95% accuracy in weather predictions for local areas.",
      gradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with React and modern animations. Features project showcase and contact forms.",
      longDescription: "A modern portfolio website showcasing projects with smooth animations, responsive design, contact forms, and dynamic content management.",
      tech: ["React", "Framer Motion", "TailwindCSS", "Vite"],
      category: "frontend",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 22, forks: 5, watchers: 9 },
      images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"],
      challenges: "Creating smooth animations while maintaining performance across all devices.",
      results: "Achieved perfect Google Lighthouse scores for performance and accessibility.",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
      longDescription: "A comprehensive analytics platform for social media metrics featuring automated data collection, advanced visualizations, custom reporting, and real-time monitoring.",
      tech: ["Python", "Django", "D3.js", "Redis", "Celery"],
      category: "backend",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 35, forks: 9, watchers: 14 },
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"],
      challenges: "Processing large datasets efficiently and creating real-time data pipelines.",
      results: "Processed over 10M data points daily with 99.5% accuracy.",
      gradient: "from-rose-500/20 to-red-500/20",
    },
  ];

  const handleProjectClick = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

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

  const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    return (
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        className="h-full"
      >
        <Card
          className={`group h-full glass-card border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden relative`}
          style={
            {
              "--mouse-x": `${mousePosition.x}%`,
              "--mouse-y": `${mousePosition.y}%`,
            } as React.CSSProperties
          }
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.1), transparent 40%)`,
            }}
          />

          {/* Gradient background on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  {project.featured && (
                    <Badge variant="outline" className="glow-border text-xs">
                      Featured
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </CardDescription>
              </div>
              <motion.div
                className="p-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1, rotate: 45 }}
              >
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </motion.div>
            </div>

            {/* GitHub Stats */}
            <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-3 pt-3 border-t border-border/50">
              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1 }}
              >
                <Star className="w-3 h-3 text-yellow-500" />
                <span>{project.stats.stars}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1 }}
              >
                <GitFork className="w-3 h-3 text-blue-400" />
                <span>{project.stats.forks}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1 }}
              >
                <Eye className="w-3 h-3 text-green-400" />
                <span>{project.stats.watchers}</span>
              </motion.div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 relative">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs py-1 px-2.5 bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                onClick={() => handleProjectClick(project.demoUrl)}
                className="flex-1 group/btn glow-primary hover:glow-primary-intense transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleProjectClick(project.githubUrl)}
                className="flex-1 glow-border hover:bg-card-hover transition-all duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto glass-card">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-gradient">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {project.images && (
                      <div className="relative rounded-xl overflow-hidden">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-48 md:h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">About this project</h4>
                      <p className="text-muted-foreground text-sm md:text-base">{project.longDescription}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Challenges</h4>
                      <p className="text-muted-foreground text-sm md:text-base">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Results</h4>
                      <p className="text-muted-foreground text-sm md:text-base">{project.results}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string) => (
                          <Badge key={tech} className="bg-primary/10">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-20 -right-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-64 h-64 rounded-full bg-purple/5 blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 glow-border-animated px-4 py-2">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating skills in full-stack development,
            modern frameworks, and creative problem-solving.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8 md:mb-12">
          <div className="glass-card rounded-full p-1">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-48 md:w-56 border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Filter projects" />
              </SelectTrigger>
              <SelectContent className="glass-card">
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="fullstack">Full Stack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;