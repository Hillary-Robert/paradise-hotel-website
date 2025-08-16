import Image from "next/image";
import { rooms } from "@/constants";
import { ReactNode } from "react";
import Button from "@/constants/button";
import { CardProps } from "@/interface";
import Card from "@/components/roomPage/roomCard";

function RoomsPage() {
  return (
    <section className="py-12">
      <div className="relative w-full text-center overflow-hidden h-[70vh] mb-[4rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/assets/luxury1.jpg")` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-[7.5rem] text-white">
          <h2 className="text-6xl font-bold text-center mb-8">
            Rooms and Suites
          </h2>
          <p className="text-lg max-w-3xl">
            Step into a world of refined elegance with our luxury bedroom
            gallery. Each room has been meticulously designed with custom
            interiors, exquisite furnishings, and thoughtful d&eacute;cor
            details to create a perfect balance of style and comfort. Explore
            the gallery to find inspiration and discover the bedroom design that
            transforms your space into a serene, sophisticated retreat.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-[7.5rem]">
        {rooms.map((room) => (
          <Card
            key={room.id}
            className="rounded-2xl overflow-hidden cursor-pointer"
            href={`/rooms/${room.id}`} 
            disabled={!room.available}
          >
            <img
              src={room.image}
              alt={room.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover mb-2"
            />

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{room.name}</h3>
                <span className="text-sm text-gray-500">
                  Available: {room.available ? "Yes" : "No"}
                </span>
              </div>

              <p className="font-bold">{room.price}</p>

              <div className="flex gap-3 flex-wrap text-gray-600">
                {room.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 text-sm border rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button disabled={!room.available} className="mt-4">
                Book now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default RoomsPage;
