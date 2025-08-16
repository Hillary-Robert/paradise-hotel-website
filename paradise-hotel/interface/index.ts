import { ElementType, ReactNode } from "react";
["Home", "Explore", "Rooms", "About", "Contact"]

export interface navLinksProps{
  name: string;
  link: string;
}

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
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



export interface HotelStat {
  image: string;     
  value: string;       
  label: string;       
  description: string; 
}



export interface TeamMember {
  image: string;
  name: string;
  role: string;
  alt: string;
}



export interface Room {
  id: number;
  name: string;
  price: string;
  available: boolean;
  image: string;
  features: string[]; 
  description: string;
}


export interface CardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export interface TourCardProps {
  title: string;
  description: string;
  image: string;
}