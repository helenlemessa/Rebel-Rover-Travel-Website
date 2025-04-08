import { useState } from "react";
import Logo from "./assets/logo1 1.svg";
import SingleBlog from "./pages/SingleBlog";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
        <div>
          <img src={Logo} alt="logo" className="h-32" />
        </div>
        <h1 className="text-3xl font-bold text-center">Lets start</h1>
      </div> */}
      {/* <SingleBlog /> */}
      <Router>
        <Routes>
          <Route path="/" element={<SingleBlog />} />
          <Route path="/destination/:id" element={<SingleBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
