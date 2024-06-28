"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../Image/fabby.png';
import { FaUserAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";
import { useDispatch, useSelector } from 'react-redux';
import {cartSingleDataRemove, searchData, searchDataReset,resetCart, resetCartItems, productIncrement, productDecrement} from "../Redux/productSlice"
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion"
import { Modal } from 'react-responsive-modal';
import PriceFormat from './PriceFormat';
import Swal from 'sweetalert2/dist/sweetalert2.js'

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
   

    const resetDispatch = useDispatch()
    const searchDataHandeler = ()=>{
      sendReduxData(searchData({searchDataItem}))
      setSearchData("")
     
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
      totalPrice += item.price * item.quentity
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

  return (
    <div className="bg-[#131921] sticky top-0 z-40">
       { openModal ?
          <div className={`${openModal === 2 ? "hidden" : ""}`}>
                <div>
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
                            <th>Quentity</th>
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
                                    <div className="quentity">{item.quentity}</div>
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
                                <td className=' py-4'><PriceFormat price={item.price*item.quentity}/></td>
                                <td onClick={()=>singlaDataRemove(cartSingleDataRemove({
                                  id:item?.id
                                }))} className="cursor-pointer" py-4>X</td>
                              </tr>))
                          }
                        </tbody>
                      </table>
                      <div className="res flex justify-between mt-4">
                        <div onClick={resetCart} className="reset cursor-pointer  ">
                          <p className="bg-amber-600 hover:bg-orange-600 active:text-black active:bg-white px-4 py-2 text-[white] font-mainFont ">Reset Cart</p>
                        </div>
                        <div className=" flex flex-col gap-4">
                            <div className="amount cursor-pointer mx-10 bg-amber-600 hover:bg-orange-600 max-w-[300px] px-8 py-2">
                                <div className="prize flex gap-2 font-mainFont text-white">
                                    <p> Cheick out now</p>( <PriceFormat price={total}/>)
                                </div>
                            </div>
                            <div onClick={modalCustomHandeler}  className="bg-amber-600 hover:bg-orange-600 mx-10 text-white font-mainFont cursor-pointer">
                                <div className="text-center py-2">
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
              <Image src={logo} height={100} width={100} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="search-area hidden lg:block flex-1 mx-2">
          <div className="flex items-center rounded-md border-2 bg-white border-white focus-within:drop-shadow-lg focus-within:border-[#FEBD69]">
            <input 
              value={searchDataItem}
               onChange={inputValue}
              className="w-full px-2 focus:outline-none placeholder:font-mainFont font-mainFont"
              type="text"
              placeholder="Search amajhon in"
            />
            <div onClick={searchDataHandeler} className="py-2 px-4 rounded-r-sm bg-[#F3A847] cursor-pointer">
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
              <div className="use flex items-center text-white gap-2 cursor-pointer">
                <div className="image-area">
                   <Image className="rounded-full" src={session?.user?.image} height={50} width={50} alt="user" />
                </div>
                <div className="text-area leading-4">
                  <p className="font-mainFont text-md">{session?.user?.name}</p>
                  <p className="font-mainFont ">{session?.user?.email}</p>
                </div>
               
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
              <div onClick={searchDataHandeler} className="py-2 px-4 rounded-r-sm bg-[#F3A847] cursor-pointer">
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
