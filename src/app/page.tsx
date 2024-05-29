
import Banner from "@/UI/Banner";
import Collection from "@/UI/Collection";
import Denim from "@/UI/DenimCollection/Denim";
import SimpleSlider from "@/UI/ProductSlider";
import ShopLooks from "@/UI/ShopTheLookConnection/ShopLooks";
import Slideshow from "@/UI/Slider";


export default function Home() {
  return (
    <div className="main-content">
      <Slideshow />
      <SimpleSlider />
      <Collection/>
      <Denim/>
      <Banner/>
      <ShopLooks/>
    </div>
  );
}
