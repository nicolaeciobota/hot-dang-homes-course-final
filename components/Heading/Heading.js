import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({ textAlign, content, level, context = "default", disableTextColor = false }) => {
  // Use white text for cover context, otherwise use theme-aware colors
  // But allow disabling text color classes when inside colored containers
  const textColorClass = context === "cover" 
    ? "text-white" 
    : disableTextColor 
      ? "" 
      : "text-gray-900 dark:text-white";

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 px-4 md:px-0 ${textColorClass} ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
