import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Zap } from "lucide-react";
import { Hexagon } from "./ui/hexagon";

export function MetricsSection() {
  const metrics = [
    {
      title: "Revenue Sources",
      icon: DollarSign,
      color: "#fafa5e",
      description: "Subscription model with different tiers based on user needs."
    },
    {
      title: "Pricing Strategy",
      icon: TrendingUp,
      color: "#fabc5eff",
      description: "Free access to basic features, Subscribers get premium offerings."
    },
    {
      title: "Customer Acquisition",
      icon: Users,
      color: "#f38524",
      description: "Referral programs to spread the word, partnerships to extend brand reach."
    },
    {
      title: "Mining Passive Returns",
      icon: Zap,
      color: "#f36224ff",
      description: "With investing revenue into mining, compound revenue and returns from tokens."
    }
  ];

  const growthData = [
    { year: "2017", revenue: "$59.20" },
    { year: "2018", revenue: "$64.59" },
    { year: "2019", revenue: "$68.09" },
    { year: "2020", revenue: "$69.04" },
    { year: "2021", revenue: "$68.30" },
    { year: "2022", revenue: "$64.83" },
    { year: "2023", revenue: "$59.85" },
    { year: "2024", revenue: "$59.27" },
    { year: "2025", revenue: "$60.58" },
    { year: "2026", revenue: "$62.11" },
    { year: "2027", revenue: "$63.27" },
    { year: "2028", revenue: "$64.30" },
    { year: "2029", revenue: "$65.26" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#2d2d2d] to-[#473535] relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 text-[#fafa5e]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Metrics and Data
          </motion.h2>
          <p className="text-lg md:text-xl text-[#fafaf8]/90 max-w-4xl mx-auto leading-relaxed">
            To ensure long-term sustainability and growth, our business model is designed to generate multiple streams of revenue while delivering value to users.
          </p>
        </motion.div>

        {/* Revenue Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#fafa5e]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Average Revenue Per User
            </h3>
            <div className="relative h-64 md:h-80">
              <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                {[55.0, 57.5, 60.0, 62.5, 65.0, 67.5, 70.0].map((value, i) => (
                  <line
                    key={i}
                    x1="80"
                    y1={250 - (i * 35)}
                    x2="780"
                    y2={250 - (i * 35)}
                    stroke="rgba(250, 250, 94, 0.1)"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Y-axis labels */}
                {[55.0, 57.5, 60.0, 62.5, 65.0, 67.5, 70.0].map((value, i) => (
                  <text
                    key={i}
                    x="60"
                    y={255 - (i * 35)}
                    fill="#fafaf8"
                    fontSize="12"
                    textAnchor="end"
                  >
                    ${value}
                  </text>
                ))}

                {/* Growth line */}
                <motion.polyline
                  points={growthData.map((d, i) => {
                    const x = 100 + (i * 52);
                    const revenue = parseFloat(d.revenue.replace('$', ''));
                    // Scale: $55 = y:250, $70 = y:40, range of 15 over 210 pixels
                    const y = 250 - ((revenue - 55) * 14);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="#fafa5e"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Data points */}
                {growthData.map((d, i) => {
                  const x = 100 + (i * 52);
                  const revenue = parseFloat(d.revenue.replace('$', ''));
                  const y = 250 - ((revenue - 55) * 14);
                  return (
                    <g key={d.year}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#f38524"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                      />
                      <text
                        x={x}
                        y="275"
                        fill="#fafaf8"
                        fontSize="10"
                        textAnchor="middle"
                      >
                        {d.year}
                      </text>
                      <text
                        x={x}
                        y={y - 10}
                        fill="#fafa5e"
                        fontSize="10"
                        textAnchor="middle"
                      >
                        {d.revenue}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#fafa5e]/60 shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ display: "flex", flexDirection: 'column', alignItems: 'center'}}
              >
                {/* Hexagon Marker */}
                <Hexagon
                    gradient="radial-gradient(circle, #fafa5e 0%, #f38524 100%)"
                    size="sm"
                    animate={true}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="shadow-2xl"
                >
                    <Icon className="w-8 h-8 text-[#473535]" />
                </Hexagon>
                <h3 className="text-xl font-bold mb-3 text-white">{metric.title}</h3>
                <p className="text-[#fafaf8]/80 text-sm leading-relaxed">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#fafa5e]/20 to-[#f38524]/20 backdrop-blur-md border-2 border-[#fafa5e] shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-[#fafa5e]">Referral Programs</h3>
            <p className="text-[#fafaf8]/90 leading-relaxed">
              Incentivize users to spread the word, while partnerships with aligned organizations help extend our reach.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#f38524]/20 to-[#fafa5e]/20 backdrop-blur-md border-2 border-[#f38524] shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-[#f38524]">Mining Returns</h3>
            <ul className="space-y-3 text-[#fafaf8]/90">
              <li className="flex items-start gap-2">
                <span className="text-[#fafa5e] mt-1">•</span>
                <span>BTC (traditionally 30%-50% APY, now 70%-90%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#fafa5e] mt-1">•</span>
                <span>Doge (traditionally 70%-90% APY, now 110%-130%)</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
