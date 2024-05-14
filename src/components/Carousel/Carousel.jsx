// Carrusel.js
import React, { useState } from 'react';
import './Carousel.css'; // Importamos nuestro archivo CSS
import img1 from '../../assets/3img.jpg';
import img2 from '../../assets/3img2.png';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrev}><i className="bi bi-arrow-left"></i></button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button className="next" onClick={handleNext}><i className="bi bi-arrow-right"></i></button>
    </div>
  );
};

const Carrusel = () => {
  const images = [img1, img2];

  return (
    <div className="Carrusel">
      <Carousel images={images} />
    </div>
  );
};

export default Carrusel;
