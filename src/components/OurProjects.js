import React, { useEffect, useRef, useState } from "react";

const OurProjects = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isHovered) return; // pause on hover / touch

      const maxScroll = container.scrollWidth / 2;

      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0; // seamless loop
      } else {
        container.scrollLeft += 1.5; // smooth speed
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isHovered]);

  const cases = [
    {
      tag: "Tour and Travel Booking Platform",
      title: "THAISEVA",
      loc: "Bangkok, Thailand",
      isVertical: false,
      img: "/images/thaiseva.png",
      link: "https://thaiseva.com/",
    },
    {
      tag: "An College Attendance & Management System",
      title: "PRESENT-ME",
      loc: "Chattisgarh, India",
      isVertical: false,
      img: "/images/presentme.png",
      link: "https://presentme.in/",
    },
    {
      tag: "An E-commerce Store",
      title: "DIGISTALL",
      loc: "Rajasthan, India",
      isVertical: false,
      img: "/images/digistall.png",
      link: "https://digistall.in/",
    },
    {
      tag: "An Rider, Parcel & General Store goods Seller ",
      title: "GOTAN STORE",
      loc: "Rajasthan, India",
      isVertical: false,
      img: "/images/gotan.png",
      link: "https://gotan.in/",
    },
    {
      tag: "BOLIVIAN SUPERAPP FOR DELIVERY & PAYMENTS",
      title: "Gober Superapp",
      isVertical: true,
      loc: "Bolivia",
      img: "https://www.webintegratorz.com/icone7.png",
      link: "https://gober.app",
    },
    {
      tag: "TRANSFORMING HEALTHCARE WITH TECHNOLOGY",
      title: "Healthcare Portal",
      isVertical: true,
      loc: "Canada",
      img: "https://www.webintegratorz.com/icone1.png",
      link: "https://healthcareportal.com",
    },
  ];
  

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      

      {/* HEADER */}
      <div className="text-center mb-12 lg:mb-14 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Explore <span className="text-[#25ccad]">Our Work</span>
        </h2>
        <p className="text-black mt-3 md:mt-4 text-sm md:text-base">
          Deep dive into our specialized portfolios across development,
          automation, and marketing.
        </p>
      </div>

      {/* 🔥 SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onTouchCancel={() => setIsHovered(false)}
        className="
      flex 
      gap-4 md:gap-6 lg:gap-8
      overflow-x-auto no-scrollbar 
      px-4 md:px-10
    "
      >
        {[...cases, ...cases].map((c, idx) => (
          <a
            key={idx}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
          group relative overflow-hidden
          min-w-[85%] sm:min-w-[300px] max-w-[300px]
          ${
            c.isVertical
              ? "lg:min-w-[400px] lg:max-w-[400px]"
              : "lg:min-w-[600px] lg:max-w-[600px]"
          }
          
          rounded-xl lg:rounded-2xl
          transition-all duration-500
          
          
          hover:-translate-y-1 hover:scale-[1.02]
          lg:hover:-translate-y-3 lg:hover:scale-[1.05]
        `}
          >
            {/* IMAGE */}
            <img
              src={c.img}
              alt={c.title}
              className="
            w-full h-[300px] md:h-[320px] 
            object-contain lg:object-cover
            transition duration-700 group-hover:scale-110
          "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-4 md:p-5 w-full">
              <p className="text-white text-xs mb-2 leading-tight">{c.tag}</p>

              <h3 className="text-[#25ccad] font-bold text-base md:text-lg">
                {c.title}
              </h3>

              <span className="text-xs text-white/80 mt-1 block">
                📍 {c.loc}
              </span>
            </div>

            {/* 🔥 DESKTOP GLOW ONLY */}
            <div
              className="hidden lg:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
          shadow-[0_0_40px_rgba(37,204,173,0.4)]"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
