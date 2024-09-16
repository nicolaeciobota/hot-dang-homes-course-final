import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { getPageSeo } from "utils/getPageSeo";

export default async function Home(){
 const data = await getPage("/");
 console.log({data});
 return <BlockRenderer blocks={data}/>;
}
export async function generateMetadata() {
 const seo = await getPageSeo("/");
 return {
   title: seo.title,
   description: seo.metaDesc,
 };
}