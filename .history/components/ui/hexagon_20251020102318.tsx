import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface HexagonProps {
  children?: ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  className?: string;
  animate?: boolean;
  whileHover?: any;
  transition?: any;
  style?: CSSProperties;
}

export function Hexagon({
  children,
  color = "#fafa5e",
  size = "md",
  className = "",
  animate = false,
  whileHover,
  transition,
  style,
}: HexagonProps) {
  const sizeClass = `hexagon-${size}`;
  
  const hexStyle: CSSProperties = {
    ...style,
    '--hexagon-color': color,
  } as CSSProperties;

  if (animate) {
    return (
      <motion.div
        className={`hexagon ${sizeClass} ${className}`}
        style={hexStyle}
        whileHover={whileHover}
        transition={transition}
      >
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <div
      className={`hexagon ${sizeClass} ${className}`}
      style={hexStyle}
    >
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
