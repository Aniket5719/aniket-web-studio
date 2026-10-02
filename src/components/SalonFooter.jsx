
import { Link } from "react-router-dom";

const SalonFooter = () => {
  return (
    <footer className="bg-black px-4 py-12 text-white sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              to="/demos/salon"
              className="text-2xl font-bold"
            >
              Aura<span className="text-rose-400">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Professional hair, beauty, and styling services designed
              to help you look and feel your best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#services"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Services
              </a>

              <a
                href="#about"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                About
              </a>

              <a
                href="#gallery"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Visit Us
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Main Market
              <br />
              Rourkela, Odisha
            </p>

            <a
              href="tel:+917539830548"
              className="mt-4 block text-sm text-gray-400 transition hover:text-white"
            >
              +91 75398 30548
            </a>

            <a
              href="https://wa.me/917539830548"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm text-gray-400 transition hover:text-white"
            >
              Chat on WhatsApp →
            </a>

            <a
              href="#appointment"
              className="mt-4 inline-block text-sm font-semibold text-rose-400 transition hover:text-rose-300"
            >
              Book an Appointment →
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Aura Salon. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default SalonFooter;
