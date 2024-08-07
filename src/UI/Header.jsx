"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../Image/fabby.png';
import { FaUserAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";
import { useDispatch, useSelector } from 'react-redux';
import {cartSingleDataRemove,  resetCartItems, productIncrement, productDecrement} from "../Redux/productSlice"
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion"
import { Modal } from 'react-responsive-modal';
import PriceFormat from './PriceFormat';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import Seperator from './Seperator';
import { IoIosHelpBuoy } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";


function Header() {

  const [open, setOpen] = useState(false);
  // modal state start
  const onOpenModal = () =>{ 
    setOpen(true);
    setOpenModla(true)
  }
  const onCloseModal = () => setOpen(false);
  // modal state end


  //  cart single data remove start
    const singlaDataRemove = useDispatch()
  //  cart single data remove end

  const { data: session } = useSession();
  // this data send redux and recive denim page start
    const [searchDataItem,setSearchData] = useState("")
    const sendReduxData = useDispatch()

    const inputValue =(e)=>{
      setSearchData(e.target.value)
     
    }
   

  
  // this data send redux and recive denim page end
    
  // mobile search bar start
    const [mobileSearchArea,setMobileSearch] = useState(false)
    const mobileSearch =()=>{
      setMobileSearch(!mobileSearchArea)
    }
  // mobile search are end


  // card data count start
  const [total,setTotalPrize] = useState()
  const cartData = useSelector((state)=>state.allData.cartData)
   useEffect(()=>{
     let totalPrice = 0;
     cartData.map((item)=>{
      totalPrice += item.price * item.quantity
    })
    setTotalPrize(totalPrice)
   },[cartData])
  // cart data count end

  // cart reset area start
     const cartResetDispatch = useDispatch()
  // cart reset are end


  // reset modal area start
  const resetCart =()=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You reset your cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reset cart",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        cartResetDispatch(resetCartItems())
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "",
          icon: "error"
        });
      }
    });
  }
  // reset modal are end

  // product increment decrement area start
   const incrementDispatch = useDispatch()
   const decrementDispatch = useDispatch()
  // product decremt increment end
  
  // custom modal handeler start
   const [openModal,setOpenModla] = useState(true)
   const modalCustomHandeler = ()=>{
     setOpenModla(false)
     
   }
  // custom modal handeler end



  // profile handeler start
  const [profile,serProfile] = useState(false)
  const profileDetils =()=>{
    serProfile(!profile)
  }
  // profile handeler end


  //  mobile profile handeler start
  const [mobile,setMobile] = useState(false)
   const mobileProfileHandeler =()=>{
    setMobile(!mobile)
   }
  // mobile profile handeler end


  return (
    <div className="bg-[#131921] sticky top-0 z-40 ">
       { openModal ?
          <div className={`${openModal === 2 ? "hidden" : ""}`}>
                <div classname="">
                  <Modal open={open} onClose={onCloseModal}   classNames={{modal: 'customModal',}} center>
                  <p className="text-3xl font-mainFont font-bold text-center">Your Cart</p>
                    { cartData.length > 0 ?
                    <div className="all-content mt-6">
                    <table class="w-full  border-spacing-2.5">
                        <thead className="bg-slate-300 text-center">
                          <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody className="text-center  mt-4">
                          { 
                            cartData.map((item)=>(
                              <tr key={item.id} className="">
                                <td className=' py-4'>
                                  <Image src={item?.image} alt="image" width={50} height={50}/>
                                </td>
                                <td className=' py-4'>{item?.title.substring(0,15)}...</td>
                                <td className=' py-4'><PriceFormat price={item.price}/></td>
                                <td className=' py-4'>
                                  {/* increment decrement area start */}
                                  <div className="main flex items-center mx-auto max-w-[130px] py-2 gap-8 justify-center border">
                                    <div onClick={()=>incrementDispatch(productIncrement({
                                      id:item?.id
                                    }))} className="increment cursor-pointer">+</div>
                                    <div className="quantity">{item.quantity}</div>
                                    {/* decrement area start  */}
                                    <div 
                                    onClick={()=>decrementDispatch(productDecrement({
                                      id:item?.id
                                    }))}
                                    className="decrment cursor-pointer">-</div>
                                    {/* decrement are end */}
                                  </div>
                                  {/* increment decrement are end */}
                                </td>
                                <td className=' py-4'><PriceFormat price={item.price*item.quantity}/></td>
                                <td onClick={()=>singlaDataRemove(cartSingleDataRemove({
                                  id:item?.id
                                }))} className="cursor-pointer" py-4>X</td>
                              </tr>))
                          }
                        </tbody>
                      </table>
                      <div className="res flex justify-between mt-4">
                        <div onClick={resetCart} className="reset cursor-pointer  ">
                          <p className="bg-amber-600 hover:bg-orange-600 active:text-black active:bg-white px-2 md:px-4 text-xs py-2 text-[white] font-mainFont ">Reset Cart</p>
                        </div>
                        <div className=" flex flex-col gap-2 md:gap-4">
                            <div className="amount cursor-pointer mx-10 bg-amber-600 hover:bg-orange-600 max-w-[300px] px-8 py-2">
                                <div className="prize flex gap-2 font-mainFont text-xs text-white">
                                    <p> Cheick out now</p>( <PriceFormat price={total}/>)
                                </div>
                            </div>
                            <div onClick={modalCustomHandeler}  className="bg-amber-600 hover:bg-orange-600 mx-10 text-white font-mainFont cursor-pointer">
                                <div className="text-center py-2 text-xs md:text-base">
                                  <Link href="/cart">
                                    <p classNames="text-center">
                                      view to cart
                                    </p>
                                  </Link>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    : 
                    <div className="defalt text-center">
                      <p className="font-mainFont text-center my-8 text-[24px] ">You have no Product cart</p>
                    </div> 

                    }
                  </Modal>
              </div>
          </div> : ""
        }
      <div className="header relative flex justify-between py-4 items-center mx-4 lg:mx-8">
        <div className="logo-area">
          <div
            className="logo cursor-pointer">
            <Link href="/">
              <h1 className="text-white font-mainFont font-bold text-xl">BuyNow.com</h1>
            </Link>
          </div>
        </div>
        <div className="search-area hidden lg:block  mx-2">
          <div className="flex items-center rounded-md border-2 bg-white border-white focus-within:drop-shadow-lg focus-within:border-[#FEBD69]">
            <input 
              value={searchDataItem}
               onChange={inputValue}
              className="w-full px-2 focus:outline-none placeholder:font-mainFont font-mainFont"
              type="text"
              placeholder="Search amajhon in"
            />
            <div  className="py-2 px-4 rounded-r-sm bg-[#F3A847] cursor-pointer">
              <IoSearchOutline className="text-2xl text-white" />
            </div>
          </div>
        </div>
        <div className="user-area flex items-center gap-4">
         <div onClick={mobileSearch} className="content cursor-pointer relative">
              <FaSearch  className="text-white text-xl md:hidden" />
            </div>
          <div className="user-profile hidden md:block">
            {session ? (
             <div onClick={profileDetils} className="all-content relative">
                 <div className="use flex items-center text-white gap-2 cursor-pointer">
                      <div className="image-area">
                        <Image className="rounded-full" src={session?.user?.image} height={50} width={50} alt="user" />
                      </div>
                      <div className="text-area leading-4">
                        <p className="font-mainFont text-md">{session?.user?.name}</p>
                        <p className="font-mainFont ">{session?.user?.email}</p>
                      </div>
                </div>
                {/* user account are start */}
                { profile &&
                <div className="profile  absolute top-14 w-full border bg-white rounded-md">
                   <div className="all-content m-4 cursor-pointer">
                      <div className="user flex gap-2 items-center">
                      <FaRegUser /> <p>Account</p>
                      </div>
                   </div>
                   <div className="all-content m-4 cursor-pointer">
                      <div className="user flex gap-2 items-center">
                      <FaRegMessage /> <p>Message</p>
                      </div>
                   </div>
                   <div className="all-content m-4 cursor-pointer">
                      <div className="user flex gap-2 items-center">
                      <FaRegHeart /> <p>Wishlist</p>
                      </div>
                   </div>
                   <div className="all-content m-4 cursor-pointer">
                      <div className="user flex gap-2 items-center">
                      <GoHome /> <p>Boking</p>
                      </div>
                   </div>
                   <Seperator/>
                   <div className="all-content m-4 cursor-pointer">
                      <div className="user flex gap-2 items-center">
                      <IoIosHelpBuoy  /> <p>Help</p>
                      </div>
                   </div>
                   <div  onClick={() =>signOut()} className="all-content m-4 cursor-pointer">
                      <div className="user flex gap-2 items-center">
                        <CiLogin   /> <p>Log out</p>
                      </div>
                   </div>
                </div>
                }
                {/* user are end */}
             </div>
            ) : (
              <Link href="/login" className="use flex items-center text-white gap-2 cursor-pointer">
                <FaUserAlt className="text-white" />
                <span>Login/Sign Up</span>
              </Link>
            )}
          </div>
          <div className="add flex gap-6">
            <div className="content cursor-pointer relative">
              <DiGitCompare className="text-white text-2xl" />
            </div>
            <div className="content cursor-pointer ">
              <FaRegHeart className="text-white text-2xl" />
            </div>
            {/* mobile login area start */}
            <div onClick={mobileProfileHandeler} className="main md:hidden group  flex justify-center items-center cursor-pointer">
                  {
                    session ? 
                    <div  className="main text-white overflow-x-hidden    ">
                      <Image className="rounded-full" src={session?.user?.image} height={22} width={22} alt="user"/>
                            <div className={`profile-option w-[50%] bg-red absolute  top-[60px] left-[50%] `}>
                            {/* mobile profile area start */}
                             {
                               mobile &&
                                <motion.div 
                                initial={{ x: "100%" }}
                                animate={{ x: "calc(100% - 100%)" }}
                                className="profile text-black top-14 w-full border bg-white rounded-md">
                                    <div className="all-content m-4 cursor-pointer ">
                                        <div className="user flex gap-2 items-center">
                                        <FaRegUser /> <p>Account</p>
                                        </div>
                                    </div>
                                    <div className="all-content m-4 cursor-pointer">
                                        <div className="user flex gap-2 items-center">
                                        <FaRegMessage /> <p className="text-black">Message</p>
                                        </div>
                                    </div>
                                    <div className="all-content m-4 cursor-pointer">
                                        <div className="user flex gap-2 items-center">
                                        <FaRegHeart /> <p>Wishlist</p>
                                        </div>
                                    </div>
                                    <div className="all-content m-4 cursor-pointer">
                                        <div className="user flex gap-2 items-center">
                                        <GoHome /> <p>Boking</p>
                                        </div>
                                    </div>
                                    <Seperator/>
                                    <div className="all-content m-4 cursor-pointer">
                                        <div className="user flex gap-2 items-center">
                                        <IoIosHelpBuoy  /> <p>Help</p>
                                        </div>
                                    </div>
                                    <div  onClick={() =>signOut()} className="all-content m-4 cursor-pointer">
                                        <div className="user flex gap-2 items-center">
                                          <CiLogin   /> <p>Log out</p>
                                        </div>
                                    </div>
                                </motion.div>
                              }
                            {/* mobile profile are end */}
                                  </div>
                              </div>
                              :
                              <div className="profile">
                                <Link href="/login" className="cursor-pointer md:hidden ">
                                    <FiUserPlus className="text-white text-2xl" />
                                </Link>
                            </div>     
                  }
             
            </div>
            {/* mobile login area end */}
            <div onClick={onOpenModal} className="content cursor-pointer relative">
              <FaShoppingCart className="text-white text-2xl" />
              <div className="badge absolute w-6 h-6 top-[-16px] left-[16px]  border-[#F3A847] border-[2px]  rounded-full flex justify-center items-center">
                 <p  className="text-[#F3A847]">{cartData.length}</p>
                 
              </div>
            </div>
          </div>
        </div>
        {/* mobile are searc bar */}
        { mobileSearchArea &&
        <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: "calc(100% - 100%)" }}
        className="w-full shadow-2xl  absolute top-[75px]">
          <div className="search-area lg:block w-full">
            <div className="flex items-center rounded-md border-2 bg-white border-white focus-within:drop-shadow-lg focus-within:border-[#FEBD69]">
              <input 
                value={searchDataItem}
                onChange={inputValue}
                className="w-full px-2 focus:outline-none placeholder:font-mainFont font-mainFont"
                type="text"
                placeholder="Search amajhon in"
              />
              <div onClick={mobileSearch} className="py-2 px-4 rounded-r-sm bg-[#F3A847] cursor-pointer">
                <IoSearchOutline className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </motion.div>
       }
        {/* mobile are search end */}
      </div>
    </div>
  );
}

export default Header;
