import { motion } from "framer-motion";
import { Smartphone, DollarSign, Zap, Network } from "lucide-react";

export function SolutionSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Convenient",
      description: "One app, endless functionality.",
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Free to start, with premium unlocks.",
    },
    {
      icon: Zap,
      title: "Low-Cost Mining",
      description: "Leverage natural gas waste for low energy outputs.",
    },
    {
      icon: Network,
      title: "Holistic Network",
      description: "Supporting users, holders, and developers alike.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#fafaf8] to-[#fafa5e]/10">
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
            Everything You Need, In One Hive.
          </motion.h2>
          <p className="text-lg md:text-xl text-[#2d2d2d]/80 max-w-3xl mx-auto leading-relaxed mb-4">
            Gone are the days of juggling multiple apps, wallets, and platforms. The Hive delivers a single, intuitive mobile experience for gamers, miners, and crypto enthusiasts alike.
          </p>
          <p className="text-lg md:text-xl text-[#2d2d2d]/80 max-w-3xl mx-auto leading-relaxed">
            With <span className="text-[#f38524] font-semibold">Honey Inc</span>, our integrated newsletter and referral system, users are guided step-by-step — learning, earning, and growing their digital presence with purpose.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="p-8 md:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-[#fafa5e]/30 hover:border-[#f38524]/60 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#fafa5e] to-[#f38524] flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-10 h-10 text-[#473535]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-[#473535]">{feature.title}</h3>
                <p className="text-[#2d2d2d]/70 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
