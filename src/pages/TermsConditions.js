import React from "react";
import {
  FileText,
  Scale,
  Clock,
  AlertCircle,
  Globe,
  Laptop,
} from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="bg-[#020617] text-white">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <p className="text-sm text-slate-500 mb-4">
            Home • Terms & Conditions
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#25ccad]/30 text-[#25ccad] text-sm mb-6">
            LEGAL AGREEMENT
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms & <span className="text-[#25ccad]">Conditions</span>
          </h1>

          {/* Meta */}
          <p className="text-slate-400 text-sm mb-6">
            ● Effective Date: January 12, 2026 • Standard Service Agreement
          </p>

          {/* Description */}
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            By engaging with Winntrix Pvt Ltd. for IT services,
            you agree to the following terms and conditions. Please read
            them carefully to understand our commitment to your project.
          </p>
        </div>
      </section>

      {/* ================= TERMS CARDS ================= */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">

          {[
            {
              icon: <Laptop />,
              title: "1. Services Provided",
              desc: "Winntrix Pvt Ltd. provides IT services including web development, mobile apps, SaaS platforms, and AI/ML integration. Each project scope is defined in a Statement of Work (SOW).",
            },
            {
              icon: <Scale />,
              title: "2. Intellectual Property",
              desc: "Upon full payment, ownership of deliverables transfers to the client. However, we retain rights to reusable frameworks, tools, and methodologies.",
            },
            {
              icon: <Clock />,
              title: "3. Project Timelines",
              desc: "Timelines are estimates. Delays caused by client feedback, third-party dependencies, or technical issues may impact delivery dates.",
            },
            {
              icon: <AlertCircle />,
              title: "4. Payment Terms",
              desc: "Projects are milestone-based. Initial deposit is required before starting. Delayed payments may result in service suspension.",
            },
            {
              icon: <FileText />,
              title: "5. Confidentiality",
              desc: "Both parties agree to keep all project-related information confidential unless required by law or agreed otherwise.",
            },
            {
              icon: <Globe />,
              title: "6. Governing Law",
              desc: "These terms are governed by the laws of India. All disputes fall under the jurisdiction of Indore, Madhya Pradesh.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-8 rounded-3xl
                border border-slate-800
                bg-gradient-to-br from-slate-900 to-slate-800
                hover:border-[#25ccad]
                hover:shadow-[0_0_40px_rgba(37,204,173,0.15)]
                transition-all duration-300
                flex gap-6 items-start
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#142937] text-[#25ccad] shrink-0">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
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
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom SOW?
              </h2>
              <p className="text-slate-400 max-w-md">
                We provide detailed Statement of Work documents tailored
                to your enterprise requirements.
              </p>
            </div>

            {/* Button */}
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-[#25ccad] text-black font-semibold hover:scale-105 transition">
              Contact Sales →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <div className="text-center text-slate-500 text-sm pb-10">
        © 2026 Winntrix Pvt Ltd. Professional IT Services Agreement.
        <br />
        Delhi, India | Global Software Engineering Standards
      </div>
    </div>
  );
};

export default TermsConditions;