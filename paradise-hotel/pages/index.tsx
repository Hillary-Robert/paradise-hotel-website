import FacilitySection from "@/components/hompage/FacilitySection";
import HeroSection from "@/components/hompage/HeroSection";
import LuxurySection from "@/components/hompage/LuxurySection";
import TestimonialSection from "@/components/hompage/TestimonialSection";
import { facilitySample, herolistSample, luxurySmple, testimonialSample } from "@/constants";


export default function Home() {
  return (
    <div>
      <HeroSection list={herolistSample}/>

      <FacilitySection facility={facilitySample}/>

      <LuxurySection luxury={luxurySmple}/>

      <TestimonialSection testimonial={testimonialSample}/>
    </div>
     
  );
}
