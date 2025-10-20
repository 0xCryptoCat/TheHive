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
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#473535] via-[#3d2f2f] to-[#473535] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
      <motion.div 
        className="absolute -inset-[50%]"
        animate={{ y: [0, -100], x: [0, -50] }}
        transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
        backgroundImage: `url('/honeycomb.svg')`,
        backgroundSize: '1200px 800px',
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
        className="text-center mb-16"
      >
        <motion.h2 
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#fafa5e] to-[#f38524] bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        >
        Flexible, Transparent, Rewarding.
        </motion.h2>
        <p className="text-lg md:text-xl text-[#fafaf8]/80 max-w-3xl mx-auto">
        A well-structured economy fuels sustainable growth.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
        {/* Pie Chart */}
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative aspect-square max-w-md mx-auto"
        >
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90 drop-shadow-2xl">
          {(() => {
          let currentAngle = 0;
          return distribution.map((item, index) => {
            const angle = (item.percentage / 100) * 360;
            const startRad = (currentAngle * Math.PI) / 180;
            const endRad = ((currentAngle + angle) * Math.PI) / 180;
            const x1 = 100 + 80 * Math.cos(startRad);
            const y1 = 100 + 80 * Math.sin(startRad);
            const x2 = 100 + 80 * Math.cos(endRad);
            const y2 = 100 + 80 * Math.sin(endRad);
            const largeArc = angle > 180 ? 1 : 0;
            currentAngle += angle;
            
            return (
            <motion.path
              key={item.label}
              d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={item.color}
              whileHover={{ filter: 'brightness(1.2)' }}
              className="cursor-pointer"
            />
            );
          });
          })()}
          <circle cx="100" cy="100" r="40" fill="#473535" />
          <text x="100" y="105" textAnchor="middle" fill="#fafa5e" className="font-bold text-sm">The Hive</text>
        </svg>
        </motion.div>

        {/* Distribution List */}
        <div className="space-y-3">
        {distribution.map((item, index) => (
          <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ x: 8 }}
          className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/10 transition-all duration-300 group"
          >
          <div
            className="w-12 h-12 rounded-lg flex-shrink-0 shadow-lg"
            style={{ backgroundColor: item.color }}
          />
          <div className="flex-1 min-w-0">
            <div className="text-[#fafaf8] font-medium text-sm md:text-base truncate">{item.label}</div>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-[#fafa5e] flex-shrink-0">{item.percentage}%</div>
          </motion.div>
        ))}
        </div>
      </div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[#fafa5e]/20">
        <p className="text-[#fafaf8] text-sm leading-relaxed">Launched on <span className="text-[#fafa5e] font-semibold">Ethereum</span></p>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[#fafa5e]/20">
        <p className="text-[#fafaf8] text-sm leading-relaxed">Angel Round returns: <span className="text-[#fafa5e] font-semibold">2x - 10x</span></p>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[#fafa5e]/20">
        <p className="text-[#fafaf8] text-sm leading-relaxed">USDT share: <span className="text-[#fafa5e] font-semibold">40% → 10% → 0%</span></p>
        </div>
      </motion.div>
      </div>
    </section>
  );
}