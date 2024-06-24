"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Product {
  id: number;
  title: string;
  // Add other properties from the product data as needed
}





function Feature() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [featureData, setFeatureData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setFeatureData(data));
  }, []);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {featureData.map(item => (
          <div key={item.id} className="main">
            {item.title} {/* Displaying product title or any other property */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Feature;
