import { useContext } from "react";

import { useNavigate, Link } from "react-router-dom";
import { UserFormContext } from "../../contexts/UserFormContext";

const BookingHistory = () => {
  const { booking, setBooking, setEditingIndex } = useContext(UserFormContext);

  const navigate = useNavigate();

  const handleEdit = (index) => {
    setEditingIndex(index);
    navigate("/booking");
  };

  const handleDelete = (indexToDelete) => {
    const updated = booking.filter((_, index) => index !== indexToDelete);
    setBooking(updated);
  };

  if (!booking) {
    return <div>Loading...</div>; // Display loading state if booking data is not yet available
  }

  return (
    <>
      <nav className="package-link-book">
        <Link to="/">Package</Link>

        <Link to="/booking-history">User Profile</Link>
      </nav>

      <div className="booking-history">
        <h1>Booking History</h1>
        <ul className="booking-list">
          {booking.length > 0 ? (
            booking.map((entry, index) => (
              <li key={`${entry.id}-${index}`} className="booking-item">
                <h2>
                  {entry.firstName} {entry.middleName} {entry.lastName}
                </h2>
                {entry.destination && (
                  <div>
                    <p>Destination: {`${entry.destination.country}`}</p>
                    <p>Price: {`${entry.destination.price}`}</p>
                    <p>Booked date: {`${entry.date}`}</p>
                    <p>Registered Email:{`${entry.email}`}</p>
                    <p>Passport Nummber:{`${entry.passportNumber}`}</p>
                    <p>Passport Expiry Date:{`${entry.passportExpiryDate}`}</p>
                    <p>Travel Type:{`${entry.travelType}`}</p>
                    {entry.returnDate && (
                      <p>Return Date: {`${entry.returnDate}`}</p>
                    )}
                  </div>
                )}
                <div className="btn-book">
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn-book-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn-book-delete"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>No booked history</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default BookingHistory;

