import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-white px-4">
      {children}
    </main>
  );
};

export default MainLayout;

