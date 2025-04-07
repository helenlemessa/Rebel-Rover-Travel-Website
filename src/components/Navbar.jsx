import { Link, NavLink } from "react-router-dom";


import { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full opacity-90 z-50 bg-black backdrop-blur-md text-white ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div
          className={`flex items-center ${
            showSearch ? "hidden md:flex" : "flex"
          }`}
        >
          <img
            src="/images/logo1.png"
            alt="Rebel Rover Logo"
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {/* <a href="#" className="hover:text-yellow-400 md:mr-50 mr-5">
            Home
          </a> */}
          <NavLink to="#" className="hover:text-yellow-400 md:mr-50 mr-5">
            Home
          </NavLink>
          <NavLink
            to="/package"
            className="flex items-center hover:text-yellow-400 cursor-pointer"
            activeClassName="text-yellow-400"
          >
            Package
            <FaChevronDown className="text-xs ml-1" />
          </NavLink>
          <NavLink
            to="/destination"
            className="flex items-center hover:text-yellow-400 cursor-pointer"
            activeClassName="text-yellow-400"
          >
            Destination
            <FaChevronDown className="text-xs ml-1" />
          </NavLink>
          <NavLink
            to="/blog"
            className="flex items-center hover:text-yellow-400 cursor-pointer"
            activeClassName="text-yellow-400"
          >
            Blog
            <FaChevronDown className="text-xs ml-1" />
          </NavLink>
          <NavLink to="/contact" activeClassName="hover:text-yellow-400">
            Contact
          </NavLink>
        </nav>

        {/* Search input */}
        <div className="flex items-center gap-3 md:gap-4">
          {showSearch ? (
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              onBlur={() => setShowSearch(false)}
              className="px-3 py-1 rounded-md text-white w-48 md:w-auto md:ml-3 focus:outline-none focus:ring-2 focus:ring-white-400"
            />
          ) : (
            <button
              onClick={handleSearchToggle}
              className="text-white text-lg md:ml-6"
            >
              <FaSearch />
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setShowSearch(false);
            }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-3 text-sm">
          <a href="#" className="block py-1 hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="block py-1 hover:text-yellow-400">
            Package
          </a>
          <a href="#" className="block py-1 hover:text-yellow-400">
            Destination
          </a>
          <a href="#" className="block py-1 hover:text-yellow-400">
            Blog
          </a>
          <a href="#" className="block py-1 hover:text-yellow-400">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
