"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '@/Redux/productSlice';
import { ToastContainer, toast } from 'react-toastify';

interface newamazon {
   pathName : any;
}

function Page() {
  
     const cardData = useSelector((state)=>state)
     console.log(cardData)







    // denim all data face area start
    const [prizeRange,setPrizeRange] = useState([])
    const [denimData, setDenimData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setPrizeRange(data)
                setDenimData(data);
                setFilteredData(data);
            } catch (error) {
                console.log(error);
            } finally {
                console.log("done");
            }
        };
        fetchData();
    }, []);




    // price range area start
    const [priceRange, setPriceRange] = useState("");
    useEffect(()=>{
       const currentData = prizeRange.filter((item:any)=>{
          return  item.price >= priceRange
       })
       setFilteredData(currentData)
    },[])
    // price range area end
    






    // availability handler area start
    const [ability, setAbility] = useState(false);
    const abilityHandler = () => {
        setAbility(!ability);
    };
    // availability handler area end

    // data filter area start
    const filterHandler = (category: string) => {
        const currentData = denimData.filter((item: any) => {
            return item.category === category;
        });
        setFilteredData(currentData);
    };
    // data filter area end
    

    // send data redux start
    const addCarDispatch = useDispatch()
    // send data redux end

    



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
                            <input className="w-full" onChange={(e) => setPriceRange(e.target.value)} value={priceRange} max={500} min={0} type="range" />
                        </div>
                    </div>
                     
                    {/* category filter area start */}
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
                                    <input onChange={() => filterHandler("men's clothing")} value={"men's clothing"} className="h-4 w-4" type="checkbox" /> <p>men's clothing</p>
                                </div>
                                <div className="electronics cursor-pointer flex items-center gap-2 py-2 font-mainFont text-md">
                                    <input onChange={() => filterHandler("women's clothing")} value={"women's clothing"} className="h-4 w-4" type="checkbox" /> <p>women's clothing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* category filter area end */}

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
                    <div className="price">dfgdf</div>
                </div>
            </div>
            <div className="all-content md:w-[80%]">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
                    {filteredData?.map((item: any) => (
                        <div key={item.id} className="main border p-4 rounded shadow">
                            <Link href={{ pathname: `/singleproduct/${item?.id}`, query: { id: item?.id, } }} className="image flex justify-center items-center">
                                <Image className="w-full h-60 object-contain duration-500"
                                    src={item.image} width={100} height={100} alt="image" />
                            </Link>
                            <h3 className="font-bold">{item?.title.substring(0, 10)}</h3>
                            <p>{item?.description.substring(0, 30)}</p>
                            <p className="font-semibold font-mainFont my-4">${item.price}</p>
                            <div className="add cursor-pointer bg-sky-950 active:bg-white active:text-black">
                                <p onClick={()=>addCarDispatch(addCart({
                                        id:item?.id,
                                        image : item?.image,
                                        title:item.title,
                                        price:item?.price,
                                        quentity:1
                                        })) && toast.success("add to cart product done")}
                                className="text-white text-center py-1">Add to cart</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer  autoClose={50} position="top-center" />
        </div>
    );
}

export default Page;
