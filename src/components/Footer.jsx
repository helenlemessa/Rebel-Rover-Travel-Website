//   export default Footer;
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-16">
      {/* Subscribe Section */}
      <div
        className="bg-cover bg-center text-white py-16 px-4 text-center"
        style={{ backgroundImage: `url('/images/Footer.jpg')` }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Subcribe to get special price
        </h2>
        <p className="text-sm md:text-base text-gray-200 mb-6 max-w-xl mx-auto">
          Don’t wanna miss something? Subscribe right now and get special
          promotion and monthly newsletter.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Type your email here"
            className="flex-grow px-6 py-3 text-black outline-none w-full sm:w-auto"
          />
          <button className="bg-black text-white px-8 py-3 text-sm font-medium w-full sm:w-auto hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 py-12">
        {/* Logo & Description */}
        <div>
          <img
            src="/images/logo2.png"
            alt="Rebel Rover"
            className="h-10 mb-4"
          />
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <MdLocationOn /> 732 Despard St, Atlanta
            </li>
            <li className="flex items-center gap-2">
              <MdPhone /> +97 888 8888
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> info@traveller.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Tours
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl text-gray-700">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-white text-center py-4 text-sm">
        Copyright © All rights reserved (Website Developed & Managed by
        CREATIVECHROMA)
      </div>
    </footer>
  );
};

export default Footer;
