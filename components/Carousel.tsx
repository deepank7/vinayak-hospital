"use client";

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel: React.FC = () => {
  return (
    <Carousel showThumbs={true} autoPlay infiniteLoop className="carousel-image">
      <div key="1">
        <img src="/hospital1.jpeg" alt="Patient testimonial 1" />
      </div>
      <div key="3">
        <img src="/hospital3.jpeg" alt="Patient testimonial 3" />
      </div>
      <div key="4">
        <img src="/hospital4.jpeg" alt="Patient testimonial 4" />
      </div>
      <div key="5">
        <img src="/hospital5.jpeg" alt="Patient testimonial 5" />
      </div>
      <div key="6">
        <img src="/hospital6.jpeg" alt="Patient testimonial 6" />
      </div>
      <div key="7">
        <img src="/hospital7.jpeg" alt="Patient testimonial 7" />
      </div>
      <div key="8">
        <img src="/hospital8.jpeg" alt="Patient testimonial 8" />
      </div>

    </Carousel>
  );
};

export default ImageCarousel;
