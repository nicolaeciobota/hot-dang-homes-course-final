import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import {PageWrapper} from "context/page";
import Head from "next/head";
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
    <BlockRenderer blocks={props.blocks} />
    </PageWrapper>);
    
};
