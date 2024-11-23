import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="p-4 bg-gray-100 pl-[18rem]">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-6 text-lg font-semibold">
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

        <div className="relative">
          <input 
            type="text" 
            placeholder="Find your place" 
            className="p-2 pl-10 w-[12rem] text-black rounded-full  focus:outline-none "
            aria-label="Search places"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
