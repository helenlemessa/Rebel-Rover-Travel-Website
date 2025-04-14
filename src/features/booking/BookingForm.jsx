import { useState, useContext, useEffect } from "react";


import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BookingHistory from "../../contexts/UserFormContext";
import { UserFormContext } from "../../contexts/UserFormContext";

const Booking = () => {
  const {
    booking,

    setBooking,
    selectedItem,
    editingIndex,
    setEditingIndex,
  } = useContext(UserFormContext);
  const [destinations, setDestinations] = useState([]);
  const [book, setBook] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    destination: "",
    date: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    gender: "",
    age: "",
    passportNumber: "",
    passportExpiryDate: "",
    address: "",
    city: "",
    zipCode: "",
    travelType: "",
    returnDate: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
        );
        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchDestinations();
  }, [setDestinations]);

  useEffect(() => {
    if (selectedItem?.id) {
      setBook((prev) => ({ ...prev, destination: selectedItem.id }));
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const resetBooking = () => {
    setBook({
      firstName: "",
      middleName: "",
      lastName: "",
      destination: "",
      date: "",
      email: "",
      phoneNumber: "",
      nationality: "",
      gender: "",
      age: "",
      passportNumber: "",
      passportExpiryDate: "",
      address: "",
      city: "",
      zipCode: "",
      travelType: "",
      returnDate: "",
    });
  };

  const selectedDestination = destinations.find(
    (item) => item.id === book.destination.toString()
  );

  const newBooking = {
    firstName: book.firstName,
    middleName: book.middleName,
    lastName: book.lastName,
    destination: selectedDestination,
    date: new Date().toLocaleDateString(),
    email: book.email,
    phoneNumber: book.phoneNumber,
    nationality: book.nationality,
    gender: book.gender,
    age: book.age,
    passportNumber: book.passportNumber,
    passportExpiryDate: book.passportExpiryDate,
    address: book.address,
    city: book.city,
    zipCode: book.zipCode,
    travelType: book.travelType,
    returnDate: book.returnDate,
  };

  const checkDuplicating = () => {
    const isSame = booking.some(
      (s) =>
        s.email === newBooking.email ||
        s.passportNumber === newBooking.passportNumber
    );

    if (isSame) {
      setErrorMessage(
        "The email or passport number has already been used! Please enter another one."
      );
      resetBooking();
      return;
    }

    const isDuplicate = booking.some(
      (b) => b.destination?.id === newBooking.destination.id
    );

    if (isDuplicate) {
      setErrorMessage("You have already booked this destination.");
      resetBooking();
      return;
    }
  };

  useEffect(() => {
    if (editingIndex !== null) {
      const data = booking[editingIndex];
      if (data) {
        setBook({
          ...data,
          destination: data.destination?.id || "",
        });
      }
    }
  }, [editingIndex, booking]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "middleName",
      "lastName",
      "destination",
      "email",
      "phoneNumber",
      "nationality",
      "gender",
      "age",
      "passportNumber",
      "passportExpiryDate",
      "city",
      "travelType",
    ];

    for (let field of requiredFields) {
      if (book[field].trim() === "") return;
    }

    const selectedDestination = destinations.find(
      (item) => item.id === book.destination.toString()
    );

    const newBooking = {
      firstName: book.firstName,
      middleName: book.middleName,
      lastName: book.lastName,
      destination: selectedDestination,
      date: book.date,
      email: book.email,
      phoneNumber: book.phoneNumber,
      nationality: book.nationality,
      gender: book.gender,
      age: book.age,
      passportNumber: book.passportNumber,
      passportExpiryDate: book.passportExpiryDate,
      address: book.address,
      city: book.city,
      zipCode: book.zipCode,
      travelType: book.travelType,
      returnDate: book.returnDate,
    };

    const checkDuplicating = () => {
      const isSame = booking.some(
        (s) =>
          s.email === newBooking.email ||
          s.passportNumber === newBooking.passportNumber
      );

      if (isSame) {
        setErrorMessage(
          "The email or passport number has already been used! Please enter another one."
        );

        return true;
      }

      const isDuplicate = booking.some(
        (b) => b.destination?.id === newBooking.destination.id
      );

      if (isDuplicate) {
        setErrorMessage("You have already booked this destination.");

        return true;
      }

      return false;
    };

    if (editingIndex !== null) {
      const updatedBooking = [...booking];
      updatedBooking[editingIndex] = newBooking;
      setBooking(updatedBooking);
      setEditingIndex(null);
    } else {
      if (checkDuplicating()) return;

      setBooking((prev) => [...prev, newBooking]);

      navigate("/booking-history");
    }
    resetBooking();
  };

  return (
    <>
      <nav className="package-link-book">
        <Link to="/">Package</Link>

        <Link to="/booking-history">User Profile</Link>
      </nav>
      <div className="booking-container">
        <h1 className="form-title"> Travel Booking form</h1>

        {errorMessage && (
          <div
            className="error-message"
            style={{ color: "red", marginBottom: "1rem" }}
          >
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="form-group">
            First name
            <br />
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={book.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="middleName" className="form-group">
            <br />
            Middle name
            <br />
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={book.middleName}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName" className="form-group">
            <br />
            Last name
            <br />
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={book.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="destination" className="form-group">
            <br />
            Destination and Corresponding price
            <br />
            <select
              name="destination"
              id="destination"
              style={{ overflowY: "scroll" }}
              value={book.destination}
              onChange={handleChange}
              className="form-group"
              required
            >
              <option value="">Select a destination</option>
              {destinations.map((dest, idx) => (
                <option key={`${dest.id}-${idx}`} value={dest.id}>
                  {`${dest.country}- $${dest.price}`}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label htmlFor="date" className="form-group">
            Date
            <br />
            <input
              type="date"
              id="date"
              name="date"
              value={book.date}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="form-group">
            <br />
            Email
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={book.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phoneNumber" className="form-group">
            <br />
            Phone number
            <br />
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              value={book.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="nationality" className="form-group">
            <br />
            Nationality/Country
            <br />
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={book.nationality}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="gender" className="form-group">
            <br />
            Gender
            <br />
            <select
              name="gender"
              id="gender"
              value={book.gender}
              onChange={handleChange}
            >
              <option value="">Select a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label htmlFor="age" className="form-group">
            <br />
            Age
            <br />
            <input
              type="number"
              id="age"
              name="age"
              value={book.age}
              onChange={handleChange}
              min="0"
              required
            />
          </label>
          <br />
          <label htmlFor="passportNumber" className="form-group">
            <br />
            Passport Number
            <br />
            <input
              type="text"
              id="passportNumber"
              name="passportNumber"
              value={book.passportNumber}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="passportExpiryDate">
            <br />
            Passport Expiry Date
            <br />
            <input
              type="date"
              id="passportExpiryDate"
              name="passportExpiryDate"
              value={book.passportExpiryDate}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="address" className="form-group">
            <br />
            Address(region/state)
            <br />
            <input
              type="text"
              id="address"
              name="address"
              value={book.address}
              onChange={handleChange}
              placeholder="optional"
            />
          </label>
          <br />
          <label htmlFor="city" className="form-group">
            <br />
            City
            <br />
            <input
              type="text"
              id="city"
              name="city"
              value={book.city}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label htmlFor="zipCode" className="form-group">
            <br />
            Zip Code
            <br />
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={book.zipCode}
              onChange={handleChange}
              placeholder="optional"
            />
          </label>
          <br />
          <label htmlFor="travelType" className="form-group">
            <br />
            Travel Type
            <br />
          </label>
          <select
            name="travelType"
            id="travelType"
            value={book.travelType}
            onChange={handleChange}
          >
            <option value="">Select a Travel type</option>
            <option value="one-way">One way</option>
            <option value="round">Round</option>
          </select>
          <br />
          <label htmlFor="returnDate" className="form-group">
            <br />
            If round travel, enter return date
            <br />
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={book.returnDate}
              onChange={handleChange}
              placeholder="optional"
            />
          </label>
          <br />
          <br />
          <button type="submit" className="btn-form-submit">
            {editingIndex !== null ? "Update" : "Submit"}
          </button>
        </form>

        <div>
          <BookingHistory />
        </div>
      </div>
    </>
  );
};

export default Booking;
