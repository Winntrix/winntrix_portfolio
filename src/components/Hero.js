import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Video with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-[10s] hover:scale-110"
          autoPlay
          muted
          loop
          playsInline
          
        >
          <source
            src="https://www.webintegratorz.com/herovedio.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Enhanced Overlays */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-bg-dark/10 z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-10"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(36,204,173,0.08)_0%,transparent_50%)] z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(36,204,173,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(36,204,173,0.03)_1px,transparent_1px)] bg-[size:80px_80px] z-10"></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#24ccad] opacity-0 animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#24ccad] animate-pulse"></div>
              <span className="text-xs font-medium tracking-wider text-gray-300 uppercase">
                Build With Us. Grow Without Limits.
              </span>
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white max-w-5xl mb-6">
            Empowering Businesses with
            <span className="relative inline-block ml-2 md:ml-4">
              <span className="absolute inset-0 bg-gradient-to-r from-[#24ccad] to-[#1a9980] opacity-20 blur-2xl"></span>
              <span className="relative bg-gradient-to-r from-[#24ccad] to-[#1a9980] bg-clip-text text-transparent">
                Next-Gen 
              </span>
            </span>
            
            <span className="text-gray-200"> Technology</span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 border-l-2 border-[#24ccad] pl-6">
            Delivering intelligent, <span className="text-[#24ccad]">scalable, and future-ready digital solutions.</span>
            <span className="block text-gray-400 text-sm sm:text-base mt-2">
              We empower startups and enterprises globally to achieve innovation and excellence.
            </span>
          </p>

          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-wrap gap-5 mb-16">
            <a
              href="https://wa.me/917007458210?text=Hello%20Pravesh,%20I'd%20like%20to%20get%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#24ccad] to-[#1a9980] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#24ccad]/20 hover:scale-105"
            >
              <span className="relative z-10 text-white font-semibold flex items-center gap-2">
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a9980] to-[#24ccad] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 hover:border-[#24ccad]/50 transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </a>
          </div>

          {/* Enhanced Badges with Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 pb-8">
            {[
              {
                img: "/images/linkdin.png",
                line1: "TOP RATED AGENCY",
                line2: "ON LINKEDIN",
                stat: "98%",
                statLabel: "Satisfaction",
              },
              {
                img: "/images/digital.png",
                line1: "DIGITAL MARKETING",
                line2: "CERTIFIED",
                stat: "50+",
                statLabel: "Projects Delivered",
              },
              
            ].map((badge, idx) => (
              <div
                key={idx}
                className="group relative flex items-center gap-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#24ccad]/0 via-[#24ccad]/10 to-[#24ccad]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon/Image */}
                <div className="relative">
                  <img
                    src={badge.img}
                    alt={badge.line1}
                    className="w-12 h-12 object-contain filter  group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#24ccad]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Text Content */}
                <div className="relative">
                  <div className="text-xs font-bold tracking-wider text-white uppercase">
                    {badge.line1}
                  </div>
                  <div className="text-[10px] text-white tracking-wide">
                    {badge.line2}
                  </div>
                  {/* Stats Display */}
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-lg font-bold text-[#24ccad]">{badge.stat}</span>
                    <span className="text-[8px] text-white uppercase">{badge.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
            <span className="text-xs text-white uppercase tracking-wider">Trusted by</span>
            <div className="flex gap-4">
              {["Intela Solutions", "Digistall", "Thaiseva"].map((partner, i) => (
                <span key={i} className="text-xs text-white hover:text-gray-300 transition-colors cursor-pointer">
                  {partner}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 ml-auto">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
              <span className="text-xs text-gray-400 ml-2">(50+ reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-[#24ccad] rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;