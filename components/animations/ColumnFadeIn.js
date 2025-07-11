import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ColumnFadeIn = ({ children, direction = "left", delay = 0, duration = 0.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      default:
        return { opacity: 0, x: -50 };
    }
  };

  const getAnimatePosition = () => {
    return isInView ? { opacity: 1, x: 0 } : getInitialPosition();
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={getAnimatePosition()}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 