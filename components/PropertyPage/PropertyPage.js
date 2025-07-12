import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";
import { Suspense } from "react";
import Loading from "../Page/Loading";

export const PropertyPage = (props) => {
  console.log("PROPERTY PAGE PROPS: ", props);
  
  // Extract property-specific data
  const propertyData = props.propertyData || {};
  const isProperty = !!propertyData.propertyFeatures;
  
  return (
    <PageWrapper>
      <Head>
        <title>{props.seo.title || propertyData.title}</title>
        <meta name="description" content={props.seo.metaDesc || `View details for ${propertyData.title}`} />
        
        {/* Property-specific meta tags for better SEO */}
        {isProperty && (
          <>
            <meta property="og:type" content="property" />
            <meta property="og:title" content={propertyData.title} />
            <meta property="og:description" content={props.seo.metaDesc || `View details for ${propertyData.title}`} />
            {propertyData.featuredImage?.node?.sourceUrl && (
              <meta property="og:image" content={propertyData.featuredImage.node.sourceUrl} />
            )}
            <meta property="og:url" content={props.uri} />
            
            {/* Schema.org structured data for properties */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": propertyData.title,
                  "description": props.seo.metaDesc || `View details for ${propertyData.title}`,
                  "image": propertyData.featuredImage?.node?.sourceUrl,
                  "url": props.uri,
                  "offers": {
                    "@type": "Offer",
                    "price": propertyData.propertyFeatures?.price,
                    "priceCurrency": "GBP",
                    "availability": "https://schema.org/InStock"
                  },
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "Bedrooms",
                      "value": propertyData.propertyFeatures?.numberOfBedrooms
                    },
                    {
                      "@type": "PropertyValue", 
                      "name": "Bathrooms",
                      "value": propertyData.propertyFeatures?.numBathrooms
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Parking",
                      "value": propertyData.propertyFeatures?.hasParking ? "Yes" : "No"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Pet Friendly",
                      "value": propertyData.propertyFeatures?.petFriendly ? "Yes" : "No"
                    }
                  ]
                })
              }}
            />
          </>
        )}
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <MainMenu
          items={props.mainMenuItems}
          callToActionDestination={props.callToActionDestination}
          callToActionLabel={props.callToActionLabel}
        />
        
        <Suspense fallback={<Loading />}>
          <BlockRenderer blocks={props.blocks} />
        </Suspense>
      </div>
    </PageWrapper>
  );
}; 