import React from 'react'

function OrderButton({className,incrementData,quantity,decrement}:any) {
  return (
    <div>
        <div className="all-content flex justify-between items-center  mx-8 bg-black rounded-full ">
            <div 
             onClick={incrementData} 
            className={`${className}increment bg-[#082f49] text-white text-lg w-8 h-8 rounded-full flex justify-center items-center`}>+</div>
            <div className="qun text-white text-lg flex justify-center items-center">{quantity}</div>
            <div onClick={decrement} className="dec bg-[#082f49] text-white text-lg w-8 h-8 rounded-full flex justify-center items-center">-</div>
        </div>
    </div>
  )
}

export default OrderButton