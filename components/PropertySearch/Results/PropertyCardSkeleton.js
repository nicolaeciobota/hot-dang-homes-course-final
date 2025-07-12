import React from "react";
import { motion } from "framer-motion";

export const PropertyCardSkeleton = () => {
  return (
    <motion.div 
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="border-2 border-slate-300 dark:border-gray-600 p-5 block bg-slate-100 dark:bg-gray-800 h-full flex flex-col">
        {/* Image skeleton */}
        <div className="w-full mb-3">
          <motion.div 
            className="bg-slate-200 dark:bg-gray-700 h-[200px] w-full rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
        </div>
        
        {/* Content skeleton */}
        <div className="flex-1">
          {/* Title skeleton */}
          <motion.div 
            className="bg-slate-200 dark:bg-gray-700 h-6 w-3/4 rounded mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          ></motion.div>
          
          {/* Price skeleton */}
          <motion.div 
            className="bg-slate-200 dark:bg-gray-700 h-6 w-1/2 rounded mb-3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          ></motion.div>
          
          {/* Features skeleton */}
          <div className="flex justify-between">
            <motion.div 
              className="bg-slate-200 dark:bg-gray-700 h-4 w-1/3 rounded"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            ></motion.div>
            <motion.div 
              className="bg-slate-200 dark:bg-gray-700 h-4 w-1/3 rounded"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 