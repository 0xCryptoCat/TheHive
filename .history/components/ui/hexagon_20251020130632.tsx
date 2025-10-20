import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface HexagonProps {
  children?: ReactNode;
  color?: string;
  gradient?: string; // CSS gradient string like "linear-gradient(135deg, #fafa5e, #f38524)"
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
  gradient,
  size = "md",
  className = "",
  src,
  animate = false,
  whileHover,
  transition,
  style,
}: HexagonProps) {
  const sizeClass = `hexagon-${size}`;
  
  // If image is provided, use clip-path hexagon
  if (src) {
    const Component = animate ? motion.div : 'div';
    const motionProps = animate ? { whileHover, transition } : {};
    
    return (
      <Component
        className={`hexagon-image ${sizeClass} ${className}`}
        style={{
          ...style,
          '--hexagon-bg-image': `url(${src})`,
        } as CSSProperties}
        {...motionProps}
      >
        {children && <span className="relative z-10">{children}</span>}
      </Component>
    );
  }
  
  // Original hexagon with 3 rotated rectangles
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
