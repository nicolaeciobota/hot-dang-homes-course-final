import { PropertyCard } from "./PropertyCard";
import { motion } from "framer-motion";

export const Results = ({properties, loading = false}) => {
  // Show simple loading state while loading
  if (loading) {
    return (
      <motion.div 
        className="max-w-5xl mx-auto flex justify-center items-center min-h-[200px] mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600 mr-3"></div>
          <span className="text-lg text-slate-600">Searching properties...</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-5 mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {properties.map((property, index) => (
        <PropertyCard 
          key={property.databaseId} 
          title={property.title} 
          destination={property.uri} 
          bedrooms={property.propertyFeatures.numberOfBedrooms} 
          bathrooms={property.propertyFeatures.numBathrooms} 
          price={property.propertyFeatures.price} 
          hasParking={property.propertyFeatures.hasParking} 
          petFriendly={property.propertyFeatures.petFriendly}
          image={property.featuredImage?.node?.sourceUrl}
          delay={index * 0.5} // Staggered delay: 0s, 0.5s, 1s, etc.
        />
      ))}
    </motion.div>
  );
};