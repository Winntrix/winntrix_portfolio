import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted');
    if (!accepted) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', '1');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
  <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-[10000] animate-fade-in-up">
    
    <div className="relative p-5 rounded-2xl border border-[#25ccad]/20 bg-gradient-to-br from-[#071a17] to-black backdrop-blur-lg shadow-[0_0_30px_rgba(37,204,173,0.15)]">

      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25ccad]/10 to-transparent opacity-60 pointer-events-none"></div>

      {/* TEXT */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
        <span className="text-[#25ccad] ml-1 font-medium">
          By clicking "Accept All", you consent.
        </span>
      </p>

      {/* ACTIONS */}
      <div className="flex gap-3 relative z-10">
        
        {/* ACCEPT BUTTON */}
        <button
          onClick={acceptCookies}
          className="flex-1 py-2 rounded-full bg-[#25ccad] text-black font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_#25ccad] hover:scale-[1.03]"
        >
          Accept All
        </button>

        {/* PRIVACY BUTTON */}
        <a
          href="/privacy"
          className="flex items-center justify-center px-4 py-2 rounded-full border border-[#25ccad]/30 text-[#25ccad] text-sm font-medium hover:bg-[#25ccad] hover:text-black transition-all duration-300"
        >
          Privacy
        </a>

      </div>
    </div>
  </div>
);
};

export default CookieBanner;