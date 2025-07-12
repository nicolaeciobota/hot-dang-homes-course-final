import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor, disableTextColor = false }) => {
  const textColorClass = disableTextColor ? "" : "text-gray-900 dark:text-gray-100";
  
  return (
    <p
      className={`max-w-5xl mx-auto text-sm md:text-base px-4 md:px-0 ${textColorClass} ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
