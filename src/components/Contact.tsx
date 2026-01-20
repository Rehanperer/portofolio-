import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";

const Contact = () => {
  const [sectionRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rehanbusiness007@gmail.com",
      href: "mailto:rehanbusiness007@gmail.com",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 76 570 4754",
      href: "tel:+94765704754",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: "#",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rehanperer",
      username: "@Rehanperer",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rehan-perera-09a9752b6",
      username: "Rehan Perera",
      color: "from-blue-500 to-blue-700",
    },
  ];

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

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-tl from-electric/10 via-transparent to-transparent blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 glow-border-animated px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Let's Build Something{" "}
            <span className="text-gradient-animated">Amazing</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new
            projects and collaborate with fellow creators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            {/* Contact Information */}
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-electric rounded-full" />
                <h3 className="text-xl md:text-2xl font-semibold">Contact Information</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Card className="group glass-card border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />
                      <CardContent className="p-4 relative">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10`}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </motion.div>
                          <div>
                            <p className="text-xs md:text-sm text-muted-foreground">
                              {item.label}
                            </p>
                            <p className="text-sm md:text-lg font-medium group-hover:text-primary transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-electric to-purple rounded-full" />
                <h3 className="text-xl md:text-2xl font-semibold">Connect With Me</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Card className="group glass-card border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />
                      <CardContent className="p-4 relative">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-br ${social.color}`}
                            whileHover={{ rotate: -10, scale: 1.1 }}
                          >
                            <social.icon className="w-5 h-5 text-white" />
                          </motion.div>
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
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="lg:pl-8">
            <Card className="glass-card border-primary/20 overflow-hidden relative">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-electric to-purple opacity-20 blur-xl" />

              <CardContent className="p-6 md:p-8 text-center relative space-y-6">
                {/* Animated icon */}
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-electric flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px hsl(var(--primary) / 0.3)",
                      "0 0 40px hsl(var(--primary) / 0.5)",
                      "0 0 20px hsl(var(--primary) / 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Ready to Start a Project?
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Whether you need a website, web application, or just want to
                    discuss an idea, I'd love to hear from you.
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="w-full group glow-primary hover:glow-primary-intense transition-all duration-300 text-base md:text-lg py-6"
                    onClick={() =>
                      (window.location.href = "mailto:rehanbusiness007@gmail.com")
                    }
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Me an Email
                    <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                  </Button>
                </motion.div>

                <p className="text-xs md:text-sm text-muted-foreground">
                  Usually responds within 24 hours
                </p>

                {/* Availability Status */}
                <div className="pt-4 border-t border-border/50">
                  <motion.div
                    className="flex items-center justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <motion.div
                        className="absolute inset-0 w-3 h-3 rounded-full bg-green-500"
                        animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <span className="text-sm font-medium text-green-500">
                      Available for new projects
                    </span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Additional decorative card on desktop */}
            <motion.div
              className="hidden lg:block mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Card className="glass-card border-primary/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Response time</p>
                    <p className="text-2xl font-bold text-gradient">&lt; 24h</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Timezone</p>
                    <p className="text-lg font-semibold">GMT+5:30</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;