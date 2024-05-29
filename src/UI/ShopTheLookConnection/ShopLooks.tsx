import Image from 'next/image'
import React from 'react'

function ShopLooks() {
    const product = [
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-1_88ecbdcc-c1c6-47af-9cb5-1f21ebae7c4c_540x.png?v=1617705755",
            id:1
        },
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-2_1e482937-4f64-4d3d-9e9f-feb36a836c0c_540x.png?v=1617705770",
            id:2
        },
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-3_243a2a47-8869-47c2-a1b7-ea9163d96e52_540x.png?v=1617705787",
            id:3,
        },
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-4_d1d516ae-775a-453a-a97b-84c9e80f69cd_540x.png?v=1617705798",
            id:4,
        },
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-5_fbd8fa3f-d8a8-4ef1-a023-c348c802ad38_540x.png?v=1617705810",
            id:5,
        },
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-6_a88c6dc9-2f7b-4020-96b1-f01cd6593323_540x.png?v=1617705822",
            id:6,
        },
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-7_177acd91-0dbb-4e63-8fe7-2311d1c193e8_540x.png?v=1617705832",
            id:7,
        },
        {
            image : "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-8_561008c8-c850-49d3-904c-f30189a60d38_540x.png?v=1617705843",
            id:8,
        },

    ]


  return (
    <div className="my-8">
         <div className="all bg-[#F5F3EE]">
            {/* header area start */}
            <div className="header text-center pt-16 max-w-md mx-auto">
                <h1 className="font-mainFont font-bold md:text-[24px] text-[20px] my-4">SHOP THE LOOKS</h1>
                 <p className="font-thin text-[16px] text-[#494949]">
                    Our latest endeavour features designs from around the world with materials so comfortable 
                    you won't want to wear anything else every again.
                 </p>
            </div>
            {/* header-area end */}

            {/* product area start */}
             <div className="product grid md:grid-cols-4 grid-cols-2 gap-4 mt-10 mx-8">
                {
                    product.map(item=>(
                        <div key={item.id} className="main w-full cursor-pointer relative">
                           <Image src={item.image} width={330} height={200}   alt="image"/>
                            <div className="button-area w-full text-center  absolute top-[50%]">
                                <div className="button-area  text-center">
                                     <p className="bg-white inline-block px-4 py-2 rounded-md font-bold">Shop Now</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
             </div>
            {/* product area end */}
         </div>
    </div>
  )
}

export default ShopLooks