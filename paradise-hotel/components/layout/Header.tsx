import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 px-6 md:px-[7.5rem] py-4">
        <div className="w-14 h-14 shrink-0 flex items-center">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Hamburger / Close Button */}
        <button
          onClick={toggle}
          className="md:hidden ml-auto text-[#7C6A46] font-bold text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "X" : "☰"}
        </button>

        <nav
          className={`w-full md:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:block`}
          role="navigation"
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[2rem] mt-4 md:mt-0">
            {["Home", "Explore", "Rooms", "About", "Contact"].map(
              (links, index) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="text-black hover:text-[#7C6A46] transition-colors duration-200 block py-2 focus:outline-none focus:ring-2 focus:ring-[#7C6A46] rounded"
                    onClick={closeMenu}
                  >
                    {links}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4">
          <button
            aria-label="Book now"
            className="bg-[#7C6A46] hover:bg-[#645333] text-white font-semibold 
                         py-2 px-6 rounded shadow-md transition-all 
                         duration-300 text-lg sm:w-auto self-center"
          >
            Book now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
