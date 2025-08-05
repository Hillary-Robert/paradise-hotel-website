import { facilityProp, HeroListProp, luxuryProp } from "@/interface";
import { FaLocationDot } from "react-icons/fa6"
import { FaHotel } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCalendarMinus } from "react-icons/fa"
import { FaCalendarPlus } from "react-icons/fa"

export const herolistSample: HeroListProp[]=[

  {
    data: "Location",
    icon: FaLocationDot,
    info: "Kuopio"

   },

   {
    data: "Room type",
    icon: FaHotel,
    info: "standard"

   },


   {
    data: "Person",
    icon: IoPersonSharp,
    info: "01"

   },

   {
    data: "Check in",
    icon: FaCalendarPlus,
    info: "07 may 2024"

   },

   {
    data: "Check out",
    icon: FaCalendarMinus,
    info: "27 may 2024"

   },


]



export const luxurySmple: luxuryProp[] = [
  {
    theme: "Modern Comfort",
    available: "2 Rooms available",
    image: "/assets/luxury1.jpg",
    feature: ["Television set", "Extra sheets", "Breakfast"],
  },
  {
    theme: "Executive Suite",
    available: "3 Executive Suites available",
    image: "/assets/luxury2.jpg",
    feature: ["Jacuzzi", "Smart TV", "24/7 Room Service"],
  },
  {
    theme: "Honeymoon Paradise",
    available: "1 Honeymoon Suite available",
    image: "/assets/luxury3.jpg",
    feature: ["Ocean view", "King-size bed", "Mini fridge"],
  },
];


import { FaWifi, FaSwimmingPool } from "react-icons/fa";

export const facilitySample: facilityProp[] = [
  {
    icon: FaWifi,
    title: "Free Wi-Fi",
    description: "Stay connected with high-speed internet."
  },
  {
    icon: FaSwimmingPool,
    title: "Swimming Pool",
    description: "Relax in our outdoor pool."
  },
  // more items...
];
