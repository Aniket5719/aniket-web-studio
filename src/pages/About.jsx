
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              About Aniket Web Studio
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Helping local businesses build a stronger online presence.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              We build modern, responsive websites for businesses that
              want to look professional online and make it easier for
              customers to discover and contact them.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A simple approach to business websites.
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Aniket Web Studio is a freelance web development studio
              focused on creating professional websites for local
              businesses.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Instead of building websites that are complicated or
              overloaded with unnecessary features, we focus on what
              businesses actually need — a clear design, useful
              information, mobile responsiveness, and easy ways for
              customers to get in touch.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Every website is designed around the business, its
              customers, and its goals.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-gray-50 p-6 sm:p-8">
              <p className="text-3xl font-bold text-gray-900">01</p>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Business Focused
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We focus on helping your business communicate clearly
                with potential customers.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 sm:p-8">
              <p className="text-3xl font-bold text-gray-900">02</p>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Responsive
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Websites are designed to work across phones, tablets,
                laptops, and desktop screens.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 sm:p-8">
              <p className="text-3xl font-bold text-gray-900">03</p>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Clear Communication
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We keep the process straightforward and communicate
                clearly throughout the project.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 sm:p-8">
              <p className="text-3xl font-bold text-gray-900">04</p>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Ongoing Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Need updates after launch? We can continue helping with
                changes and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We build websites with the customer in mind.
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              A good business website should not just look attractive.
              It should help visitors understand the business and take
              the next step.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <p className="text-sm font-bold text-amber-500">
                Customer First
              </p>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                Make information easy to find.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Visitors should quickly understand what you offer,
                where you are, and how they can contact you.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <p className="text-sm font-bold text-amber-500">
                Modern Design
              </p>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                Look professional everywhere.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We create clean layouts that adapt to different screen
                sizes and present your business professionally.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <p className="text-sm font-bold text-amber-500">
                Business Goals
              </p>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                Turn visitors into enquiries.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Clear calls-to-action, contact options, and WhatsApp
                integration make it easier for customers to reach you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Let's Build Something
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Ready to put your business online?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Tell us about your business and let's discuss the website
            that would work best for you.
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

export default About;
