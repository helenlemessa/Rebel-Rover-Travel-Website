import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from "./pages/Home";
import Package from "./pages/Package";
import DestinationCard from './components/DestinationCard/DestinationCard'
import Blog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
<Router>
  <Navbar />
  
  <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/package" element={<Package />} />
      <Route path="/destination" element={<DestinationCard />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </MainLayout>

  <Footer />
</Router>

  );
};

export default App;
