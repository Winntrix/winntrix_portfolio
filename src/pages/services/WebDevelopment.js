import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8 },
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

  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseGlow = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      {/* HERO */}
      <section className="relative pt-44 pb-28 bg-gradient-to-br from-[#0f172a] via-[#0b1f2e] to-[#0f172a] text-white overflow-hidden">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0e1a2b] to-[#12343a]" />
        
        {/* LEFT GLOW */}
        <motion.div 
          variants={pulseGlow}
          animate="animate"
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#25ccad]/20 blur-[140px] rounded-full"
        />

        {/* RIGHT GLOW */}
        <motion.div 
          variants={pulseGlow}
          animate="animate"
          className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-[#25ccad]/10 blur-[140px] rounded-full"
        />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* BADGE */}
          <motion.div 
            variants={fadeUp}
            className="inline-block px-6 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 text-[#25ccad] text-md mb-6"
          >
            MERN STACK SPECIALISTS
          </motion.div>

          {/* TITLE */}
          <motion.h1 
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black [word-spacing:2px] mb-6 mt-4"
          >
            Engineering High-Performance,
            <br />
            <span className="text-[#25ccad]">Scalable Web Apps</span>
          </motion.h1>

          {/* DESC */}
          <motion.p 
            variants={fadeUp}
            className="text-white/60 max-w-2xl mx-auto mb-8 text-xl"
          >
            Building powerful, modern web applications with React, Node.js, and
            cutting-edge technologies. From concept to deployment, we deliver
            enterprise-grade solutions.{" "}
          </motion.p>

          {/* CTA */}
          <motion.button 
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            View Our Work
          </motion.button>

          {/* TECH BADGES */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-4 mt-20"
          >
            {["⚛️ React", "🟢 Node.js", "🍃 MongoDB", "▲ Next.js"].map(
              (tech, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-sm"
                >
                  {tech}
                </motion.div>
              ),
            )}
          </motion.div>
        </div>

        <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div 
            variants={floatAnimation}
            animate="animate"
            className="animate-float-slow animate-tilt"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-[360px] rounded-2xl border border-[#25ccad]/20 bg-[#071826]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(37,204,173,0.15)] overflow-hidden"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="bg-gray-100 py-20 text-center"
      >
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            ["50+", "Projects Delivered"],
            ["4+", "Years Experience"],
            ["98%", "Client Satisfaction"],
            ["24/7", "Support Available"],
          ].map(([num, label], i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <motion.h2 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-5xl font-bold text-[#1a9b8e]"
              >
                {num}
              </motion.h2>
              <p className="text-gray-500 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TECH SECTION - FIXED CENTERING */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div variants={fadeUp} className="text-center">
            <div className="bg-[#eaf5f3] py-2 px-6 rounded-full inline-block">
              <p className="text-xs tracking-widest text-[#199b8e] font-bold">
                OUR EXPERTISE
              </p>
            </div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl md:text-6xl font-bold mb-8 mt-6 text-black text-center">
            Technologies We <span className="text-[#1a9b8e]">Master</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-500 mb-16 text-center">
            Specialized in the MERN stack and modern web technologies for building{" "}
            <br className="hidden sm:block" />
            scalable, performant applications
          </motion.p>

          {/* TABS - CENTERED */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["mern", "frontend", "backend"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-2.5 rounded-full border transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-gradient-to-br from-[#1a9b8e] to-[#2bc4b5] text-white shadow-md border-transparent"
                      : "border-gray-300 text-gray-600 hover:border-[#25ccad] hover:text-[#25ccad] bg-white"
                  }
                `}
              >
                {tab.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* TECH GRID WITH CENTERED ALIGNMENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <div className={`
                grid gap-6 place-items-center
                ${activeTab === 'mern' && 'grid-cols-2 sm:grid-cols-4'}
                ${activeTab === 'frontend' && 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4'}
                ${activeTab === 'backend' && 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3'}
              `}>
                {tabs[activeTab].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -8, borderColor: "#25ccad" }}
                    className="group w-32 sm:w-36 md:w-40 aspect-square bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
                  >
                    {/* ICON CIRCLE */}
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 transition"
                    >
                      {tech.icon}
                    </motion.div>

                    {/* NAME */}
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base px-2">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp}>
            <div className="bg-[#e5f0f1] py-2 px-6 rounded-full inline-block">
              <p className="text-xs tracking-widest text-[#199b9e] font-bold">
                WHAT WE DO
              </p>
            </div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl md:text-6xl font-bold mb-12 mt-8 text-black">
            Our <span className="text-[#1a9b8e]">Services</span>
          </motion.h2>

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
                title: "UI/UX Implementation",
                desc: "Pixel-perfect implementation of designs with smooth animations and interactions",
                features: [
                  "Responsive Design",
                  "Animations",
                  "Accessibility",
                  "Cross-Browser",
                ],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, borderColor: "#25ccad" }}
                className="group p-10 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl text-left cursor-pointer"
              >
                {/* ICON */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-5xl mb-8 mt-2 transition-transform duration-300"
                >
                  {service.icon}
                </motion.div>

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
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1a9b8e] text-white text-xs">
                        ✓
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="relative py-28 text-white text-center overflow-hidden"
      >
        {/* GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a9b8e] to-[#2bc4b5]" />

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          
          {/* TITLE */}
          <motion.h2 
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Build Something Amazing?
          </motion.h2>

          {/* TEXT */}
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-white/80 mb-10"
          >
            Let's discuss your project and create a solution that exceeds <br />
            expectations
          </motion.p>

          {/* BUTTON */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl 
              bg-white/10 backdrop-blur-md border border-white/20 
              hover:bg-white/20 transition-all duration-300 
              font-semibold text-lg shadow-lg"
            >
              Get in Touch
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default WebDevelopment;