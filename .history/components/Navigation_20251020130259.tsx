import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(71, 53, 53, 0)", "rgba(71, 53, 53, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Vision", href: "#vision" },
    { label: "Features", href: "#features" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Team", href: "#team" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors"
      initial={{ borderColor: "rgba(250, 250, 94, 0)" }}
      animate={{ borderColor: isScrolled ? "rgba(250, 250, 94, 0.3)" : "rgba(250, 250, 94, 0)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <motion.img 
              src="/Logo.png"
              alt="The Hive Logo"
              className="w-12 h-12 rounded-xl object-contain"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-[#fafa5e] to-[#f38524] bg-clip-text text-transparent">The Hive</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-[#fafaf8]/90 hover:text-[#fafa5e] transition-colors text-base font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fafa5e] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-[#fafa5e] to-[#f38524] hover:from-[#fafa5e]/90 hover:to-[#f38524]/90 text-[#473535] font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdV-1F6yKITzu-gRwsvkOD5SrA_vIFS4KnN2ImHDCXjNqyJtQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Invest Now
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#fafaf8] p-2 text-center"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#fafaf8]/80 hover:text-[#fafa5e] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="w-full bg-[#fafa5e] hover:bg-[#fafa5e]/90 text-[#473535] rounded-full"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdV-1F6yKITzu-gRwsvkOD5SrA_vIFS4KnN2ImHDCXjNqyJtQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Invest Now
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
