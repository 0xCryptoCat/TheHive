import { motion } from "framer-motion";
import { Gamepad2, Pickaxe, TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  const floatingIcons = [
    { Icon: Gamepad2, label: "Play", color: "#fafa5e", delay: 0 },
    { Icon: Pickaxe, label: "Mine", color: "#f38524", delay: 0.2 },
    { Icon: TrendingUp, label: "Earn", color: "#fafa5e", delay: 0.4 },
    { Icon: Users, label: "Grow", color: "#f38524", delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#473535] via-[#f38524] to-[#fafa5e]">
      {/* Animated Honeycomb Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0"
          animate={{
            y: [-20, 20],
            x: [-10, 10],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          style={{
            backgroundImage: `url('/honeycomb.svg')`,
            backgroundSize: '600px 400px',
            backgroundRepeat: 'repeat',
            filter: 'invert(1)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#fafaf8] leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The Hive: Where Gaming Meets Mining — Naturally.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-[#fafaf8]/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join a growing ecosystem where gaming, mining, and community unite. Build, grow, and earn in a network powered by natural gas and limitless imagination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(250, 250, 94, 0.4)",
                  "0 0 40px rgba(250, 250, 94, 0.6)",
                  "0 0 40px rgba(250, 250, 94, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#f38524] to-[#fafa5e] hover:from-[#f38524]/90 hover:to-[#fafa5e]/90 text-[#473535] font-bold px-14 py-8 text-xl rounded-full shadow-2xl transition-all duration-300"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdV-1F6yKITzu-gRwsvkOD5SrA_vIFS4KnN2ImHDCXjNqyJtQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Invest in The Hive
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.p 
              className="mt-6 text-[#fafaf8]/90 text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Be part of the next evolution in GameFi and green crypto mining.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 max-w-5xl mx-auto">
          {floatingIcons.map(({ Icon, label, color, delay }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + delay, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: color }}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#473535]" />
              </motion.div>
              <span className="text-[#fafaf8] text-lg md:text-xl font-semibold">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#fafaf8]/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#fafaf8]"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
