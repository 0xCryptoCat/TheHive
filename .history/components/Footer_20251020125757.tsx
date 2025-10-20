import { motion } from "framer-motion";
import { Send, Twitter, MessageCircle, Instagram } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Footer() {
  const socialLinks = [
    { icon: Send, label: "Telegram", href: "#" },
    { icon: Twitter, label: "X (Twitter)", href: "#" },
    { icon: MessageCircle, label: "Discord", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#473535] to-[#2d2d2d] text-[#fafaf8] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fafa5e] to-[#f38524] flex items-center justify-center shadow-lg">
                <span className="text-2xl">🐝</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#fafa5e] to-[#f38524] bg-clip-text text-transparent">
                The Hive
              </h3>
            </div>
            <p className="text-[#fafaf8]/80 text-base leading-relaxed">
              Building the future where gaming meets mining — naturally.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#fafa5e]">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-[#fafa5e]/20 hover:to-[#f38524]/20 transition-all duration-300 border border-white/10 hover:border-[#fafa5e]/40 shadow-lg"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#fafaf8]/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#fafaf8]/60"
          >
            <p>© 2025 Honey Inc. | Built by the Hive Mind | All Rights Reserved.</p>
            
            {/* Animated Bee Icon */}
            <motion.div
              animate={{
                x: [0, 10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-2xl"
            >
              <img src="/logo.png" alt="Logo Icon" className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
