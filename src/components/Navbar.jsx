import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Rebel Rover
        </Link>
        <nav className="space-x-6 text-gray-700 font-medium">
          <NavLink to="/" activeClassName="text-blue-600" exact>Home</NavLink>
          <NavLink to="/about" activeClassName="text-blue-600">About Us</NavLink>
          <NavLink to="/package" activeClassName="text-blue-600">Package</NavLink>
          <NavLink to="/blog" activeClassName="text-blue-600">Blog</NavLink>
          <NavLink to="/contact" activeClassName="text-blue-600">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
