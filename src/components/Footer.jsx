import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Aniket<span className="text-amber-500">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
              Modern websites for local businesses. We help businesses
              build a professional presence online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-black"
              >
                Home
              </Link>

              <Link
                to="/demos"
                className="text-sm text-gray-600 hover:text-black"
              >
                Demos
              </Link>

              <Link
                to="/services"
                className="text-sm text-gray-600 hover:text-black"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="text-sm text-gray-600 hover:text-black"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Let's Work Together
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Have a business that needs a website?
            </p>

            <Link
              to="/contact"
              className="mt-4 inline-block text-sm font-semibold text-amber-500 hover:text-amber-600"
            >
              Start a Project →
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Aniket Web Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;