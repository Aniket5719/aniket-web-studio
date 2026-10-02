
import { Link } from "react-router-dom";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

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

const Home = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="overflow-hidden bg-white">
                <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:grid-cols-2 lg:px-12 lg:py-24 xl:px-16">

                    {/* Hero Content */}
                    <div className="text-center lg:text-left">
                        <p className="mb-5 inline-block rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-600 sm:text-sm">
                            Websites for Local Businesses
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                            Your Business
                            <span className="block text-amber-500">
                                Deserves a Great Website.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
                            We create modern, mobile-friendly websites that help local
                            businesses showcase their services, build trust, and connect
                            with more customers.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                            <Link
                                to="/demos"
                                className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                            >
                                View Our Work
                            </Link>

                            <Link
                                to="/contact"
                                className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-black"
                            >
                                Start a Project
                            </Link>
                        </div>

                        <p className="mt-8 text-xs text-gray-500 sm:text-sm">
                            Salons · Restaurants · Gyms · Clinics · Local Businesses
                        </p>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                                alt="Salon website example"
                                className="h-[350px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                            />

                            {/* Floating Card */}
                            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:w-72">
                                <p className="text-xs font-medium text-amber-500">
                                    DEMO WEBSITE
                                </p>

                                <h3 className="mt-1 text-lg font-bold text-gray-900">
                                    Modern Salon
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Responsive · Fast · Professional
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= DEMOS ================= */}
            <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-28 xl:px-16">
                <div className="mx-auto max-w-7xl">

                    {/* Section Heading */}
                    <div className="mb-10 max-w-2xl sm:mb-12">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-500 sm:text-sm">
                            Our Work
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                            Websites designed for real businesses.
                        </h2>

                        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                            Explore some of the website experiences we can create for
                            local businesses.
                        </p>
                    </div>

                    {/* Demo Cards */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {demos.map((demo) => (
                            <div
                                key={demo.category}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="h-56 overflow-hidden sm:h-64">
                                    <img
                                        src={demo.image}
                                        alt={demo.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-6">
                                    <p className="text-sm font-medium text-amber-500">
                                        {demo.category}
                                    </p>

                                    <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
                                        {demo.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                                        {demo.description}
                                    </p>

                                    {/* Demo Link */}
                                    {demo.path === "#" ? (
                                        <span className="mt-5 inline-block text-sm font-semibold text-gray-400">
                                            Coming Soon
                                        </span>
                                    ) : (
                                        <Link
                                            to={demo.path}
                                            className="mt-5 inline-block text-sm font-semibold text-gray-900 transition hover:text-amber-500"
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

            {/* ================= SERVICES ================= */}
            <ServicesSection />

            {/* ================= CTA ================= */}
            <CTASection />
        </>
    );
};

export default Home;