import React, { useEffect, useRef, useState } from "react";
import { Globe, Smartphone } from "lucide-react";

const OurProjects = () => {
  
  const [activeTab, setActiveTab] = useState("web");
  const [animate, setAnimate] = useState(true);


  const webProjects = [
    {
      tag: "Tour and Travel Booking Platform",
      title: "THAISEVA",
      loc: "Bangkok, Thailand",
      img: "/images/thaiseva.png",
      link: "https://thaiseva.com/",
    },
    {
      tag: "Attendance & Management System",
      title: "PRESENT-ME",
      loc: "Chattisgarh, India",
      img: "/images/presentme.png",
      link: "https://presentme.in/",
    },
    {
      tag: "E-commerce Store",
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
      tag: "Food Partner Portal (Restaurant Admin Panel)",
      title: "Thaiseva Food Partner",
      loc: "Thailand, Bangkok",
      img: "/images/thaisevaFood.png",
      link: "https://gothai-food.web.app/ejvimadrO3X7GZojLGz7UM3osTq1",
    },
    {
      tag: "Internet Platform",
      title: "CODESYNC",
      loc: "Uttar Pradesh, India",
      img: "/images/codesync.png",
      link: "https://interview-platform-dusky-chi.vercel.app/",
    },
  ];

  const appProjects = [
    {
      tag: "Attendance & Management App",
      title: "PRESENT-ME",
      loc: "Chattisgarh, India",
      img: "/images/presentmeApp.png",
      link: "https://play.google.com/store/apps/details?id=com.presentme.app",
    },
    {
      tag: "General Store Buyer App",
      title: "GOTAN STORE",
      loc: "Rajasthan, India",
      img: "/images/gotanApp.png",
      link: "https://play.google.com/store/apps/details?id=com.digistall.gotan",
    },
   
    {
      tag: "Delivery Partner App",
      title: "DIGITAl RIDER",
      loc: "Rajasthan, India",
      img: "/images/digitalRiderApp.png",
      link: "https://play.google.com/store/apps/details?id=com.digistall.rider",
    },
     {
      tag: "Delivery Partner App",
      title: "DIGITAl RIDER",
      loc: "Rajasthan, India",
      img: "/images/digistallApp.png",
      link: "https://play.google.com/store/apps/details?id=com.digistall.digistall",
    },
     {
      tag: "Quotes Status & Suvichar App",
      title: "VAKY",
      loc: "Delhi, India",
      img: "/images/vakyApp.png",
      link: "https://play.google.com/store/apps/details?id=com.vaky.aio",
    },
    {
      tag: "Event Ticket Booking App",
      title: "Wooziee",
      loc: "Bangaluru, India",
      img: "/images/wooziApp.png",
      link: "https://play.google.com/store/apps/details?id=com.wooziee.androidapp",
    },
    {
      tag: "Event Ticket Booking App",
      title: "THAISEVA(comming soon)",
      loc: "Thailand, Bangkok",
      img: "/images/thaisevaApp.png",
      link: "https://play.google.com/store/apps/details?id=com.thaiseva.androidapp",
    },
  ];

  const currentData = activeTab === "web" ? webProjects : appProjects;

  /* ================= MARQUEE ================= */

  const Marquee = ({ data, type }) => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;

      const interval = setInterval(() => {
        if (isHovered) return;

        const maxScroll = container.scrollWidth / 2;

        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1.5;
        }
      }, 16);

      return () => clearInterval(interval);
    }, [isHovered]);

    return (
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto no-scrollbar px-4 md:px-10"
      >
        {[...data, ...data].map((c, idx) => (
          <a
            key={idx}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
  group relative overflow-hidden

  ${
    type === "app"
      ? "min-w-[240px] sm:min-w-[260px] lg:min-w-[240px]" // 👈 narrower
      : "min-w-[85%] sm:min-w-[300px] lg:min-w-[640px]" // 👈 wide (web)
  }

  rounded-xl lg:rounded-2xl
  transition-all duration-500
  hover:-translate-y-2 hover:scale-[1.03]
`}
          >
            <img
              src={c.img}
              alt={c.title}
className={`
  w-full 
  ${
    type === "app"
      ? "h-[380px] lg:h-[500px] object-contain bg-black" // 👈 portrait
      : "h-[300px] md:h-[320px] lg:h-[420px] object-cover" // 👈 landscape
  }
  transition duration-700 group-hover:scale-110
`}            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 p-4 md:p-5 w-full">
              <p className="text-white text-xs mb-2">{c.tag}</p>
              <h3 className="text-[#25ccad] font-bold text-base md:text-lg">
                {c.title}
              </h3>
              <span className="text-xs text-white/80 mt-1 block">
                📍 {c.loc}
              </span>
            </div>

            <div className="hidden lg:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_40px_rgba(37,204,173,0.4)]" />
          </a>
        ))}
      </div>
    );
  };

  /* ================= UI ================= */

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Explore <span className="text-[#25ccad]">Our Work</span>
        </h2>
      </div>

      {/* 🔥 TABS */}
      <div className="flex justify-center gap-4 mb-10">
        {["web", "app"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setAnimate(false); // fade out

              setTimeout(() => {
                setActiveTab(tab);
                setAnimate(true); // fade in
              }, 200);
            }}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#1a9b8e] to-[#2bc4b5] text-white shadow-md"
                : "border-gray-300 text-gray-600 hover:border-[#25ccad] hover:text-[#25ccad]"
            }`}
          >
            <span className="flex items-center gap-2">
  {tab === "web" ? <Globe size={16} /> : <Smartphone size={16} />}
  {tab === "web" ? "Web Projects" : "App Projects"}
</span>
          </button>
        ))}
      </div>

      {/* 🔥 MARQUEE */}
      <div
        className={`
    transition-all duration-500 ease-in-out
    ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
      >
        <Marquee data={currentData} type={activeTab} />
      </div>
    </section>
  );
};

export default OurProjects;
