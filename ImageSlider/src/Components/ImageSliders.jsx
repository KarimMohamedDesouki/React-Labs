// src/ImageSlider.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Components/ImageSlider.css'; // Create this CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h1 className='middle'>Image Slider</h1>
      <div className="slider">
        <button className="left-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slide">
          <img src={images[currentIndex]} alt="slide" />
        </div>
        <button className="right-arrow" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
