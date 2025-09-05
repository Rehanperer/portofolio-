import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-electric/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-12 h-12 rounded-full bg-primary-glow/30 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <Badge variant="outline" className="mb-6 glow-border">
          Available for Projects
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
          Hi, I'm{" "}
          <span className="text-gradient">
            Alex Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer crafting beautiful digital experiences with modern technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group glow-primary hover:glow-primary hover:scale-105 transition-all duration-300">
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <Button variant="outline" size="lg" className="glow-border hover:bg-card-hover transition-all duration-300">
            Get In Touch
          </Button>
        </div>
        
        {/* Tech Stack */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-md mx-auto">
          {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm hover:bg-card-hover transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;