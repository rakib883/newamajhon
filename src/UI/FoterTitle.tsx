import React from 'react'
import clsx from 'clsx';
interface title{
    titles:any
    className:string
}


function FoterTitle({titles,className}:title) {
  return (
    <div className={`${className} font-bold font-mainFont my-8`}>{titles}</div>
  )
}

export default FoterTitle