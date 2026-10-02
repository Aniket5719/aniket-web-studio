import SalonNavbar from "../components/SalonNavbar";
import SalonHero from "../components/SalonHero";
import SalonServices from "../components/SalonServices";
import SalonAbout from "../components/SalonAbout";
import SalonGallery from "../components/SalonGallery";
import SalonTestimonials from "../components/SalonTestimonials";
import SalonContact from "../components/SalonContact";
import SalonFooter from "../components/SalonFooter";

const SalonDemo = () => {
  return (
    <>
      <SalonNavbar />

      <main>
        <SalonHero />
        <SalonServices />
        <SalonAbout />
        <SalonGallery />
        <SalonTestimonials />
        <SalonContact />
      </main>

      <SalonFooter />
    </>
  );
};

export default SalonDemo;