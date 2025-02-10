import { useState } from "react";
import { Link } from "react-router"; // Corrected router import
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 left-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="" 
            className="h-8" 
            alt="Logo" 
          />
          
        </Link>

        {/* Right Section: Signup Button + Mobile Menu Icon */}
        <div className="flex md:order-2 space-x-3">
          <button 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
              rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
              focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:w-auto md:order-1">
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link 
                to="/" 
                className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link 
                to="/" 
                className="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
