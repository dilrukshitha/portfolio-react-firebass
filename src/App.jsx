import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0); // State to store navbar height

  return (
    <div className="bg-[#161513] text-white font-outfit">
      <ToastContainer />
      {/* Pass setNavbarHeight to Navbar and navbarHeight to Home */}
      <Navbar setNavbarHeight={setNavbarHeight} navbarHeight={navbarHeight} />
      <Home navbarHeight={navbarHeight} />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
