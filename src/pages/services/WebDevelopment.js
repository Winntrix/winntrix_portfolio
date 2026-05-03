import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState("mern");

  const tabs = {
    mern: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Express.js", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
    ],

    frontend: [
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "🔷" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Vue.js", icon: "💚" },
      { name: "Tailwind", icon: "🌊" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "REST APIs", icon: "🔌" },
      { name: "GraphQL", icon: "🔷" },
    ],
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-28 bg-gradient-to-br from-[#0f172a] via-[#0b1f2e] to-[#0f172a] text-white overflow-hidden">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0e1a2b] to-[#12343a]" />
        {/* LEFT GLOW */}
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#25ccad]/20 blur-[140px] rounded-full animate-pulse" />

        {/* RIGHT GLOW */}
        <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-[#25ccad]/10 blur-[140px] rounded-full animate-pulse" />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* BADGE */}
          <div className="inline-block px-6 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 text-[#25ccad] text-md mb-6">
            MERN STACK SPECIALISTS
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-8xl font-black [word-spacing:2px] mb-6 mt-4">
            Engineering High-Performance,
            <br />
            <span className="text-[#25ccad]">Scalable Web Apps</span>
          </h1>

          {/* DESC */}
          <p className="text-white/60 max-w-2xl mx-auto mb-8 text-xl">
            Building powerful, modern web applications with React, Node.js, and
            cutting-edge technologies. From concept to deployment, we deliver
            enterprise-grade solutions.{" "}
          </p>

          {/* CTA */}
          <button className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            View Our Work
          </button>

          {/* TECH BADGES */}
          <div className="flex flex-wrap justify-center gap-4 mt-20">
            {["⚛️ React", "🟢 Node.js", "🍃 MongoDB", "▲ Next.js"].map(
              (tech, i) => (
                <div
                  key={i}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-sm"
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="animate-float-slow animate-tilt">
            <div className="relative w-[360px] rounded-2xl border border-[#25ccad]/20 bg-[#071826]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(37,204,173,0.15)] overflow-hidden animate-float">
              {/* TOP BAR */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              {/* CODE CONTENT */}
              <div className="p-5 font-mono text-[13px] leading-relaxed text-gray-400 ">
                <p>
                  <span className="text-purple-400">import</span> {"{ "}
                  <span className="text-blue-400">useState</span>
                  {" }"} <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'react'</span>;
                </p>

                <br />

                <p>
                  <span className="text-purple-400">const</span> App = () {"=>"}{" "}
                  {"{"}
                </p>

                <p className="ml-4">
                  <span className="text-purple-400">const</span> [data, setData]
                  = <span className="text-blue-400">useState</span>([]);
                </p>

                <br />

                <p className="ml-4">
                  <span className="text-purple-400">return</span>{" "}
                  &lt;div&gt;Hello World&lt;/div&gt;;
                </p>

                <p>{"};"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            ["50+", "Projects Delivered"],
            ["4+", "Years Experience"],
            ["98%", "Client Satisfaction"],
            ["24/7", "Support Available"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h2 className="text-5xl font-bold text-[#1a9b8e]">{num}</h2>
              <p className="text-gray-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="bg-[#eaf5f3] py-2 px-6 rounded-full inline-block">
            <p className="text-xs tracking-widest text-[#199b8e] font-bold">
              OUR EXPERTISE
            </p>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-8 mt-6 text-black">
            Technologies We <span className="text-[#1a9b8e]">Master</span>
          </h2>

          <p className="text-gray-500 mb-16 ">
            Specialized in the MERN stack and modern web technologies for
            building <br />
            scalable, performant applications
          </p>

          {/* TABS */}
          <div className="grid grid-cols-2 md:flex justify-center gap-4 mb-10 place-items-center">
            {["mern", "frontend", "backend"].map((tab, i, arr) => (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`
      px-6 py-2 rounded-full border transition-all duration-300
      ${
        activeTab === tab
          ? "bg-gradient-to-br from-[#1a9b8e] to-[#2bc4b5] text-white shadow-md"
          : "border-gray-300 text-gray-600 hover:border-[#25ccad] hover:text-[#25ccad]"
      }

      ${
        arr.length % 2 === 1 && i === arr.length - 1
          ? "col-span-2 justify-self-center"
          : ""
      }
    `}
  >
    {tab.toUpperCase()}
  </button>
))}
          </div>

          {/* TECH GRID */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {tabs[activeTab].map((tech, i) => (
              <div
                key={i}
                className="group aspect-square bg-white rounded-2xl border border-gray-200 hover:border-[#25ccad] hover:shadow-xl transition flex flex-col items-center justify-center text-center"
              >
                {/* ICON CIRCLE */}
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">
                  {tech.icon}
                </div>

                {/* NAME */}
                <p className="font-semibold text-gray-800 text-sm md:text-base">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-100 ">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-[#e5f0f1] py-2 px-6 rounded-full inline-block">
            <p className="text-xs tracking-widest text-[#199b9e] font-bold">
              WHAT WE DO
            </p>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-12 mt-8 text-black">
            Our <span className="text-[#1a9b8e]">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "MERN Stack Development",
                desc: "Complete full-stack solutions using MongoDB, Express.js, React, and Node.js for scalable applications",
                features: [
                  "Custom APIs",
                  "Database Design",
                  "Real-time Features",
                  "Cloud Deployment",
                ],
              },
              {
                icon: "⚛️",
                title: "React & Next.js",
                desc: "Modern, performant front-end applications with server-side rendering and optimal SEO",
                features: [
                  "SSR/SSG",
                  "Performance Optimization",
                  "Responsive Design",
                  "State Management",
                ],
              },
              {
                icon: "🔧",
                title: "Backend Development",
                desc: "Robust server-side solutions with RESTful APIs, authentication, and database management",
                features: [
                  "API Development",
                  "Authentication",
                  "Database Design",
                  "Microservices",
                ],
              },
              {
                icon: "🎨",
                title: "UI/UX Imeplementation",
                desc: "Pixel-perfect implementation of designs with smooth animations and interactions",
                features: [
                  "Responsive Design",
                  "Animations",
                  "Accessibility",
                  "Cross-Browser",
                ],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-10 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#25ccad] hover:shadow-xl hover:-translate-y-1 text-left"
              >
                {/* ICON */}
                <div className="text-5xl mb-8 mt-2 transition-transform duration-300 group-hover:scale-105">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="font-bold text-xl text-gray-900 mb-6">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                  {service.desc}
                </p>

                {/* FEATURES */}
                <ul className="space-y-5">
                  {service.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1a9b8e] text-white text-xs">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 text-white text-center overflow-hidden">
  {/* GRADIENT BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1a9b8e] to-[#2bc4b5]" />

 {/* GRID OVERLAY */}
  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-3xl mx-auto px-4">
    
    {/* TITLE */}
    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      Ready to Build Something Amazing?
    </h2>

    {/* TEXT */}
    <p className="text-lg md:text-xl text-white/80 mb-10">
      Let’s discuss your project and create a solution that exceeds <br />
      expectations
    </p>

    {/* BUTTON */}
    <Link
      to="/contact"
      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl 
      bg-white/10 backdrop-blur-md border border-white/20 
      hover:bg-white/20 transition-all duration-300 
      font-semibold text-lg shadow-lg hover:scale-105"
    >
      Get in Touch
      <ArrowRight size={18} />
    </Link>
  </div>
</section>
    </>
  );
};

export default WebDevelopment;
