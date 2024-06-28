import React from 'react'
import { MdOutlineMail } from "react-icons/md";

function CheickBanner() {
  return (
    <div className="bg-checkOut">
        <div className=" flex justify-center py-20 items-center flex-col gap-4">
           <div className="pragraph font-mainFont font-bold ">
                <h1 className="text-[30px] text-black">Get <span className="text-amber-400">20%</span> Off Discount Coupon</h1>
                <h1 className="text-center text-black">by Subscribe our Newsletter</h1>
           </div>
            <div className="searcharea w-[50%] bg-white cursor-pointer  flex items-center justify-between">
                <div className="gmail flex-1 flex items-center">
                    <MdOutlineMail className="ml-4 text-xl text-black mt-1" />
                    <input className="w-full placeholder:text-black placeholder:font-mainFont px-4 outline-none" type="email" placeholder="Email address" />
                </div>
                <div className="button bg-[#f3a847] py-4 font-semibold px-4 text-black font-mainFont">Get the cupon</div>
            </div>
        </div>
    </div>
  )
}

export default CheickBanner