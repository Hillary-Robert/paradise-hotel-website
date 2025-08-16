import { facilityProp, HeroListProp, HotelStat, luxuryProp, navLinksProps, Room, TeamMember, testimonialProp } from "@/interface";
import { FaLocationDot } from "react-icons/fa6"
import { FaHotel } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCalendarMinus } from "react-icons/fa"
import { FaCalendarPlus } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa";
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



export const hstats: HotelStat[] = [
  {
    image: "/assets/luxury3.jpg",
    value: "50+",
    label: "Rooms",
    description: "Spacious, well-furnished, and designed for comfort."
  },
  {
    image: "/assets/luxury2.jpg",
    value: "1000+",
    label: "Happy Guests",
    description: "Consistently delivering top-rated guest experiences."
  },
  {
    image: "/assets/luxury1.jpg",
    value: "10+",
    label: "Years in Service",
    description: "A decade of hospitality excellence and community trust."
  }
];




export const team: TeamMember[] = [
  {
    image: "/assets/test1.jpg",
    name: "Hillary Robert",
    role: "Chief Executive Officer",
    alt: "CEO Hillary Robert"
  },
  {
    image: "/assets/test2.jpg",
    name: "Sarah Thompson",
    role: "Guest Relations Manager",
    alt: "Guest Relations Manager"
  },
  {
    image: "/assets/test3.jpg",
    name: "Michael Okoro",
    role: "Head Chef",
    alt: "Head Chef"
  }
];




export const rooms: Room[] = [
  {
    id: 1,
    name: "The Royal Room",
    price: "₦190,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "ac"],
    description:
      "Experience true elegance with The Royal Room, featuring premium furnishings, modern amenities, and a serene atmosphere fit for royalty.",
  },
  {
    id: 2,
    name: "The Deluxe Suite",
    price: "₦250,000",
    available: false,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "spa"],
    description:
      "Designed for comfort and relaxation, The Deluxe Suite offers a spacious layout with spa access, luxurious bedding, and stylish décor.",
  },
  {
    id: 3,
    name: "The Family Room",
    price: "₦150,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "kitchen"],
    description:
      "Perfect for families, this room includes ample space, a functional kitchen, and cozy interiors to make you feel right at home.",
  },
  {
    id: 4,
    name: "Executive Suite",
    price: "₦300,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "ac", "mini-bar"],
    description:
      "The Executive Suite blends sophistication with comfort, offering a mini-bar, spacious work area, and elegant city views.",
  },
  {
    id: 5,
    name: "Honeymoon Suite",
    price: "₦280,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "jacuzzi", "balcony"],
    description:
      "Celebrate love in the Honeymoon Suite, featuring a private jacuzzi, romantic décor, and a balcony with breathtaking views.",
  },
  {
    id: 6,
    name: "The Penthouse",
    price: "₦500,000",
    available: false,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "spa", "private-pool", "kitchen"],
    description:
      "Our luxurious Penthouse offers unmatched exclusivity with a private pool, spa access, modern kitchen, and panoramic city views.",
  },
  {
    id: 7,
    name: "Garden View Room",
    price: "₦120,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "balcony"],
    description:
      "Relax in the Garden View Room with fresh natural light, a private balcony, and stunning views of lush greenery.",
  },
  {
    id: 8,
    name: "Ocean View Suite",
    price: "₦350,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "balcony", "mini-bar"],
    description:
      "Wake up to the sound of the waves in the Ocean View Suite, offering a mini-bar, private balcony, and breathtaking seaside views.",
  },
  {
    id: 9,
    name: "Budget Single Room",
    price: "₦80,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["wifi", "fan"],
    description:
      "A simple yet cozy option for solo travelers, the Budget Single Room offers all the essentials at an affordable price.",
  },
  {
    id: 10,
    name: "Presidential Suite",
    price: "₦600,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "spa", "private-pool", "butler-service"],
    description:
      "The ultimate luxury experience, the Presidential Suite includes a private pool, spa access, and dedicated butler service for a truly lavish stay.",
  },
  {
    id: 11,
    name: "City View Room",
    price: "₦200,000",
    available: true,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "ac", "balcony"],
    description:
      "Enjoy vibrant cityscapes from the City View Room, offering modern comfort with a private balcony and full amenities.",
  },
  {
    id: 12,
    name: "Luxury Loft",
    price: "₦400,000",
    available: false,
    image: "/assets/luxury3.jpg",
    features: ["tv", "wifi", "jacuzzi", "mini-bar", "kitchen"],
    description:
      "A stylish two-level retreat, the Luxury Loft boasts a jacuzzi, kitchen, and elegant design for an unforgettable stay.",
  },
];
