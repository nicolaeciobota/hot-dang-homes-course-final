import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import {PageWrapper} from "context/page";
import Head from "next/head";
import { Suspense } from "react";
import { Loading } from "./Loading";
export const Page = (props) => {
  console.log("PAGE PROPS: ", props);
  return (
  <PageWrapper>
    <Head>
    <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
    </Head>
    <MainMenu
      items={props.mainMenuItems}
      callToActionDestination={props.callToActionDestination}
      callToActionLabel={props.callToActionLabel}
    />
    <Suspense fallback={<Loading />}><BlockRenderer blocks={props.blocks} /></Suspense>
    </PageWrapper>);
    
};
