import { TourCardProps } from "@/interface";

const TourCard = ({ title, description, image }: TourCardProps) => {
  return (
    <div className="relative mb-16">
      <img
        src={image}
        alt={title}
        width={1200}
        height={600}
        className="rounded-2xl object-cover w-full h-[400px]"
      />

      {/* Description Card Overlay */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-6 w-[90%] md:w-[70%] text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};


export default TourCard;