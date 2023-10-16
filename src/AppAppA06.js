import React from 'react';
import { useState } from 'react';

export default function AppAppA06() {
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

  return (
    <div onClick={() => setIndex(index + 1)}>
      <img src={images[index % images.length]} height="300" />
    </div>
  );
};
