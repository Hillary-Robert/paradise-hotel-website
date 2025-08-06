import { facilityProp, HeroListProp, luxuryProp, navLinksProps, testimonialProp } from "@/interface";
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


import {
  FaWifi,
  FaSwimmingPool,
  FaGamepad,
  FaUtensils,
  FaDumbbell,
  FaTshirt,
  FaBolt,
  FaParking
} from "react-icons/fa";

export const facilitySample: facilityProp[] = [
  {
    icon: FaWifi,
    title: "Free Wi-Fi",
    description: "Stay connected with high-speed internet.",
  },
  {
    icon: FaSwimmingPool,
    title: "Swimming Pool",
    description: "Relax in our outdoor pool.",
  },
  {
    icon: FaGamepad,
    title: "Game Center",
    description: "Enjoy fun games and entertainment facilities.",
  },
  {
    icon: FaUtensils,
    title: "Breakfast",
    description: "Start your day with a delicious complimentary breakfast.",
  },
  {
    icon: FaDumbbell,
    title: "Gym",
    description: "Keep fit in our fully equipped fitness center.",
  },
  {
    icon: FaTshirt,
    title: "Laundry",
    description: "Convenient laundry services available on-site.",
  },
  {
    icon: FaBolt,
    title: "24/7 Power",
    description: "Reliable, uninterrupted electricity around the clock.",
  },
  {
    icon: FaParking,
    title: "Parking Space",
    description: "Ample and secure parking space for your convenience.",
  },
];

import { FaStar } from "react-icons/fa"
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa";

export const testimonialSample: testimonialProp[] = [
  {
    date: "2 Mar, 2023",
    rating: FaStar,
    quote: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particularly noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    quoteLeft: FaQuoteLeft,
    quoteRight: FaQuoteRight,
    image: "/assets/test1.jpg",
    name: "Hillary Robert",
  },
  {
    date: "18 Apr, 2023",
    rating: FaStar,
    quote: "From check-in to check-out, every part of my stay was smooth and enjoyable. The room was clean, well-furnished, and had a beautiful view. The breakfast selection was fantastic, and the staff made sure we were comfortable at all times. Highly recommend!",
    quoteLeft: FaQuoteLeft,
    quoteRight: FaQuoteRight,
    image: "/assets/test2.jpg",
    name: "Sarah Johnson",
  },
  {
    date: "10 Jun, 2023",
    rating: FaStar,
    quote: "Absolutely loved the serene environment and top-notch hospitality. The gym was well-equipped, and the 24/7 power supply ensured uninterrupted comfort throughout our stay. Will definitely be coming back!",
    quoteLeft: FaQuoteLeft,
    quoteRight: FaQuoteRight,
    image: "/assets/test3.jpg",
    name: "Michael Thompson",
  },
  {
    date: "27 Jul, 2023",
    rating: FaStar,
    quote: "A wonderful experience from start to finish. The pool area was clean and relaxing, and the game center was a hit with the kids. Staff were courteous and always willing to help. The facility truly exceeded our expectations.",
    quoteLeft: FaQuoteLeft,
    quoteRight: FaQuoteRight,
    image: "/assets/test4.jpg",
    name: "Aisha Bello",
  },
  {
    date: "12 Aug, 2023",
    rating: FaStar,
    quote: "I was impressed by how quiet and comfortable everything was. The room service was fast, the Wi-Fi was strong, and the atmosphere felt like home. This is easily one of the best accommodations I've experienced in a long while.",
    quoteLeft: FaQuoteLeft,
    quoteRight: FaQuoteRight,
    image: "/assets/test5.jpg",
    name: "Daniel Okoro",
  },
];


export const navLinksSample: navLinksProps[]=[
  {
    name: "Home",
    link: "/"
  },

  {
    name: "Explore",
    link: "/explore"
  },

  {
    name: "Rooms",
    link: "/rooms"
  },

  {
    name: "About",
    link: "/about"
  },


  {
    name: "Contact",
    link: "/contact"
  },
]