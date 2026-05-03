import {
  ArrowRight,
  Code2,
  Rocket,
  Stars,
  User,
} from "lucide-react";
import React from "react";
import { BiMobile } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileDevelopment = () => {
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

  const staggerFast = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseGlow = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const cardRotateHover = {
    whileHover: {
      rotate: 0,
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617] text-white">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            variants={pulseGlow}
            animate="animate"
            className="absolute top-20 left-10 w-72 h-72 bg-[#27ccae]/10 rounded-full blur-3xl"
          />
          <motion.div 
            variants={pulseGlow}
            animate="animate"
            className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            transition={{ delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div 
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {/* TAG */}
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full text-sm">
                  <span className="text-[#27ccae] font-medium">
                    Leading Mobile App Development Company in India
                  </span>
                </div>
              </motion.div>

              {/* TITLE */}
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building High-Performance,
                <span className="block mt-2 bg-gradient-to-r from-[#27ccae] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Scalable Mobile Apps
                </span>
              </motion.h1>

              {/* DESC */}
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300">
                We craft exceptional mobile experiences that captivate users and
                drive business growth. From concept to App Store, we're your
                trusted partner.
              </motion.p>

              {/* BUTTON */}
              <motion.div variants={fadeUp}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl 
                    bg-gradient-to-r from-[#27ccae] to-emerald-400 
                    font-bold hover:scale-105 transition"
                >
                  Get Started →
                </Link>
              </motion.div>

              {/* STATS */}
              <motion.div variants={staggerFast} className="flex gap-16 pt-6 border-t border-slate-800">
                {[
                  { Icon: Rocket, value: "30+", label: "Apps Delivered" },
                  { Icon: Stars, value: "98%", label: "Satisfaction" },
                  { Icon: User, value: "10L+", label: "Users" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }}>
                    <stat.Icon />
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                      className="text-2xl font-bold text-[#27ccae] mt-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE (FLOATING CARDS) */}
            <motion.div 
              variants={fadeUp}
              className="relative flex justify-center items-center group"
            >
              {/* BACK CARD */}
              <motion.div
                variants={cardRotateHover}
                whileHover={{ rotate: -2, y: -10, scale: 1.05 }}
                className="
                  absolute left-0 top-10 w-48 h-96 
                  bg-[#20444c]
                  rounded-3xl border border-[#27ccae]/20 
                  flex items-center justify-center text-6xl text-white
                  transform transition-all duration-500 
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  rotate-[-6deg] group-hover:rotate-[-2deg] 
                  group-hover:-translate-y-2 group-hover:scale-105
                "
              >
                <BiMobile />
              </motion.div>

              {/* MAIN CARD */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative z-10 w-56 h-[450px] rounded-[2rem] p-3 border-2 border-[#27ccae]/30 bg-slate-900 shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-[1.5rem] flex flex-col items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold">30+</div>
                    <div className="text-sm">Apps Built</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full px-4">
                    {[1, 2, 3, 4].map((_, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="aspect-square bg-white/20 rounded-xl"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* FRONT CARD */}
              <motion.div
                variants={cardRotateHover}
                whileHover={{ rotate: 2, y: -10, scale: 1.05 }}
                className="
                  absolute right-0 bottom-10 w-48 h-96 
                  bg-[#20444c]
                  rounded-3xl border border-[#27ccae]/20 
                  flex items-center justify-center text-6xl text-white
                  transform transition-all duration-500 
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  rotate-[6deg] group-hover:rotate-[2deg] 
                  group-hover:-translate-y-2 group-hover:scale-105
                "
              >
                <Code2 className="w-16 h-16" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={fadeUp} className="text-5xl font-bold text-center text-white mb-4">
            Our <span className="text-[#27ccae]">Services</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-center mb-16 text-lg">
            Comprehensive mobile development solutions tailored to your needs
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BiMobile />,
                title: "Native Development",
                dev: "iOS & Android",
                desc: "Unleash maximum performance with native Swift and Kotlin development. Perfect pixel precision meets blazing speed.",
                features: [
                  "Swift & Kotlin",
                  "Native UI/UX",
                  "100% Performance",
                  "Platform APIs",
                ],
              },
              {
                icon: <Code2 />,
                title: "Flutter Apps",
                dev: "Cross-Platform Excellence",
                desc: "Build stunning, natively compiled applications from a single codebase. Beautiful, fast, and productive.",
                features: [
                  "Single Codebase",
                  "Hot Reload",
                  "Material Design",
                  "Custom Widgets",
                ],
              },
              {
                icon: <BsLightning />,
                title: "React Native",
                dev: "JavaScript Power",
                desc: "Leverage your web expertise to create exceptional mobile experiences. Fast iteration, native feel.",
                features: [
                  "JavaScript/TypeScript",
                  "Live Updates",
                  "Rich Ecosystem",
                  "Native Modules",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, borderColor: "#27ccae" }}
                className="group p-8 rounded-2xl border border-slate-800 
                  bg-gradient-to-br from-slate-900 to-slate-800
                  hover:shadow-[0_0_40px_rgba(39,204,174,0.2)]
                  transition-all duration-300 ease-out cursor-pointer"
              >
                {/* ICON */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className="text-3xl mb-6 transition duration-300 p-4 bg-[#27ccae] text-white rounded-xl w-max"
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* SUBTITLE */}
                <p className="text-[12px] mb-4 text-[#27ccae]">{item.dev}</p>

                {/* DESC */}
                <p className="text-slate-400 text-sm leading-[1.8] tracking-wide mb-6">
                  {item.desc}
                </p>

                {/* FEATURES */}
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-slate-300 text-[12px]"
                    >
                      <span
                        className="w-4 h-4 flex items-center justify-center rounded-full 
                          bg-[#27ccae]/10 border border-[#27ccae] text-[#27ccae] text-xs"
                      >
                        ✓
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-[#27ccae] text-sm font-medium cursor-pointer mt-6 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TECHNOLOGY STACK */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="py-24 bg-[#020617] text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-3">
          Powered By{" "}
          <span className="text-[#27ccae]">Cutting-Edge Technology</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-slate-400 mb-12">
          We leverage the best tools to build exceptional apps
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS"].map((tech, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05, borderColor: "#27ccae", y: -3 }}
              className="px-6 py-3 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800
                text-slate-300 hover:text-[#27ccae] cursor-pointer
                transition duration-300"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* OUR PROCESS */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-24 bg-[#020617] text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-3">
          Our <span className="text-[#27ccae]">Process</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-slate-400 mb-16">
          A proven methodology that delivers exceptional results
        </motion.p>

        <div className="grid md:grid-cols-4 mx-20 gap-10 relative">
          {[
            { step: "01", title: "Discovery", desc: "Deep dive into your vision and goals" },
            { step: "02", title: "Design", desc: "Craft stunning, user-centric interfaces" },
            { step: "03", title: "Develop", desc: "Build with precision and excellence" },
            { step: "04", title: "Deploy", desc: "Launch and scale with confidence" },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="relative text-center cursor-pointer"
            >
              {/* STEP BOX */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 mx-auto flex items-center justify-center 
                  rounded-2xl text-white font-bold text-xl
                  bg-gradient-to-br from-[#27ccae] to-[#1a9b8e]
                  shadow-[0_0_25px_rgba(39,204,174,0.5)]"
              >
                {item.step}
              </motion.div>

              {/* LINE (except last) */}
              {i !== 3 && (
                <div className="hidden md:block absolute top-10 left-3/4 w-full h-[2px] bg-gradient-to-r from-[#27ccae] to-transparent"></div>
              )}

              <h3 className="mt-6 text-white font-semibold">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CLIENT SUCCESS STORIES */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 md:py-28 bg-[#020617] text-center px-4 md:px-10 lg:px-20"
      >
        {/* HEADER */}
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-3">
          Client <span className="text-[#27ccae]">Success Stories</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-slate-400 text-base md:text-lg mb-12 md:mb-16">
          Don't just take our word for it
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Harish Tiwari",
              role: "CEO, Thaiseva",
              text: "They transformed our vision into a stunning app that our users absolutely love. The attention to detail is remarkable.",
            },
            {
              name: "Jitendra Kumar",
              role: "CTO, DigiStall",
              text: "Best mobile development team we've worked with. Professional, responsive, and delivered ahead of schedule.",
            },
            {
              name: "Emily Davis",
              role: "Product Lead, HealthSync",
              text: "The Flutter app they built performs flawlessly across all devices. Couldn't be happier with the results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, borderColor: "#27ccae" }}
              className="
                group p-6 md:p-8 
                rounded-2xl 
                border border-slate-800 
                bg-gradient-to-br from-slate-900 to-slate-800
                hover:shadow-[0_0_40px_rgba(39,204,174,0.15)]
                transition-all duration-300
                text-left cursor-pointer
              "
            >
              {/* STARS */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-[#27ccae] mb-4 text-base md:text-lg"
              >
                ★★★★★
              </motion.div>

              {/* TEXT */}
              <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* FOOTER */}
              <div className="border-t border-slate-700 pt-4">
                <p className="text-white font-semibold text-sm md:text-base">
                  {item.name}
                </p>
                <p className="text-slate-500 text-xs md:text-sm">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GLOW + GLASS CARD CTA */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-32 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] flex justify-center"
      >
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="max-w-3xl w-full text-center p-12 rounded-3xl 
            bg-gradient-to-br from-slate-900 to-slate-800 
            border border-slate-700
            shadow-[0_0_80px_rgba(39,204,174,0.2)] cursor-pointer"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something{" "}
            <span className="text-[#27ccae]">Extraordinary?</span>
          </h2>

          <p className="text-slate-400 mb-8">
            Let's transform your idea into a mobile app that users will love.
            Get a free consultation today.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 
                bg-[#27ccae] text-black font-semibold rounded-xl
                hover:shadow-[0_0_20px_rgba(39,204,174,0.5)]
                transition duration-300"
            >
              Get Started →
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default MobileDevelopment;