import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#473535] via-[#f38524] to-[#fafa5e]"
        >
          <div className="text-center relative">
            {/* Hexagonal Spinner */}
            <div className="relative w-40 h-40 mb-8 mx-auto">
              {/* Outer rotating hexagon */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <polygon
                  points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                  fill="none"
                  stroke="#fafa5e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10,5"
                />
              </motion.svg>

              {/* Middle rotating hexagon (opposite direction) */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <polygon
                  points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
                  fill="none"
                  stroke="#f38524"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Logo in center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.img
                  src="/Logo.png"
                  alt="The Hive Logo"
                  className="w-20 h-20 object-contain"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(250, 250, 94, 0.3)",
                    "0 0 40px 10px rgba(243, 133, 36, 0.4)",
                    "0 0 20px 5px rgba(250, 250, 94, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[#fafaf8] mb-2">The Hive</h2>
              <motion.p
                className="text-[#fafaf8]/70 text-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Building the future...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

