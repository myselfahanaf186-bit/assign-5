import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>

        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
            className="w-[92px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          <a href="#" className="text-pink-500">
            Home
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500"
          >
            Contact
          </a>

        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-5 text-sm">

          <button className="text-gray-600 hover:text-pink-500">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500">
            Sign Up
          </button>

        </div>

        {/* Mobile Auth Buttons */}
        <div className="md:hidden flex items-center gap-3 text-xs">

          <button className="text-gray-600">
            Sign In
          </button>

          <button className="px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500">
            Sign Up
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">

          <div className="px-6 py-4 space-y-4">

            <a
              href="#"
              className="block text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#"
              className="block text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#"
              className="block text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#"
              className="block text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#"
              className="block text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;