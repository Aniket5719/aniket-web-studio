
const highlights = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "5k+",
    label: "Happy Clients",
  },
  {
    value: "4.9",
    label: "Client Rating",
  },
  {
    value: "7 Days",
    label: "Open Every Week",
  },
];

const SalonAbout = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85"
            alt="Salon stylist working with a client"
            loading="lazy"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
            About Aura
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            More than a salon.
            <span className="block text-rose-500">
              It's your time to shine.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            At Aura Salon, we believe beauty is personal. Our experienced
            stylists take the time to understand your style and create a look
            that feels uniquely yours.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            From a simple haircut to a complete makeover, we focus on
            professional service, quality products, and a comfortable
            experience for every client.
          </p>

          {/* Demo Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-gray-400">
            Demo content — business details, statistics, and client
            information can be customized for the salon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalonAbout;
