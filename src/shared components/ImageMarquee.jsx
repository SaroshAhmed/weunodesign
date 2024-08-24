import React from 'react';

const ImageMarquee = ({ items }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content animate-marquee">
        {items.map((item, index) => (
          <div key={index} className="marquee-item">
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              className="md:max-w-full md:h-auto h-80 min-w-[200px]"
            />
            <p className="mt-4 text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
