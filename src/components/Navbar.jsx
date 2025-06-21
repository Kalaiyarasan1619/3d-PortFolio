import { NavLink } from "react-router-dom";

// Assuming you have a logo image in your assets
import logo from "../assets/images/k.png";

const Navbar = () => {
  return (
    // Use a full-width header with padding, positioned absolutely or relatively as needed.
    // 'absolute' makes it float over content, 'z-10' keeps it on top.
    <header className="absolute top-0 left-0 z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo link, restored and styled */}

        <NavLink to="/">
          <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
        </NavLink>

        {/* Navigation links */}
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) => {
              // Base classes for all states
              const baseClasses =
                "relative text-black transition-colors duration-300";

              // Classes for the animated underline pseudo-element
              const underlineClasses =
                "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300";

              // Conditional classes for active vs. inactive states
              const activeClasses = "text-blue-600 after:w-full";
              const inactiveClasses =
                "hover:text-blue-600 after:w-0 hover:after:w-full";

              return `${baseClasses} ${underlineClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`;
            }}
          >
            About
          </NavLink>

          {/* You can easily apply the same effect to other links
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative text-black transition-colors duration-300 
               after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
               ${
                 isActive
                   ? "text-blue-600 after:w-full"
                   : "hover:text-blue-600 after:w-0 hover:after:w-full"
               }`
            }
          >
            Projects
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
