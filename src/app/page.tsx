import CinematicHero from '@/components/CinematicHero';
import TickerBand from '@/components/TickerBand';
import ServiceManifesto from '@/components/ServiceManifesto';
import ServiceLocations from '@/components/ServiceLocations';
import DataPoints from '@/components/DataPoints';
import AppointmentForm from '@/components/AppointmentForm';
import GroundTruth from '@/components/GroundTruth';
import FaqProtocol from '@/components/FaqProtocol';
import ContactMapSection from '@/components/ContactMapSection';
import FleetShowcase from '@/components/FleetShowcase';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <CinematicHero />
      <TickerBand />
      <ServiceManifesto />
      <ServiceLocations />
      <DataPoints />
      <GroundTruth />
      <FaqProtocol />
      <AppointmentForm />
      <ContactMapSection />
      <FleetShowcase />
    </div>
  );
}
