import { useState } from "react";
import { Link } from "react-router"; // Ensure correct import for React Router
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.jpg";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-nav fixed w-full z-50 top-0 left-0 font-primary  shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} className="h-auto max-h-10 w-auto" alt="Logo" />
        </Link>

        {/* Right Section: Signup Button + Mobile Menu Icon */}
        <div className="flex md:order-2 space-x-3">
          <button
            type="button"
            className="border border-secondary-text hover:bg-dark hover:border hover:border-dark hover:text-white px-6 py-2 rounded-2xl text-sm md:text-base"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-dark px-6 py-2 rounded-2xl hover:bg-transparent hover:text-text border border-dark hover:border-secondary-text text-white text-sm md:text-base"
          >
            Sign Up
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden  text-secondary-text "
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:w-auto md:order-1">
          <ul className="flex space-x-6 ">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="relative text-black hover:text-black after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark shadow-lg z-50 ">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="brelative text-white  hover:text-black after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
