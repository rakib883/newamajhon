"use client"
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://minion-vinovatheme.myshopify.com/cdn/shop/files/slideshow-2_776428d6-b3e7-4a7f-9fe5-d18ba9b28a8f_1920x950.jpg?v=1617703707',
    caption: 'First Slide'
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg',
    caption: 'Second Slide'
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/5299-HI---HMD---Hero---May-8_PC_Rec.jpg_1500X600._CB557171038_.jpg',
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="each-slide">
            <Image 
              src={fadeImage.url} 
              alt={fadeImage.caption} 
              layout="responsive" 
              width={1920} // Example width
              height={950} // Example height
              objectFit="cover"
            />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;
