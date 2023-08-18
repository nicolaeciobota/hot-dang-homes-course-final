import { PropertyCard } from "./PropertyCard";
export const Results = ({properties}) => {
 return (
 <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-5 mb-10">
 {properties.map(property => (
   <PropertyCard key={property.databaseId} title={property.title} destination={property.uri} bedrooms={property.propertyFeatures.numberOfBedrooms} bathrooms={property.propertyFeatures.numBathrooms} price={property.propertyFeatures.price} hasParking={property.propertyFeatures.hasParking} petFriendly={property.propertyFeatures.petFriendly} 
   image={property.featuredImage?.node?.sourceUrl}
   />
  ))
  }</div>);
};