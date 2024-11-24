


import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="p-4 bg-gray-100">
      <nav className="flex flex-col md:flex-row justify-between items-center">
        {/* City Links: Hidden on small screens */}
        <ul className="hidden sm:flex gap-6 sm:gap-2 text-lg font-semibold">
          {["Goa", "Mumbai", "Kolkata", "Jaipur", "Bangalore", "Kerala", "Pune"].map((city) => (
            <li key={city}>
              <NavLink
                to={`/${city.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full hover:text-[#0D28AB] transition duration-200 ${
                    isActive ? "outline outline-2 outline-[#0D28AB] text-[#0D28AB]" : ""
                  }`
                }
              >
                {city}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Box: Centered on small screens */}
        <div className="relative w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Find your place"
            className="p-2 pl-10 w-full md:w-[12rem] text-black rounded-full focus:outline-none"
            aria-label="Search places"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
