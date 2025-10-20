import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface HexagonProps {
  children?: ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  className?: string;
  src?: string;
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
  src = undefined,
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
        <span className="relative z-10">
          {children}
        </span>
      </motion.div>
    );
  }

  if (src) {
    return (
      <div
        className={`hexagon ${sizeClass} ${className}`}
        style={{
          ...hexStyle,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span className="relative z-10">
          {children}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`hexagon ${sizeClass} ${className}`}
      style={hexStyle}
    >
      <span className="relative z-10">
        {children}
      </span>
    </div>
  );
}
