import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function Footer() {
  return (
    <>
     <hr className=" border-t border-gray-300" />
    <footer className="bg-gray-900 text-gray-300 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">About TicketSync</h3>
          <p className="text-sm">
            TicketSync is a hassle-free platform for exchanging train tickets and planning shared rides. 
            Connect with fellow travelers and make your journey smoother.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/swaphome" className="hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/homeswap" className="hover:text-blue-400 transition">Post a Ticket</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-blue-400 transition">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">✉ sarvakmakani@gmail.com</p>
          <p className="text-sm">✉ darshitsorthiya@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm">&copy; 2025 TicketSync. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
