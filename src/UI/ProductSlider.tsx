"use client"
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { newamajhon } from "../../type";
export default function SimpleSlider() {
    const [product,setProduct] = useState([])
    fetch("https://jsonserver.reactbd.com/amazonpro")
          .then(res=>res.json())
          .then(res=>setProduct(res))

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
  };

  return (
   <div className="main w-full overflow-x-hidden overflow-y-hidden cursor-pointer  max-w-2xxl   py-4">
        <p className=" font-mainFont text-center text-md md:text-3xl py-4 font-semibold">Latest Product</p>
       <Slider className="mx-16 flex flex-col gap-4  " {...settings}>
           {
            product.length > 0 && product.slice(0,20).map((item:newamajhon)=>(
                <div key={item?._id} className="main">
                    <div className="image-area">
                        <Image className="" src={item?.image} width={150} height={150} alt="product"/>
                    </div>
                </div>
            ))
           }
      </Slider>
   </div>
  );
}