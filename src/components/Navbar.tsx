import { useState } from "react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
            className="w-[92px]"
          />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="text-pink-500">
            Home
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            Technologies
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            Projects
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            About
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            Contact
          </a>
        </div>
        {/* Mobile menu button */}
<button
  className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <img
    src="/assets/hamburger.png"
    alt="Menu"
    className="w-6 h-6"
  />
</button>
{/* Mobile menu */}
{menuOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-100">
    <div className="flex flex-col items-center gap-5 py-5 text-sm">
      <a href="#" className="text-pink-500">
        Home
      </a>

      <a href="#" className="text-gray-600">
        Technologies
      </a>

      <a href="#" className="text-gray-600">
        Projects
      </a>

      <a href="#" className="text-gray-600">
        About
      </a>

      <a href="#" className="text-gray-600">
        Contact
      </a>

      <button className="text-gray-600">
        Sign In
      </button>

      <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500">
        Sign Up
      </button>
    </div>
  </div>
)}

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          <button className="text-gray-600 hover:text-pink-500">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;