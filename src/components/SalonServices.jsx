
const services = [
  {
    title: "Hair Styling",
    description:
      "Professional cuts, styling, blow-dry and personalized looks for every occasion.",
    price: "Starting from ₹499",
  },
  {
    title: "Hair Color",
    description:
      "Refresh your look with professional coloring, highlights and personalized shades.",
    price: "Starting from ₹999",
  },
  {
    title: "Facial & Skin Care",
    description:
      "Relaxing facial treatments designed to refresh and care for your skin.",
    price: "Starting from ₹699",
  },
  {
    title: "Bridal & Party Makeup",
    description:
      "Complete makeup and styling services for weddings, parties and special occasions.",
    price: "Starting from ₹2,499",
  },
];

const SalonServices = () => {
  return (
    <section
      id="services"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Beauty services designed around you.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            From everyday styling to special occasions, our team is here to
            help you look and feel your best.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                ✦
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-rose-500">
                {service.price}
              </p>

              <a
                href="#appointment"
                className="mt-5 inline-flex w-fit items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
              >
                Book this service
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonServices;
