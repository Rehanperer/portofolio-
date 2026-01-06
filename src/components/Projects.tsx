import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Star, GitFork, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

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
      results: "Achieved 99.9% uptime and processed over $100k in transactions."
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
      results: "Improved team productivity by 40% for beta users."
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
      results: "Reduced response time by 60% compared to traditional request-response patterns."
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
      results: "Achieved 95% accuracy in weather predictions for local areas."
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
      results: "Achieved perfect Google Lighthouse scores for performance and accessibility."
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
      results: "Processed over 10M data points daily with 99.5% accuracy."
    }
  ];

  const handleProjectClick = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  const filteredProjects = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className={`group hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
        }`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                {project.title}
                {project.featured && (
                  <Badge variant="outline" className="ml-2 text-xs glow-border">
                    Featured
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {project.description}
              </CardDescription>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-2">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3" />
              <span>{project.stats.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className="w-3 h-3" />
              <span>{project.stats.forks}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{project.stats.watchers}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs py-1 px-2.5 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              size="sm"
              onClick={() => handleProjectClick(project.demoUrl)}
              className="flex-1 group/btn hover:glow-primary transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Live Demo
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
                <Button variant="ghost" size="sm" className="hover:bg-card-hover">
                  Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {project.images && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold mb-2">About this project</h4>
                    <p className="text-muted-foreground">{project.longDescription}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges</h4>
                    <p className="text-muted-foreground">{project.challenges}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Results</h4>
                    <p className="text-muted-foreground">{project.results}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
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

  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glow-border">
            My Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating skills in full-stack development,
            modern frameworks, and creative problem-solving.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter projects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="frontend">Frontend</SelectItem>
              <SelectItem value="backend">Backend</SelectItem>
              <SelectItem value="fullstack">Full Stack</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;