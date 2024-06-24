import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Make sure to import the AOS styles

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 2500 }); // Corrected duration to be a number
  }, []);

  return (
    <div>
      <div className="bg-bannerImage bg-no-repeat w-full bg-cover py-10 mt-8 text-white" data-aos="zoom-in">
        <div className="flex flex-col justify-center items-center py-8">
          <h1 className="font-mainFont text-[13px] font-bold">NEW ARRIVALS</h1>
          <p className="md:text-[60px] text-[24px] font-bold font-mainFont">Autumn is Coming</p>
          <p className="text-[16px] font-mainFont font-bold">The 11 Biggest Autumn/Winter 2021 Trends</p>
          {/* border area start */}
          <div className="border-area bg-slate-50 w-[150px] h-[4px] my-8"></div>
          {/* border area end */}
          <p className="font-mainFont font-semibold text-[13px] uppercase">BY VINOVATHEME</p>
          <p>11 NOVEMBER 2021</p>
          <button className="bg-white hover:bg-black hover:text-white hover:border-white border-[1px] text-black font-mainFont p-2 my-8 text-base font-bold">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
