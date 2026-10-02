const services = [
  {
    title: "Business Websites",
    description:
      "Modern websites designed to showcase your business, services, and contact information.",
  },
  {
    title: "Mobile Responsive",
    description:
      "Websites that look and work properly on mobile phones, tablets, laptops, and desktops.",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Make it easy for customers to contact your business directly through WhatsApp.",
  },
  {
    title: "Website Maintenance",
    description:
      "Updates, content changes, bug fixes, and ongoing improvements when your business needs them.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-500 sm:text-sm">
            What We Do
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Everything your business needs online.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            From a simple business website to ongoing support, we build
            practical websites that help local businesses grow online.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-lg font-bold text-amber-500">
                +
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;