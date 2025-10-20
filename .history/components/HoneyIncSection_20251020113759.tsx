import { motion } from "framer-motion";
import { Send, Smartphone, Award } from "lucide-react";
import { Hexagon } from "./ui/hexagon";

export function HoneyIncSection() {
  const steps = [
    { icon: Send, label: "Telegram", color: "#fafa5e" },
    { icon: Smartphone, label: "App Store", color: "#f38524" },
    { icon: Award, label: "Rewards", color: "#fafa5e" },
  ];

  return (
    <section className="py-24 bg-[#473535] relative overflow-hidden">
      {/* Animated Honeycomb Background Pattern */}
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#fafaf8]">
            Honey, Inc. - Guiding You to the Sweet Spot
          </h2>
          <p className="text-lg text-[#fafaf8]/90 max-w-4xl mx-auto leading-relaxed">
            Honey Inc is more than a newsletter — it's the onboarding bridge for the crypto-gaming world. Through our <span className="text-[#fafa5e]">"Refer & Earn"</span> model and gamified content, users get rewarded for engagement, learning, and sharing. With plans to launch on Telegram, iOS, and Google Play, Honey Inc drives user acquisition and retention with performance metrics ranging from <span className="text-[#f38524]">2.00 to 450 RPM</span>.
          </p>
        </motion.div>

        {/* Animated Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center relative z-10"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="mb-4"
                >
                  <Hexagon
                    color={step.color}
                    size="sm"
                    className="shadow-2xl"
                  >
                    <Icon className="w-12 h-12 text-[#473535]" />
                  </Hexagon>
                </motion.div>
                <span className="text-[#fafaf8] text-lg">{step.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl text-center text-[#fafa5e] italic relative">
            <span className="text-6xl absolute -top-4 -left-4 text-[#f38524] opacity-50">"</span>
            Give a man a fish and he'll eat for a day. Teach a man to fish, and he'll feed the whole Hive.
            <span className="text-6xl absolute -bottom-12 -right-4 text-[#f38524] opacity-50">"</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
