import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { FormspreeForm } from "components/FormspreeForm";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { PostTitle } from "components/PostTitle";
import { PropertySearch } from "components/PropertySearch";
import { PropertyFeatures } from "components/PropertyFeatures";
import { TickItem } from "components/TickItem";
import { Gallery } from "components/Gallery";
import { FadeInOnScroll } from "components/animations/FadeInOnScroll";
import { AnimatedText } from "components/animations/AnimatedText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { theme } from "theme";

// Text block wrapper component with direct animation
const AnimatedTextBlock = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.2,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const BlockRenderer = ({ blocks, context = "default" }) => {
  return blocks.map((block, index) => {
    const BlockComponent = () => {
      switch (block.name) {
        case "acf/tickitem":{
          return (<TickItem key={block.id}>
           <BlockRenderer blocks={block.innerBlocks} context={context} />
          </TickItem>);
        }
        case "core/gallery": {
          return (
          <Gallery key={block.id} columns={block.attributes.columns || 3} cropImages={block.attributes.imageCrop} items={block.innerBlocks} 
          />
          )
        }
        case "acf/propertyfeatures": {
          return ( <PropertyFeatures key={block.id} price={block.attributes.price}
          bedrooms={block.attributes.bedrooms} 
          bathrooms={block.attributes.bathrooms}
          hasParking={block.attributes.hasParking}
          petFriendly={block.attributes.petFriendly}
          />)
        }
        case "acf/formspreeform": {
          return (<FormspreeForm key={block.id} formId={block.attributes.data.form_id} />)
        }
        case "acf/ctabutton": {
          return (
            <CallToActionButton
              key={block.id}
              buttonLabel={block.attributes.data.label}
              destination={block.attributes.data.destination || "/"}
              align={block.attributes.data.align}
              heroAnimation={context === "cover"} // Enable hero animation for Cover context
            />
          );
        }
        case "core/paragraph": {
          return (
            <Paragraph
              key={block.id}
              textAlign={block.attributes.align}
              content={block.attributes.content}
              textColor={
                theme[block.attributes.textColor] ||
                block.attributes.style?.color?.text
              }
              disableTextColor={context === "colored-container"}
            />
          );
        }
        case "core/post-title":
        case "core/heading": {
          return (
            <Heading
              key={block.id}
              level={block.attributes.level}
              content={block.attributes.content}
              textAlign={block.attributes.textAlign}
              context={context}
              disableTextColor={context === "colored-container"}
            />
          );
        }
        case "acf/propertysearch": {
          return (
          <PropertySearch key={block.id} />
          );
        }
        case "core/cover": {
          console.log("COVER BLOCK: ", block);
          return (
            <Cover key={block.id} background={block.attributes.url}>
              <BlockRenderer blocks={block.innerBlocks} context="cover" />
            </Cover>
          );
        }
        case "core/columns": {
          console.log("COLUMNS: ", block.attributes);
          // Check if this columns block has a background color
          const hasBackgroundColor = block.attributes.backgroundColor || block.attributes.textColor;
          const columnsContext = hasBackgroundColor ? "colored-container" : context;
          
          return (
            <Columns
              key={block.id}
              isStackedOnMobile={block.attributes.isStackedOnMobile}
              textColor={
                block.attributes.textColor ? theme[block.attributes.textColor] : null
              }
              backgroundColor={
                block.attributes.backgroundColor ? theme[block.attributes.backgroundColor] : null
              }
              textColorKey={block.attributes.textColor}
              backgroundColorKey={block.attributes.backgroundColor}
            >
              <BlockRenderer blocks={block.innerBlocks} context={columnsContext} />
            </Columns>
          );
        }
        case "core/column": {
          // Check if dark mode is active
          const isDarkMode = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
          
          return (
            <Column
              key={block.id}
              width={block.attributes.width}
              textColor={
                theme[block.attributes.textColor] ||
                block.attributes.style?.color?.text
              }
              backgroundColor={
                theme[block.attributes.backgroundColor] ||
                block.attributes.style?.color?.background
              }
              textColorKey={block.attributes.textColor}
              backgroundColorKey={block.attributes.backgroundColor}
            >
              <BlockRenderer blocks={block.innerBlocks} context={context} />
            </Column>
          );
        }
        case "core/list": {
          return (
            <div 
              key={block.id}
              className="wp-block-list text-gray-900 dark:text-gray-100"
              dangerouslySetInnerHTML={{ __html: block.dynamicContent }}
            />
          );
        }
        case "core/spacer": {
          return (
            <div 
              key={block.id}
              style={{ height: block.attributes.height || '20px' }}
              aria-hidden="true"
            />
          );
        }
        case "core/group":
        case "core/block": {
          return <BlockRenderer key={block.id} blocks={block.innerBlocks} context={context} />;
        }
        case "core/image": {
          return (
            <Image
              key={block.id}
              src={block.attributes.url}
              height={block.attributes.height}
              width={block.attributes.width}
              alt={block.attributes.alt || ""}
            />
          );
        }
        default: {
          console.log("UNKNOWN: ", block);
          return null;
        }
      }
    };

    // Only apply animations to certain block types
    const shouldAnimate = [
      "acf/formspreeform",
      "acf/propertysearch", 
      "core/gallery",
      "core/cover",
      "core/image",
      "acf/ctabutton" // Add CTA buttons to regular animations
    ].includes(block.name);

    // For text blocks, use very quick fade-in
    const isTextBlock = [
      "core/paragraph",
      "core/heading",
      "core/post-title",
      "core/list"
    ].includes(block.name);

    // CTA buttons have their own hero timing
    const isCtaButton = block.name === "acf/ctabutton";

    // Debug logging
    if (isTextBlock) {
      console.log("Text block found:", block.name, block.id);
    }

    if (shouldAnimate) {
      return (
        <FadeInOnScroll key={block.id} delay={index * 0.02} duration={0.6}>
          <BlockComponent />
        </FadeInOnScroll>
      );
    } else if (isTextBlock && context === "cover") {
      // Use line-by-line animation for text blocks in Cover context
      return (
        <AnimatedText key={block.id} delay={index * 0.1} context="cover">
          <BlockComponent />
        </AnimatedText>
      );
    } else if (isTextBlock) {
      return (
        <AnimatedTextBlock key={block.id} delay={index * 0.02}>
          <BlockComponent />
        </AnimatedTextBlock>
      );
    } else if (isCtaButton) {
      return (
        <div key={block.id}>
          <BlockComponent />
        </div>
      );
    } else {
      return (
        <div key={block.id}>
          <BlockComponent />
        </div>
      );
    }
  });
};
