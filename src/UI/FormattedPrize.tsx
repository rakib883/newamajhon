import React from 'react'

function FormattedPrize({amount}:{amount : number}) {

    const formatedData = new Number(amount).toLocaleString("en-US",{
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2
        
    })
  return (
    <div>{formatedData}</div>
  )
}

export default FormattedPrize