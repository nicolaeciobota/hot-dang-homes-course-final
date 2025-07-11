import { ColumnFadeIn } from "components/animations/ColumnFadeIn";
import { Children } from "react";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
}) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  
  // Convert children to array
  const childrenArray = Children.toArray(children);
  
  // Only apply animations if we have exactly 2 columns
  const shouldAnimate = childrenArray.length === 2;
  
  // Apply animations to column children
  const animatedChildren = childrenArray.map((child, index) => {
    if (shouldAnimate) {
      const direction = index === 0 ? "left" : "right";
      return (
        <ColumnFadeIn 
          key={child.key || index} 
          direction={direction} 
          delay={index * 0.1}
          duration={0.6}
        >
          {child}
        </ColumnFadeIn>
      );
    }
    return child;
  });

  return (
    <div
      className="my-10"
      style={{ ...textColorStyle, ...backgroundColorStyle }}
    >
      <div
        className={`max-w-5xl mx-auto ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {animatedChildren}
      </div>
    </div>
  );
};
