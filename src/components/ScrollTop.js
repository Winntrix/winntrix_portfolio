import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#25ccad] text-black flex items-center justify-center hover:-translate-y-1 transition-all duration-300 shadow-lg z-[999]"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollTop;