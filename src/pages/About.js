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

  return (
    <div className="bg-[#061413] text-white">
      {/* 🔥 HERO */}
      <section className="py-28 text-center bg-gradient-to-br from-[#0a2e2a] to-[#061413]">
        <div className="container-custom">
          <div className="inline-block px-6 py-4 rounded-xl bg-white border border-white/20 mb-6">
            <h3 className="text-[#25ccad] font-bold text-2xl">Winntrix</h3>
            <p className="text-xs tracking-widest text-[#25ccad]">
              BUILD WITH US. GROW WITHOUT LIMITS.
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We transform your vision into reality with web, mobile, SaaS, and AI
            solutions.
          </p>
        </div>
      </section>

      {/* 🔥 CONTACT CARDS */}
      <section className="container-custom grid md:grid-cols-3 gap-6 -mt-16">
        {/* CARD */}
        <div className="bg-white text-black p-8 pb-12 pt-12 rounded-2xl shadow-xl">
          <div className="bg-gradient-to-t from-[#25ccad] to-[#1aa38f] p-4 rounded-2xl inline-block">
            <MapPin className="text-black " />
          </div>
          <h3 className="font-bold text-lg mt-4">Head Quarter</h3>
          <p className="text-xs mt-4 text-gray-600 font-bold">
            India <br />
          </p>
          <p className="text-xs mt-4 text-gray-600">
            1050A/10, Govindpuri, <br />
            Kalkaji. New Delhi, 11019
          </p>
        </div>

        <div className="bg-white text-black p-8 pb-12 pt-12 rounded-2xl shadow-xl">
          <div className="bg-gradient-to-t from-[#25ccad] to-[#1aa38f] p-4 rounded-2xl inline-block">
            <Mail className="text-black " />
          </div>
          <h3 className="font-bold text-lg mt-4">Email Address</h3>
          <p className="text-xs mt-4 text-gray-600 font-bold">
            Sale Inquiries <br />
          </p>
          <p className="text-[12px] mt-2 text-[#25ccad]">info@winntrix.com</p>
          <p className="text-xs mt-4 text-gray-600 font-bold">
            Support & Chat <br />
          </p>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-4 h-4 text-[#25ccad] hover:scale-110 transition" />
              <p className="text-[12px] text-[#25ccad]">+91 7007458210</p>
            </div>

            <div className="flex items-center gap-3">
              <BsWhatsapp className="w-4 h-4 text-[#25ccad] hover:scale-110 transition" />
              <p className="text-[12px] text-[#25ccad]">+91 7007458210</p>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-8 pb-12 pt-12 rounded-2xl shadow-xl">
          <div className="bg-gradient-to-t from-[#25ccad] to-[#1aa38f] p-4 rounded-2xl inline-block">
            <Phone className="text-black " />
          </div>
          <h3 className="font-bold text-lg mt-4">Business Talk</h3>
          <p className="text-xs mt-4 text-gray-600 font-bold">
            Direct Lines
            <br />
          </p>
          <p className="text-[12px] text-[#25ccad] mt-4">+91 7007458210</p>
          <p className="text-[12px] text-[#25ccad] mt-2">+91 9628963864</p>
          <p className="text-xs mt-4 text-gray-600">
            Available Mon-Fri, 9:00 AM - 5:00 PM IST <br />
            (2nd & 4th Sat Off)
          </p>
        </div>
      </section>

      {/* 🔥 COMPANY INFO */}
      <section className="container-custom mt-16">
        <div className="bg-white border border-white/10 p-10 rounded-3xl backdrop-blur-lg">
          <div className="bg-[#E8F3F1] p-4 rounded-3xl">
            <p className="text-black mb-8">
              <strong>About Winntrix Technologies:</strong> Your Trusted Partner
              for Web, Mobile, SaaS, and AI/ML Solutions. We specialize in
              crafting cutting-edge web and mobile applications, SaaS platforms,
              and AI/ML solutions. Based in India, we deliver innovation-driven
              services tailored to meet your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-sm mt-8">
            <div>
              <p className="text-[#25ccad] font-bold">Business Hours</p>
              <p className="text-black">Mon–Fri | 9 AM - 5 PM</p>
            </div>

            <div>
              <p className="text-[#25ccad] font-bold">Founded</p>
              <p className="text-black">August 2025</p>
            </div>

            <div>
              <p className="text-[#25ccad] font-bold">Team Size</p>
              <p className="text-black">10–50 Professionals</p>
            </div>

            <div>
              <p className="text-[#25ccad] font-bold">Legal Name</p>
              <p className="text-black">Winntrix Technologies Pvt. Ltd.</p>
            </div>

            <div className="bg-">
              <p className="text-[#25ccad] font-bold">Customer Service</p>
              <p className="text-black">+91 7007458210</p>
            </div>
          </div>
        </div>
      </section>

      {/*  ENGINEERING SECTION */}
      <section className="container-custom mt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-8 font-bold">
            <span className="text-[#25ccad] text-xs tracking-[0.2em] uppercase">
              Deep Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Engineering the <span className="text-[#25ccad]">Future</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* LEFT MENU */}
          <div className="lg:col-span-4 space-y-4">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full p-5 rounded-2xl text-left transition ${
                  active === i
                    ? "bg-white text-black border border-[#25ccad]"
                    : "bg-white/5 border border-white/10 hover:border-[#25ccad]"
                }`}
              >
                <div className="flex gap-3 items-center">
                  <div className="p-3 rounded-xl bg-[#25ccad] text-white shadow-lg transition-all duration-500 shadow-[#25ccad]/50">
                    <div className="text-white">{tab.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold">{tab.title}</h3>
                    <p className="text-xs text-[#25ccad]">{tab.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white text-black p-10 rounded-3xl shadow-xl"
              >
                {/* TOP BADGE */}
                <div className="flex items-center gap-2 text-[#25ccad] text-xs font-semibold tracking-widest mb-4">
                  <span>⬡</span>
                  EXPERTISE DEEP-DIVE
                </div>

                {/* TITLE */}
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  {tabs[active].title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  {tabs[active].content}
                </p>

                {/* DIVIDER */}
                <div className="border-t border-gray-200 mb-8"></div>

                {/* GRID SECTION */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* LEFT LIST */}
                  <div>
                    <p className="text-xs tracking-widest text-gray-400 mb-4">
                      CORE DELIVERABLES
                    </p>

                    <ul className="space-y-3 text-gray-700 text-sm">
                      {tabs[active].points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#25ccad] rounded-full mt-2"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT HIGHLIGHT BOX */}
                  <div className="bg-gray-100 rounded-3xl p-8">
                    <p className="text-xs tracking-widest text-gray-400">
                      {tabs[active].highlightTitle}
                    </p>

                    <h4 className="text-4xl font-extrabold text-[#25ccad] mt-2">
                      {tabs[active].highlight}
                    </h4>

                    <p className="text-xs tracking-widest text-gray-400 mt-6">
                      {tabs[active].subTitle}
                    </p>

                    <h4 className="text-3xl font-extrabold text-[#25ccad] mt-2">
                      {tabs[active].subHighlight}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
