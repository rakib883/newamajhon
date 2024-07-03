"use client"
import PriceFormat from '@/UI/PriceFormat';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Puff } from 'react-loader-spinner';
import { FiPlus } from "react-icons/fi";
import { GoDash } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, productDecrement, productIncrement } from '@/Redux/productSlice';
import OrderButton from '@/UI/OrderButton';



const CustomLeftArrow = ({ onClick }:any) => (
  <button className="custom-arrow left-2 custom-left-arrow absolute top-[50%]" onClick={onClick}>
     <FaArrowLeft   className="custom-icon-prev" />
  </button>
);

const CustomRightArrow = ({ onClick }:any) => (
  <button className="custom-arrow right-2 custom-right-arrow absolute top-[50%]" onClick={onClick}>
    <FaArrowRight  className="custom-icon-prev" />
  </button>
);







interface SingleData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  related?: SingleData[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 6 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  }
};

function Page({ searchParams }: { searchParams: { id: string } }) {
  const id = searchParams.id;
  const [loader, setLoader] = useState(true);
  const [incomingData, setIncomingData] = useState<SingleData | null>(null);
  const [sliderDataDynamic, setSliderDataDynamic] = useState<string>(id);
  const [sliderData, setSliderData] = useState<SingleData[]>([]);

  useEffect(() => {
    fetchData(sliderDataDynamic);
  }, [sliderDataDynamic]);


  const fetchData = async (anyId: string) => {
    setLoader(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${anyId}`);
      const data = await response.json();
      setIncomingData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };
   
 

  useEffect(() => {
    const fetchRelatedData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setSliderData(data);
      } catch (error) {
        console.error("Error fetching related data:", error);
      }
    };

    fetchRelatedData();
  }, []);
 
  // singla data face redux and display area start
    const [singleData,setSingleData] = useState([])
     const faceCartData = useSelector((item:any)=>item?.allData?.cartData)

      useEffect(()=>{
          const cardData = faceCartData.filter((item:any)=>item.id == id)
          // const quantity =  cardData.map((item:any)=>item.quantity)
          setSingleData(cardData)
      },[id,faceCartData])
  
  // add data dispatch are are  start
   const addDataDispatch = useDispatch()
  // add data dispatch are end

  // add to cart data add area start
  const addCartDispatch = useDispatch()
  // add to card data area end




  // add data area start 
  const singleDataQuantity = faceCartData.find((item:any)=>item.id === (incomingData?.id ? incomingData?.id : sliderDataDynamic) )
 
 // add data area end
  
//  add to cart are start
const addToCartSliderData = useDispatch()
const incrementData = useDispatch()
const decrementData = useDispatch()
// add to cart are end
console.log(sliderDataDynamic)


// slider  increment data start
const incrementSliderData = useDispatch()
const decrementSliderData = useDispatch()
const addToCart = useDispatch()
// slider increment data start
  return (
    <div>
      {loader ? (
        <div className="loader flex justify-center items-center py-28">
          <Puff
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="main mx-4 my-6">
          <div className="md:flex">
            {/* image area start */}
            <div className="flex items-center justify-center h-full p-4 md:w-[30%]">
              {incomingData?.image && (
                <Image src={incomingData.image} width={250} height={250} alt="Product Image" />
              )}
            </div>
            {/* image area end */}

            {/* description area start */}
            <div className="md:w-[70%]">
              <h1 className="text-2xl font-semibold font-mainFont">{incomingData?.title}</h1>
              <p className="font-mainFont text-lg py-2">{incomingData?.description}</p>
              {/* review area start */}
              <div className="client-review">
                <div className="icon flex gap-2 items-center text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="cursor-pointer" />
                  ))}
                  <p className="text-[black]">
                    {incomingData && `( ${incomingData.rating.rate} Customer review ${incomingData.rating.count})`}
                  </p>
                </div>
              </div>
              {/* review area end */}

              {/* price area start */}
              <div className="price">
                <p className="font-mainFont text-md flex items-center gap-1 font-semibold py-1">
                  Price:
                  <PriceFormat price={incomingData?.price} />
                </p>
              </div>
              {/* price area end */}
              {/* order button area start */}
              <div className="content inline-block my-4 cursor-pointer">
                
                {  

                 singleDataQuantity ? 
                 <div className="main-area flex items-center gap-6 border-[1px] border-black">
                  <div
                  onClick={()=>incrementData(productIncrement({
                    image:incomingData?.image,
                    title:incomingData?.title,
                    price:incomingData?.price,
                    id: incomingData?.id,
                  }))}
                  className="increment hover:bg-yellow-600 bg-[#f3a847] p-3">
                    <FiPlus className="text-[black]" />
                  </div>
                  <div className="amount">

                     {  
                       singleDataQuantity.quantity ?  singleDataQuantity.quantity : ""
                     } 
                  </div>
                  <div
                   onClick={()=>decrementData(productDecrement({
                    image:incomingData?.image,
                    title:incomingData?.title,
                    price:incomingData?.price,
                    id: incomingData?.id,
                   }))}
                  className="decrement hover:bg-yellow-600 bg-[#f3a847] p-3">
                    <GoDash className="" />
                  </div>
                </div> :
                <div  className="main-area mt-4 flex items-center gap-6 border-[1px] border-black">
                  <div
                  onClick={()=>addToCart(addCart({
                    image:incomingData?.image,
                    title:incomingData?.title,
                    price:incomingData?.price,
                    id: incomingData?.id,
                  }))}
                  className="increment hover:bg-yellow-600 active:bg-white font-mainFont bg-[#f3a847] w-full p-2 text-center">
                    Add to cart
                  </div>
                </div>

                 }
                
              </div>
              {/* order button area end */}
            </div>
            {/* description area end */}
          </div>
        </div>
      )}
      {/* related post area start */}
      <div className="main mx-8">
        <div className="content relative">
           <h1 className="font-mainFont customDesign text-2xl font-semibold">Related Product</h1> 
        </div>
        <div className=" my-8">
            <Carousel


              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-5-px"
            >
              {
                sliderData.map((item:any) => {
                   const singleDataButton = faceCartData.find((faceData:any)=>faceData?.id === item?.id)
                    console.log("this is datad",singleDataButton?.quantity)
                    
                  return(
                  <div key={item.id} className="main mx-8 cursor-pointer rounded-md shadow-xl border-[1px] border-[black] flex flex-col items-center">
                    <div onClick={() => setSliderDataDynamic(item?.id)} className="image h-full">
                      <Image className="w-full h-40 object-cover" src={item.image} width={100} height={100} alt="slide" />
                    </div>
                    <div className="desc">
                      <p className="text-md mx-1 font-semibold font-mainFont mt-4">{item.title.substring(0, 20)}</p>
                      <p className="font-mainFont mx-1 text-base">{item.description.substring(0, 50)}</p>
                      {/* prize and wish list area start */}
                      <div className="flex my-2 mx-1 justify-between items-center">
                        <div className="prize font-mainFont font-semibold cursor-pointer">
                          <p><PriceFormat price={item.price} /></p>
                        </div>
                        <div className="addWish cursor-pointer">
                          <FaRegHeart />
                        </div>
                      </div>
                      {/* prize and wish list area end */}

                      {/* add to cart area start */}
                      <div className="main-button">
                        {
                          singleDataButton ?
                           <div className="main bg-indigo-700 text-center py-2">
                              <p className="text-white">Product added</p> 
                           </div>:
                          <div 
                           onClick={()=>addToCartSliderData(addCart({
                              image:item?.image,
                              title:item?.title,
                              price:item?.price,
                              id: item?.id,
                           }))}
                          className="button w-full bg-[#082f49] text-center hover:bg-indigo-700 duration-300 text-white">
                             <p className="py-2">Add to cart</p>
                          </div> 
                        }
                      
                      </div>
                      {/* add cart area end */}
                    </div>
                  </div>
                  )
              })
              }
            </Carousel>
        </div>
      </div>
      {/* related post area end */}
    </div>
  );
}

export default Page;
