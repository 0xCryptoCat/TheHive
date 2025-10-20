import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Toast, useToast } from "./ui/toast";

export function InvestorCTASection() {
  const { toast, showToast, hideToast } = useToast();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#473535] via-[#f38524] to-[#fafa5e] relative overflow-hidden">
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

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-bold mb-10 text-[#fafaf8] leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Join the Hive — Invest in the Future of Gaming & Mining.
          </motion.h2>
          
          <p className="text-lg md:text-xl text-[#fafaf8]/90 mb-6 leading-relaxed">
            We're not just building a platform, we're constructing a digital ecosystem where gaming passion meets renewable innovation. Every contribution helps grow this living network.
          </p>
          
          <p className="text-lg md:text-xl text-[#fafaf8]/90 mb-12 leading-relaxed">
            Become part of The Hive, and carve your stake in the future of GameFi and sustainable mining.
          </p>

          {/* Pulsing CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-block"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(250, 250, 94, 0.6), 0 0 80px rgba(243, 133, 36, 0.3)",
                  "0 0 80px rgba(250, 250, 94, 1), 0 0 120px rgba(243, 133, 36, 0.6)",
                  "0 0 40px rgba(250, 250, 94, 0.6), 0 0 80px rgba(243, 133, 36, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast(
                      "Coming Soon",
                      "We're finalizing our investment portal. Join our Telegram community to stay updated and be the first to know when applications open!"
                    );
                  }}
                  className="bg-gradient-to-r from-[#fafa5e] to-[#f38524] hover:from-[#fafa5e]/90 hover:to-[#f38524]/90 text-[#473535] font-bold px-16 py-8 text-xl md:text-2xl rounded-full group shadow-2xl flex items-center gap-3"
                >
                  Be an Early Investor
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.p 
            className="mt-8 text-[#fafaf8]/90 text-lg font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Shape the Hive. Fuel the Future. Reap the Rewards.
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-4 h-4 rounded-full bg-[#fafaf8]/50"
            />
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <Toast show={toast.show} onClose={hideToast} title={toast.title} description={toast.description} />
    </section>
  );
}
