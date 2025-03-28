import React from "react";
import { Link } from "react-router-dom";
import { Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Make sure this is imported

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section relative h-[70vh] flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/9e/56/58/9e5658bff0f0a57d77a4077476e1e772.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Rent Your Dream Car
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover luxury and comfort with our premium car rental service.
          </p>
          <Link to="/fleet">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg"
            >
              Explore Cars
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
