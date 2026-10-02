
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business Website",
    description:
      "A professional website that helps customers understand your business, explore your services, and contact you easily.",
    features: [
      "Modern professional design",
      "Mobile responsive layout",
      "Business information & services",
      "Contact & WhatsApp integration",
    ],
  },
  {
    title: "Website Redesign",
    description:
      "Give your existing website a fresh, modern look with a better user experience and responsive design.",
    features: [
      "Modern UI redesign",
      "Mobile & tablet optimization",
      "Improved user experience",
      "Content and layout updates",
    ],
  },
  {
    title: "Landing Page",
    description:
      "A focused landing page designed to promote a service, offer, product, or local business.",
    features: [
      "Conversion-focused layout",
      "Clear call-to-action",
      "Responsive design",
      "WhatsApp or contact integration",
    ],
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website updated and working properly with ongoing maintenance and improvements.",
    features: [
      "Content updates",
      "Bug fixes",
      "Design changes",
      "Ongoing improvements",
    ],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Our Services
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Websites built for local businesses.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              We create modern, responsive websites that help local
              businesses build credibility, showcase their services,
              and make it easier for customers to get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-xl font-bold text-amber-500">
                  +
                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="mt-0.5 font-semibold text-amber-500">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From idea to live website.
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              We keep the process simple so you can focus on your
              business while we handle the website.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-amber-500">01</p>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Discuss
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We understand your business, goals, services, and
                website requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-amber-500">02</p>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Design
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We create a modern website structure based on your
                business and target customers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-amber-500">03</p>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Your website is developed, tested, and optimized for
                different screen sizes.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-amber-500">04</p>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Launch
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Once everything is ready, your website goes live and
                becomes accessible to your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Have a business that needs a website?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Tell us about your business and let's discuss what we can
            build for you.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
