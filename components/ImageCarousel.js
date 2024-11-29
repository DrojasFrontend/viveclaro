import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState('bg-white');

  const images = [
    '/images/logo-black.png',
    '/images/logo-white.png',
    '/images/logo-red.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < 300) setBgColor('bg-white');
      else if (scroll < 600) setBgColor('bg-blue-100');
      else if (scroll < 900) setBgColor('bg-purple-100');
      else setBgColor('bg-pink-100');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-500`}>
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-96 h-72">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                idx === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;