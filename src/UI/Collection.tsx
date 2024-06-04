"use client"
import React, { useState } from 'react'
import CollectionProduct from './CollectionProduct'
import Feture from './FetureSlider'


function Collection() {

    const [tab,setTab] = useState(1)
    const tabData =(index:any)=>{
        setTab(index)
    }
  return (
    <div>
        <div className="content-area">
            <div className="title-area py-8">
                <h1 className="font-mainFont tracking-[15px] text-[#017BDE] text-[20px] md:text-[30px] text-center font-medium">Our collection</h1>
                 <div className="border h-[5px] mx-auto w-20 mt-4 bg-[#0163D2]"></div>
            </div>
            <div className="product-area">
                <div className="product flex justify-center items-end gap-8 ">
                    <h1 onClick={()=>tabData(1)} className={`${tab === 1 ? "bg-[#537BDE]  ": ""} text-[12px] md:text-[18px] uppercase font-mainFont cursor-pointer`}>New arrivals</h1>
                    <h1 onClick={()=>tabData(2)} className={`${tab === 2 ? "bg-[#537BDE]  " : ""} text-[12px]  md:text-[18px] uppercase font-mainFont cursor-pointer`}>Feture</h1>
                    <h1 onClick={()=>tabData(3)} className={`${tab === 3 ? "bg-[#537BDE]  ": ""} text-[12px] md:text-[18px] uppercase font-mainFont cursor-pointer`}>best sellers</h1>
                </div>
               <div className="border-parent w-full mt-4">
                  <div className=" bg-[#C9C9C9] h-[3px] max-w-6xl mx-auto"></div>
               </div>
                <div className="product-area py-8 mx-10">
                    <div className={tab == 1 ? "block" : "hidden"}>
                        <CollectionProduct/>
                    </div>
                    <div className={tab == 2 ? "block" : "hidden"}>
                         <CollectionProduct/>
                    </div>
                    <div className={tab == 3 ? "block" : "hidden"}>
                      <CollectionProduct/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection