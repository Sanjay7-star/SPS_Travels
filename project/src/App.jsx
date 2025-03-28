import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Add BrowserRouter import
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import "./styles/main.css";

const App = () => {
  return (
    // <Router> {/* Use BrowserRouter here to handle routing */}
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  // </Router>
  );
};

export default App;
