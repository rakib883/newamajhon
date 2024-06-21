"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { denimData, } from "../../Redux/productSlice";
import Image from 'next/image';
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from 'next/link';

interface newamazon{
   pathName : any;

}
function Page() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                // setProduct(res);
                dispatch(denimData(res)); // Dispatch the action after fetching the data
            });
    }, [dispatch]);
//    header filter are staaaart
    const denimSelector = useSelector((state:any) => state.allData.addData);
    const searchDataItems = useSelector((state:any) => state.allData.searchData.searchDataItem) || ""; // Ensure default value

    const filteredDenimData = denimSelector.filter((item:any) =>
        searchDataItems ? item.title.toLowerCase().includes(searchDataItems.toLowerCase()) : true
    );

//   filter are end

//  price rangee are start
const [priceRange,setPriceRange] = useState("")
// price range are end

// ablity handeler area start
   const [ablity,setAblity] = useState(false)
   const anlityHandeler = ()=>{
    setAblity(!ablity)
   }
// ablity handeler area start



    return (
        <div className="flex md:gap-6 mx-8"> 
            <div className="filture md:w-[20%] hidden md:block   ">
                <div className="all-content flex flex-col gap-4 ">
                    <div className="border shadow-lg">
                        <div className="price">
                            <p className="font-mainFont  test-xl font-bold mt-4 mx-4">Price Range</p>
                        </div>
                        <div className="border-[black] border-[1px] w-full mt-4"></div>
                        <div className=" mt-4 mx-4 py-2">
                            <p>{priceRange === "" ? 0 : priceRange }</p>
                            <input className="w-full" onChange={(e)=>setPriceRange(e.target.value)} value={priceRange } max={500} min={0} type="range" />
                        </div>
                    </div>
                    {/* Availability area start */}
                    
                        <div className="price border shadow-lg rounded-md cursor-pointer">
                            <div onClick={anlityHandeler} className="header flex justify-between items-center py-2">
                                <p className="mx-4 text-xl font-mainFont font-bold">Availability</p>
                                <MdKeyboardArrowUp className={`${ ablity ? "rotate-180" : ""} text-xl mx-2`} />

                            </div>
                            { ablity &&
                                <div className="">
                                 <div className="bg-[black] w-full h-[1px]"></div>
                                  <div className="mb-1 all-content mx-4 py-2">
                                    <div className="content flex items-center gap-2 font-mainFont text-md">
                                        <input type="checkbox" className="w-4 h-4" /> <p> In Stock</p>
                                    </div>
                                    <div className="content flex items-center gap-2 font-mainFont text-md">
                                        <input type="checkbox" className="w-4 h-4" /> <p>Per Order</p>
                                    </div>
                                    <div className="content flex items-center gap-2 font-mainFont text-md">
                                        <input type="checkbox" className="w-4 h-4" /> <p>Up Comming</p>
                                    </div>
                                  </div>  
                                </div>
                            }
                        </div> 
                    {/* Availability area end*/}
                    <div className="price">dfgdf</div>
                </div>
            </div>
            <div className="allcontent md:w-[80%]">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
                     {
                      filteredDenimData.length ?  filteredDenimData.map((item:any) => (
                        <div key={item.id} className="main border p-4 rounded shadow">
                            <Link href={{ pathname : `/singleproduct/${item?.id}`, query : { id : item?.id,} }} className="image flex justify-center items-center">
                                <Image  className="w-full h-60 object-contain  duration-500"
                                  src={item.image} width={100} height={100}  alt="image"/>
                            </Link>
                            <h3 className="font-bold">{item.title.substring(0,10)}</h3>
                            <p>{item.description.substring(0,30)}</p>
                            <p className="font-semibold font-mainFont my-4">${item.price}</p>
                            <div className="add cursor-pointer bg-sky-950 active:bg-white active:text-black">
                                <p className=" text-white text-center py-1">Add to cart</p>
                            </div>
                        </div> 
                       )) 
                       : <div className="">
                            Data is loading
                         </div>
                    } 
                </div>
            </div>
        </div>
    );
}

export default Page;
