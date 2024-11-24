

import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className="p-4 bg-white flex items-center justify-center">
      <nav className="w-full ">
        <ul className="flex justify-center  flex-col md:flex-row gap-4 md:gap-6 text-lg font-semibold items-center">
          {["Renters", "Landlords/Property Managers", "Agents"].map((item) => (
            <li key={item}>
              <NavLink 
                to={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full block hover:text-[#0D28AB] transition duration-200 ${
                    isActive ? "outline outline-2 outline-[#0D28AB] text-[#0D28AB]" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar2
