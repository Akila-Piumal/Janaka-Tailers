import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TestimonialSection from "@/components/TestimonialSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AppointmentSection from "@/components/AppointmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <IntroSection />
      <TestimonialSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <AppointmentSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton/>
  </>
);

export default Index;
