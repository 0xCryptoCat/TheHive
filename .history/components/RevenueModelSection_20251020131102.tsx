import { motion } from "framer-motion";
import { CreditCard, Crown, Pickaxe, MonitorPlay, Users2 } from "lucide-react";
import { Hexagon } from "./ui/hexagon";

export function RevenueModelSection() {
  const revenueStreams = [
    {
      icon: CreditCard,
      title: "Tiered Subscriptions",
      description: "Monthly & annual plans",
      color: "#fafa5e",
    },
    {
      icon: Crown,
      title: "Premium Content",
      description: "Exclusive game access",
      color: "#f38524",
    },
    {
      icon: Pickaxe,
      title: "Mining ROI",
      description: "Reinvestment opportunities",
      color: "#fafa5e",
    },
    {
      icon: MonitorPlay,
      title: "Ad Revenue",
      description: "Gaming emulation monetization",
      color: "#f38524",
    },
    {
      icon: Users2,
      title: "Referral Network",
      description: "User acquisition rewards",
      color: "#fafa5e",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fafaf8] to-[#fafa5e]/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#473535]">
            A Self-Sustaining Ecosystem of Value.
          </h2>
          <p className="text-lg text-[#2d2d2d]/80 max-w-4xl mx-auto leading-relaxed">
            Multiple revenue streams ensure long-term sustainability and continuous value delivery to our community.
          </p>
        </motion.div>

        {/* Revenue Streams with Bee Trail Animation */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Trail */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            <motion.path
              d="M 100 120 Q 250 80, 400 120 T 700 120 Q 850 160, 950 120"
              fill="none"
              stroke="#f38524"
              strokeWidth="2"
              strokeDasharray="8,8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={stream.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-white backdrop-blur-md border border-[#473535]/10 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-4">
                    <Hexagon
                      gradient="radial-gradient(circle, #fafa5e 0%, #f38524 100%)"
                      size="sm"
                      animate={true}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="shadow-lg"
                    >
                      <Icon className="w-6 h-6 text-[#473535]" />
                    </Hexagon>
                  </div>
                  <h3 className="mb-2 text-[#473535]">{stream.title}</h3>
                  <p className="text-[#2d2d2d]/70">{stream.description}</p>
                </motion.div>
              );
            })}

            {/* Center item for visual balance on 3-column grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="lg:col-start-2 p-8 rounded-3xl bg-gradient-to-br from-[#fafa5e]/20 to-[#f38524]/20 backdrop-blur-md border-2 border-[#f38524] shadow-xl text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2 bg-gradient-to-r from-[#f38524] to-[#fafa5e] bg-clip-text text-transparent">
                ∞
              </div>
              <h3 className="mb-2 text-[#473535]">Perpetual Growth</h3>
              <p className="text-[#2d2d2d]/70 text-sm">
                Self-reinforcing revenue loops
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
