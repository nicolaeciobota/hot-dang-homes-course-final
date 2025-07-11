import Image from "next/image";

export const Gallery = ({columns, cropImages, items}) => {
  let maxHeight = 0;
  let maxWidth = 0;
  
  if(cropImages){
    items.forEach(item => {
      if(item.attributes.height > maxHeight){
        maxHeight = item.attributes.height;
      }
      if(item.attributes.width > maxWidth){
        maxWidth = item.attributes.width;
      }
    })
  }
  
  const columnWidth = 100 / columns;
  
  // Fix malformed URLs
  const fixImageUrl = (url) => {
    if (!url) return '';
    // If URL is missing protocol, add https://
    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }
    // Fix missing slash after domain
    if (url.includes('hotdanghomes.web-design-studio.co.ukwp-content')) {
      url = url.replace('hotdanghomes.web-design-studio.co.ukwp-content', 'hotdanghomes.web-design-studio.co.uk/wp-content');
    }
    return url;
  };
  
  return (
    <div className="flex flex-wrap max-w-5xl mx-auto" >
      {items.map(item => (
        <div key={item.id} style={{width: `${columnWidth}%`}} className="p-5 flex-grow">
          <Image 
            src={fixImageUrl(item.attributes.url)} 
            height={maxHeight || item.attributes.height } 
            width={maxWidth || item.attributes.width} 
            alt={item.attributes.alt || ''} 
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};