import { Link } from "react-router-dom";

const demos = [
  {
    title: "Salon & Beauty",
    category: "Salon",
    description:
      "A modern website for salons and beauty businesses to showcase services and accept appointments.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    path: "/demos/salon",
  },
  {
    title: "Restaurant",
    category: "Restaurant",
    description:
      "A beautiful website for restaurants to showcase their menu, location and customer experience.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    path: "#",
  },
  {
    title: "Fitness Studio",
    category: "Gym",
    description:
      "A professional website for gyms and fitness studios to showcase programs and memberships.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    path: "#",
  },
];

const Demos = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Demo Websites
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Websites built for real businesses.
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Explore examples of websites we can customize for local
            businesses.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <div
              key={demo.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-amber-500">
                  {demo.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {demo.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {demo.description}
                </p>

                {demo.path === "#" ? (
                  <span className="mt-5 inline-block text-sm font-semibold text-gray-400">
                    Coming Soon
                  </span>
                ) : (
                  <Link
                    to={demo.path}
                    className="mt-5 inline-block text-sm font-semibold text-gray-900 hover:text-amber-500"
                  >
                    View Demo →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Demos;