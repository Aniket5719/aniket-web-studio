
const testimonials = [
  {
    name: "Priya Sharma",
    text: "The service was excellent and the staff made me feel very comfortable. I absolutely loved my new look!",
    service: "Hair Styling",
  },
  {
    name: "Neha Patel",
    text: "I visited Aura for a facial and the experience was amazing. The staff was professional and friendly.",
    service: "Facial & Skin Care",
  },
  {
    name: "Riya Mehta",
    text: "I booked my makeup for a special event and couldn't be happier with the result. Highly recommended!",
    service: "Makeup",
  },
];

const SalonTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
            Client Love
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            What our clients say.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Great experiences are at the heart of everything we do.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm sm:p-8"
            >
              {/* Stars */}
              <div
                aria-label="5 out of 5 stars"
                className="text-sm tracking-widest text-rose-500"
              >
                ★★★★★
              </div>

              {/* Review */}
              <p className="mt-5 flex-1 text-base leading-7 text-gray-600">
                "{testimonial.text}"
              </p>

              {/* Client */}
              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <p className="mt-8 text-center text-xs text-gray-400">
          Demo testimonials — replace with real client reviews before launch.
        </p>
      </div>
    </section>
  );
};

export default SalonTestimonials;
