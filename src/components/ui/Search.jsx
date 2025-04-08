import { useState } from "react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleSearchClick}
        className="text-white bg-transparent hover:text-blue-300 focus:outline-none"
      >
        <svg
          className="h-6 w-6 transition-all duration-300"
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

      <input
        type="search"
        className={`absolute top-0 left-0 w-0 h-10 py-2 px-4 text-white bg-gray-800 placeholder-gray-400 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          isOpen ? "w-48 pl-10" : "w-0"
        }`}
        placeholder="Search"
        onBlur={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default Search;
