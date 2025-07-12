import { theme } from "theme";
import { useState, useEffect } from "react";

export const Column = ({ children, width, textColor, backgroundColor, textColorKey, backgroundColorKey }) => {
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
  
  // If in dark mode and background is light grey (tertiary), change to pagination button grey
  let finalBackgroundColor = backgroundColor;
  if (isDarkMode && backgroundColorKey === 'tertiary') {
    finalBackgroundColor = '#374151'; // Pagination button grey
  } else if (isDarkMode && backgroundColor === '#F6F6F6') {
    // Also check for the actual light grey color value
    finalBackgroundColor = '#374151'; // Pagination button grey
  }
  
  // Only apply text color if explicitly set, otherwise inherit from parent
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = finalBackgroundColor ? { backgroundColor: finalBackgroundColor } : {};
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div
      style={{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }}
      className="px-2 py-5"
    >
      {children}
    </div>
  );
};
