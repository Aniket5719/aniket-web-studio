
import { useState } from "react";
import { Link } from "react-router-dom";

const SalonNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">

          {/* Logo */}
          <Link
            to="/demos/salon"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
          >
            Aura<span className="text-rose-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-gray-700 transition hover:text-rose-500"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-gray-700 transition hover:text-rose-500"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-700 transition hover:text-rose-500"
            >
              About
            </a>

            <a
              href="#gallery"
              className="text-sm font-medium text-gray-700 transition hover:text-rose-500"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 transition hover:text-rose-500"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#appointment"
            className="hidden rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 md:block"
          >
            Book Appointment
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="salon-mobile-menu"
            className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="salon-mobile-menu"
            className="border-t border-gray-100 py-4 md:hidden"
          >
            <div className="flex flex-col gap-2">

              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Home
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Services
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                About
              </a>

              <a
                href="#gallery"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Gallery
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Contact
              </a>

              <a
                href="#appointment"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Book Appointment
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default SalonNavbar;
