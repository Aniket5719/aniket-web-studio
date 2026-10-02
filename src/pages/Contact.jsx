
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Aniket Web Studio,

I would like to discuss a website project.

Name: ${formData.name}
Business Name: ${formData.businessName}
Business Type: ${formData.businessType}
Phone: ${formData.phone}
Service Needed: ${formData.service}

Message:
${formData.message || "No additional message"}
    `.trim();

    const whatsappNumber = "917539830548";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      businessName: "",
      businessType: "",
      phone: "",
      service: "",
      message: "",
    });

    setSubmitted(true);
  };

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Let's Work Together
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Let's build a website for your business.
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Tell us a little about your business and what you need. We'll
            get back to you and discuss the next steps.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Contact Information */}
          <div className="rounded-3xl bg-gray-900 p-6 text-white sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Get In Touch
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
              Whether you need a new website, a redesign, or ongoing
              maintenance, let's discuss how we can help your business
              build a stronger online presence.
            </p>

            <div className="mt-10 space-y-7">

              {/* WhatsApp */}
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/917539830548"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-lg font-medium transition hover:text-amber-400"
                >
                  +91 75398 30548
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  Call
                </p>

                <a
                  href="tel:+917539830548"
                  className="mt-1 inline-block text-lg font-medium transition hover:text-amber-400"
                >
                  +91 75398 30548
                </a>
              </div>

              {/* Services */}
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  We Build Websites For
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Salons · Restaurants · Gyms · Clinics · Hotels · Local
                  Businesses
                </p>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/917539830548"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Tell us about your project
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill in the form and we'll continue the conversation on
              WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Business Name
                </label>

                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Business Type
                </label>

                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-400"
                >
                  <option value="">Select your business type</option>
                  <option value="Salon">Salon</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Gym / Fitness">Gym / Fitness</option>
                  <option value="Clinic">Clinic</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Other Local Business">
                    Other Local Business
                  </option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone / WhatsApp
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  What do you need?
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-400"
                >
                  <option value="">Select a service</option>
                  <option value="New Business Website">
                    New Business Website
                  </option>
                  <option value="Website Redesign">
                    Website Redesign
                  </option>
                  <option value="Website Maintenance">
                    Website Maintenance
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Tell us about your project
                  <span className="ml-1 font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what kind of website you need..."
                  rows="5"
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>

            {/* Success Message */}
            {submitted && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-700">
                  WhatsApp opened with your enquiry details.
                </p>

                <p className="mt-1 text-sm text-green-600">
                  Please send the message on WhatsApp to complete your
                  enquiry.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
