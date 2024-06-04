import { TbTruckDelivery } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { MdConnectingAirports } from "react-icons/md";
import FoterTitle from "./FoterTitle";
import Image from "next/image";
import foterPament from "../Image/foterPament.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
interface fromTitle{
    
}



function Foter() {
    const aboutUs = [
        {name:"About Us",id:1} , 
        {name:"Contact us",id:2},
        {name:" Factories",id:3},
        {name:" Careers",id:4},
        {name:" Help and advice",id:5},
        {name:"Shipping & Returns",id:6},
        {name:" Terms and conditions",id:7},
        {name:"Refund Policy",id:8},
    ]

    const ourShop = [
        {name:"New Arrivals",id:1},
        {name:"Top Trending  ",id:2},
        {name:"Top Trending",id:3},
        {name:"Autumn Collection",id:4},
        {name:"Back in Stock",id:5},
        {name:"Bikini Tops",id:6},
        {name:"Bikini Bottoms",id:7},
        {name:"Swimwear",id:8},
        {name:"S Denim Collection",id:9},                
        
    ]
  return (
    <div>
        <div className="all-content ">
            {/* top foter are start  */}
            <div className="subFoter">
                <div className="content">
                    <div className="w-full h-[1px] bg-[#EBE8E2] mt-8"></div>
                     <div className="bod grid grid-cols-1 md:grid-cols-3 my-6 mx-8 gap-[50px]">
                        <div className="supp">
                            <div className="content flex gap-4 items-center">
                                <div className="icon"><TbTruckDelivery className="text-[50px]" /></div>
                                <div className="text">
                                    <p className="text-[12px] font-mainFont"> <span className="font-bold">Free Shipping</span> on all US order or order</p>
                                    <p className="text-[12px] font-mainFont">above $99</p>
                                </div>
                            </div>
                        </div>
                        <div className="supp">
                           <div className="content flex gap-4 items-center">
                                <div className="icon"><FiPhoneCall  className="text-[30px]" /></div>
                                <div className="text ">
                                    <p className="text-[12px] font-mainFont"> <span className="font-bold">Support 24/7 :</span> Contact us 24 hours a day, 7 days a week</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="supp">
                            <div className="content flex gap-4 items-center">
                                <div className="icon"><MdConnectingAirports className="text-[30px]" /></div>
                                <div className="text ">
                                    <p className="text-[12px] font-mainFont"> <span className="font-bold">30 Days return :</span>Simply return it within</p>
                                    <p className="text-[12px] font-mainFont">30 days for an exchange.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            {/* top foter area ens */}
            {/* main foter are start */}
            <div className="main-header bg-[#EBE8E2] pt-[80px]">
                <div className="mx-8 grid gap-8 grid-cols-2 md:grid-cols-4 ">
                    {/* main foter logo area start */}
                    <div className="icon">
                        <FoterTitle className="text-[30px]" titles="SaleHub"/>
                        <div className="body font-mainFont leading-6 text-base text-[#292A29]">
                            <p>We’re available by phone +123-456-789</p>
                            <p>info@example.com</p>
                            <p>Monday till Friday 10 to 6 EST</p>
                        </div>
                        <Image className="my-8" src={foterPament} height={200} width={300} alt="pament"/>
                    </div>
                    {/* main foter logo start */}
                    <div className="about">
                       <FoterTitle className="text-[20px]" titles="About Us"/>
                        <div className="body text-mainFont leading-6 text-base text-[#292A29]">
                            {
                                aboutUs.map((item:any)=>
                                  <div key={item.id} className="main my-4 text-[#292A29] font-mainFont text-base">
                                       <p className="hover:underline cursor-pointer">{item.name}</p>
                                  </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="our">
                       <FoterTitle className="text-[20px]" titles="Our Shop"/>
                        <div className="body text-mainFont leading-6 text-base text-[#292A29]">
                        {
                            ourShop.map((item) => (
                                <div key={item.id} className="font-mainFont my-4 cursor-pointer hover:underline">
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }

                        </div>
                    </div>
                    <div className="newsletter">
                        <FoterTitle className="text-[20px]" titles="SaleHub"/>
                        <div className="body text-mainFont leading-6 text-base text-[#292A29]">
                            <p>Receive our weekly newsletter.</p>
                            <p>For dietary content, fashion insider </p>
                            <p>best offers.</p>
                        </div>
                        <div className="foter-search w-full bg-[white]">
                            <div className="my-4 flex items-center border-[black] border-[1px] ">
                                <input className="w-full placeholder:font-mainFont border-none outline-none px-1" type="text" placeholder="Email address" />
                                <div className="text-area bg-black group   group cursor-pointer  flex items-center ">
                                    <p className=" text-white bg-[black] py-3   px-4 hover:px-6 duration-1000 flex gap-2 items-center">
                                         Join   <FaArrowRightLong className=" mt-[2px]  hidden group-hover:block duration-1000 " /> 
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                             <FaFacebookF className="hover:scale-125 duration-300 cursor-pointer text-[20px]" />
                             <FaTwitter className="hover:scale-125 duration-300 cursor-pointer text-[20px]" />
                             <IoLogoPinterest className="hover:scale-125 duration-300 cursor-pointer text-[20px]" />
                             <GrInstagram className="hover:scale-125 duration-300 cursor-pointer text-[20px]" />
                        </div>
                    </div>
                </div>
            </div>
            {/* main foter are end */}
        </div>
        {/* botto foter start */}
        <div className="bottom bg-[#EBE8E2] pt-8">
            <div className="h-[1px] width-full bg-white "></div>
            <div className="contain md:flex mx-8 justify-between py-10">
                <div className="left font-mainFont">
                    <p>Copyright © 2024. All rights reserved.</p>
                </div>
                <div className="right">
                    <ul className="flex font-mainFont cursor-pointer ">
                        <li className="border-r hover:underline  border-gray-400 px-2">USD</li>
                        <li className="border-r hover:underline  border-gray-400 px-2">Privacy Policy</li>
                        <li className="border-r hover:underline  border-gray-400 px-2">Terms of Use</li>
                        <li className=" border-gray-400 hover:underline px-2">FAQs</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* bottom area end */}
    </div>
  )
}

export default Foter