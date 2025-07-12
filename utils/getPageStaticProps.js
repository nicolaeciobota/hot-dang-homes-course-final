import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
        ... on Property {
          id
          title
          blocks
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          propertyFeatures {
            price
            numberOfBedrooms
            hasParking
            petFriendly
            numBathrooms
          }
          seo {
            title
            metaDesc
          }
        }
      }
        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  // Check if nodeByUri exists
  if (!data.nodeByUri) {
    return {
      notFound: true,
    };
  }

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks || []);
  
  // Check if this is a property
  const isProperty = data.nodeByUri.propertyFeatures !== undefined;
  
  return {
    props: {
      seo: data.nodeByUri.seo || {},
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu?.mainMenu?.menuItems || []
      ),
      callToActionLabel:
        data.acfOptionsMainMenu?.mainMenu?.callToActionButton?.label || "",
      callToActionDestination:
        data.acfOptionsMainMenu?.mainMenu?.callToActionButton?.destination?.uri || "/",
      blocks,
      // Add property-specific data
      ...(isProperty && {
        propertyData: {
          title: data.nodeByUri.title,
          uri: data.nodeByUri.uri,
          featuredImage: data.nodeByUri.featuredImage,
          propertyFeatures: data.nodeByUri.propertyFeatures,
        },
        uri: data.nodeByUri.uri,
      }),
    },
  };
};
