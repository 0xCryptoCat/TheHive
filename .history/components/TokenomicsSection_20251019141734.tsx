import { motion } from "framer-motion";

export function TokenomicsSection() {
  const distribution = [
    { label: "Inclusion Programs", percentage: 50, color: "#f38524" },
    { label: "Public", percentage: 28, color: "#f39d24ff" },
    { label: "Grant", percentage: 8, color: "#f3b824ff" },
    { label: "Private Presale", percentage: 6, color: "#fad05eff" },
    { label: "Angel", percentage: 4, color: "#fafa5e" },
    { label: "Liquidity", percentage: 4, color: "#fdfcafff" },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#473535] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0"
          animate={{
            y: [-300, 20],
            x: [-10, 100],
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
            Flexible, Transparent, Rewarding.
          </motion.h2>
          <p className="text-lg md:text-xl text-[#fafaf8]/90 max-w-4xl mx-auto leading-relaxed">
            A well-structured economy fuels sustainable growth. The Hive's tokenomics ensure fairness and inclusivity across investors, players, and partners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pie Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
              {(() => {
                let currentAngle = 0;
                return distribution.map((item, index) => {
                  const angle = (item.percentage / 100) * 360;
                  const startAngle = currentAngle;
                  currentAngle += angle;
                  
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (currentAngle * Math.PI) / 180;
                  
                  const x1 = 100 + 80 * Math.cos(startRad);
                  const y1 = 100 + 80 * Math.sin(startRad);
                  const x2 = 100 + 80 * Math.cos(endRad);
                  const y2 = 100 + 80 * Math.sin(endRad);
                  
                  const largeArc = angle > 180 ? 1 : 0;
                  
                  return (
                    <motion.path
                      key={item.label}
                      d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={item.color}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="origin-center hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  );
                });
              })()}
              
              {/* Center circle */}
              <circle cx="100" cy="100" r="40" fill="#473535" />
              <text x="100" y="100" textAnchor="middle" dy="0.3em" fill="#fafa5e" className="text-xs rotate-90 origin-center">
                The Hive
              </text>
            </svg>
          </motion.div>

          {/* Distribution List */}
          <div className="space-y-4">
            {distribution.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 hover:border-[#fafa5e]/40 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl flex-shrink-0 shadow-md"
                  style={{ backgroundColor: item.color }}
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex-1">
                  <div className="text-[#fafaf8] text-lg font-medium">{item.label}</div>
                </div>
                <div className="text-3xl font-bold text-[#fafa5e]">{item.percentage}%</div>
              </motion.div>
            ))}
          </div>
          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-[#fafa5e]/30">
              <p className="text-[#fafaf8]/90 text-lg">
                Launched on <span className="text-[#fafa5e] font-semibold">Ethereum</span>, with adaptability for cross-chain expansion via grant integration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
