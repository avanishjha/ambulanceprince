import CinematicHero from '@/components/CinematicHero';
import TickerBand from '@/components/TickerBand';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceManifesto from '@/components/ServiceManifesto';
import ServiceLocations from '@/components/ServiceLocations';
import GroundTruth from '@/components/GroundTruth';
import FaqProtocol from '@/components/FaqProtocol';
import AppointmentForm from '@/components/AppointmentForm';
import ContactMapSection from '@/components/ContactMapSection';
import FleetShowcase from '@/components/FleetShowcase';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <CinematicHero />
      <TickerBand />
      <WhyChooseUs />
      <ServiceManifesto />
      <GroundTruth />
      <FaqProtocol />
      <AppointmentForm />
      <ContactMapSection />
    </div>
  );
}
