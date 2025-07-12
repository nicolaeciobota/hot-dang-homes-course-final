import { gql } from "@apollo/client";
import client from "client";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const { data } = await client.query({
    query: gql`
      query SitemapQuery {
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
          }
        }
      }
    `,
  });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hotdanghomes.web-design-studio.co.uk';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${data.pages.nodes
        .filter((page) => page.uri !== "/")
        .map((page) => `
          <url>
            <loc>${baseUrl}${page.uri}</loc>
            <lastmod>${new Date(page.modified).toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `).join("")}
      ${data.properties.nodes
        .map((property) => `
          <url>
            <loc>${baseUrl}${property.uri}</loc>
            <lastmod>${new Date(property.modified).toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.9</priority>
          </url>
        `).join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap; 