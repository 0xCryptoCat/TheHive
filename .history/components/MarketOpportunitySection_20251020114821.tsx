import { motion } from "framer-motion";

export function MarketOpportunitySection() {
  const marketData = [
    { label: "TAM", value: "$299B", description: "Total Gaming Market" },
    { label: "SAM", value: "$116.4B", description: "Mobile Gaming 2024" },
    { label: "SOM", value: "$1-5.0B", description: "Target Share" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#fafa5e]/20 via-[#fafaf8] to-[#f38524]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#473535]">
            The Hive Meets a $250B Gaming Market
          </h2>
          <p className="text-lg text-[#2d2d2d]/80 max-w-4xl mx-auto leading-relaxed">
            With over <span className="text-[#f38524]">11.1 million active gamers</span>, The Hive is positioned to grow faster than traditional Web3 firms, capturing both casual and dedicated audiences.
          </p>
        </motion.div>

        {/* Market Data Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {marketData.map((data, index) => (
            <motion.div
              key={data.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-10 rounded-3xl bg-white backdrop-blur-md shadow-xl border border-[#473535]/10 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-sm text-[#2d2d2d]/60 mb-2">{data.label}</div>
              <div className="text-4xl md:text-5xl mb-3 bg-gradient-to-r from-[#f38524] to-[#fafa5e] bg-clip-text text-transparent">
                {data.value}
              </div>
              <div className="text-[#2d2d2d]/70">{data.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
