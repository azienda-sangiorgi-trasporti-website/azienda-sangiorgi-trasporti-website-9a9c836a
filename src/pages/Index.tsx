import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ValueProposition from '@/components/home/ValueProposition';
import ServicesSection from '@/components/home/ServicesSection';
import FleetSection from '@/components/home/FleetSection';
import ProcessSection from '@/components/home/ProcessSection';
import ComplianceSection from '@/components/home/ComplianceSection';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ServicesSection />
        <FleetSection />
        <ProcessSection />
        <ComplianceSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
