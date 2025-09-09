import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { SAPSection } from "@/components/ui/sap-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SAPSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
