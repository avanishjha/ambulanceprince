import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import SmoothScroller from '@/components/SmoothScroller';
import NavigationalHeader from '@/components/NavigationalHeader';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // Needed heavy weights for brutalism
});

export const metadata: Metadata = {
  title: 'PRINCE AMBULANCE | EMERGENCY NETWORK',
  description: '10-minute dispatch. Advanced life support. Brutally fast emergency response.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans flex flex-col min-h-screen bg-white text-gray-900 selection:bg-primary selection:text-white`}>
        <SmoothScroller>
          <NavigationalHeader />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroller>
        <FloatingActions />
      </body>
    </html>
  );
}
