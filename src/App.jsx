import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeaderPackage from "./pages/Package";
import Booking from "./features/booking/BookingForm";
import UserFormProvider from "./contexts/UserFormContext"; // Import UserFormProvider

import { useState } from "react";
import BookingHistory from "./features/profile/BookingHistory";
import Destination from "./components/DestinationCard/DestinationCard";

const App = () => {
  const [book, setBook] = useState({
    firstName: "",
    middleName: "",
    lastname: "",
  });

  return (
    <UserFormProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HeaderPackage book={book} setBook={setBook} />}
          />
          <Route
            path="/destination"
            element={<Destination book={book} setBook={setBook} />}
          />
          <Route
            path="/booking"
            element={<Booking book={book} setBook={setBook} />}
          />
          <Route
            path="/booking-history"
            element={<BookingHistory book={book} setBook={setBook} />}
          />
        </Routes>
      </Router>
    </UserFormProvider>
  );
};

export default App;
