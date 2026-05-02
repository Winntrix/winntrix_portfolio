import React from 'react';

const TermsConditions = () => {
  return (
    <>
      <section className="bg-gradient-primary text-white py-28 md:py-36 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg">Last updated: January 1, 2024</p>
        </div>
      </section>
      
      <section className="section bg-bg-dark">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="prose prose-invert">
            <p className="text-text-secondary mb-6">By accessing or using our services, you agree to be bound by these Terms & Conditions.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Use of Services</h2>
            <p className="text-text-secondary">You agree to use our services only for lawful purposes and in accordance with these terms.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intellectual Property</h2>
            <p className="text-text-secondary">All content, features, and functionality on our website are owned by Webintegratorz.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-text-secondary">For questions about these Terms, please contact us at info@webintegratorz.com.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;