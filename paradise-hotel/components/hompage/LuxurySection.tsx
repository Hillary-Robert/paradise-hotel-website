import { luxuryProp } from "@/interface";

const LuxurySection = ({ luxury }: { luxury: luxuryProp[] }) => {
  return (
    <section
      className="relative py-16 px-6 bg-cover bg-center bg-no-repeat md:px-[7.5rem]"
      style={{
        backgroundImage: "url('/assets/luxuryBG.png')",
      }}
    >
      
      <div className="absolute inset-0 bg-[#7c6a46]/80 z-0" />

     
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-white">Luxury Suites</h2>
        <p className="text-gray-50 text-center py-3 mb-10 ">All rooms are designed for your comfort</p>

        <div className="grid md:grid-cols-3 gap-8">
          {luxury.map((luxury, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: `url(${luxury.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
              }}
            >
            
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition duration-300 hover:text-black" />

              
              <div className="relative z-10 text-white p-6 flex flex-col h-full justify-end">
                <h3 className="text-2xl font-semibold mb-2">{luxury.theme}</h3>
                <p className="absolute top-4 right-4 text-sm mb-4 italic bg-black px-2 py-2 w-fit">{luxury.available}</p>
                <ul className="text-sm space-y-1">
                  {luxury.feature.map((feat, i) => (
                    <li key={i}>• {feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
