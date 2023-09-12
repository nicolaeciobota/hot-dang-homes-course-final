import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { notFound } from "next/navigation";
import { getPageSeo } from "utils/getPageSeo";
export default async function Page({params}){
 const data = await getPage(params.slug.join("/"));
 if(!data){
  notFound();
   }
 console.log({data});
 return <BlockRenderer blocks={data}/>;
}
export async function generateMetadata({params}) {
  const seo = await getPageSeo(params.slug.join("/"));
  return {
    title: seo.title,
    description: seo.metaDesc,
  };
 }