import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Award } from 'lucide-react';

function Home() {
  return (
    <div>
      <section className="hero-section flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Experience Luxury Driving</h1>
          <p className="text-xl mb-8">Premium cars for your premium moments</p>
          <Link
            to="/fleet"
            className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90"
          >
            Explore Our Fleet
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 card-hover">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Premium Insurance</h3>
              <p className="text-gray-600">Comprehensive coverage for peace of mind</p>
            </div>
            <div className="text-center p-6 card-hover">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance whenever you need</p>
            </div>
            <div className="text-center p-6 card-hover">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive rates for luxury vehicles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;