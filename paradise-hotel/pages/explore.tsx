import TourCard from "@/components/explorePage/tourCard";

const ExplorePage = () => {
  return (
    <section className="flex flex-col gap-[2rem]">
      <div className="relative w-full text-center  overflow-hidden h-[90vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/assets/luxury1.jpg")` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-[7.5rem] text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Take a tour</h2>
        </div>
      </div>

      <div className="py-12 px-6 md:px-[7.5rem]">
        <TourCard
          title="Luxurious rooms"
          description="The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design. Luxurious bedrooms that will make you never want to leave your room again."
          image="/assets/luxury3.jpg"
        />

        <TourCard
          title="Gym center"
          description="Stay fit during your vacation in our fully equipped gym center, offering modern machines, free weights, and wellness areas for your convenience."
          image="/assets/luxury2.jpg"
        />

        <TourCard
          title="Restaurant"
          description="Enjoy fine dining in our world-class restaurant, serving a variety of local and international cuisines prepared by top chefs."
          image="/assets/luxury1.jpg"
        />
      </div>
    </section>
  );
};

export default ExplorePage;
