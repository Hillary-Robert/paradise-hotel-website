import { hstats, team } from "@/constants"

const About: React.FC = () => {
  return (
    <section className="bg-white text-[#194341]">
      
      <div className="relative w-full text-center rounded-xl overflow-hidden h-[90vh]">
       
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/assets/luxury1.jpg")` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
       
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-[7.5rem] text-white">
          <h2 className="text-6xl font-bold mb-6 text-white">About Us</h2>
          <p className="text-lg max-w-3xl">
            At <strong>Nexus Paradise Hotel</strong>, we blend comfort, style,
            and exceptional service to offer our guests an unforgettable
            experience. Whether you're here for business, leisure, or a special
            occasion, our tranquil environment and dedicated team ensure that
            every moment of your stay is truly relaxing.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-12 mt-16 items-center px-6 md:px-[7.5rem]">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#7C6A46]">
            Our Story
          </h3>
          <p className="text-base leading-relaxed text-[#5F6973]">
            Founded with a vision to redefine modern hospitality, Nexus Paradise
            started as a family-run boutique hotel and has grown into a trusted
            name for quality accommodation and personalized care. Our roots are
            grounded in warmth and tradition, yet we continuously evolve to meet
            the needs of today’s travelers.
          </p>
        </div>
        <div>
          <img
            src="/assets/luxury1.jpg"
            alt="Hotel exterior"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center px-6 md:px-[7.5rem]">
        {hstats.map((stat, index) => (
          <div key={index}>
            <img
              src={stat.image}
              alt={stat.label}
              className="mx-auto mb-4 w-48 h-48"
            />
            <h4 className="text-xl font-bold text-[#7C6A46]">
              {stat.value} {stat.label}
            </h4>
            <p className="text-[#5F6973]">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* CEO and Team Section */}
      <div className="mt-20 text-center px-6 md:px-[7.5rem]">
        <h3 className="text-3xl font-bold mb-4 text-[#7C6A46]">
          Meet Our CEO & Team
        </h3>
        <p className="text-[#7C6A46] max-w-3xl mx-auto mb-12">
          Behind every great stay is a team dedicated to excellence. At the
          heart of Nexus Paradise Hotel is our CEO,{" "}
          <strong>Hillary Robert</strong>, whose vision and leadership continue
          to inspire a culture of warmth, precision, and exceptional guest care.
          Our team is made up of passionate professionals who go above and
          beyond to ensure your stay is unforgettable.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
  {team.map((member, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={member.image}
        alt={member.alt}
        className="w-32 h-32 rounded-full object-cover mb-3 border-4 border-[#7C6A46]"
      />
      <h4 className="font-semibold text-lg text-[#7C6A46]">{member.name}</h4>
      <p className="text-sm text-[#5F6973]">{member.role}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default About;
