import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="mt-4 bg-[#7C6A46] text-white">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 px-6 py-10 md:px-[7.5rem]">
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl font-bold mb-4">Paradise View</h3>
          <p className="text-sm leading-relaxed">
            Experience luxury and comfort like never before at Paradise View.
            Our dedicated staff ensures every moment of your stay is relaxing,
            refined, and unforgettable.
          </p>
        </div>

        {/* Navigation Columns */}

        {/* Column 1 */}
        <div className="min-w-[140px]">
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                F.A.Q
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="min-w-[140px]">
          <h4 className="text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Media Kit
              </Link>
            </li>
          </ul>
        </div>

        <div className="min-w-[140px]">
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Twitter/X
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-[#6B5C3A] px-6 py-10 md:px-[4rem]">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h4>
            <p className="text-sm mb-6">
              Stay updated with the latest offers, news, and updates from
              Paradise View.
            </p>
            <form className="relative w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full py-3 px-4 rounded-full text-black placeholder-gray-400 
               bg-white border border-transparent transition-all duration-300
               focus:outline-none focus:border-[#7C6A46] focus:ring-2 focus:ring-[#7C6A46]
               hover:border-[#7C6A46] hover:bg-gray-50"
              />

              {/* Button */}
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-6 rounded-full text-white font-semibold
               bg-[#7C6A46] transition-all duration-300
               hover:bg-[#5f5032] hover:scale-[1.02] active:scale-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="border-t border-white opacity-40" />

      <div className="text-center text-sm py-6 px-6 md:px-[4rem]">
        <p>
          &copy; {new Date().getFullYear()} Paradise View. All rights reserved.
        </p>
        <p className="mt-2">
          Designed with ❤️ by Hillary Robert and Design from Figma community.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
