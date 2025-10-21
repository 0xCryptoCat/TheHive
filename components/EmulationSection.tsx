import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EmulationSection() {
  const games = [
    "Classics", "Retro Hits", "Arcades", "8-Bit Legends", "Console Gems", "Vintage Vaults"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#2d2d2d] to-[#473535] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1698273300787-f698a50bb250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGFyY2FkZXxlbnwxfHx8fDE3NjA2OTQ0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Retro Gaming"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 text-[#fafaf8]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Play Everything, Everywhere.
          </motion.h2>
          <p className="text-lg md:text-xl text-[#fafaf8]/90 max-w-4xl mx-auto leading-relaxed">
            Our Cluster Emulation Licensing initiative unlocks access to thousands of iconic games — from <span className="text-[#fafa5e] font-semibold">Retro Hits</span> and <span className="text-[#f38524] font-semibold">Arcade Classics</span> to <span className="text-[#fafa5e] font-semibold">8-Bit Legends</span> and <span className="text-[#f38524] font-semibold">Console Games</span> — all monetized ethically through ad rewards and data insights.
          </p>
        </motion.div>

        {/* Game Carousel */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {games.map((game, index) => (
            <motion.div
              key={game}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.15, y: -8 }}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#fafa5e] to-[#f38524] text-[#473535] font-bold text-lg shadow-2xl hover:shadow-[#fafa5e]/60 transition-all duration-300 border-2 border-[#fafa5e]/50"
            >
              {game}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="text-center p-10 md:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-[#fafa5e]/40 hover:border-[#fafa5e]/60 shadow-2xl hover:shadow-[#fafa5e]/30 max-w-md mx-auto transition-all duration-300"
        >
            <p className="text-5xl md:text-6xl font-bold text-[#fafa5e] mb-3">Over 16K</p>
            <p className="text-[#fafaf8]/90 text-lg">Games you know and love</p>
        </motion.div>
      </div>
    </section>
  );
}
