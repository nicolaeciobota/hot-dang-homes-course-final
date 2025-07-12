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
 petFriendly,
 delay = 0}) => {
  
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
      className="flex flex-1 mx-auto content-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <Link legacyBehavior href={destination}>
        <a className="border-2 broder-slate-300 p-5 block bg-slate-100 hover:bg-slate-200 content-center hover:shadow-xl hover:scale-103 transition-all duration-300 ease-out">
          <div className="flex w-full">
            {fixedImage && ( 
              <Image 
                src={fixedImage} 
                height={200} 
                width={300} 
                className="object-cover h-[200px]" 
                alt="Property" 
              />
            )}
          </div>
          <div className="mt-3 text-lg font-bold">{title}</div>
          <div className="text-lg">£{numeral(price).format("0,0")}</div>
          <div className="flex justify-between text-sm mt-3">
            <div>
              <FontAwesomeIcon icon={faBathtub} />
              <span className="pl-2">{bathrooms} bathrooms</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBed} />
              <span className="pl-2">{bedrooms} bedrooms</span>
            </div>
          </div>
          {(!!hasParking || !!petFriendly) && (
            <div className="flex justify-between text-sm mt-3">
              <div>
                {!!hasParking && (
                  <>
                    <FontAwesomeIcon icon={faCar} /> parking available
                  </>
                )}
              </div>
              <div>
                {!!petFriendly && (
                  <>
                    <FontAwesomeIcon icon={faDog} /> pet friendly
                  </>
                )}
              </div>
            </div>
          )}
        </a>
      </Link>
    </motion.div>
  );
};