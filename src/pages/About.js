import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Brain,
  Layers,
  Users,
  PhoneCall,
  Award,
  Clock,
  Calendar,
  Building2,
  Headphones,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const About = () => {
  const [active, setActive] = useState(0);

  const tabs = [
    {
      title: "Global IT Outsourcing & Scale",
      subtitle: "STRATEGIC OFFSHORE ADVANTAGE",
      icon: <Globe />,
      content:
        "Access elite engineering talent from India to power your global operations. We specialize in time-zone aligned delivery for enterprises in USA, Thailand, and Europe.",
      points: [
        "Dedicated offshore development centers in India",
        "Strategic presence in Dubai & United States",
        "Time-zone aligned collaboration (GMT, EST, PST, JST)",
        "Full IP protection and enterprise-grade NDAs",
        "Cost-effective scaling without hiring overhead",
      ],
      highlightTitle: "MARKETS SERVED",
      highlight: "Global",
      subTitle: "TEAM SIZE",
      subHighlight: "Expert Only",
    },

    {
      title: "AI & LLM Integration",
      subtitle: "BUILDING THE INTELLIGENT ENTERPRISE",
      icon: <Brain />,
      content:
        "Go beyond simple chatbots. We build autonomous AI agents, custom LLM implementations, and predictive engines that integrate directly into your business workflows.",
      points: [
        "Custom LLM training and RAG implementations",
        "Autonomous AI agents for workflow automation",
        "Generative AI for content and asset creation",
        "Predictive analytics for business intelligence",
        "Custom GPT models for enterprise use",
      ],
      highlightTitle: "AI MODELS",
      highlight: "Custom",
      subTitle: "INTEGRATION",
      subHighlight: "Seamless",
    },

    {
      title: "Full-Stack Product Engineering",
      subtitle: "MERN STACK & BEYOND",
      icon: <Layers />,
      content: "We don't just write code; we engineer scalable products. From high-traffic SaaS platforms to mission-critical internal systems using the modern web stack.",
      points: [
        "High-performance MERN stack",
        "Next.js SSR optimization",
        "Headless CMS & microservices",
        "Cloud-native deployment",
        "Robust API integrations",
      ],
      highlightTitle: "PERFORMANCE",
      highlight: "99+ Score",
      subTitle: "ARCHITECTURE",
      subHighlight: "Scalable",
    },

    {
      title: "Dedicated Hiring Models",
      subtitle: "YOUR TEAM, EXTENDED",
      icon: <Users />,
      content: "Scale your engineering capacity overnight with our hire-dedicated-developers model. Proven experts who integrate as an extension of your in-house team.",
      points: [
        "Hire React & Next.js developers",
        "AI/ML engineers on demand",
        "Full-stack teams",
        "Managed delivery",
        "Flexible engagement",
      ],
      highlightTitle: "ONBOARDING",
      highlight: "Fast",
      subTitle: "EXPERTISE",
      subHighlight: "Senior",
    },
  ];

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


  const iconHover = {
    whileHover: { rotate: 10, scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="bg-gradient-to-br from-[#0a0f1c] via-[#0a1a1a] to-[#061413] text-white overflow-x-hidden"
    >
      {/* HERO SECTION - Modern Gradient */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-[#25ccad]/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#25ccad]/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#25ccad]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#25ccad]" />
                <span className="text-[#25ccad] text-sm font-medium">Innovation Meets Excellence</span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-[#25ccad] to-emerald-400 bg-clip-text text-transparent mt-4">
                Amazing Together
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-400 max-w-3xl mx-auto text-lg">
              We transform your vision into reality with web, mobile, SaaS, and AI solutions. 
              Your trusted partner for digital innovation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#25ccad] to-emerald-500 text-black font-semibold rounded-xl shadow-lg shadow-[#25ccad]/30"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* CONTACT CARDS - Glassmorphism Style */}
      <motion.section 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 -mt-20 relative z-20"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#25ccad]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25ccad]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div 
              variants={iconHover}
              whileHover="whileHover"
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#25ccad] to-emerald-500 flex items-center justify-center mb-6"
            >
              <MapPin className="w-6 h-6 text-black" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Head Quarter</h3>
            <p className="text-gray-400 text-sm">India</p>
            <p className="text-gray-400 text-sm mt-4">
              1050A/10, Govindpuri, <br />
              Kalkaji. New Delhi, 11019
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#25ccad]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25ccad]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div 
              variants={iconHover}
              whileHover="whileHover"
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#25ccad] to-emerald-500 flex items-center justify-center mb-6"
            >
              <Mail className="w-6 h-6 text-black" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Email Address</h3>
            <p className="text-gray-400 text-sm">Sale Inquiries</p>
            <motion.p whileHover={{ x: 5 }} className="text-[#25ccad] text-sm mt-2">
              info@winntrix.com
            </motion.p>
            <p className="text-gray-400 text-sm mt-4">Support & Chat</p>
            <div className="flex flex-col gap-2 mt-2">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-[#25ccad]" />
                <p className="text-sm text-[#25ccad]">+91 7007458210</p>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <BsWhatsapp className="w-4 h-4 text-[#25ccad]" />
                <p className="text-sm text-[#25ccad]">+91 7007458210</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#25ccad]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25ccad]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div 
              variants={iconHover}
              whileHover="whileHover"
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#25ccad] to-emerald-500 flex items-center justify-center mb-6"
            >
              <Phone className="w-6 h-6 text-black" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Business Talk</h3>
            <p className="text-gray-400 text-sm">Direct Lines</p>
            <motion.p whileHover={{ scale: 1.05 }} className="text-[#25ccad] text-sm mt-4">
              +91 7007458210
            </motion.p>
            <motion.p whileHover={{ scale: 1.05 }} className="text-[#25ccad] text-sm mt-1">
              +91 9628963864
            </motion.p>
            <p className="text-gray-400 text-xs mt-4">
              Available Mon-Fri, 9:00 AM - 5:00 PM IST <br />
              (2nd & 4th Sat Off)
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* COMPANY INFO - Modern Timeline Style */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-6 mt-24"
      >
        <div className="relative">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#25ccad]/5 to-transparent rounded-3xl" />
          
          <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-6">
                  <Award className="w-4 h-4 text-[#25ccad]" />
                  <span className="text-[#25ccad] text-xs font-semibold">ABOUT WINNTRIX</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Your Trusted Partner for Digital Excellence</h2>
                <p className="text-gray-300 leading-relaxed">
                  We specialize in crafting cutting-edge web and mobile applications, SaaS platforms,
                  and AI/ML solutions. Based in India, we deliver innovation-driven services tailored
                  to meet your business needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Clock />, label: "Business Hours", value: "Mon–Fri | 9 AM - 5 PM" },
                  { icon: <Calendar />, label: "Founded", value: "August 2025" },
                  { icon: <Users />, label: "Team Size", value: "10–50 Professionals" },
                  { icon: <Building2 />, label: "Legal Name", value: "Winntrix Technologies Pvt. Ltd." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 5 }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25ccad]/10 flex items-center justify-center text-[#25ccad]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ENGINEERING SECTION - Minimalist Modern */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 mt-28 mb-28"
      >
        <motion.div variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-6">
              <Zap className="w-4 h-4 text-[#25ccad]" />
              <span className="text-[#25ccad] text-xs tracking-[0.2em] uppercase font-semibold">
                Deep Technical Expertise
              </span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold">
            Engineering the <span className="text-transparent bg-gradient-to-r from-[#25ccad] to-emerald-400 bg-clip-text">Future</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We build scalable, future-ready solutions that drive business growth
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT MENU */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-3"
          >
            {tabs.map((tab, i) => (
              <motion.button
                key={i}
                variants={fadeUp}
                onClick={() => setActive(i)}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-5 rounded-xl text-left transition-all duration-300 group ${
                  active === i
                    ? "bg-gradient-to-r from-[#25ccad]/20 to-transparent border-l-4 border-[#25ccad]"
                    : "hover:bg-white/5 border-l-4 border-transparent"
                }`}
              >
                <div className="flex gap-4 items-center">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    active === i 
                      ? "bg-gradient-to-r from-[#25ccad] to-emerald-500 text-black shadow-lg shadow-[#25ccad]/30" 
                      : "bg-white/10 text-gray-400 group-hover:text-[#25ccad]"
                  }`}>
                    {tab.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${active === i ? "text-white" : "text-gray-300"}`}>
                      {tab.title}
                    </h3>
                    <p className="text-xs text-[#25ccad]">{tab.subtitle}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all ${
                    active === i ? "text-[#25ccad] opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`} />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#25ccad]/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#25ccad]/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#25ccad]" />
                    </div>
                    <span className="text-[#25ccad] text-xs font-semibold tracking-wider">
                      EXPERTISE DEEP-DIVE
                    </span>
                  </motion.div>

                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold mb-4"
                  >
                    {tabs[active].title}
                  </motion.h3>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 mb-8 leading-relaxed"
                  >
                    {tabs[active].content}
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xs tracking-wider text-gray-500 mb-4 font-semibold"
                      >
                        CORE DELIVERABLES
                      </motion.p>
                      <ul className="space-y-3">
                        {tabs[active].points.map((point, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 cursor-pointer group/item"
                          >
                            <motion.div 
                              whileHover={{ scale: 1.2 }}
                              className="w-5 h-5 rounded-full bg-[#25ccad]/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#25ccad]" />
                            </motion.div>
                            <span className="text-gray-300 text-sm group-hover/item:text-white transition">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-[#25ccad]/10 to-emerald-500/10 rounded-xl p-6 border border-[#25ccad]/20"
                      >
                        <p className="text-xs tracking-wider text-gray-500 mb-2">
                          {tabs[active].highlightTitle}
                        </p>
                        <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#25ccad] to-emerald-400 bg-clip-text">
                          {tabs[active].highlight}
                        </p>
                        <div className="h-px bg-gradient-to-r from-[#25ccad]/50 to-transparent my-4" />
                        <p className="text-xs tracking-wider text-gray-500 mb-2">
                          {tabs[active].subTitle}
                        </p>
                        <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#25ccad] to-emerald-400 bg-clip-text">
                          {tabs[active].subHighlight}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* STATS SECTION - New Addition */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6 mb-28"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Projects Delivered", icon: <Award /> },
            { value: "4+", label: "Years Experience", icon: <Calendar /> },
            { value: "98%", label: "Client Satisfaction", icon: <Users /> },
            { value: "24/7", label: "Support Available", icon: <Headphones /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#25ccad]/10 flex items-center justify-center mx-auto mb-4 text-[#25ccad]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#25ccad] to-emerald-400 bg-clip-text">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;