import Link from "next/link";
import Image from "next/image";
import numeral from "numeral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const PropertyCard = ({
 title, 
 destination, 
 image, 
 bedrooms, 
 bathrooms, 
 price, 
 hasParking, 
 petFriendly}) => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Fix malformed URLs
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

  const fixedImage = fixImageUrl(image);
  
  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="h-full">
        <Link legacyBehavior href={destination}>
          <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200 h-full flex flex-col">
            <div className="w-full mb-3">
              {fixedImage && ( 
                <Image 
                  src={fixedImage} 
                  height={200} 
                  width={300} 
                  className="object-cover h-[200px] w-full rounded" 
                  alt="Property" 
                />
              )}
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold mb-2">{title}</div>
              <div className="text-lg font-semibold text-pink-600 mb-3">£{numeral(price).format("0,0")}</div>
              <div className="flex justify-between text-sm mb-3">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBathtub} className="text-slate-600" />
                  <span className="pl-2">{bathrooms} bathrooms</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBed} className="text-slate-600" />
                  <span className="pl-2">{bedrooms} bedrooms</span>
                </div>
              </div>
              {(!!hasParking || !!petFriendly) && (
                <div className="flex justify-between text-sm">
                  <div>
                    {!!hasParking && (
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faCar} className="text-slate-600" />
                        <span className="pl-2">Parking</span>
                      </div>
                    )}
                  </div>
                  <div>
                    {!!petFriendly && (
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faDog} className="text-slate-600" />
                        <span className="pl-2">Pet friendly</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};