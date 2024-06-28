"use client";
import React, { useEffect, useState } from 'react';
import Seperator from './Seperator';
import { useSelector } from 'react-redux';
import PriceFormat from './PriceFormat';
import CheickBanner from './CheickBanner';

interface DataItem {
  zela: string;
  upazelas: string[];
}



const data: DataItem[] = [
  { zela: 'Select zela', upazelas: ['Select Upazela'] },
  { zela: 'Dhaka', upazelas: ['Tejgaon', 'Dhanmondi', 'Gulshan'] },
  { zela: 'Barishal', upazelas: ['Barishal Sadar', 'Babuganj', 'Banaripara'] },
  { zela: 'Gopalgonj', upazelas: ['Kashiani', 'Muksudpur', 'Tungipara'] },
  { zela: 'Faridpur', upazelas: ['Boalmari', 'Nagarkanda', 'Sadarpur'] },
  { zela: 'Jasore', upazelas: ['Abhaynagar', 'Bagherpara', 'Chaugachha'] },
  { zela: 'Khulna', upazelas: ['Batiaghata', 'Dacope', 'Dumuria'] },
  // Add more zelas and their upazelas as needed
];

function CheickOut() {
  const [upazela, setUpazela] = useState<string[]>([]);

  const cityHandler = (value: string) => {
    // setDistValue(value);
    const zela = data.find((item) => item.zela === value);
    setUpazela(zela?.upazelas || []);
  };

//   order summery data  start
const summeryData = useSelector((state:any)=>state?.allData.cartData)
const [total,settotal] = useState()
  // total price start
    let price = 0;
    summeryData.map((item:any)=>{
        price += item.quentity * item.price
    })
    // total price are start

// order summery end


// bank ditles start
const [radio,setradio] = useState(null)
const radioHandeler =(items:any)=>{
  setradio(items)
}
// bank detils end




  return (
    <div className="text-[#9ca8b9]">
      <h1 className="text-center my-4 text-3xl font-mainFont font-bold">Checkout</h1>
      { summeryData.length > 0 ?
      <div className="all-content">
        {/* login are start */}
        <div className="login flex gap-4 justify-between text-[#453328]">
          <div className="login w-[50%] bg-[#f6f6f6] py-4 text-center font-mainFont text-lg cursor-pointer">
            Login in to your account
          </div>
          <div className="cupon w-[50%] bg-[#f6f6f6] py-4 text-center font-mainFont text-lg cursor-pointer">
            Inter your coupon
          </div>
        </div>
        {/* login are end */}

        {/* cheick out are start */}
        <div className="main gap-10 md:flex my-8 justify-between">
          <div className="form md:w-[50%]">
            <h1 className="text-[#453328] font-mainFont text-lg">Billing Details</h1>
            {/* form are start */}
            <div className="all-content font-mainFont">
              {/* name area start */}
              <div className="name flex gap-4 justify-between">
                <div className="first w-[50%] mt-4">
                  <p>First name</p>
                  <input
                    className="w-full p-2 focus:none outline-none border mt-2"
                    type="text"
                    placeholder="inter your first name"
                  />
                </div>
                <div className="Last w-[50%] mt-4">
                  <p>Last name</p>
                  <input
                    className="w-full p-2 focus:none outline-none border mt-2"
                    type="text"
                    placeholder="inter your last first name"
                  />
                </div>
              </div>
              {/* name area end */}

              {/* gmail area start */}
              <div className="name flex gap-4 justify-between">
                <div className="first w-[50%] mt-4">
                  <p>Gmail address</p>
                  <input
                    className="w-full p-2 focus:none outline-none border mt-2"
                    type="text"
                    placeholder="inter your first name"
                  />
                </div>
                <div className="Last w-[50%] mt-4">
                  <p>Phone number</p>
                  <input
                    className="w-full p-2 focus:none outline-none border mt-2"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              {/* gmail area end */}

              {/* dist are start */}
              <div className="name flex gap-4 justify-between">
                <div className="first w-full mt-4">
                  <p>Select country</p>
                  <select
                    onChange={(e) => cityHandler(e.target.value)}
                    className="w-full p-2 focus:none outline-none border mt-2"
                  >
                    {data.map((item) => (
                      <option key={item.zela} value={item.zela}>
                        {item.zela}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* dist are end */}

              {/* Upzela/Moholla area start */}
              <div className="name flex gap-4 justify-between">
                <div className="first w-[50%] mt-4">
                  <p>Upzela/Town</p>
                  <select className="w-full p-2 focus:none outline-none border mt-2">
                    {upazela.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="Last w-[50%] mt-4">
                  <p>Zip Code</p>
                  <input
                    className="w-full p-2 focus:none outline-none border mt-2"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              {/* upzela moholla area end */}
              

              {/* create account are start */}
              <div className="account flex gap-2 mt-6 items-center">
                <input className="cursor-pointer" type="checkbox" /> <p>Create an account</p>
              </div>
              {/* create account are end */}


              {/* billing area start */}
              <div className="bill my-8">
                <h1 className="font-mainFont text-3xl">Billing Details</h1>
                <div className="ship t flex gap-2 mt-6 items-center">
                    <input className="cursor-pointer" type="checkbox" /> <p>Ship to diffrent address</p>
                </div>
              </div>
              {/* billing area end */}
            </div>
            {/* form are end */}
          </div>
          <div className="detils md:w-[50%]">
            <h1 className="text-[#453328] font-mainFont text-lg">Order Summary</h1>
            {/* order summery are start */}
            <div className="main border mt-4">
                <div className="content mx-8 my-4">
                   <div className="heading flex justify-between font-mainFont text-lg">
                     <p>Product</p><p>Total</p>
                   </div>
                   <div className="my-4">
                      <Seperator/>
                   </div>
                   {/* cheick out product start */}
                   <div className="product flex flex-col gap-4">
                     {
                        summeryData.map((item:any)=>(
                            <div key={item.id} className="flex justify-between ">
                                <div className="pragraph">
                                    <p className="relative">
                                        {item?.title.substring(0,20)}....
                                        <p className="absolute -top-4 -right-4">X{item.quentity}</p>
                                    </p>
                                    <p></p>
                                </div>
                                <div className="prize"><PriceFormat price={item.price * item.quentity}/></div>
                            </div>
                        ))
                    } 
                   </div>
                   {/* cheick out product end */}
                   <div className=" my-4">
                      <Seperator/>
                   </div>
                   {/* subtotal area start */}
                   <div className="flex justify-between items-center">
                        <p className=" font-bold">Subtotal</p>
                        <p className="font-bold"><PriceFormat price={price}/></p>
                   </div>
                   {/* subtotal area end */}

                   {/* ship area start */}
                    <div className="ship flex justify-between my-4">
                        <div className="flex flex-col gap-2">
                            <p className="uppercase font-mainFont text-[12px]">shiping</p>
                            <p className="font-bold font-mainFont">Free Shipping</p>
                        </div>
                        <div className="amount">$0</div>
                    </div>
                   {/* ship are end */}

                   {/* cheick out product end */}
                   <div className=" my-4">
                      <Seperator/>
                   </div>
                   {/* subtotal area start */}

                   {/* total are start */}
                   <div className="flex justify-between items-center">
                        <p className=" font-bold">Total</p>
                        <p className="font-bold"><PriceFormat price={price}/></p>
                   </div>
                   {/* total area end */}


                   {/* direct bank area start */}
                   <div className="all-content font-mainFont my-4">
                     <div className="header flex gap-2 items-center text-xl">
                        <input
                            value="first"
                            checked={radio === "first"}
                            onChange={()=>radioHandeler("first")}
                            type="radio" /> <p> Direct Bank Transfer</p>
                     </div>
                      <p className="mx-6 my-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                   </div>
                   {/* direct band are end */}

                    {/* cash bank area start */}
                    <div className="all-content font-mainFont my-4">
                     <div className="header flex text-xl gap-2 items-center">
                        <input 
                          value="secend"
                          checked={radio === "secend"}
                          onChange={()=>radioHandeler("secend")}
                          type="radio" /> <p> Direct Bank Transfer</p>
                     </div>
                   </div>
                   {/* cash band are end */}


                   
                    {/* Credit bank area start */}
                    <div className="all-content font-mainFont my-4">
                     <div className="header flex text-xl gap-2 items-center">
                        <input 
                          value="third"
                          checked={radio === "three"}
                          onChange={()=>radioHandeler("three")}
                          type="radio" /> <p>Credit/Debit Cards or Paypal</p>
                     </div>
                   </div>
                   {/* credit band are end */}
                </div>

                {/* create order button start */}
                <div className="button hover:bg-slate-700 duration-300 text-lg py-2 mx-4 my-4 cursor-pointer text-center font-bold font-mainFont bg-black text-white">
                    <p>Place order</p>
                </div>
                {/* create order button are end */}
            </div>
            {/* order summery are end */}
          </div>
        </div>
        {/* cheick out are end */}
      </div> 
      : <div className="nodata text-center font-mainFont font-bold my-8">
          <p>You cart Empty</p>
       </div>
      }
      {/* bottom banner start */}
      <CheickBanner/>
      {/* bottom banner end */}
    </div>
  );
}

export default CheickOut;
