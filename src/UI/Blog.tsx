import Image from "next/image"
import blog1 from "../Image/blog.png"
import blog2 from "../Image/blog2.png"
import blog3 from "../Image/blog3.png"
import blog4 from "../Image/blog4.png"
import { SlCalender } from "react-icons/sl";

function Blog() {

 interface amajhon{
  image:string,
 } 
    const blog = [
        {
            image:blog1,title:"5 Sweet Outfit Ideas You’ll Wear Well Beyond Valentine’s Day",
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus. Curabitur pulv"
        },
        {
            image:blog3,title:"How To Be “Good With Money” According To 4 Female Financial Experts",
            des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu"
        },
        {
            image:blog2,title:"This Scandi Influencer’s Shoe Collaboration Is The Gift That Keeps On Giving",
            des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam libero lobortis in dictum velit luctus. Donec imperdiet tincidunt interdum."
        },
        {
            image:blog4,title:"5 Sweet Outfit Ideas You’ll Wear Well Beyond Valentine’s Day",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus. Curabitur pulvinar dui viverra libero lobortis in dictum velit luctus. Donec imperdiet tincidunt interdum"
        }
    ]
  return (
    <div>
       {/* all content area start */}
       <div className="">
            <h1 className="text-4xl my-[30px] text-center font-bold font-mainFont mt-[50px]">From our blog</h1>
            <div className="content-area  mx-8">
                <div className="card grid grid-cols-2 md:grid-cols-4 justify-center gap-10 mt-4">
                   {
                     blog.map((item:any)=>
                      <div key={item} className=" group cursor-pointer  ">
                        <div className="overflow-hidden">
                           <Image className="group-hover:scale-125 duration-300 " src={item.image} width={320} height={300} alt="img"/>
                        </div>
                         <div className=" bg-white ">
                            <h1 className="font-mainFont text-[1.125rem] font-semibold hover:underline">{item?.title}</h1>
                            <p className="font-mainFont  text-[13px] text-[#494949] font-medium">{item?.des}</p>
                         </div>
                         <div className="w-[100px] h-[1px] bg-black my-8"></div>
                         <div className="time flex items-center gap-2" >
                           <SlCalender /> <p className="font-mainFont ">31.05.24</p>
                         </div>
                      </div>
                    )
                   }
                </div>
            </div>
        </div>
       {/* all content end */}
    </div>
  )
}

export default Blog