import React from "react";
import { Calendar, Zap, Users, Globe, DotIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    { title: "Global", desc: "TRUSTED COMPANY" },
    { title: "100%", desc: "CLIENT SATISFACTION" },
    { title: "100%", desc: "JOB SUCCESS" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 md:pb-20">

        {/* HEADER */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25ccad]/10 border border-[#25ccad]/30 rounded-full mb-4 md:mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <DotIcon className="text-[#25ccad]" />
            </motion.div>
            <span className="text-xs sm:text-sm font-semibold text-[#25ccad] tracking-wider">
              LATEST UPDATES
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 md:mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#25ccad] to-cyan-400 bg-clip-text text-transparent">
              What’s New
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Stay ahead with our latest innovations, partnerships, and achievements in the world of technology
          </motion.p>
        </motion.div>

        {/* FEATURE CARD */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative mb-16 md:mb-20 group mx-0 md:mx-16"
        >
          <motion.div 
            variants={fadeInUp}
            className="absolute inset-0 bg-gradient-to-r from-[#25ccad] to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition"
          />

          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-[#25ccad]/30 rounded-3xl p-5 sm:p-6 md:p-10 grid lg:grid-cols-2 gap-6 md:gap-10"
          >

            {/* LEFT */}
            <motion.div variants={fadeInLeft}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 md:mb-6">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-[10px] sm:text-xs bg-[#25ccad]/20 border border-[#25ccad] rounded-full"
                >
                  MAJOR PARTNERSHIP
                </motion.span>
                <span className="text-gray-400 text-xs sm:text-sm flex items-center gap-1">
                  <Calendar size={14} /> September 2025
                </span>
              </div>

              <motion.h2 
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3"
              >
                Collab with <span className="text-[#25ccad]">Thaiseva</span>
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base leading-relaxed"
              >
                Thaiseva is your all-in-one Thailand platform for curated travel, trusted local services, and real-time support from an on-ground team.
              </motion.p>

              <motion.h6 
                variants={fadeInUp}
                className="text-[#25ccad] mb-4 text-xs md:text-sm font-bold uppercase"
              >
                Collaboration Highlights
              </motion.h6>

              <motion.ul variants={staggerContainer} className="space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm">
                {["Tour", "Travel", "Booking Rides", "Food", "Booking Vehicle"].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={fadeInRight}
                    whileHover={{ x: 5, color: "#25ccad" }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* STATS */}
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 md:mt-8"
              >
                {value.map((val, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-black/40 p-3 sm:p-4 rounded-xl text-center border border-gray-800"
                  >
                    <motion.p 
                      whileHover={{ scale: 1.1 }}
                      className="text-lg md:text-xl font-bold text-[#25ccad]"
                    >
                      {val.title}
                    </motion.p>
                    <p className="text-gray-400 text-[9px] sm:text-[10px]">{val.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div 
              variants={fadeInRight}
              className="hidden lg:flex items-center justify-center relative"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute w-[280px] h-[280px] rounded-full bg-[#25ccad]/20 blur-3xl"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute w-[220px] h-[220px] border border-[#25ccad]/30 rounded-full"
              />
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute w-[300px] h-[300px] border border-[#25ccad]/10 rounded-full"
              />

              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.6 } }}
                className="relative z-10 w-36 h-36 bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(37,204,173,0.4)]"
              >
                <motion.img 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  src="images/logoC2.svg" 
                  alt="logo" 
                />
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* RECENT UPDATES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInLeft}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-10 px-2 md:px-16"
          >
            Recent <span className="text-[#25ccad]">Updates</span>
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-4 md:gap-6 px-2 md:px-16"
          >
            {updates.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:border-[#25ccad]/50"
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#25ccad] to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition" />

                <div className="relative z-10">
                  <div className="flex justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                      className="p-2 sm:p-3 bg-gradient-to-br from-[#25ccad] to-cyan-500 rounded-xl text-white"
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-gray-400 text-[10px] sm:text-xs flex items-center gap-1">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>

                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="text-[10px] sm:text-xs text-[#25ccad] font-bold uppercase mb-2"
                  >
                    {item.category}
                  </motion.p>

                  <motion.h3 
                    whileHover={{ color: "#25ccad" }}
                    className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#25ccad] transition"
                  >
                    {item.title}
                  </motion.h3>

                  <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default News;