import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function MetricsAndDataSection() {
  const metrics = [
    {
      title: "Revenue Sources",
      description: "Offer tiered monthly or annual plans with varying levels of access and premium features.",
      icon: "💰",
    },
    {
      title: "Pricing Strategy",
      description: "Attract users with free access to basic features and convert them to paying users through compelling premium offerings.",
      icon: "📊",
    },
    {
      title: "Customer Acquisition",
      description: "Referral programs incentivize users to spread the word, while partnerships with aligned organizations help extend our reach.",
      icon: "🎯",
    },
  ];

  const miningReturns = [
    {
      asset: "BTC",
      traditional: "30%-50% APY",
      projected: "70%-90%",
    },
    {
      asset: "Doge",
      traditional: "70%-90% APY",
      projected: "110%-130%",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#473535] via-[#2d2d2d] to-[#473535] relative overflow-hidden">
      {/* Animated Honeycomb Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute -inset-[50%]"
          animate={{
            y: [0, -100],
            x: [0, -50],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          style={{
            backgroundImage: `url('/honeycomb.svg')`,
            backgroundSize: '1200px 800px',
            backgroundRepeat: 'repeat',
            filter: 'invert(1)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-start gap-8 md:gap-12">
            <div className="flex-1">
              <motion.h2 
                className="text-5xl md:text-7xl font-bold mb-8 text-[#fafa5e] leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Metrics and Data
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-[#fafaf8]/80 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                To ensure long-term sustainability and growth, our business model is designed to generate multiple streams of revenue while delivering value to users.
              </motion.p>
            </div>

            {/* Average Revenue Per User Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex flex-1 flex-col items-center"
            >
              <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-[#fafa5e] text-sm font-bold mb-4 text-center">AVERAGE REVENUE PER USER</h3>
                <svg viewBox="0 0 400 200" className="w-full h-auto">
                  {/* Simple trending line chart */}
                  <polyline
                    points="10,150 40,140 70,135 100,145 130,130 160,120 190,125 220,110 250,100 280,105 310,95 340,90 370,85"
                    fill="none"
                    stroke="#fafa5e"
                    strokeWidth="2"
                  />
                  <polyline
                    points="10,150 40,140 70,135 100,145 130,130 160,120 190,125 220,110 250,100 280,105 310,95 340,90 370,85"
                    fill="url(#chartGradient)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#fafa5e', stopOpacity: 0.5 }} />
                      <stop offset="100%" style={{ stopColor: '#fafa5e', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  {/* Axis labels */}
                  <text x="20" y="190" fontSize="10" fill="#fafaf8/60" textAnchor="start">2017</text>
                  <text x="360" y="190" fontSize="10" fill="#fafaf8/60" textAnchor="end">2029</text>
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#fafa5e]/40 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#fafa5e] uppercase tracking-wide">{metric.title}</h3>
                <p className="text-[#fafaf8]/80 leading-relaxed">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mining Passive Returns Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-[#fafa5e]/30 shadow-xl"
        >
          <div className="flex items-start gap-8">
            {/* Left: Bee Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden md:flex flex-shrink-0 text-8xl"
            >
              🐝
            </motion.div>

            {/* Right: Content */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#fafa5e] uppercase tracking-wide">Mining Passive Returns</h3>
              <p className="text-lg text-[#fafaf8]/80 mb-8 leading-relaxed">
                With investing revenue into mining we will be able to compound revenue while also maximizing and redefining the returns from tokens
              </p>

              {/* Returns Breakdown */}
              <div className="space-y-4">
                {miningReturns.map((item, index) => (
                  <motion.div
                    key={item.asset}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#f38524]/30 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-[#f38524]">{item.asset}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#fafaf8]/60">Traditionally</div>
                      <div className="text-[#fafaf8]">{item.traditional}</div>
                    </div>
                    <div className="flex-shrink-0 px-4 py-2 rounded-lg bg-gradient-to-r from-[#fafa5e]/20 to-[#f38524]/20 border border-[#fafa5e]/30">
                      <div className="text-sm text-[#fafaf8]/60">Now</div>
                      <div className="text-lg font-bold text-[#fafa5e]">{item.projected}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
