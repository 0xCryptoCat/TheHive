import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="w-full"
    >
      <h4 className="text-xl font-bold mb-6 text-[#fafa5e]">Contact Us</h4>
      
      <div className="space-y-4">
        <p className="text-[#fafaf8]/80 text-sm">
          Have questions or want to get in touch? Send us an email and we'll get back to you as soon as possible.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            asChild
            className="w-full bg-gradient-to-r from-[#fafa5e] to-[#f38524] hover:from-[#fafa5e]/90 hover:to-[#f38524]/90 text-[#473535] font-bold"
          >
            <a
              href="mailto:becomethehive@gmail.com"
              className="flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
