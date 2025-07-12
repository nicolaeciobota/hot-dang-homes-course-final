import { usePageContext } from "context/page";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Cover = ({ children, background }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Fix malformed URLs by ensuring proper protocol and slashes
  const fixImageUrl = (url) => {
    if (!url) return '';
    // If URL is missing protocol, add https://
    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }
    // Fix missing slash after domain
    if (url.includes('hotdanghomes.web-design-studio.co.ukwp-content')) {
      url = url.replace('hotdanghomes.web-design-studio.co.ukwp-content', 'hotdanghomes.web-design-studio.co.uk/wp-content');
    }
    return url;
  };

  const fixedBackground = fixImageUrl(background);

  return (
    <div ref={ref} className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center w-full">
      {/* Background Image - Fades in last and slowly */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2.5, delay: 1.0, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          alt="Cover"
          src={fixedBackground}
          fill
          className="mix-blend-soft-light object-cover"
        />
      </motion.div>
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3, // Start after image fade
          ease: "easeOut" 
        }}
      >
        <div className="text-center text-white">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
