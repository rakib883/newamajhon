"use client";

import Image from 'next/image';
import React from 'react';
import logo from '../Image/fabby.png';
import { FaUserAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";

function Header() {
  const { data: session } = useSession();
 

  return (
    <div className="bg-[#131921]">
      <div className="header flex justify-between py-4 items-center mx-4 lg:mx-8">
        <div className="logo-area">
          <div className="logo cursor-pointer">
            <Link href="/">
              <Image src={logo} height={100} width={100} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="search-area hidden lg:block w-[500px]">
          <div className="flex items-center rounded-md border-2 bg-white border-white focus-within:drop-shadow-lg focus-within:border-[#FEBD69]">
            <input
              className="w-full px-2 focus:outline-none placeholder:font-mainFont font-mainFont"
              type="text"
              placeholder="Search amajhon in"
            />
            <div className="py-2 px-4 rounded-r-sm bg-[#F3A847] cursor-pointer">
              <IoSearchOutline className="text-2xl text-white" />
            </div>
          </div>
        </div>
        <div className="user-area flex items-center gap-4">
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
            <div className="content cursor-pointer relative">
              <FaShoppingCart className="text-white text-2xl" />
              <div className="badge absolute w-6 h-6 top-[-16px] left-[16px]  border-[#F3A847] border-[2px]  rounded-full flex justify-center items-center">
                 <p className="text-[#F3A847]">55</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
