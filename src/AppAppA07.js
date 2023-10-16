import React from 'react';
import { useState, useEffect } from 'react';

export default function AppAppA07() {
  const images = [
    './imgs/movie1.jpg',
    './imgs/movie2.jpg',
    './imgs/movie3.jpg',
    './imgs/movie4.jpg',
  ];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
}

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return <img src={images[index % images.length]} height="300" />;
};
