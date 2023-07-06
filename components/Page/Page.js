import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);
  return (<div>
    <MainMenu
      items={props.mainMenuItems}
      callToActionDestination={props.callToActionDestination}
      callToActionLabel={props.callToActionLabel}
    />
    <BlockRenderer blocks={props.blocks} />
    </div>);
    
};
