import { motion } from "framer-motion";
import { TrendingUp, Zap, DollarSign } from "lucide-react";

export function MiningSection() {
  const stats = [
    {
      label: "Energy Cost",
      before: "0.06 KWH",
      after: "0.02 KWH",
      improvement: "↓ 67%",
    },
    {
      label: "BTC APY",
      before: "30-50%",
      after: "70-90%",
      improvement: "↑ 2x",
    },
    {
      label: "DOGE APY",
      before: "70-90%",
      after: "110-130%",
      improvement: "↑ 1.5x",
    },
  ];

  return (
    <section className="py-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#473535]">
            Mining Reinvented — Clean, Profitable, Sustainable.
          </h2>
          <p className="text-lg text-[#2d2d2d]/80 max-w-4xl mx-auto leading-relaxed">
            Mining doesn't have to be costly or environmentally draining. The Hive's natural gas mining strategy drastically reduces energy costs, extending machine lifespans and doubling profit margins — particularly for Bitcoin and Dogecoin operations.
          </p>
        </motion.div>

        {/* Statistics Visualization */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-white backdrop-blur-md border border-[#473535]/10 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-center mb-6 text-[#473535]">{stat.label}</h3>
                
                {/* Before/After Comparison */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#2d2d2d]/5">
                    <span className="text-sm text-[#2d2d2d]/60">Before</span>
                    <span className="text-[#2d2d2d]/80">{stat.before}</span>
                  </div>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="h-1 bg-gradient-to-r from-[#fafa5e] to-[#f38524] rounded-full origin-left"
                  />
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#fafa5e]/20 to-[#f38524]/20 border border-[#f38524]/30">
                    <span className="text-sm text-[#473535]">After</span>
                    <span className="text-[#473535]">{stat.after}</span>
                  </div>
                </div>

                {/* Improvement Badge */}
                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#fafa5e] to-[#f38524] text-[#473535]">
                    {stat.improvement}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: Zap, title: "Lower Costs", desc: "Natural gas reduces operational expenses" },
            { icon: TrendingUp, title: "Higher Yields", desc: "Doubled profit margins on mining" },
            { icon: DollarSign, title: "Extended Lifespan", desc: "Machines last longer with efficient cooling" },
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 rounded-3xl bg-white backdrop-blur-md border border-[#473535]/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fafa5e] to-[#f38524] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#473535]" />
                </div>
                <div>
                  <h4 className="text-[#473535] mb-1">{benefit.title}</h4>
                  <p className="text-sm text-[#2d2d2d]/70">{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
