import { ButtonLink } from "components/ButtonLink";
import { motion } from "framer-motion";

export const CallToActionButton = ({
  align = "left",
  buttonLabel,
  destination,
  heroAnimation = false,
}) => {
  const alignMap = {
    left: "text-align",
    center: "text-center",
    right: "text-right",
  };
  
  if (heroAnimation) {
    return (
      <motion.div 
        className={alignMap[align]}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.5, // Half second delay
          ease: "easeOut" 
        }}
      >
        <ButtonLink destination={destination} label={buttonLabel} />
      </motion.div>
    );
  }
  
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  );
};
