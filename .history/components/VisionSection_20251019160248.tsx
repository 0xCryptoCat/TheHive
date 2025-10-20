import { motion } from "framer-motion";
import { Globe2, Gamepad2, DollarSign, Zap, Users, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VisionSection() {
  const highlights = [
    {
      icon: Globe2,
      title: "Sustainable Mining",
      description: "Lower electricity costs through natural gas reuse (0.00–0.02 KWH).",
      color: "#fafa5e",
    },
    {
      icon: Gamepad2,
      title: "Accessible Gaming",
      description: "16,000+ titles playable across all devices.",
      color: "#f38524",
    },
    {
      icon: DollarSign,
      title: "Community-Driven Growth",
      description: "Earn as you play, mine, and refer others.",
      color: "#fafa5e",
    },
    {
      icon: Zap,
      title: "Instant Rewards",
      description: "Real-time earnings distributed through smart contracts.",
      color: "#f38524",
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with players and miners worldwide.",
      color: "#fafa5e",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for your digital assets.",
      color: "#f38524",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 text-[#473535]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Vision: Uniting Play, Power, and Purpose
          </motion.h2>
          <p className="text-lg md:text-xl text-[#2d2d2d]/80 max-w-4xl mx-auto leading-relaxed mb-4">
            The Hive redefines the boundaries between gaming and cryptocurrency. By converting natural gas runoffs into clean, low-cost mining energy, we transform waste into opportunity. Every player, miner, and investor becomes a part of one collective ecosystem — <span className="text-[#f38524] font-semibold">The Hive Mind.</span>
          </p>
          <p className="text-lg md:text-xl text-[#2d2d2d]/80 max-w-4xl mx-auto leading-relaxed">
            We're building a future where every click, every connection, and every reward feeds back into a thriving, sustainable digital colony.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="p-8 md:p-10 rounded-3xl bg-white backdrop-blur-md border border-[#473535]/10 shadow-xl hover:shadow-2xl hover:border-[#f38524]/30 transition-all duration-300 group"
              >
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: highlight.color }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-10 h-10 text-[#473535]" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-[#473535]">{highlight.title}</h3>
                <p className="text-[#2d2d2d]/70 text-base leading-relaxed">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#f38524]/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1585881728919-5c0ce925ad10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb2JpbGUlMjBwaG9uZXxlbnwxfHx8fDE3NjA3NzYxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mobile Gaming"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#fafa5e]/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1686945127170-ae15deda7bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjByaWclMjBzZXJ2ZXJ8ZW58MXx8fHwxNzYwNzc2MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mining Infrastructure"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
