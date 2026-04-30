import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <AboutSection />
      <section id="servicos">
        <ServicesSection />
      </section>
      <ContactSection />
    </>
  );
}
