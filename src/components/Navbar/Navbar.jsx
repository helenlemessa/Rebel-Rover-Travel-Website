import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "../ui/NavLinks";
import NavLogo from "../../assets/logo1 1.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Keyboard shortcut: open on Ctrl+K or ⌘+K, close on Escape.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <nav className="glass fixed w-full bg-gray-900/80 backdrop-blur-[1px] shadow-md">
        <div className="navbar px-4 md:px-8 py-2 flex justify-between items-center">
          {/* LOGO & Home */}
          <div className="flex items-center justify-between w-full">
            <NavLink to="/" className="flex items-center">
              <img
                src={NavLogo}
                alt="Logo"
                className="w-60 h-auto transition-transform"
              />
            </NavLink>
            {/* Hamburger for mobile */}
            <div className="lg:hidden text-white text-xl">
              <button onClick={toggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 items-center">
            <NavLinks />
          </ul>

          {/* Search Icon Trigger (Desktop) */}
          <div className="text-white ml-6 hidden lg:block">
            <button
              onClick={toggleSearch}
              className="transition-all duration-300"
            >
              <svg
                className="h-5 opacity-80 hover:opacity-100 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidenav */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 z-40 transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <img
            src={NavLogo}
            alt="Logo"
            className="w-40 h-auto transition-transform"
          />
          <button onClick={toggleDrawer} className="text-white text-xl">
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          <NavLinks isMobile={true} onCloseMobile={closeDrawer} />
        </ul>
      </div>

      {/* Mobile Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 z-30"
          onClick={closeDrawer}
        />
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="w-full py-4 pl-6 pr-14 text-lg bg-gray-800/80 border-2 border-gray-700 rounded-2xl outline-none focus:border-gray-500 placeholder-gray-400 text-white backdrop-blur-lg transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 bg-gray-800/50 border border-gray-600 rounded-md text-gray-100 text-sm">
                  Esc
                </kbd>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-400 text-sm">
              Start typing to search. Press Esc to close.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
