import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="w-full"
    >
      <h4 className="text-xl font-bold mb-6 text-[#fafa5e]">Contact Us</h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-2 w-5 h-5 text-[#fafaf8]/50" />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
            required
            className="pl-10 bg-white/10 border-white/20 text-[#fafaf8] placeholder:text-[#fafaf8]/50 focus:border-[#fafa5e]/50 focus:ring-[#fafa5e]/20"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-2 w-5 h-5 text-[#fafaf8]/50" />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
            className="pl-10 bg-white/10 border-white/20 text-[#fafaf8] placeholder:text-[#fafaf8]/50 focus:border-[#fafa5e]/50 focus:ring-[#fafa5e]/20"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#fafaf8]/50" />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={4}
            className="pl-10 bg-white/10 border-white/20 text-[#fafaf8] placeholder:text-[#fafaf8]/50 focus:border-[#fafa5e]/50 focus:ring-[#fafa5e]/20 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#fafa5e] to-[#f38524] hover:from-[#fafa5e]/90 hover:to-[#f38524]/90 text-[#473535] font-bold"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="w-4 h-4" />
              </motion.div>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </span>
          )}
        </Button>

        {submitStatus === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#fafa5e] text-sm text-center"
          >
            ✓ Message sent successfully!
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
