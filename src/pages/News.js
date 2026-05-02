import React from "react";
import { Sparkles, Calendar, Zap, Users, Globe, DotIcon } from "lucide-react";

const News = () => {
  const updates = [
    {
      title: "Next-Gen MERN Stack Solutions",
      desc: "Introducing our enterprise-grade MERN stack architecture for scalable web applications.",
      date: "Oct, 2025",
      category: "Product Launch",
      icon: <Zap />,
    },
    {
      title: "Global Team Growth",
      desc: "Expanded our team to 100+ developers across multiple technologies.",
      date: "Jan, 2026",
      category: "Expansion",
      icon: <Users />,
    },
    {
      title: "AI Integration Services",
      desc: "Launched comprehensive AI/ML integration services for enterprise clients.",
      date: "Jan, 2026",
      category: "Technology",
      icon: <Globe />,
    },
  ];

  const value = [
    {
      title: "Global",
      desc: "TRUSET COMPANY",
    },
    {
      title: "100% ",
      desc: "CLIENT SATISFACTION",
    },
    {
      title: "100%",
    desc: "JOB SUCCESS",
    },
  ]

  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#25ccad]/10 border border-[#25ccad]/30 rounded-full mb-6">
            <DotIcon className="text-[#25ccad]"/>
            <span className="text-sm font-semibold text-[#25ccad] tracking-wider">
              LATEST UPDATES
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-[#25ccad] to-cyan-400 bg-clip-text text-transparent">
              What’s New
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay ahead with our latest innovations, partnerships, and <br />
            achievements in the world of technology
          </p>
        </div>

        {/* FEATURE CARD */}
        <div className="relative mb-20 group m-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#25ccad] to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition" />

          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-[#25ccad]/30 rounded-3xl p-10 grid lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1 text-xs bg-[#25ccad]/20 border border-[#25ccad] rounded-full">
                  MAJOR PARTNERSHIP
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Calendar size={14} /> September 2025
                </span>
              </div>

              <h2 className="text-4xl font-extrabold mb-3">
                Collab with <span className="text-[#25ccad]">Thaiseva</span>
              </h2>

              <p className="text-gray-400 mb-6">
                Thaiseva is your all-in-one Thailand platform for curated travel, trusted local services, and real-time support from an on-ground team.
              </p>

              <h6 className="text-[#25ccad] mb-6 text-[14px] font-bold uppercase">
                Collaboration Highlights
              </h6>

              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Tour</li>
                <li>• Travel</li>
                <li>• Booking Rides</li>
                <li>• Food</li>
                <li>• Booking Vehicle</li>

              </ul>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {value.map((val, i) => (
                  <div key={i} className="bg-black/40 p-4 rounded-xl text-center border border-gray-800">
                    <p className="text-xl font-bold text-[#25ccad]">{val.title}</p>
                    <p className="text-gray-400 text-[10px]">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
<div className="hidden lg:flex items-center justify-center relative">

  {/* OUTER GLOW */}
  <div className="absolute w-[280px] h-[280px] rounded-full bg-[#25ccad]/20 blur-3xl animate-pulse" />

  {/* ROTATING RING */}
  <div className="absolute w-[220px] h-[220px] border border-[#25ccad]/30 rounded-full animate-spin-slow" />

  {/* FLOATING RING */}
  <div className="absolute w-[300px] h-[300px] border border-[#25ccad]/10 rounded-full animate-float" />

  {/* MAIN CARD */}
  <div className="relative z-10 w-36 h-36 bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(37,204,173,0.4)] animate-floatSlow">

<img src="images/logoC2.svg" alt="logo" />
    

  </div>
</div>
          </div>
        </div>

        {/* RECENT UPDATES */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10 m-16">
          Recent <span className="text-[#25ccad]">Updates</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 m-16">
          {updates.map((item, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#25ccad]/50 cursor-pointer"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25ccad] to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition" />

              <div className="relative z-10">
                <div className="flex justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#25ccad] to-cyan-500 rounded-xl text-white">
                    {item.icon}
                  </div>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {item.date}
                  </span>
                </div>

                <p className="text-xs text-[#25ccad] font-bold uppercase mb-2">
                  {item.category}
                </p>

                <h3 className="text-xl font-bold mb-2 group-hover:text-[#25ccad] transition">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;