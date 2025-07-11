import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const FadeInOnScroll = ({ children, delay = 0, duration = 0.6, className = "", margin = "-50px" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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