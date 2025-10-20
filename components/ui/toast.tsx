import { motion, AnimatePresence } from "framer-motion";
import { X, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface ToastProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string;
  duration?: number;
}

export function Toast({ show, onClose, title, description, duration = 10000 }: ToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (show) {
      setProgress(100);
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - (100 / (duration / 100));
          if (newProgress <= 0) {
            clearInterval(interval);
            onClose();
            return 0;
          }
          return newProgress;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-6 right-6 z-[9999] max-w-md"
        >
          <div className="bg-gradient-to-br from-[#473535] to-[#2d2d2d] border-2 border-[#fafa5e] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#fafa5e]/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#fafa5e]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-[#fafa5e] mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-[#fafaf8]/80 leading-relaxed">
                    {description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-[#fafaf8]/60" />
                </button>
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-black/20">
              <motion.div
                className="h-full bg-gradient-to-r from-[#fafa5e] to-[#f38524]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for using toast
export function useToast() {
  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    description: string;
  }>({
    show: false,
    title: "",
    description: "",
  });

  const showToast = (title: string, description: string) => {
    setToast({ show: true, title, description });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  return {
    toast,
    showToast,
    hideToast,
  };
}
