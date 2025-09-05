import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@alexdeveloper.com",
      href: "mailto:hello@alexdeveloper.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@alexdev"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "Alex Developer"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      username: "@alexcodes"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glow-border">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on 
            new projects and collaborate with fellow creators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card 
                    key={item.label}
                    className="group hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/50"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <a 
                            href={item.href}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Connect With Me
              </h3>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <social.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {social.label}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {social.username}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:pl-8">
            <Card className="p-8 text-center bg-gradient-to-br from-card to-card-hover border-primary/20">
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-glow">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Ready to Start a Project?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you need a website, web application, or just want to discuss 
                    an idea, I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full glow-primary hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:hello@alexdeveloper.com'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Me an Email
                  </Button>
                  
                  <p className="text-sm text-muted-foreground">
                    Usually responds within 24 hours
                  </p>
                </div>

                {/* Availability Status */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-500">
                      Available for new projects
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;