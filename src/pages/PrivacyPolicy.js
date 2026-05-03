import React from "react";
import {
  Eye,
  Globe,
  Lock,
  Smartphone,
  FileText,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#020617] text-white">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* BREADCRUMB */}
          <p className="text-sm text-slate-500 mb-4">
            Home • Privacy Policy
          </p>

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#25ccad]/30 text-[#25ccad] text-sm mb-6">
             SECURITY FIRST
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy <span className="text-[#25ccad]">Policy</span>
          </h1>

          {/* META */}
          <p className="text-slate-400 text-sm mb-6">
            ● Last Updated: January 12, 2026 • Winntrix Pvt Ltd.
          </p>

          {/* DESC */}
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            At Winntrix Pvt Ltd., we take your privacy seriously.
            This document outlines how we collect, store, and process your
            personal information while you interact with our services.
          </p>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="px-6 lg:px-16 pb-24">
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
            <div
              key={i}
              className="
                p-8 rounded-2xl
                border border-slate-800
                bg-gradient-to-br from-slate-900 to-slate-800
                hover:border-[#25ccad]
                hover:shadow-[0_0_40px_rgba(37,204,173,0.15)]
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-[#142937] text-[#25ccad]">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 lg:px-16 pb-28">
        <div className="max-w-5xl mx-auto">

          <div
            className="
              rounded-3xl p-10 md:p-14
              bg-gradient-to-r from-[#0f2f2a] to-[#020617]
              border border-[#25ccad]/20
              flex flex-col md:flex-row items-center justify-between gap-8
            "
          >
            {/* LEFT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions about Privacy?
              </h2>
              <p className="text-slate-400 max-w-md">
                Our Data Protection Officer is available to answer any
                questions or concerns you may have.
              </p>
            </div>

            {/* BUTTON */}
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-[#25ccad] text-black font-semibold hover:scale-105 transition">
              Connect with us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;