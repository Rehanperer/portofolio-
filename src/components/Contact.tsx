import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rehanbusiness007@gmail.com",
    href: "mailto:rehanbusiness007@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 76 570 4754",
    href: "tel:+94765704754"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "#"
  }
];

const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "General Inquiry"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "", category: "General Inquiry" });
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch (error) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  const categories = [
    "General Inquiry",
    "Web Development",
    "UI/UX Design",
    "Partnership",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden px-4">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-primary/10 via-background/0 to-background/0 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-electric/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-20">
          <Badge variant="outline" className="mb-4 glow-border px-4 py-1.5 text-sm">
            Get In Touch
          </Badge>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-responsive-h2 font-bold mb-4 md:mb-6 text-foreground"
          >
            Let's Start a <span className="text-gradient">Conversation</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-electric mx-auto rounded-full glow-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-10 rounded-[2rem] border border-primary/10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative space-y-6 md:space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] md:text-sm font-bold text-green-500 uppercase tracking-widest">Available for Projects</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground">
                  Ready to build something amazing?
                </h3>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                  I'm currently accepting new projects and would love to hear about what you're building.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group/item active:translate-x-1 transition-transform duration-150"
                    >
                      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                        <info.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-widest">{info.label}</p>
                        <p className="text-sm md:text-xl font-bold text-foreground group-hover/item:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-primary/10 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-bold text-foreground uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 md:h-16 px-5 md:px-8 rounded-xl md:rounded-2xl bg-card/40 border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-lg outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-bold text-foreground uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 md:h-16 px-5 md:px-8 rounded-xl md:rounded-2xl bg-card/40 border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-lg outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-xs md:text-sm font-bold text-foreground uppercase tracking-wider ml-1">Project Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-12 md:h-16 px-5 md:px-8 rounded-xl md:rounded-2xl bg-card/40 border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-lg outline-none appearance-none cursor-pointer"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-slate-900 text-white">{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-xs md:text-sm font-bold text-foreground uppercase tracking-wider ml-1">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-5 md:p-8 rounded-xl md:rounded-[2rem] bg-card/40 border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-lg outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={formState !== "idle"}
                  className={`w-full h-12 md:h-20 rounded-xl md:rounded-[2rem] text-sm md:text-xl font-bold transition-all active:scale-[0.98] ${formState === "success" ? "bg-green-500 hover:bg-green-600" :
                    formState === "error" ? "bg-red-500 hover:bg-red-600" : "glow-primary"
                    }`}
                >
                  {formState === "idle" && (
                    <span className="flex items-center gap-3">
                      Send Message
                      <Send className="w-4 h-4 md:w-6 md:h-6" />
                    </span>
                  )}
                  {formState === "submitting" && "Sending Pulse..."}
                  {formState === "success" && "Message Received!"}
                  {formState === "error" && "Failed to Send"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;