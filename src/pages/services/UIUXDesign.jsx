import React from "react";
import { motion } from "framer-motion";
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
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden"
    >
      {/* ================= HERO - FIXED OVERLAP ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-5 md:px-10 lg:px-24 py-16 md:py-20 lg:py-28 grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        {/* LEFT */}
        <motion.div variants={fadeUp}>
          <motion.span
            variants={fadeUp}
            className="inline-block mt-8 md:mt-12 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-full bg-[#25ccad]/10 border border-[#25ccad]/30 text-[#25ccad]"
          >
            🚀 Leading UI/UX Design Company
          </motion.span>

          {/* FIXED HEADING - No overlap */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] md:leading-tight"
          >
            <span className="block">Strategic UI/UX Design</span>
            <span className="block text-[#25ccad] mt-2 md:mt-3 pb-1">
              for Digital Excellence
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-400 mt-4 md:mt-6 max-w-lg text-sm md:text-base">
            We craft beautiful, user-centered experiences that don't just look
            good—they solve real problems and drive measurable business
            outcomes.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 bg-[#25ccad] text-black rounded-lg font-semibold transition text-sm md:text-base"
          >
            Get Started →
          </motion.button>

          {/* STATS */}
          <motion.div variants={fadeUp} className="flex gap-8 md:gap-12 mt-8 md:mt-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#25ccad]">30+</h3>
              <p className="text-gray-400 text-xs md:text-sm">Projects Designed</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#25ccad]">98%</h3>
              <p className="text-gray-400 text-xs md:text-sm">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT MOCK */}
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-xl mx-auto mt-8 md:mt-0"
        >
          {/* GLOW BACKGROUND */}
          <div className="absolute inset-0 bg-[#25ccad]/20 blur-[120px] opacity-40 rounded-full" />

          {/* MAIN CARD */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative border border-[#25ccad]/30 rounded-2xl md:rounded-3xl p-4 md:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl shadow-[0_0_80px_rgba(37,204,173,0.15)]"
          >
            {/* TOP BAR */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"></span>
            </div>

            {/* HEADER BAR */}
            <div className="h-5 md:h-6 w-2/3 bg-slate-700/50 rounded mb-4 md:mb-6" />

            {/* HERO GREEN CARD */}
            <div className="relative bg-gradient-to-r from-[#25ccad] to-[#2bc4b5] h-32 md:h-40 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              {/* CENTER ICON */}
              <span className="text-white text-3xl md:text-4xl opacity-60">🎨</span>

              {/* FLOATING FIGMA ICON */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-[#25ccad] rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl"
              >
                <FiFigma className="w-8 h-8 md:w-12 md:h-12" />
              </motion.div>
            </div>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-12 md:h-16 bg-slate-700/40 rounded-lg md:rounded-xl border border-white/10"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-12 md:h-16 bg-slate-700/40 rounded-lg md:rounded-xl border border-white/10"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-12 md:h-16 bg-slate-700/40 rounded-lg md:rounded-xl border border-white/10"
              />
            </div>

            {/* TEXT LINES */}
            <div className="space-y-2 md:space-y-3">
              <div className="h-2 md:h-3 bg-slate-700/40 rounded w-full" />
              <div className="h-2 md:h-3 bg-slate-700/40 rounded w-5/6" />
              <div className="h-2 md:h-3 bg-slate-700/40 rounded w-3/4" />
            </div>
          </motion.div>

          {/* FLOATING STATUS CARD */}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 md:-bottom-8 -left-4 md:-left-6 bg-slate-900 border border-[#25ccad]/30 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-lg backdrop-blur-xl"
          >
            <p className="text-gray-400 text-[10px] md:text-sm">Design System</p>
            <p className="text-[#25ccad] font-semibold text-base md:text-lg">Ready</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-16 md:py-20 px-5 md:px-10 lg:px-24"
      >
        <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-5xl font-bold">
            Our Design <span className="text-[#25ccad]">Services</span>
          </h2>
          <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-lg">
            End-to-end design solutions that transform ideas into exceptional{" "}
            <br className="hidden sm:block" />
            user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, borderColor: "#25ccad" }}
              transition={{ duration: 0.2 }}
              className="p-6 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 transition"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25ccad] text-black rounded-xl flex items-center justify-center mb-6 md:mb-8"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{item.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {item.list.map((l, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-xs md:text-sm text-gray-300"
                  >
                    <span className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full bg-[#1a9b8e] text-white text-[10px] md:text-xs">
                      ✓
                    </span>
                    {l}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= WHAT WE DESIGN ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-12 md:py-16 px-4 md:px-10 lg:px-20"
      >
        <div
          className="
            max-w-6xl mx-auto 
            rounded-2xl md:rounded-3xl 
            border border-[#25ccad]/20
            bg-gradient-to-br from-slate-900/80 to-slate-800/60 
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(37,204,173,0.08)]
            p-6 md:p-12
            relative overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-[#25ccad]/10 blur-[120px] opacity-20 pointer-events-none" />

          <div className="text-center mb-8 md:mb-10 relative z-10">
            <h2 className="text-xl md:text-4xl font-bold text-white">
              What We Design
            </h2>
            <p className="text-gray-400 mt-1 md:mt-2 text-xs md:text-base">
              Versatile expertise across all digital platforms
            </p>
          </div>

          <div
            className="
              grid 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
              gap-3 md:gap-6
              relative z-10
            "
          >
            {[
              { name: "Web Design", icon: <MonitorCloud size={18} /> },
              { name: "Mobile App Design", icon: <Smartphone size={18} /> },
              {
                name: "Dashboard & SaaS UI",
                icon: <LayoutDashboard size={18} />,
              },
              { name: "Design Systems", icon: <Layers size={18} /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: "#25ccad" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-2 md:gap-3 px-3 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-[#142937] text-[#25ccad] transition"
                >
                  {item.icon}
                </motion.div>
                <p className="text-white text-xs md:text-sm font-medium">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-16 md:py-20 px-4 md:px-10 lg:px-20 text-center"
      >
        <motion.div variants={fadeUp} className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            Our Design <span className="text-[#25ccad]">Process</span>
          </h2>
          <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            {
              icon: <Users size={22} />,
              title: "Research",
              desc: "Understanding users, market, and objectives",
            },
            {
              icon: <Sparkles size={22} />,
              title: "Ideate",
              desc: "Brainstorming solutions and concepts",
            },
            {
              icon: <Pencil size={22} />,
              title: "Design",
              desc: "Creating beautiful, functional interfaces",
            },
            {
              icon: <Eye size={22} />,
              title: "Test",
              desc: "Validating with real users",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="relative flex flex-col items-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div
                  className="
                    w-16 h-16 md:w-20 md:h-20 rounded-2xl 
                    bg-gradient-to-br from-[#25ccad] to-[#1a9b8e]
                    flex items-center justify-center text-white
                    shadow-[0_0_30px_rgba(37,204,173,0.5)]
                  "
                >
                  {item.icon}
                </div>
                <div
                  className="
                    absolute -top-2 md:-top-3 -right-2 md:-right-3
                    w-7 h-7 md:w-10 md:h-10 rounded-full
                    bg-[#0b1220] border-2 border-[#25ccad]
                    flex items-center justify-center
                    text-xs md:text-sm font-bold text-white
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
              <h3 className="mt-4 md:mt-6 text-base md:text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2 max-w-[200px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Rest of the sections remain the same but with responsive adjustments */}
      {/* ================= PRINCIPLES ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-16 md:py-20 px-4 md:px-10 lg:px-20"
      >
        <motion.div variants={fadeUp} className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            Our Design <span className="text-[#25ccad]">Principles</span>
          </h2>
          <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base">
            The foundation of every interface we create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: "User-Centered",
              desc: "Every decision starts with the user's needs and goals",
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
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5, borderColor: "#25ccad" }}
              className="group relative p-4 md:p-7 rounded-2xl border border-[#25ccad]/20 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#25ccad] mb-3 md:mb-4"
              />
              <h3 className="text-base md:text-xl font-semibold text-white mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= TOOLS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-12 md:py-16 px-5 md:px-10 lg:px-16 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
          Design Tools We Master
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {["Figma", "Adobe XD", "Sketch", "Framer", "InVision"].map(
            (tool, i) => (
              <motion.div
                key={tool}
                variants={fadeUp}
                whileHover={{ scale: 1.1, borderColor: "#25ccad" }}
                className="px-5 md:px-8 py-2 md:py-4 border border-white/10 rounded-xl bg-[#1e293b] text-[#25ccad] font-medium transition cursor-pointer text-sm md:text-base"
              >
                {tool}
              </motion.div>
            ),
          )}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 px-4 md:px-10 lg:px-20 relative"
      >
        <div className="absolute inset-0 bg-[#25ccad]/20 blur-[160px] opacity-20 pointer-events-none" />

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="relative max-w-5xl mx-auto text-center rounded-2xl md:rounded-3xl border border-[#25ccad]/20 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl px-5 md:px-12 py-10 md:py-16 shadow-[0_0_80px_rgba(37,204,173,0.15)]"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4 md:mb-6"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#25ccad] to-[#1a9b8e] flex items-center justify-center text-white shadow-[0_0_25px_rgba(37,204,173,0.6)]">
              <Palette size={22} />
            </div>
          </motion.div>

          <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            Let's Create Something <br />
            <span className="text-[#25ccad]">Extraordinary Together</span>
          </h2>

          <p className="text-gray-400 mt-4 md:mt-6 text-sm md:text-base max-w-2xl mx-auto">
            Ready to elevate your digital experience? Let's discuss your project
            and bring your vision to life.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 mt-4 md:mt-6 bg-gradient-to-r from-[#25ccad] to-[#1a9b8e] text-black font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(39,204,174,0.5)] transition duration-300 text-sm md:text-base"
            >
              Get Started →
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Add this CSS to prevent any text cut-off */}
      <style jsx>{`
        @media (max-width: 640px) {
          h1, h2, h3, span, p {
            overflow: visible !important;
          }
          
          .bg-clip-text {
            padding-bottom: 0.25rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default UIUXDesign;