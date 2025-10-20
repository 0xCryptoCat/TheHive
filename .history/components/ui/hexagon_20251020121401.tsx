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
    '--hexagon-color': src ? 'transparent' : color,
  } as CSSProperties;

  // If there's an image source, add it as CSS variable for pseudo-elements
  if (src) {
    (hexStyle as any)['--hexagon-image'] = `url(${src})`;
  }

  if (animate && src) {
    return (
      <motion.div
        className={`hexagon ${sizeClass} ${src ? 'hexagon-image' : ''} ${className}`}
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
        className={`hexagon ${sizeClass} hexagon-image ${className}`}
        style={hexStyle}
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
