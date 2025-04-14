import {
  createContext,
  useState,
  useContext,
 
  useEffect,
} from "react";

// Create the context
export const UserFormContext = createContext();

// Custom hook to use the UserFormContext
export const useUserFormContext = () => useContext(UserFormContext);

// Provider component
const UserFormProvider = ({ children }) => {
  // Initialize from localStorage
  const [booking, setBooking] = useState(() => {
    const stored = localStorage.getItem("bookingData");
    return stored ? JSON.parse(stored) : [];
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  // Persist to localStorage when booking changes
  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(booking));
  }, [booking]);

  const handleBooking = (destination) => {
    setSelectedItem(destination); // Update the selectedItem with the chosen destination
  };

  const value = {
    booking,
    handleBooking,
    setBooking,
    selectedItem,
    setSelectedItem,
    editingIndex,
    setEditingIndex,
  };

  return (
    <UserFormContext.Provider value={value}>
      {children}
    </UserFormContext.Provider>
  );
};

export default UserFormProvider;
