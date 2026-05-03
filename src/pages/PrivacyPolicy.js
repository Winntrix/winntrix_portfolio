import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Globe,
  Lock,
  Smartphone,
  FileText,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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



  const cardHover = {
    whileHover: { 
      y: -8,
      borderColor: "#25ccad",
      transition: { duration: 0.2 }
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
      className="bg-[#020617] text-white"
    >
      {/* ================= HERO ================= */}
      <motion.section 
        variants={stagger}
        initial="hidden"
        animate="show"
        className="py-24 px-6 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* BREADCRUMB */}
          <motion.p variants={fadeUp} className="text-sm text-slate-500 mb-4">
            Home • Privacy Policy
          </motion.p>

          {/* BADGE */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#25ccad]/30 text-[#25ccad] text-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            SECURITY FIRST
          </motion.div>

          {/* TITLE */}
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-6">
            Privacy <span className="text-[#25ccad]">Policy</span>
          </motion.h1>

          {/* META */}
          <motion.p variants={fadeUp} className="text-slate-400 text-sm mb-6">
            ● Last Updated: January 12, 2026 • Winntrix Pvt Ltd.
          </motion.p>

          {/* DESC */}
          <motion.p variants={fadeUp} className="text-slate-400 max-w-3xl leading-relaxed">
            At Winntrix Pvt Ltd., we take your privacy seriously.
            This document outlines how we collect, store, and process your
            personal information while you interact with our services.
          </motion.p>
        </div>
      </motion.section>

      {/* ================= CARDS ================= */}
      <motion.section 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 lg:px-16 pb-24"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Eye />,
              title: "Information We Collect",
              desc: "We collect information you provide directly to us when you request a consultation, sign up, or contact us. This includes name, email, phone number, and project details.",
            },
            {
              icon: <Globe />,
              title: "How We Use Your Data",
              desc: "Your data is used to provide, maintain, and improve our services, respond to inquiries, process transactions, and keep you updated.",
            },
            {
              icon: <Lock />,
              title: "Data Protection & Security",
              desc: "We implement industry-standard security measures including encryption and secure servers to protect your personal information.",
            },
            {
              icon: <Smartphone />,
              title: "Cookies & Tracking",
              desc: "We use cookies and tracking technologies to analyze trends, improve user experience, and monitor website usage.",
            },
            {
              icon: <FileText />,
              title: "Third-Party Disclosure",
              desc: "We do not sell your personal information. Data may be shared with trusted partners for business operations under strict confidentiality.",
            },
            {
              icon: <Shield />,
              title: "Your Privacy Rights",
              desc: "Depending on your region, you may have rights to access, update, or delete your personal data. Contact us to exercise these rights.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              {...cardHover}
              className="
                p-8 rounded-2xl
                border border-slate-800
                bg-gradient-to-br from-slate-900 to-slate-800
                hover:shadow-[0_0_40px_rgba(37,204,173,0.15)]
                transition-all duration-300 cursor-pointer
              "
            >
              <motion.div 
                {...iconHover}
                className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-[#142937] text-[#25ccad]"
              >
                {item.icon}
              </motion.div>

              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-xl font-bold mb-3"
              >
                {item.title}
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="text-slate-400 text-sm leading-relaxed"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="px-6 lg:px-16 pb-28"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="
              rounded-3xl p-10 md:p-14
              bg-gradient-to-r from-[#0f2f2a] to-[#020617]
              border border-[#25ccad]/20
              flex flex-col md:flex-row items-center justify-between gap-8
            "
          >
            {/* LEFT */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Questions about Privacy?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-slate-400 max-w-md"
              >
                Our Data Protection Officer is available to answer any
                questions or concerns you may have.
              </motion.p>
            </div>

            {/* BUTTON */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-xl bg-[#25ccad] text-black font-semibold hover:shadow-[0_0_20px_rgba(37,204,173,0.5)] transition inline-block"
              >
                Connect with us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default PrivacyPolicy;