import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application with drag-and-drop functionality and team workspaces.",
      tech: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface for AI conversations with real-time streaming, markdown support, and conversation history.",
      tech: ["React", "Python", "FastAPI", "OpenAI", "WebSocket"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, charts, and weather alerts using modern APIs.",
      tech: ["Vue.js", "Chart.js", "Weather API", "Geolocation"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with React and modern animations. Features project showcase and contact forms.",
      tech: ["React", "Framer Motion", "TailwindCSS", "Vite"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
      tech: ["Python", "Django", "D3.js", "Redis", "Celery"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const handleProjectClick = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
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
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 transition-colors"
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;