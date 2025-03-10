import { useState } from "react";
import { Link, NavLink } from "react-router"; // Ensure correct import for React Router
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.jpg";
import Login from "../pages/Login"; // Import Login page
import Signup from "../pages/Signup"; // Import Signup page

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup

  return (
    <nav className="bg-nav fixed w-full z-50 top-0 left-0 font-primary shadow-md py-1 md:py-3 lg:py-3">
      <div className="max-w-screen-xl flex justify-between mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            className="h-auto max-h-6 lg:max-h-8 w-auto"
            alt="Logo"
          />
        </Link>

        {/* Right Section: Login & Signup Buttons */}
        <div className="flex md:hidden space-x-2 sm:space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-8 h-8 justify-center rounded-lg md:hidden text-secondary-text"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:w-auto md:order-1">
          <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Teen Drivers", path: "/teendrivers" },
              { name: "Schedule", path: "/schedule" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-black after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-black after:transition-all after:duration-300"
                      : "relative text-black hover:text-black after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Teen Drivers", path: "/teendrivers" },
              { name: "Schedule", path: "/schedule" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-white after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300"
                      : "relative text-white hover:text-black after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* Render Login or Signup component */}
            {isLogin ? <Login /> : <Signup />}

            {/* Toggle between Login and Signup */}
            <p className="text-center text-xs sm:text-sm mt-3">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
