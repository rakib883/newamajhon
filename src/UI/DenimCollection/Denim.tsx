import Image from 'next/image'
import React from 'react'
import bigImage from "../../Image/big-1.png"
import small1 from "../../Image/small-1.jpg"
import small2 from "../../Image/small-2.png"

function Denim() {
  return (
    <div>
        <div className="all-content">
           {/* header are start */}
            <div className="text-center max-w-lg mx-auto my-8">
                <h1 className="text-[24px] my-4 font-mainFont text-[black] font-bold">Denim Collection</h1>
                <p className="text-[13px] font-mainFont text-[#CCCCCC]">Explore the best trends for girls and women at SaleHub! Clothes, shoes and cool accessories for a new season are available now at SaleHub online.</p>
            </div>
           {/* header are end */}
           {/* product-area start */}
             <div className="mx-8 grid grid-rows-4 grid-flow-col gap-4 ">
                <div className="row-span-4 col-span-4">
                    <div className="image w-full overflow-hidden relative">
                       <Image className="hover:scale-125 duration-300" src={bigImage}  alt="image"/>
                       <div className="overflow-area absolute  bottom-5 text-center w-full">
                          <h1 className="md:text-[30px] texdt-[16px] font-bold font-mainFont text-white">DENIM-JACKET</h1>
                          <p className="text-[16px] text-white font-mainFont">14 Denim-Jacket Outfits to Live in Now That It Is Fall</p>
                           <div className=" py-8 text-white text-[16px] font-bold font-mainfont hover:underline duration-300">
                             <p>SHOP THE COLLECTION</p>
                           </div>
                       </div>
                    </div>
                </div>
                <div className="row-span-2  col-span-2">
                    <div className="content w-full bg-[green] overflow-hidden relative">
                       <Image className="hover:scale-125 duration-300" src={small2}  alt="image"/>
                       <div className="absolute bottom-5 w-full text-center">
                          <p className="md:text-[30px] text-[10px]  text-white font-mainFont font-bold">DENIM MINI SKIRT</p>
                          <p className="font-mainFont text-white text-[10px] md:text-[16px] font-bold hover:underline duration-300">SHOP THE COLLECTION</p>
                       </div>
                    </div>
                </div>
                 <div className="row-span-2 col-span-2 ">
                    <div className="content w-full bg-[green] overflow-hidden relative">
                        <Image className="hover:scale-125 duration-300" src={small1}  alt="image"/>
                        <div className=" absolute bottom-5 w-full text-center">
                            <h1 className="md:text-[30px] text-[16px] font-mainFont font-bold text-white">HOODED DENIM</h1>
                            <p className="md:text-[16px] text-[10px] font-mainFont text-white font-bold">ubtitle from happy customers</p>
                            <p className="md:text-[16px] text-[10px] font-mainFont text-white font-bold py-4 hover:underline duration-300">SHOP THE COLLECTION</p>
                        </div>
                    </div>
                 </div>
             </div>
           {/* product area end */}
        </div>
    </div>
  )
}

export default Denim