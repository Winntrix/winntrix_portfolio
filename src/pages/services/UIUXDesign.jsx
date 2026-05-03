import React from "react";
import {
  Palette,
  Eye,
  Smartphone,
  Layers,
  Balloon,
  LayoutDashboard,
  MonitorCloud,
  Users,
  Sparkles,
  Pencil,
} from "lucide-react";
import { FiFigma } from "react-icons/fi";
import { Link } from "react-router-dom";

const UIUXDesign = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* ================= HERO ================= */}
      <section className="px-6 lg:px-24 py-20 lg:py-28  grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <span className="inline-block mt-12 mb-6 px-4 py-2 text-sm rounded-full bg-[#25ccad]/10 border border-[#25ccad]/30 text-[#25ccad]">
            🚀 Leading UI/UX Design Company
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Strategic UI/UX Design <br />
            <span className="text-[#25ccad]">for Digital Excellence</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-lg">
            We craft beautiful, user-centered experiences that don’t just look
            good—they solve real problems and drive measurable business
            outcomes.
          </p>

          <button className="mt-8 px-6 py-3 bg-[#25ccad] text-black rounded-lg font-semibold hover:scale-105 transition">
            Get Started →
          </button>

          {/* STATS */}
          <div className="flex gap-12 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-[#25ccad]">30+</h3>
              <p className="text-gray-400 text-sm">Projects Designed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#25ccad]">98%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT MOCK */}

        <div className="relative w-full max-w-xl mx-auto">
          {/* GLOW BACKGROUND */}
          <div className="absolute inset-0 bg-[#25ccad]/20 blur-[120px] opacity-40 rounded-full" />

          {/* MAIN CARD */}
          <div className="relative border border-[#25ccad]/30 rounded-3xl p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl shadow-[0_0_80px_rgba(37,204,173,0.15)]">
            {/* TOP BAR */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>

            {/* HEADER BAR */}
            <div className="h-6 w-2/3 bg-slate-700/50 rounded mb-6" />

            {/* HERO GREEN CARD */}
            <div className="relative bg-gradient-to-r from-[#25ccad] to-[#2bc4b5] h-40 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              {/* CENTER ICON */}
              <span className="text-white text-4xl opacity-60">🎨</span>

              {/* FLOATING FIGMA ICON */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#25ccad] rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <FiFigma className="size-12" />
              </div>
            </div>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="h-16 bg-slate-700/40 rounded-xl border border-white/10" />
              <div className="h-16 bg-slate-700/40 rounded-xl border border-white/10" />
              <div className="h-16 bg-slate-700/40 rounded-xl border border-white/10" />
            </div>

            {/* TEXT LINES */}
            <div className="space-y-3">
              <div className="h-3 bg-slate-700/40 rounded w-full" />
              <div className="h-3 bg-slate-700/40 rounded w-5/6" />
              <div className="h-3 bg-slate-700/40 rounded w-3/4" />
            </div>
          </div>

          {/* FLOATING STATUS CARD */}
          <div className="absolute -bottom-8 -left-6 bg-slate-900 border border-[#25ccad]/30 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-xl">
            <p className="text-gray-400 text-sm">Design System</p>
            <p className="text-[#25ccad] font-semibold text-lg">Ready</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 lg:px-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Design <span className="text-[#25ccad]">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            End-to-end design solutions that transform ideas into exceptional{" "}
            <br />
            user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Palette />,
              title: "UI Design",
              desc: "Stunning visual interfaces that capture attention and reflect your brand identity perfectly.",
              list: ["Visual Design", "Brand Identity", "Design Systems"],
            },
            {
              icon: <Eye />,
              title: "UX Research",
              desc: "Data-driven insights that inform every design decision and ensure user satisfaction.",
              list: ["User Research", "Persona", "Testing"],
            },
            {
              icon: <Balloon />,
              title: "Prototyping",
              desc: "Interactive prototypes that bring your vision to life before a single line of code.",
              list: ["Wireframes", "Prototypes", "Handoff"],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 hover:border-[#25ccad] transition"
            >
              <div className="w-14 h-14 bg-[#25ccad] text-black rounded-xl flex items-center justify-center mb-8">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 mt-3 text-sm">{item.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {item.list.map((l, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1a9b8e] text-white text-xs">
                      ✓
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE DESIGN ================= */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        {/* OUTER GLASS CARD */}
        <div
          className="
    max-w-6xl mx-auto 
    rounded-3xl 
    border border-[#25ccad]/20
    bg-gradient-to-br from-slate-900/80 to-slate-800/60 
    backdrop-blur-xl
    shadow-[0_0_80px_rgba(37,204,173,0.08)]
    p-8 md:p-12
    relative overflow-hidden
  "
        >
          {/* SOFT GLOW */}
          <div className="absolute inset-0 bg-[#25ccad]/10 blur-[120px] opacity-20 pointer-events-none" />

          {/* HEADER */}
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              What We Design
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Versatile expertise across all digital platforms
            </p>
          </div>

          {/* ITEMS */}
          <div
            className="
      grid 
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      gap-4 md:gap-6
      relative z-10
    "
          >
            {[
              { name: "Web Design", icon: <MonitorCloud size={20} /> },
              { name: "Mobile App Design", icon: <Smartphone size={20} /> },
              {
                name: "Dashboard & SaaS UI",
                icon: <LayoutDashboard size={20} />,
              },
              { name: "Design Systems", icon: <Layers size={20} /> },
            ].map((item, i) => (
              <div
                key={i}
                className="
            group flex items-center gap-3 
            px-5 py-4 
            rounded-2xl 
            border border-white/10 
            bg-gradient-to-br from-slate-800/60 to-slate-900/40

            hover:border-[#25ccad]
            hover:shadow-[0_0_25px_rgba(37,204,173,0.2)]
            hover:-translate-y-1
            transition-all duration-300
          "
              >
                {/* ICON */}
                <div
                  className="
            w-10 h-10 rounded-lg 
            flex items-center justify-center
            bg-[#142937] text-[#25ccad]
            group-hover:scale-110
            transition
          "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <p className="text-white text-sm md:text-base font-medium">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 px-4 md:px-10 lg:px-20 text-center">
        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Design <span className="text-[#25ccad]">Process</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              icon: <Users size={26} />,
              title: "Research",
              desc: "Understanding users, market, and objectives",
            },
            {
              icon: <Sparkles size={26} />,
              title: "Ideate",
              desc: "Brainstorming solutions and concepts",
            },
            {
              icon: <Pencil size={26} />,
              title: "Design",
              desc: "Creating beautiful, functional interfaces",
            },
            {
              icon: <Eye size={26} />,
              title: "Test",
              desc: "Validating with real users",
            },
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {/* ICON BOX */}
              <div className="relative">
                <div
                  className="
            w-20 h-20 rounded-2xl 
            bg-gradient-to-br from-[#25ccad] to-[#1a9b8e]
            flex items-center justify-center text-white
            shadow-[0_0_30px_rgba(37,204,173,0.5)]
          "
                >
                  {item.icon}
                </div>

                {/* STEP NUMBER */}
                <div
                  className="
            absolute -top-3 -right-3
            w-10 h-10 rounded-full
            bg-[#0b1220] border-2 border-[#25ccad]
            flex items-center justify-center
            text-sm font-bold text-white
          "
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* CONNECTING LINE (desktop only) */}
              {i !== 3 && (
                <div
                  className="
            hidden lg:block 
            absolute top-10 left-[60%] w-full h-[2px]
            bg-gradient-to-r from-[#25ccad]/60 to-transparent
          "
                />
              )}

              {/* TEXT */}
              <h3 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
<section className="py-20 px-4 md:px-10 lg:px-20">

  {/* HEADER */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-bold text-white">
      Our Design <span className="text-[#25ccad]">Principles</span>
    </h2>
    <p className="text-gray-400 mt-4 text-sm md:text-base">
      The foundation of every interface we create
    </p>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        title: "User-Centered",
        desc: "Every decision starts with the user’s needs and goals",
      },
      {
        title: "Accessible",
        desc: "Inclusive design that works for everyone",
      },
      {
        title: "Consistent",
        desc: "Cohesive experiences across all touchpoints",
      },
      {
        title: "Intuitive",
        desc: "Interfaces that feel natural and effortless",
      },
      {
        title: "Scalable",
        desc: "Design systems that grow with your product",
      },
      {
        title: "Delightful",
        desc: "Memorable experiences that users love",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="
          group relative p-5 md:p-7
          rounded-2xl 
          border border-[#25ccad]/20
          bg-gradient-to-br from-slate-900/80 to-slate-800/60
          backdrop-blur-xl
          transition-all duration-300
          hover:border-[#25ccad]
          hover:shadow-[0_0_30px_rgba(37,204,173,0.15)]
        "
      >
        {/* TOP DOT */}
        <div className="w-2 h-2 rounded-full bg-[#25ccad] mb-4" />

        {/* TITLE */}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm md:text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}

  </div>
</section>

      {/* ================= TOOLS ================= */}
      <section className="py-16 px-6 lg:px-16 text-center ">
        <h2 className="text-2xl font-bold mb-8">Design Tools We Master</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["Figma", "Adobe XD", "Sketch", "Framer", "InVision"].map((tool) => (
            <div
              key={tool}
              className="px-8 py-4 border border-white/10 rounded-xl hover:border-[#25ccad] bg-[#1e293b] text-[#25ccad] font-medium transition"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
<section className="py-24 px-4 md:px-10 lg:px-20 relative">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[#25ccad]/20 blur-[160px] opacity-20 pointer-events-none" />

  <div className="
    relative max-w-5xl mx-auto text-center 
    rounded-3xl 
    border border-[#25ccad]/20
    bg-gradient-to-br from-slate-900/80 to-slate-800/60
    backdrop-blur-xl
    px-6 py-14 md:px-12 md:py-16
    shadow-[0_0_80px_rgba(37,204,173,0.15)]
  ">

    {/* ICON */}
    <div className="flex justify-center mb-6">
      <div className="
        w-14 h-14 rounded-xl 
        bg-gradient-to-br from-[#25ccad] to-[#1a9b8e]
        flex items-center justify-center
        text-white
        shadow-[0_0_25px_rgba(37,204,173,0.6)]
      ">
        <Palette size={26} />
      </div>
    </div>

    {/* TITLE */}
    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
      Let’s Create Something <br />
      <span className="text-[#25ccad]">
        Extraordinary Together
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto">
      Ready to elevate your digital experience? Let’s discuss your project
      and bring your vision to life.
    </p>

    {/* BUTTON */}
    <Link
    to="/contact"
    className="inline-flex items-center gap-2 px-6 py-3 mt-4
      bg-gradient-to-r from-[#25ccad] to-[#1a9b8e]
       text-black font-semibold rounded-xl
      hover:scale-105 hover:shadow-[0_0_20px_rgba(39,204,174,0.5)]
      transition duration-300">
      Get Started →
    </Link>
 
  </div>
</section>
    </div>
  );
};

export default UIUXDesign;
