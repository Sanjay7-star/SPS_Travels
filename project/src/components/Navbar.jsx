import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold gradient-text">LuxeRide</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/fleet" className="text-gray-700 hover:text-primary">Our Fleet</Link>
            <Link to="/booking" className="text-gray-700 hover:text-primary">Book Now</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
            <Link to="/SignUp" className="text-gray-700 hover:text-primary">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;