const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
              className="w-24"
            />

            <p className="mt-4 text-sm leading-6 text-gray-400 max-w-xs">
              Explore modern technologies and build your own
              developer stack with Dev Stack.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-6 text-sm">
              <a
                href="#"
                className="hover:text-pink-400 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="hover:text-pink-400 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="hover:text-pink-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                Projects
              </a>

              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                Features
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                About
              </a>

              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                Contact
              </a>

              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white">
              Legal
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                Privacy
              </a>

              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                Terms
              </a>

              <a
                href="#"
                className="block hover:text-pink-400 transition"
              >
                License
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p className="text-center md:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-pink-400 transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-pink-400 transition"
            >
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;