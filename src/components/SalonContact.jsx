
import { useState } from "react";

const SalonContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const message = `
Hello Aura Salon,

I would like to request an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Notes: ${formData.notes || "No additional notes"}
    `.trim();

    const whatsappNumber = "917539830548";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });

    setSubmitted(true);
    setIsSubmitting(false);
  };

  // Get today's date using the user's local date
  const getToday = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const today = getToday();

  return (
    <section
      id="appointment"
      className="bg-gray-900 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24 xl:px-16"
    >
      <div
        id="contact"
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20"
      >
        {/* Left Side */}
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
            Book Your Visit
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready for your next look?
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Request an appointment with our team and let us create a
            look you'll love.
          </p>

          <div className="mt-10 space-y-6">

            {/* Phone */}
            <div>
              <p className="text-sm font-semibold text-gray-400">
                Phone
              </p>

              <a
                href="tel:+917539830548"
                className="mt-1 block text-lg font-medium transition hover:text-rose-300"
              >
                +91 75398 30548
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <p className="text-sm font-semibold text-gray-400">
                WhatsApp
              </p>

              <a
                href="https://wa.me/917539830548"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-lg font-medium transition hover:text-rose-300"
              >
                Chat with us on WhatsApp →
              </a>
            </div>

            {/* Opening Hours */}
            <div>
              <p className="text-sm font-semibold text-gray-400">
                Opening Hours
              </p>

              <p className="mt-1 text-gray-300">
                Monday – Sunday · 10:00 AM – 8:00 PM
              </p>
            </div>

            {/* Location */}
            <div>
              <p className="text-sm font-semibold text-gray-400">
                Location
              </p>

              <p className="mt-1 text-gray-300">
                Main Market, Rourkela, Odisha
              </p>
            </div>

          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900">
            Request an Appointment
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Fill in your details and we'll continue on WhatsApp.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="salon-name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                id="salon-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="salon-phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone
              </label>

              <input
                id="salon-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+\-\s()]{10,}"
                title="Please enter a valid phone number"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="salon-service"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Service
              </label>

              <select
                id="salon-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              >
                <option value="">Select a service</option>
                <option value="Hair Styling">
                  Hair Styling
                </option>
                <option value="Hair Color">
                  Hair Color
                </option>
                <option value="Facial & Skin Care">
                  Facial & Skin Care
                </option>
                <option value="Bridal & Party Makeup">
                  Bridal & Party Makeup
                </option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="salon-date"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Preferred Date
              </label>

              <input
                id="salon-date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            {/* Time */}
            <div>
              <label
                htmlFor="salon-time"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Preferred Time
              </label>

              <select
                id="salon-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              >
                <option value="">Select a time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="salon-notes"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Additional Notes
                <span className="ml-1 font-normal text-gray-400">
                  (Optional)
                </span>
              </label>

              <textarea
                id="salon-notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Anything you'd like us to know?"
                rows="4"
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Opening WhatsApp..."
                : "Request Appointment"}
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div
              role="status"
              className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4"
            >
              <p className="text-sm font-semibold text-green-700">
                WhatsApp opened with your appointment details.
              </p>

              <p className="mt-1 text-sm leading-6 text-green-600">
                Please send the message on WhatsApp to complete your
                appointment request.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SalonContact;
