import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Layers,
  Code
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  link: string;
  features: string[];
  architecture: string[];
}

const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL.",
    longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing via Stripe, and a complete admin dashboard for inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    github: "https://github.com/Rehanperer",
    link: "https://github.com/Rehanperer",
    features: ["Real-time Inventory", "Secure Checkout", "Admin Dashboard"],
    architecture: ["Microservices", "REST API", "State Management"]
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat interface for AI conversations with real-time streaming.",
    longDescription: "An advanced chat interface for AI interactions featuring real-time message streaming, markdown rendering, and conversation history context.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Next.js", "OpenAI", "TailwindCSS"],
    category: "AI",
    github: "https://github.com/Rehanperer",
    link: "https://github.com/Rehanperer",
    features: ["Streaming Responses", "Context Awareness", "Markdown Support"],
    architecture: ["Serverless Functions", "WebSockets", "Vector DB"]
  },
  {
    title: "Task Management",
    description: "Collaborative task management application with real-time updates.",
    longDescription: "A collaborative task management platform featuring drag-and-drop kanban boards, team workspaces, and real-time synchronization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["React", "Firebase", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/Rehanperer",
    link: "https://github.com/Rehanperer",
    features: ["Drag & Drop", "Team Channels", "Notification System"],
    architecture: ["Real-time DB", "Optimistic Updates", "Canvas API"]
  }
];

const categories = ["All", "Full Stack", "Frontend", "AI"];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      layout
      className="group"
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="card-3d h-full cursor-pointer rounded-3xl bg-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/20 text-primary-glow border-none text-[10px] md:text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-xs md:text-sm text-primary font-medium">
                  View Details <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-3xl border-primary/20 rounded-3xl p-0">
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20 text-xs md:text-sm px-3"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 md:flex-none h-12 rounded-xl glow-border" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button className="flex-1 md:flex-none h-12 rounded-xl glow-primary" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Project Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
                    {project.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-primary/10">
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2 text-foreground">
                      <Layers className="w-5 h-5 text-primary" /> Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2 text-foreground">
                      <Code className="w-5 h-5 text-primary" /> Architecture
                    </h4>
                    <ul className="space-y-3">
                      {project.architecture.map((arch, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                          {arch}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((p) =>
    filter === "All" ? true : p.category === filter
  );

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden px-4">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-electric/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <Badge variant="outline" className="mb-4 glow-border px-4 py-1.5 text-sm">
            My Portfolio
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-responsive-h2 font-bold mb-4 md:mb-6 text-foreground"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-electric mx-auto rounded-full glow-primary mb-10" />

          {/* Filter System */}
          <div className="flex items-center justify-center -mx-4 px-4">
            <div className="flex overflow-x-auto no-scrollbar pb-4 gap-2 md:gap-4 md:justify-center w-full max-w-2xl">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className={`flex-shrink-0 h-11 md:h-12 px-6 md:px-8 rounded-full text-xs md:text-base font-semibold transition-all duration-300 ${filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-card/40 border-primary/20 hover:bg-primary/10"
                    }`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="h-14 md:h-16 px-8 md:px-12 rounded-2xl text-base md:text-xl font-bold glow-border hover:bg-primary hover:text-white transition-all duration-500"
            onClick={() => window.open("https://github.com/Rehanperer", "_blank")}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 mr-3" />
            See More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;