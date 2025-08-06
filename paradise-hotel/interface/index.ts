import { ElementType } from "react";
["Home", "Explore", "Rooms", "About", "Contact"]

export interface navLinksProps{
  name: string;
  link: string;
}


export interface HeroListProp {
  icon: ElementType;
  data: string;
  info: string
}

export interface luxuryProp{
  theme: string;
  available: string;
  image: string
  feature: string[]
}


export interface facilityProp {
  icon: ElementType;
  title: string;
  description: string;
}


export interface testimonialProp{
  date: string;
  quote: string;
  rating: ElementType;
  quoteLeft: ElementType;
  quoteRight: ElementType;
  image: string;
  name: string
}

