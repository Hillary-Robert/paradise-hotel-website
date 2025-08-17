import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full flex flex-col gap-10">
      
      <div
        className="relative h-[90vh] flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/assets/luxury1.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="dancing-script relative text-8xl font-bold z-10">Contact us</h1>
        <p className="relative z-10 mt-4 max-w-xl px-4">
          The elegant luxury bedrooms in this gallery showcase custom interior
          designs & decorating ideas. View pictures and find your perfect luxury
          bedroom design.
        </p>
      </div>

      
      <div className="px-6 md:px-[7.5rem] py-12">
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Fullname"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />

          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-md w-full h-40"
            required
          />

          <button
            type="submit"
            className="bg-[#7b6238] text-white px-6 py-3 rounded-md hover:bg-[#5a4528] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.140869616301!2d-99.16766218468298!3d19.355029386935425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff502e3c8bbf%3A0x5e3d8c6ad7bce9b!2sCoyoacan%20Market!5e0!3m2!1sen!2smx!4v1694092345678"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
