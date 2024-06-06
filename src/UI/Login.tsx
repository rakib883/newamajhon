"use client"
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import {signIn, useSession } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Login() {

 
  const {data : session} = useSession()
  const router = useRouter()
   useEffect(()=>{

      session?.user && router.push("/")

   },[session?.user,router])

   
  return (
    <div className="bg-gradient-to-t flex justify-center items-center from-green-400 to-blue-500 h-screen w-full">
       <div className=" max-w-lg shadow-xl  bg-blue-50/20 p-10 ">
            <h1 className=" font-mainFont font-semibold text-xl text-center my-8">Hello, Wellcome</h1>
            <div className="gmail">
               <h1 className=" font-mainFont  text-[18px]">Inter your gmail</h1>
                <input className="w-[300px] py-1 bg-slate-300 px-1 focus-within:outline-none rounded-sm" type="text" name="" id="" placeholder="Inter your gmail" />
            </div>
            <div className="gmail mt-4">
               <h1 className=" font-mainFont  text-[18px]">Inter your password</h1>
                <input className="w-[300px] py-1 bg-slate-300 px-1 focus-within:outline-none rounded-sm" type="password" name="" id="" placeholder="Inter your password" />
            </div>
            <div className="button-area bg-gradient-to-t py-2 mt-4 rounded-sm cursor-pointer text-white font-mainFont text-center">
               <p className="text-center">Login</p>
            </div>
            <div className="border-area flex items-center gap-4">
              <div className="h-[1px] w-full bg-black"></div>
              <div className="text  font-mainFont font-semibold">
                 <p>Or</p>
              </div>
              <div className="h-[1px] w-full bg-black"></div>
            </div>
            <div className="social flex gap-4 justify-center items-center py-2">
                <div className="facebook hover:bg-slate-300 duration-300 cursor-pointer bg-white h-8 w-8 flex justify-center items-center rounded-full">
                 <FaFacebookF className="text-[26px] p-1" />
                </div>
                <div  onClick={() =>signIn()} className="facebook hover:bg-slate-300 duration-300 cursor-pointer bg-white h-8 w-8 flex justify-center items-center rounded-full">
                 <FaGoogle className="text-[26px] p-1" />
                </div>
            </div>
            <div className="create font-mainFont">
               <p>You have don't account <span className="hover:text-black underline duration-300 text-white"><Link href="/register">Sign in</Link></span> </p>
            </div>
       </div>
    </div>
  )
}

export default Login