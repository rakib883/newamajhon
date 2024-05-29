import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import FormattedPrize from "./FormattedPrize";
import { newamajhon } from "../../type";
import ClipLoader from "react-spinners/ClipLoader";

function CollectionProduct() {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoader(false);
      });
  }, []); // Empty dependency array ensures this runs only once

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {loader ? (
        <ClipLoader
          color="#123abc" // You can set your desired color
          loading={loader}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Slider {...settings}>
          {products.length > 0 &&
            products.slice(0, 5).map((item: newamajhon) => (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
                key={item.id}
                className="main-area flex flex-cols gap-4 cursor-pointer"
              >
                <div className="relative overflow-hidden w-full h-0 pb-[100%]">
                  {/* This ensures a square aspect ratio */}
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    layout="fill"
                    objectFit="contain"
                    className="absolute hover:scale-125 duration-300"
                  />
                </div>
                <div className="proze-area py-4 text-center">
                  <h1 className="text-[16px] font-mainFont font-semibold text-[#EAB734]">
                    {item?.category}
                  </h1>
                  <h1 className="text-[20px] font-mainFont font-semibold">
                    {item?.title?.substring(0, 10)}....
                  </h1>
                  <p className="font-mainFont text-md font-semoBold">
                    <FormattedPrize amount={item?.price} />
                  </p>
                  <div className="buy-area active:bg-slate-800 bg-[#537BDE] mx-4 py-1 text-white font-mainFont font-semibold">
                    Buy Now
                  </div>
                </div>
              </motion.div>
            ))}
        </Slider>
      )}
    </div>
  );
}

export default CollectionProduct;
