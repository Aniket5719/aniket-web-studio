import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-gray-900 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24 xl:px-16">
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
          Start Your Project
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to take your business online?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          Let's build a modern website that helps your business look
          professional and makes it easier for customers to reach you.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-400"
          >
            Start a Project
          </Link>

          <Link
            to="/demos"
            className="rounded-full border border-gray-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-gray-400"
          >
            View Our Work
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTASection;