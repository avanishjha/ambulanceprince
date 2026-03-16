import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-inter text-sm font-bold tracking-widest uppercase text-primary mb-4 block">
            Legal
          </span>
          <h1 className="font-poppins font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Terms of Service
          </h1>
          <p className="font-inter text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none font-inter text-gray-700 space-y-8">
          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">1. Acceptance of Terms</h2>
            <p>
              By accessing our website and utilizing our ambulance and medical transport services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">2. Emergency Services Disclaimer</h2>
            <p>
              Prince Ambulance is a provider of emergency medical transport services. While we strive to reach every patient in the fastest time possible, response times can vary based on traffic, weather conditions, and availability. In life-threatening emergencies, we recommend contacting your local emergency dispatch immediately while contacting our command center.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">3. Service Provision</h2>
            <p>
              Our services are subject to the assessment of our medical personnel. We reserve the right to determine the appropriate level of care (BLS, ICU, etc.) required during transport based on the patient's condition.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">4. User Responsibilities</h2>
            <p>
              When requesting a service, you agree to provide accurate, current, and complete information regarding the patient's condition and location. Providing false information in an emergency context is dangerous and prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">5. Liability Limitations</h2>
            <p>
              To the fullest extent legally permitted, Prince Ambulance shall not be liable for any indirect, incidental, or consequential damages arising out of the performance of our transport services or the use of our website.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4 uppercase">6. Contact Information</h2>
            <p>
              For legal inquiries regarding these terms, contact us at:
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
