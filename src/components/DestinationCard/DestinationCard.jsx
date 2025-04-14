import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserFormContext } from "../../contexts/UserFormContext";


const Destination = () => {
  const navigate = useNavigate();
  const MockApi =
    "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations";
  const [data, setData] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedPrice, setSelectedPrice] = useState(""); // State for price filter
  const [selectedCountry, setSelectedCountry] = useState("");
  const { handleBooking } = useUserFormContext(); // Access context value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(MockApi);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const result = data
      .filter(
        (item) => item.country.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by country name
      )
      .filter((item) =>
        selectedPrice === "all"
          ? true
          : selectedPrice === "under-100"
          ? item.price <= 100
          : selectedPrice === "101-500"
          ? item.price > 100 && item.price <= 500
          : selectedPrice === "501-1000"
          ? item.price > 500 && item.price <= 1000
          : true
      )
      .filter(
        (item) => (selectedCountry ? item.country === selectedCountry : true) // Filter by selected country (if selected)
      );

    setFilteredDestinations(isExpanded ? result : result.slice(0, 6));
  }, [data, searchQuery, selectedPrice, selectedCountry, isExpanded]);
  const toggleDiscover = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h1 className="destination-title">Popular Destinations</h1>
      <p className="destination-description">
        Here are the best places in the world to visit and gain the best
        experience.
      </p>
      <p className="destination-description">
        Secure your flight by booking now.
      </p>

      {/* Search and Filter Section */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">Select Price Range</option>
          <option value="all">All</option>
          <option value="under-100">Under $100</option>
          <option value="101-500"> $101 - $500</option>
          <option value="501-1000"> $501-$1000</option>
        </select>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          {data
            .map((item) => item.country) // Extract unique country names
            .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
            .map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
        </select>
      </div>

      <div>
        <button onClick={toggleDiscover} className="discover-btn">
          {isExpanded ? "Discover Less" : "Discover More"}
        </button>
      </div>

      {/* Destinations List */}
      <div className="place-list">
        {filteredDestinations.map((item) => (
          <div key={item.id} className="place-card">
            <img
              src={`https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations/${item.image}`}
              alt={item.country}
              className="place-image"
            />
            <h2 className="place-name">{item.country}</h2>
            <span className="place-price">Price: ${item.price}/3 days</span>
            <p className="place-description">{item.description}</p>
            <button
              className="booking-btn"
              onClick={() => {
                handleBooking(item);
                navigate("/booking");
              }}
            >
              Booking Now <span className="star">⭐⭐⭐⭐⭐</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
