import { testimonialProp } from "@/interface";
import { testimonialSample } from "@/constants";

const TestimonialSection = ({
  testimonial}: {
  testimonial: testimonialProp[];
}) => {

  return (
    <section className="flex flex-col items-center justify-center text-center gap-10 px-6 md:px-[7.5rem] py-12">
    <h2 className="text-4xl font-bold mb-2 text-center text-black">Testimonies</h2>
  
    <div className="w-full overflow-x-auto  scrollbar-hide hide-scrollbar">
      <div className="flex flex-nowrap gap-x-6 px-4" style={{ width: 'max-content' }}>
        {testimonialSample.map((testimonies, index) => {
          const StarIcon = testimonies.rating;
          const QuoteLeftIcon = testimonies.quoteLeft;
          const QuoteRightIcon = testimonies.quoteRight;
  
          return (
            <div
              key={index}
              className="bg-[#fafafa] p-6 rounded-lg shadow-md flex flex-col justify-between min-w-[320px] max-w-[500px]"
            >
             
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">{testimonies.date}</p>
                <div className="flex gap-1 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <StarIcon key={i} className="text-base" />
                    ))}
                </div>
              </div>
  
             
              <div className="text-gray-700 text-sm mb-4">
                <QuoteLeftIcon className="text-[#7C6A46] text-xl inline-block mr-1" />
                <span>{testimonies.quote}</span>
                <QuoteRightIcon className="text-[#7C6A46] text-xl inline-block ml-1" />
              </div>
  
           
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonies.image}
                  alt={testimonies.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
                <p className="font-semibold text-[#7C6A46]">{testimonies.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  
  );
};

export default TestimonialSection;
