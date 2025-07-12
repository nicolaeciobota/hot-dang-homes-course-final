import { motion } from "framer-motion";

export const Pagination = ({ onPageClick, totalPages }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <motion.div 
      className="flex justify-center items-center space-x-1 md:space-x-2 mb-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {pages.map((page) => (
        <motion.button
          key={page}
          onClick={() => onPageClick(page)}
          className="px-3 md:px-4 py-2 md:py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors text-sm md:text-base min-w-[40px] md:min-w-[44px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {page}
        </motion.button>
      ))}
    </motion.div>
  );
};