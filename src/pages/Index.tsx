import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import SwitzerlandSection from '@/components/home/SwitzerlandSection';
import ValueProposition from '@/components/home/ValueProposition';
import ServicesSection from '@/components/home/ServicesSection';
import FleetSection from '@/components/home/FleetSection';

import OperativitySection from '@/components/home/OperativitySection';
import ProcessSection from '@/components/home/ProcessSection';
import HVOSection from '@/components/home/HVOSection';
import ComplianceSection from '@/components/home/ComplianceSection';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SwitzerlandSection />
        <ValueProposition />
        <ServicesSection />
        <FleetSection />
        <KPISection />
        <OperativitySection />
        <ProcessSection />
        <HVOSection />
        <ComplianceSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
