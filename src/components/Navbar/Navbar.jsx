import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo1 1.svg';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navRef = useRef(null);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null);
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Add your search logic here
        console.log('Search for:', searchQuery);
    };

    const dropdownItems = {
        package: ['Adventure', 'Relaxation', 'Cultural'],
        destination: ['Asia', 'Europe', 'Americas'],
        blog: ['Travel Tips', 'Destinations', 'Experiences']
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdowns when route changes
    useEffect(() => {
        setOpenDropdown(null);
    }, [location.pathname]);

    return (
        <nav ref={navRef} className="bg-gray-900/20 backdrop-blur-lg shadow-sm fixed w-full z-10">
            <div className="container mx-auto px-4 flex  justify-between py-4">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10" />
                </NavLink>

                {/* Desktop Navigation */}
                                <div className="hidden md:flex items-center space-x-8">
                                    <NavLink 
                                        to="/" 
                                        className={({ isActive }) => 
                                            `px-3 py-2 font-semibold rounded-lg transition-colors ${
                                                isActive ? 'text-blue-600 font-semibold' : 'text-gray-100 hover:text-blue-500'
                                            }`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    
                                    {/* Package Dropdown */}
                                    <div className="relative group">
                                        <div className="flex items-center gap-1">
                                            <NavLink
                                                to="/package"
                                                className={({ isActive }) => 
                                                    `px-3 py-2 font-semibold rounded-lg transition-colors ${
                                                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-100 hover:text-blue-500'
                                                    }`
                                                }
                                            >
                                                Package
                                            </NavLink>
                                            <button 
                                                onClick={() => toggleDropdown('package')}
                                                className="text-gray-100 hover:text-blue-500 p-2 -ml-2"
                                            >
                                                <svg 
                                                    className={`w-4 h-4 transform transition-transform ${openDropdown === 'package' ? 'rotate-180' : 'rotate-0'}`} 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                        {openDropdown === 'package' && (
                                            <div className="absolute top-full left-0 mt-5 w-48 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg py-2 border border-gray-100">
                                                {dropdownItems.package.map((item) => (
                                                    <NavLink
                                                        key={item}
                                                        to={`/package/${item.toLowerCase()}`}
                                                        className={({ isActive }) => 
                                                            `block px-4 py-2 text-sm ${
                                                                isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-blue-50'
                                                            }`
                                                        }
                                                    >
                                                        {item}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Destination Dropdown */}
                                    <div className="relative group">
                                        <div className="flex items-center gap-1">
                                            <NavLink
                                                to="/destination"
                                                className={({ isActive }) => 
                                                    `px-3 py-2 font-semibold rounded-lg transition-colors ${
                                                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-100 hover:text-blue-500'
                                                    }`
                                                }
                                            >
                                                Destination
                                            </NavLink>
                                            <button 
                                                onClick={() => toggleDropdown('destination')}
                                                className="text-gray-100 hover:text-blue-500 p-2 -ml-2"
                                            >
                                                <svg 
                                                    className={`w-4 h-4 transform transition-transform ${openDropdown === 'destination' ? 'rotate-180' : 'rotate-0'}`} 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                        {openDropdown === 'destination' && (
                                            <div className="absolute top-full left-0 mt-5 w-48 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg py-2 border border-gray-100">
                                                {dropdownItems.destination.map((item) => (
                                                    <NavLink
                                                        key={item}
                                                        to={`/destination/${item.toLowerCase()}`}
                                                        className={({ isActive }) => 
                                                            `block px-4 py-2 text-sm ${
                                                                isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-blue-100'
                                                            }`
                                                        }
                                                    >
                                                        {item}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Blog Dropdown */}
                                    <div className="relative group">
                                        <div className="flex items-center gap-1">
                                            <NavLink
                                                to="/blog"
                                                className={({ isActive }) => 
                                                    `px-3 py-2 font-semibold rounded-lg transition-colors ${
                                                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-100 hover:text-blue-500'
                                                    }`
                                                }
                                            >
                                                Blog
                                            </NavLink>
                                            <button 
                                                onClick={() => toggleDropdown('blog')}
                                                className="text-gray-100 hover:text-blue-500 p-2 -ml-2"
                                            >
                                                <svg 
                                                    className={`w-4 h-4 transform transition-transform ${openDropdown === 'blog' ? 'rotate-180' : 'rotate-0'}`} 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                        {openDropdown === 'blog' && (
                                            <div className="absolute top-full left-0 mt-5 w-48 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg py-2 border border-gray-100">
                                                {dropdownItems.blog.map((item) => (
                                                    <NavLink
                                                        key={item}
                                                        to={`/blog/${item.toLowerCase()}`}
                                                        className={({ isActive }) => 
                                                            `block px-4 py-2 text-sm ${
                                                                isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-blue-50'
                                                            }`
                                                        }
                                                    >
                                                        {item}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <NavLink 
                                        to="/contact" 
                                        className={({ isActive }) => 
                                            `px-3 py-2 font-semibold rounded-lg transition-colors ${
                                                isActive ? 'text-blue-600 font-semibold' : 'text-gray-100 hover:text-blue-500'
                                            }`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </div>

                                {/* Search and Mobile Menu */}
                <div className="flex items-center gap-6">
                    {/* Search Container */}
                    <div className="relative hidden md:block">
                        <div className="flex items-center">
                            <div className={`relative transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-0'}`}>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                    <form onSubmit={handleSearch} className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search destinations..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className={`w-full outline-none pl-4 pr-10 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 transition-all duration-300 ${
                                                isSearchOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                            }`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsSearchOpen(false)}
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-opacity ${
                                                isSearchOpen ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="text-gray-700 hover:text-blue-500 ml-2"
                            >
                                <svg 
                                    className={`w-6 h-6 transition-transform ${isSearchOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
                        {isMobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <div className={`fixed inset-0  z-20 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
                    <div className={`absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-gray-100 shadow-2xl`}>
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white/90">
                            <img src={Logo} alt="Logo" className="h-10" />
                            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-blue-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 flex flex-col space-y-3 h-[calc(100vh-112px)] overflow-y-auto">
                            {/* Menu items */}
                            <NavLink 
                                to="/" 
                                onClick={toggleMobileMenu}
                                className={({ isActive }) => 
                                    `px-4 py-2 font-semibold rounded-lg transition-colors ${
                                        isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'hover:bg-gray-100'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            
                            {/* Mobile Dropdowns */}
                            {['package', 'destination', 'blog'].map((menu) => (
                                <div key={menu} className="relative">
                                    <div className="flex justify-between items-center">
                                        <NavLink
                                            to={`/${menu}`}
                                            onClick={toggleMobileMenu}
                                            className={({ isActive }) => 
                                                `px-4 py-2 rounded-lg flex-1 transition-colors ${
                                                    isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'hover:bg-gray-100'
                                                }`
                                            }
                                        >
                                            {menu.charAt(0).toUpperCase() + menu.slice(1)}
                                        </NavLink>
                                        <button
                                            onClick={() => toggleDropdown(menu)}
                                            className="p-2 hover:text-blue-500"
                                        >
                                            <svg className={`w-4 h-4 transform transition-transform ${openDropdown === menu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>
                                    {openDropdown === menu && (
                                        <div className="ml-6 mt-1 space-y-2">
                                            {dropdownItems[menu].map((item) => (
                                                <NavLink
                                                    key={item}
                                                    to={`/${menu}/${item.toLowerCase()}`}
                                                    onClick={toggleMobileMenu}
                                                    className={({ isActive }) => 
                                                        `block px-4 py-2 text-sm rounded-lg transition-colors ${
                                                            isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                                                        }`
                                                    }
                                                >
                                                    {item}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            <NavLink 
                                to="/contact" 
                                onClick={toggleMobileMenu}
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-colors ${
                                        isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'hover:bg-gray-100'
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                            
                            {/* Mobile Search */}
                            <div className="pt-4 mt-auto border-t border-gray-200">
                                <form onSubmit={handleSearch} className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;