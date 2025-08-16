import { useRouter } from "next/router";
import { rooms } from "@/constants";
import Button from "@/constants/button";
import { useState } from "react";

const RoomPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [message, setMessage] = useState<string>("");

  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  const clickEvent = () => {
    setMessage("Proceed to payment");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="py-12 mt-35 md:mt-25 lg:mt-15 px-6 md:px-[7.5rem] w-full">
      <h2 className="text-3xl font-bold mb-4">{room.name}</h2>

      <img
        src={room.image}
        alt={room.name}
        className="rounded-lg mb-4 max-w-xl h-120 object-cover w-[100%]"
      />

      
      <p className="text-base text-gray-700 mb-6 lg:mr-[50%] md:mr-[40%]">{room.description}</p>

      <p className="text-lg font-bold mb-2">Price: {room.price}</p>
      <p className="mb-4">Available: {room.available ? "Yes" : "No"}</p>

      <div className="flex gap-2 flex-wrap mb-4">
        {room.features.map((feature) => (
          <span key={feature} className="px-2 py-1 border rounded-md text-sm">
            {feature}
          </span>
        ))}
      </div>

      <Button disabled={!room.available} onClick={clickEvent}>
        Book now
      </Button>

      {message && <p className="text-green-500 mt-4 text-3xl">{message}</p>}
    </section>
  );
};

export default RoomPage;
