import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AnimatedText = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Split children into lines if it's a string
  const lines = typeof children === 'string' 
    ? children.split('\n').filter(line => line.trim())
    : [children];

  return (
    <div ref={ref} className={className}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: delay + (index * 0.2), // Stagger each line by 0.2s
            ease: "easeOut"
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}; 