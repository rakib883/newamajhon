"use client"
import Banner from "@/UI/Banner";
import Blog from "@/UI/Blog";
import Collection from "@/UI/Collection";
import Denim from "@/UI/DenimCollection/Denim";
import SimpleSlider from "@/UI/ProductSlider";
import ShopLooks from "@/UI/ShopTheLookConnection/ShopLooks";
import Slideshow from "@/UI/Slider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useSelector } from "react-redux";

export default function Home() {
  const searchbarData = useSelector((state:any) => state.allData.searchData);
  const pathName = usePathname();
  const router = useRouter();


  return (
    <div className="main-content">
      <Slideshow />
      <SimpleSlider />
      <Collection />
      <Denim />
      <Banner />
      <ShopLooks />
      <Blog />
    </div>
  );
}
