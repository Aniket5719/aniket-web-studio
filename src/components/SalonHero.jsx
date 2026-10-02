
const SalonHero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85"
          alt="Modern salon interior"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-rose-300 sm:text-base">
            Beauty · Style · Confidence
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Look Good.
            <span className="block text-rose-300">
              Feel Confident.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            Experience premium hair, beauty, and styling services in a
            relaxing environment designed around you.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Book Appointment */}
            <a
              href="#appointment"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Book an Appointment
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917539830548"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/50 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            <span>✓ Professional Stylists</span>
            <span>✓ Premium Products</span>
            <span>✓ Relaxing Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonHero;
