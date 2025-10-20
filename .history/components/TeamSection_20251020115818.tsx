import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Hexagon } from "./ui/hexagon";

export function TeamSection() {
  const team = [
    {
      name: "John Anderson",
      role: "Founder",
      description: "12M+ social reach, marketing visionary.",
      color: "#f38524",
    },
    {
      name: "Speros (Strong)",
      role: "Co-Founder & CBDO",
      description: "The community lead behind Shinja.",
      color: "#fafa5e",
    },
    {
      name: "Speros (Strong)",
      role: "Lead Developer",
      description: "CryptoCat innovator.",
      color: "#f38524",
    },
    {
      name: "LuhLuh",
      role: "Design Lead",
      description: "Aesthetic architect behind Honey Inc's brand.",
      color: "#fafa5e",
    },
    {
      name: "Larry Lundy",
      role: "Advisor",
      description: "Veteran crypto strategist.",
      color: "#f38524",
    },
    {
      name: "Milking Time",
      role: "Advisor",
      description: "Web3 analytics expert.",
      color: "#fafa5e",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#2d2d2d] to-[#473535] relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 text-[#fafaf8]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The worker bees of the Hive.
          </motion.h2>
          <p className="text-lg md:text-xl text-[#fafaf8]/80 max-w-4xl mx-auto">
            A dedicated team of innovators, creators, and strategists united by one vision
          </p>
        </motion.div>

        {/* Team Grid with Hexagonal Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#fafa5e]/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Avatar Hexagon */}
                <div className="relative mb-8 flex justify-center">
                  <div className="relative">
                    <Hexagon
                      color={member.color}
                      size="xl"
                      animate={true}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="shadow-lg"
                    >
                      <User className="w-14 h-14 text-[#473535]" />
                    </Hexagon>
                    
                    {/* Hexagonal border glow effect */}
                    <motion.div
                      className="absolute inset-0 -z-10"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        background: `conic-gradient(from 0deg, ${member.color}, transparent, ${member.color})`,
                        filter: 'blur(12px)',
                        opacity: 0.4,
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-center mb-2 text-[#fafaf8]">{member.name}</h3>
                <p
                  className="text-center text-sm mb-3"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p className="text-center text-sm text-[#fafaf8]/70">
                  {member.description}
                </p>

                {/* Connection lines (decorative) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Honeycomb Connection Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <svg width="400" height="100" viewBox="0 0 400 100" className="hidden lg:block">
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1={80 * i}
                y1="50"
                x2={80 * (i + 1)}
                y2="50"
                stroke="#fafa5e"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
