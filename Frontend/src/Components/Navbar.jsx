import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full shadow-sm">
      <div className="p-4">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">EduPulse</span>
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-600">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-blue-600">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
