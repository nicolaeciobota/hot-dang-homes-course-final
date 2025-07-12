import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = async (context) => {
  const props = await getPageStaticProps(context);
  
  // Add ISR revalidation for properties
  if (props.props?.blocks) {
    return {
      ...props,
      revalidate: 60, // Revalidate every 60 seconds
    };
  }
  
  return props;
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesAndPropertiesQuery {
        pages {
          nodes {
            uri
            modified
          }
        }
        properties {
          nodes {
            uri
            modified
            propertyFeatures {
              price
              numberOfBedrooms
              hasParking
              petFriendly
              numBathrooms
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });
  
  const paths = [...data.pages.nodes, ...data.properties.nodes]
    .filter((page) => page.uri !== "/")
    .map((page) => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split("/"),
      },
    }));
    
  return {
    paths,
    fallback: "blocking", // Enable ISR for new properties
  };
};