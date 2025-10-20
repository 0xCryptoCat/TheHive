import { motion } from "framer-motion";
import { Rocket, Users, Trophy, Coins } from "lucide-react";
import { Hexagon } from "./ui/hexagon";

export function RoadmapSection() {
  const phases = [
    {
      title: "Phase 1",
      timeframe: "0–3 months",
      icon: Rocket,
      items: [
        "Telegram Game Launch",
        "Referral System Live",
        "Initial Rewards Distribution",
        "App Store Release",
      ],
      color: "#fafa5e",
    },
    {
      title: "Phase 2",
      timeframe: "3–9 months",
      icon: Users,
      items: [
        "1M+ Users / $1.1–1.8M Monthly Revenue",
        "CMC Campaigns & Strategic Partnerships",
        "ICO Listing on Top 6 Exchanges",
        "2 Games in Production",
      ],
      color: "#f38524",
    },
    {
      title: "Launch",
      timeframe: "9–12 months",
      icon: Trophy,
      items: [
        "Token Release",
        "Emulation Rollout",
        "Global Partnership Round",
      ],
      color: "#f35f24ff",
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
            Roadmap to the Future
          </motion.h2>
          <p className="text-lg md:text-xl text-[#2d2d2d]/80 max-w-4xl mx-auto">
            Our strategic path from launch to global expansion
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-28 left-0 right-0 h-1 bg-gradient-to-r from-[#fafa5e] via-[#f38524] to-[#fafa5e] rounded-full shadow-lg" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  {/* Hexagon Marker */}
                  <div className="flex justify-center mb-8">
                    <Hexagon
                      color={phase.color}
                      size="sm"
                      animate={true}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="shadow-2xl"
                    >
                      <Icon className="w-12 h-12 text-[#473535]" />
                    </Hexagon>
                  </div>

                  {/* Content Card */}
                  <div className="p-8 md:p-10 rounded-3xl bg-white backdrop-blur-md border border-[#473535]/10 shadow-xl hover:shadow-2xl hover:border-[#f38524]/30 transition-all duration-300">
                    <h3 className="text-center text-2xl font-bold mb-3 text-[#473535]">{phase.title}</h3>
                    <p className="text-center text-base text-[#2d2d2d]/60 mb-8 font-medium">
                      {phase.timeframe}
                    </p>
                    
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-[#2d2d2d]/80"
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: phase.color }}
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
