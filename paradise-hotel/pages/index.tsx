import FacilitySection from "@/components/hompage/FacilitySection";
import HeroSection from "@/components/hompage/HeroSection";
import { facilitySample, herolistSample } from "@/constants";


export default function Home() {
  return (
    <div>
      <HeroSection list={herolistSample}/>

      <FacilitySection facility={facilitySample}/>
    </div>
     
  );
}
