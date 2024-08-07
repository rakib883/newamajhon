"use client"
import { useEffect, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from 'next/link';
import { useDispatch, useSelector} from 'react-redux';
import { addCart, productDecrement } from '@/Redux/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Puff } from 'react-loader-spinner';

interface Product {
  id: number;
  image: string; // Updated to string
  title: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
}

interface State {
  addData: Product[];
  cartData: Product[];
}

interface RootState {
  product: State;
}

function Page() {
// data filture state area
  const [prizeRange, setPrizeRange] = useState<Product[]>([]);
  const [denimData, setDenimData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  const filterHandler = (category: string) => {
    const currentData = denimData.filter((item: Product) => {
      return item.category === category;
    });
    setFilteredData(currentData);
  };
// data filture are end

// loading are start
const [Productloading,setProductLoading] = useState(false)
// loading are end


// data faching area start
  useEffect(() => {
    setProductLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setPrizeRange(data);
        setDenimData(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("done");
      }
      setProductLoading(false)
    };
    fetchData();
  }, []);
// data faching are end

// prize range areastart
  const [priceRange, setPriceRange] = useState("");
  useEffect(() => {
    const currentData = prizeRange.filter((item: Product) => {
      return item.price >= Number(priceRange);
    });
    setFilteredData(currentData);
  }, [priceRange, prizeRange]);
// prize range area end

// ablity area start
  const [ability, setAbility] = useState(false);
  const abilityHandler = () => {
    setAbility(!ability);
  };

// ablity area end

// send to redux start
  const addCarDispatch = useDispatch();
  // send to redux end


  // addCard data dynamic increment decrement start
  const cartButtonData = useSelector((item:any)=>item.allData.cartData)
  const ProductIncrement = useDispatch()
  const decrementProduct = useDispatch()
   // addCard data dynamic increment decrement end

  return (
    <div className="flex md:gap-6 mx-8">
      <div className="filter md:w-[20%] hidden md:block">
        <div className="all-content flex flex-col gap-4">
          <div className="border shadow-lg">
            <div className="price">
              <p className="font-mainFont text-xl font-bold mt-4 mx-4">Price Range</p>
            </div>
            <div className="border-[black] border-[1px] w-full mt-4"></div>
            <div className="mt-4 mx-4 py-2">
              <p>{priceRange === "" ? 0 : priceRange}</p>
              <input
                className="w-full"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPriceRange(e.target.value)}
                value={priceRange}
                max={500}
                min={0}
                type="range"
              />
            </div>
          </div>

          {/* Category filter area start */}
          <div className="all-content">
            <div className="content border-[1px] shadow-lg rounded-md">
              <div className="header">
                <p className="mx-4 text-xl font-mainFont font-bold py-2">Category</p>
              </div>
              <div className="body mx-4">
                <div className="body-border bg-black h-[1px] w-full"></div>
                <div className="electronics cursor-pointer flex items-center gap-2 py-2 font-mainFont text-md">
                  <input onChange={() => filterHandler("jewelery")} value={"jewelery"} className="h-4 w-4" type="checkbox" /> <p>jewelery</p>
                </div>
                <div className="electronics cursor-pointer flex items-center gap-2 py-2 font-mainFont text-md">
                  <input onChange={() => filterHandler("electronics")} value={"electronics"} className="h-4 w-4" type="checkbox" /> <p>electronics</p>
                </div>
                <div className="electronics cursor-pointer flex items-center gap-2 py-2 font-mainFont text-md">
                  <input onChange={() => filterHandler("men's clothing")} value={"men's clothing"} className="h-4 w-4" type="checkbox" /> <p>mens clothing</p>
                </div>
                <div className="electronics cursor-pointer flex items-center gap-2 py-2 font-mainFont text-md">
                  <input onChange={() => filterHandler("women's clothing")} value={"women's clothing"} className="h-4 w-4" type="checkbox" /> <p>womens clothing</p>
                </div>
              </div>
            </div>
          </div>
          {/* Category filter area end */}

          {/* Availability area start */}
          <div className="price border shadow-lg rounded-md cursor-pointer">
            <div onClick={abilityHandler} className="header flex justify-between items-center py-2">
              <p className="mx-4 text-xl font-mainFont font-bold">Availability</p>
              <MdKeyboardArrowUp className={`${ability ? "rotate-180" : ""} text-xl mx-2`} />
            </div>
            {ability &&
              <div className="">
                <div className="bg-[black] w-full h-[1px]"></div>
                <div className="mb-1 all-content mx-4 py-2">
                  <div className="content flex items-center gap-2 font-mainFont text-md">
                    <input type="checkbox" className="w-4 h-4" /> <p>In Stock</p>
                  </div>
                  <div className="content flex items-center gap-2 font-mainFont text-md">
                    <input type="checkbox" className="w-4 h-4" /> <p>Per Order</p>
                  </div>
                  <div className="content flex items-center gap-2 font-mainFont text-md">
                    <input type="checkbox" className="w-4 h-4" /> <p>Up Coming</p>
                  </div>
                </div>
              </div>
            }
          </div>
          {/* Availability area end */}
          <div className="price"></div>
        </div>
      </div>
      <div className="all-content md:w-[80%]">
         { Productloading &&
            <div className="loader flex justify-center items-center mt-[200px] ">
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
          }
         <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">

          {
           filteredData?.map((item:Product) =>{
              const cartData = cartButtonData.find((reduxData:any)=>reduxData.id === item.id)
              console.log(cartData)
            return(
            <div key={item.id} className="main border p-4 rounded shadow">
              <Link href={{ pathname: `/singleproduct/${item?.id}`, query: { id: item?.id } }} className="image flex justify-center items-center">
                <Image className="w-full h-60 object-contain duration-500"
                  src={item.image} width={100} height={100} alt="image" />
              </Link>
              <h3 className="font-bold">{item?.title.substring(0, 10)}</h3>
              <p>{item?.description.substring(0, 30)}</p>
              <p className="font-semibold font-mainFont my-4">${item.price}</p>
              {
                cartData ? 
                
                <div className="content flex items-center justify-between w-full bg-black rounded-full">
                     <div 
                     onClick={()=>ProductIncrement(addCart({
                      image:item.image,
                      title:item?.title,
                      price:item?.price,
                      id: item?.id,
                     }))}
                     className="increment flex justify-center items-center cursor-pointer bg-[#082f49] w-10 h-10 rounded-full text-white text-lg">+</div>
                     <div className="price text-white">{cartData.quantity}</div>
                     <div 
                      onClick={()=>decrementProduct(productDecrement({
                          image:item.image,
                          title:item?.title,
                          price:item?.price,
                          id: item?.id,
                      }))}
                     className="increment flex justify-center items-center cursor-pointer bg-[#082f49] w-10 h-10 rounded-full text-white text-lg">-</div>
                </div>


                :
               <div className="add cursor-pointer bg-sky-950 active:bg-white active:text-black">
                <p onClick={() => {
                  addCarDispatch(addCart({
                    image:item.image,
                    title:item?.title,
                    price:item?.price,
                    id: item?.id,
                    quantity: 1 
                  }));
                  toast.success(`${item.title}Added to cart successfully`);
                }} className="text-white text-center py-1">Add to cart</p>
              </div> 
              }
            </div>
            )
          })}
        </div> 
      </div>
      <ToastContainer autoClose={5000} position="top-center" />
    </div>
  );
}

export default Page;
