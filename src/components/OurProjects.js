import React, { useRef, useState } from "react";

const OurProjects = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      tag: "Tour and Travel Booking Platform",
      title: "THAISEVA",
      loc: "Bangkok, Thailand",
      img: "/images/thaiseva.png",
      link: "https://thaiseva.com/",
    },
    {
      tag: "An College Attendance & Management System",
      title: "PRESENT-ME",
      loc: "Chattisgarh, India",
      img: "/images/presentme.png",
      link: "https://presentme.in/",
    },
    {
      tag: "An E-commerce Store",
      title: "DIGISTALL",
      loc: "Rajasthan, India",
      img: "/images/digistall.png",
      link: "https://digistall.in/",
    },
    {
      tag: "An Rider, Parcel & General Store goods Seller ",
    title: "GOTAN STORE",
      loc: "Rajasthan, India",
      img: "/images/gotan.png",
      link: "https://gotan.in/",
    },
    {
      tag: "BOLIVIAN SUPERAPP FOR DELIVERY & PAYMENTS",
      title: "Gober Superapp",
      loc: "Bolivia",
      img: "https://www.webintegratorz.com/icone7.png",
      link: "https://gober.app",
    },
    {
      tag: "TRANSFORMING HEALTHCARE WITH TECHNOLOGY",
      title: "Healthcare Portal",
      loc: "Canada",
      img: "https://www.webintegratorz.com/icone1.png",
      link: "https://healthcareportal.com",
    },
  ];
  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 320; // approx width (300 + gap)

    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 350;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="section bg-white relative">
      <div className="container-custom">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Explore <span className="text-[#25ccad]">Our Work </span>
          </h2>
          <p className="text-black mt-4">
            Deep dive into our specialized portfolios across development,
            automation, and marketing.
          </p>
        </div>

        {/* 🔥 ARROWS */}
        {/* 🔥 LEFT BUTTON */}

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#25ccad] text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          ←
        </button>

        {/* 🔥 RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#25ccad] text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          →
        </button>
        {/* 🔥 SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10 "
        >
          {cases.map((c, idx) => (
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] max-w-[300px] group relative rounded-xl overflow-hidden border border-white/20 hover:border-[#25ccad] transition-all duration-300 hover:-translate-y-1"
            >
              {/* FULL IMAGE */}
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* CONTENT OVER IMAGE */}
              <div className="relative h-[320px] flex flex-col justify-end p-5">
                {/* TAG */}
                <p className="text-white text-xs font-semibold mb-2 leading-tight">
                  {c.tag}
                </p>

                {/* TITLE */}
                <h3 className="text-[#25ccad] font-bold text-lg">{c.title}</h3>

                {/* DESCRIPTION + LOCATION */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-300 text-sm">{c.cat}</span>

                  <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs text-white">
                    📍 {c.loc}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {cases.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-[#25ccad]" : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
