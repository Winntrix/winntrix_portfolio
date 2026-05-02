import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-gradient-primary text-white py-28 md:py-36 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg">Last updated: January 1, 2024</p>
        </div>
      </section>
      
      <section className="section bg-bg-dark">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="prose prose-invert">
            <p className="text-text-secondary mb-6">At Winntrix, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
            <p className="text-text-secondary">We collect information you provide directly to us, such as when you contact us, request a consultation, or use our services.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-text-secondary">We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-text-secondary">If you have questions about this Privacy Policy, please contact us at info@winntrix.com.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;