import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div 
      className="flex justify-center items-center min-h-[200px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <span className="ml-3 text-lg text-slate-600 dark:text-gray-300">Loading...</span>
    </motion.div>
  );
};

export default Loading;
