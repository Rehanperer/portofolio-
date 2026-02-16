import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const AnimatedBackground = () => {
    const isMobile = useIsMobile();

    // On mobile, render fewer orbs with simpler animations for performance
    if (isMobile) {
        return (
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {/* Single primary gradient orb - CSS animation only, no JS */}
                <div
                    className="gradient-orb gradient-orb-primary w-[300px] h-[300px] -top-20 -left-20 animate-float-slow"
                />
                {/* Single accent orb */}
                <div
                    className="gradient-orb gradient-orb-electric w-[250px] h-[250px] top-1/3 -right-20 opacity-40 animate-float"
                />
                {/* Noise overlay for texture */}
                <div className="noise-overlay" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Primary gradient orb */}
            <motion.div
                className="gradient-orb gradient-orb-primary w-[600px] h-[600px] -top-40 -left-40"
                animate={{
                    x: [0, 100, 50, 0],
                    y: [0, 50, 100, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Electric accent orb */}
            <motion.div
                className="gradient-orb gradient-orb-electric w-[500px] h-[500px] top-1/4 -right-40"
                animate={{
                    x: [0, -80, -40, 0],
                    y: [0, 80, 40, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Purple accent orb */}
            <motion.div
                className="gradient-orb gradient-orb-purple w-[400px] h-[400px] bottom-20 left-1/4"
                animate={{
                    x: [0, 60, -30, 0],
                    y: [0, -60, 30, 0],
                    scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Additional small orbs for depth */}
            <motion.div
                className="gradient-orb gradient-orb-primary w-[200px] h-[200px] top-1/2 left-1/3 opacity-30"
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -40, 20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="gradient-orb gradient-orb-electric w-[150px] h-[150px] bottom-1/4 right-1/4 opacity-20"
                animate={{
                    x: [0, -30, 15, 0],
                    y: [0, 30, -15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Noise overlay for texture */}
            <div className="noise-overlay" />
        </div>
    );
};

export default AnimatedBackground;
