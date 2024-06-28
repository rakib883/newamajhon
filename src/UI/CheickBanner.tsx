import React from 'react'

function CheickBanner() {
  return (
    <div className="bg-checkOut">
        <div className=" flex justify-center py-20 items-center flex-col gap-4">
           <div className="pragraph font-mainFont font-bold ">
                <h1 className="text-[30px] text-black">Get <span className="text-amber-400">20%</span> Off Discount Coupon</h1>
                <h1 className="text-center text-black">by Subscribe our Newsletter</h1>
           </div>
            <div className="searcharea w-[50%] bg-neutral-800 flex justify-between">
                <div className="gmail flex-1 bg-red-600">
                    <input className="w-full" type="Email address" />
                </div>
                <div className="button">fghfg</div>
            </div>
        </div>
    </div>
  )
}

export default CheickBanner