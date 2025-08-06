import { facilitySample } from "@/constants";
import { facilityProp } from "@/interface"; 

const FacilitySection = ({ facility }: { facility: facilityProp[] }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-10 px-6 md:px-[7.5rem] py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Facilities
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-[1.5]">
          We offer modern (5 star) hotel facilities for your comfort.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
        {facilitySample.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <div
              key={index}
              className="flex flex-col  items-center justify-center p-8 bg-white shadow-md rounded-xl transition hover:shadow-lg hover:bg-[#7C6A46] hover:text-white text-[#7C6A46] h-[15rem]"
            >
              <Icon className="text-5xl mb-3" />
              <p className=" font-medium text-sm md:text-base">
                {facility.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FacilitySection;
