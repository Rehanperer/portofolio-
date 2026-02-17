import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Check, Zap, MessageCircle, Mail, Star, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const pricingTiers = [
    {
        name: "Essential",
        price: "LKR 20,000",
        description: "Perfect for personal portfolios and landing pages.",
        features: [
            "Custom UI/UX Design",
            "Responsive React/Next.js",
            "Fast Performance",
            "SEO Optimization",
            "Contact Form Integration"
        ],
        recommended: false,
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        name: "Professional",
        price: "LKR 25,000",
        description: "Complete solution for businesses and startups.",
        features: [
            "Everything in Essential",
            "Backend API Integration",
            "Database Setup",
            "Admin Dashboard",
            "Authentication System",
            "1 Month Support"
        ],
        recommended: true,
        gradient: "from-primary/20 to-electric/20"
    },
    {
        name: "Enterprise",
        price: "Custom Quote",
        description: "Scalable architecture for high-traffic platforms.",
        features: [
            "Cloud Architecture (AWS)",
            "Microservices",
            "Advanced Security",
            "CI/CD Pipelines",
            "24/7 Priority Support",
            "Custom SLA"
        ],
        recommended: false,
        blur: true,
        gradient: "from-purple-500/20 to-pink-500/20"
    }
];

const Pricing = () => {
    const isMobile = useIsMobile();
    const [selectedTier, setSelectedTier] = useState<string | null>(null);
    const [showContactDialog, setShowContactDialog] = useState(false);

    const handleSelect = (tierName: string) => {
        setSelectedTier(tierName);
        setShowContactDialog(true);
    };

    const contactOptions = [
        {
            name: "WhatsApp",
            icon: MessageCircle,
            action: () => window.open("https://wa.me/94765704754", "_blank"),
            color: "bg-green-500 hover:bg-green-600"
        },
        {
            name: "Email",
            icon: Mail,
            action: () => window.open("mailto:rehanbusiness007@gmail.com", "_blank"),
            color: "bg-blue-500 hover:bg-blue-600"
        }
    ];

    const CardWrapper = ({ children, className, index }: any) => {
        if (isMobile) {
            return <div className={className}>{children}</div>;
        }
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={className}
            >
                {children}
            </motion.div>
        );
    };

    return (
        <section id="pricing" className="py-20 md:py-32 relative overflow-hidden px-4">
            {/* Decorative Elements */}
            {!isMobile && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/5 via-background/0 to-background/0 pointer-events-none" />
            )}

            <div className="container relative z-10 mx-auto max-w-7xl">
                <div className="text-center mb-16 md:mb-24">
                    <Badge variant="outline" className="mb-4 glow-border px-4 py-1.5 text-sm">
                        Invest in Quality
                    </Badge>
                    {isMobile ? (
                        <h2 className="text-responsive-h2 font-bold mb-4 text-foreground">
                            Transparent <span className="text-gradient">Pricing</span>
                        </h2>
                    ) : (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-responsive-h2 font-bold mb-4 md:mb-6 text-foreground"
                        >
                            Transparent <span className="text-gradient">Pricing</span>
                        </motion.h2>
                    )}
                    <p className="text-muted-foreground text-sm md:text-xl max-w-2xl mx-auto">
                        Choose the perfect package for your project. No hidden fees, just premium results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <CardWrapper
                            key={tier.name}
                            index={index}
                            className={`relative p-8 rounded-[2rem] border transition-all duration-300 group ${tier.recommended
                                    ? "glass border-primary/30 shadow-2xl shadow-primary/10"
                                    : "bg-card/30 border-primary/10 hover:border-primary/30"
                                } ${tier.blur ? "backdrop-blur-xl bg-background/40" : ""}`}
                        >
                            {tier.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm shadow-lg shadow-primary/40">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            {/* Hover Clean Gradient */}
                            {!isMobile && (
                                <div
                                    className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl md:text-4xl font-bold text-gradient-gold">
                                            {tier.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary">
                                                <Check className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                            <span className="text-sm md:text-base text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={() => handleSelect(tier.name)}
                                    className={`w-full h-12 md:h-14 rounded-xl font-bold text-base transition-all ${tier.recommended
                                            ? "glow-primary hover:scale-[1.02]"
                                            : "bg-primary/10 text-primary hover:bg-primary/20 hover:scale-[1.02]"
                                        } ${isMobile ? "active:scale-95" : ""}`}
                                >
                                    Choose {tier.name}
                                </Button>
                            </div>
                        </CardWrapper>
                    ))}
                </div>
            </div>

            <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
                <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-primary/20 p-6 md:p-10 rounded-[2rem]">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="text-2xl font-bold text-center">
                            Let's Build It! 🚀
                        </DialogTitle>
                        <DialogDescription className="text-center text-base">
                            You selected the <span className="text-primary font-bold">{selectedTier}</span> package.
                            How would you like to discuss the details?
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4">
                        {contactOptions.map((option) => (
                            <Button
                                key={option.name}
                                onClick={option.action}
                                className={`w-full h-14 md:h-16 rounded-xl text-lg font-bold gap-3 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${option.color}`}
                            >
                                <option.icon className="w-5 h-5 md:w-6 md:h-6" />
                                Chat via {option.name}
                            </Button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Pricing;
