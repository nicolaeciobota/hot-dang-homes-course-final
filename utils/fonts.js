export const getTextAlign = (textAlign = "left") => {
  const textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return `${textAlignMap[textAlign] || ""}`;
};

export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
    1: "text-4xl md:text-6xl", // Smaller on mobile, full size on desktop
    2: "text-3xl md:text-5xl", // Smaller on mobile, full size on desktop
    3: "text-2xl md:text-4xl", // Smaller on mobile, full size on desktop
    4: "text-xl md:text-3xl",  // Smaller on mobile, full size on desktop
    5: "text-lg md:text-2xl",  // Smaller on mobile, full size on desktop
    6: "text-base md:text-xl", // Smaller on mobile, full size on desktop
  };

  return `${fontSizeMap[level] || ""}`;
};
