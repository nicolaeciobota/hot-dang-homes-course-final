import { useEffect, useState } from "react";
import {Input} from "../../Input";
import queryString from "query-string";
import { motion } from "framer-motion";

export const Filters = ({onSearch, loading = false}) => {
  const [petFriendly, setPetFriendly] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  const handleSearch = () => {
    onSearch({
      petFriendly,
      hasParking,
      minPrice,
      maxPrice,
    });
  };
  
  useEffect(() => {
    const {petFriendly: petFriendlyInitial,
    hasParking: hasParkingInitial,
    minPrice: minPriceInitial,
    maxPrice: maxPriceInitial,
    } = queryString.parse(
     window.location.search
    );
    setPetFriendly(petFriendlyInitial === "true");
    setHasParking(hasParkingInitial === "true");
    setMinPrice(minPriceInitial || "");
    setMaxPrice(maxPriceInitial || "");
  }, []);
  
  return (
    <motion.div 
      className="w-full my-2 mx-auto flex justify-center items-center px-4 md:px-8 lg:px-0 lg:max-w-screen-lg lg:mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="border border-gray-300 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full">
        {/* Price Range Section */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Min price</label>
              <Input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="h-8"/>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Max price</label>
              <Input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="h-8"/>
            </div>
          </div>
        </div>
        
        {/* Checkboxes and Button Section */}
        <div className="space-y-4">
          {/* Checkboxes - Centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <label className="cursor-pointer flex items-center">
              <input type="checkbox" checked={hasParking} onChange={()=> setHasParking((value) => !value)} />
              <span className="pl-2 text-sm">Has parking</span>
            </label>
            <label className="cursor-pointer flex items-center">
              <input type="checkbox" checked={petFriendly} onChange={()=> setPetFriendly((value) => !value)} />
              <span className="pl-2 text-sm">Pet friendly</span>
            </label>
          </div>
          
          {/* Search Button - Centered and Smaller */}
          <div className="flex justify-center">
            <button 
              className="btn text-center flex items-center justify-center w-32 h-8 text-sm" 
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                  <span>Searching...</span>
                </>
              ) : (
                <span>Search</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};