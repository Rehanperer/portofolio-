import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-electric/10 blur-3xl"
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated logo/initials */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer ring */}
          <motion.div
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-primary/30 flex items-center justify-center"
            animate={{
              borderColor: [
                "hsl(var(--primary) / 0.3)",
                "hsl(var(--electric) / 0.5)",
                "hsl(var(--primary) / 0.3)",
              ],
              boxShadow: [
                "0 0 20px hsl(var(--primary) / 0.2)",
                "0 0 40px hsl(var(--electric) / 0.3)",
                "0 0 20px hsl(var(--primary) / 0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Inner content */}
            <motion.span
              className="text-3xl md:text-4xl font-bold text-gradient"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              RP
            </motion.span>
          </motion.div>

          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-primary border-r-electric"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Loading dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary"
              animate={{
                y: [-5, 5, -5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.p
          className="mt-6 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading amazing things...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;