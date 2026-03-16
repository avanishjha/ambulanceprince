import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-inter text-sm font-bold tracking-widest uppercase text-primary mb-4 block">
            Legal
          </span>
          <h1 className="font-poppins font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Privacy Protocol
          </h1>
          <p className="font-inter text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none font-inter text-gray-700 space-y-8">
          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you request an ambulance, fill out our contact or appointment forms, or communicate with us. The types of personal information we may collect include your name, email address, phone number, location details, and any medical information necessary for emergency services.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">2. Use of Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, maintain, and improve our emergency medical services.</li>
              <li>Respond to your requests, comments, and questions.</li>
              <li>Communicate with you about services and emergencies.</li>
              <li>Comply with legal obligations in the healthcare sector.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">3. Sharing of Information</h2>
            <p>
              We DO NOT share, sell, or disclose your personal information to third parties, except:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>When requested by receiving medical facilities or hospitals as part of your care.</li>
              <li>When required by law or to respond to legal process.</li>
              <li>To protect the rights, property, and safety of Prince Ambulance, our patients, or others.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">4. Data Security</h2>
            <p>
              We take reasonable measures to help protect your personal and medical information from loss, theft, misuse, and unauthorized access. As a healthcare transport provider, maintaining patient confidentiality is our highest priority.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Protocol, please contact our command center at:
              <br />
              <strong>Email:</strong> princeamb.ssp@gmail.com
              <br />
              <strong>Phone:</strong> +91 881 061 6863
            </p>
          </section>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center gap-2 font-poppins font-bold text-sm uppercase tracking-widest text-primary hover:text-black transition-colors">
            &larr; Return to Base
          </Link>
        </div>
      </div>
    </main>
  );
}
