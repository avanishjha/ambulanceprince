import SmoothScroller from '@/components/SmoothScroller';
import NavigationalHeader from '@/components/NavigationalHeader';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Preloader from '@/components/Preloader';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />
      <SmoothScroller>
        <NavigationalHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
      </SmoothScroller>
      <FloatingActions />
    </>
  );
}
