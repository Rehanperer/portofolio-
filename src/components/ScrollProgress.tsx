import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useAnimations";

const ScrollProgress = () => {
    const progress = useScrollProgress();

    return (
        <motion.div
            className="scroll-progress"
            style={{
                scaleX: progress / 100,
            }}
            initial={{ scaleX: 0 }}
        />
    );
};

export default ScrollProgress;
