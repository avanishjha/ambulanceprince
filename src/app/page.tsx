import CinematicHero from '@/components/CinematicHero';
import TickerBand from '@/components/TickerBand';
import ServiceManifesto from '@/components/ServiceManifesto';
import DataPoints from '@/components/DataPoints';
import FleetShowcase from '@/components/FleetShowcase';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <CinematicHero />
      <TickerBand />
      <ServiceManifesto />
      <DataPoints />
      <FleetShowcase />
    </div>
  );
}
