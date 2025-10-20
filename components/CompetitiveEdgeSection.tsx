import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function CompetitiveEdgeSection() {
  const competitors = [
    { name: "Axie Infinity", focus: "Gaming Only" },
    { name: "Gala Games", focus: "Limited Ecosystem" },
    { name: "HashAI", focus: "Mining Focus" },
    { name: "NotCoin", focus: "Ad-Centric" },
    { name: "Kelp", focus: "Single Platform" }
  ];

  const hiveFeatures = [
    "Integrated Gaming & Mining",
    "Sustainable Energy Model",
    "Real-time Behavioral Adaptation",
    "Holistic User Experience",
    "Community Learning System",
    "Cross-Platform Accessibility",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fafaf8] to-[#fafa5e]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#473535]">
            Why The Hive Wins.
          </h2>
          <p className="text-lg text-[#2d2d2d]/80 max-w-4xl mx-auto leading-relaxed">
            Unlike fragmented platforms, The Hive integrates gaming, mining, and learning into a single adaptive system that evolves with its users. Real-time behavioral adaptation ensures every player's experience is personalized and rewarding.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Competitors */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white backdrop-blur-md border border-[#473535]/10 shadow-lg"
          >
            <h3 className="mb-6 text-[#473535] text-center">Others</h3>
            <div className="space-y-4">
              {competitors.map((competitor, index) => (
                <motion.div
                  key={competitor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#2d2d2d]/5"
                >
                  <div>
                    <div className="text-[#473535]">{competitor.name}</div>
                    <div className="text-sm text-[#2d2d2d]/60">{competitor.focus}</div>
                  </div>
                  <X className="w-6 h-6 text-red-500" />
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-[#2d2d2d]/60">
              Fragmented solutions, limited scope
            </p>
          </motion.div>

          {/* The Hive */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#fafa5e]/30 to-[#f38524]/30 backdrop-blur-sm border-2 border-[#f38524] shadow-2xl"
          >
            <h3 className="mb-6 text-[#473535] text-center">The Hive</h3>
            <div className="space-y-3">
              {hiveFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50"
                >
                  <div className="w-6 h-6 rounded-full bg-[#f38524] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#473535]">{feature}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-center text-[#473535]">
              The <span className="text-[#f38524]">complete</span> puzzle, seamlessly interlinked
            </p>
          </motion.div>
        </div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#473535] to-[#f38524] text-[#fafaf8] text-center"
        >
          <h4 className="mb-4 text-[#fafa5e]">Our Secret Weapon</h4>
          <p className="text-lg">
            Real-time behavioral adaptation powered by The Hive Mind ensures every interaction is personalized, every reward is meaningful, and every user feels valued.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
