import { NavLink } from 'react-router-dom'

const Navbar3 = () => {
  return (
    <div className="p-4 bg-gray-100 flex items-center justify-center">
    <nav className="flex justify-between items-center">
      <ul className="flex gap-6 text-lg font-semibold">
        {["Popular", "Investment Hotspots", "Affordable","Great Lifestyle"].map((city) => (
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

     
    </nav>
  </div>
  )
}

export default Navbar3
