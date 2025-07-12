import { ColumnFadeIn } from "components/animations/ColumnFadeIn";
import { Children } from "react";
import { theme } from "theme";
import { useState, useEffect } from "react";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  textColorKey,
  backgroundColorKey,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    // Check immediately
    checkDarkMode();
    
    // Listen for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  
  // Use the explicit text color that's passed in
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor: backgroundColor } : {};
  
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
