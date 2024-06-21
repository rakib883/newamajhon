import React from 'react'

function PriceFormat({price,className}:any) {
    const priceFormat = new Number(price).toLocaleString("en-US",{
        style :"currency",
        currency:"USD",
        minimumFractionDigits:2
    })
  return (
    <div className={className}>{priceFormat}</div>
  )
}

export default PriceFormat