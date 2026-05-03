import React from "react";
import { Layers, Layout, Code2, Zap, Shield, Globe, Database, Lock, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const SaaSsolution = () => {
  return (
    <div className="bg-gradient-to-br from-[#020617] via-[#031933] to-[#020617] text-white">

      {/* ================= HERO ================= */}
      <section className="pt-60 pb-32 text-center px-6 relative overflow-hidden ">
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="inline-block px-4 py-2 mb-10 rounded-full border border-[#25ccad]/30 text-[#25ccad] text-sm">
            Enterprise SaaS & CMS Experts
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Architecting Scalable
            <br />
            <span className="text-[#25ccad]">
              Enterprise SaaS & CMS
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-xl">
            Take control of your content with enterprise-grade CMS solutions.
            Fast, secure, and built to grow with your business.
          </p>

          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 mt-4
      bg-gradient-to-r from-[#25ccad] to-[#1a9b8e]
       text-white font-semibold rounded-xl
      hover:scale-105 hover:shadow-[0_0_20px_rgba(39,204,174,0.5)]
      transition duration-300">
            Get Started →
          </Link>
        </div>
      </section>

      {/* ================= CMS SOLUTIONS ================= */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-16 xl:px-24 w-full">
        <div className="w-full max-w-[1400px] mx-autom text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our CMS <span className="text-[#25ccad]">Solutions</span>
          </h2>
          <p className="text-gray-400 mt-4">
           From custom builds to enterprise platforms, we deliver CMS solutions br
            that empower your team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layers />,
              title: "Custom CMS Development",
              desc: "Tailored content management systems built specifically for your business needs and workflow.",
              features: [
                "Custom Architecture",
                "Scalable Infrastructure",
                "API Integration",
                "Admin Dashboard",
              ],
            },
            {
              icon: <Layout />,
              title: "Headless CMS",
              desc: "Modern, API-first content management with maximum flexibility and performance.",
              features: ["Contentful", "Strapi", "Sanity", "Prismic"],
            },
            {
              icon: <Code2 />,
              title: "WordPress Solutions",
              desc: "Enterprise-grade WordPress development with custom themes and advanced functionality.",
              features: [
                "Custom Themes",
                "Plugin Development",
                "WooCommerce",
                "Multisite",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 hover:border-[#25ccad] transition"
            >
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-[#25ccad] text-black text-xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-5 text-sm">{item.desc}</p>

              <ul className="space-y-3">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1a9b8e] text-white text-xs">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-16 xl:px-24">
  <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      Why Choose Our <span className="text-[#25ccad]">CMS Solutions</span>
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { icon: <Zap />, title: "Lightning Fast", desc: "Optimized performance" },
      { icon: <Shield />, title: "Enterprise Security", desc: "Bank-level security" },
      { icon: <Globe />, title: "Multi-Language", desc: "Global ready" },
      { icon: <Database />, title: "Scalable Database", desc: "Handles millions of records" },
      { icon: <Lock />, title: "Role-Based Access", desc: "Granular permissions" },
      { icon: <Activity />, title: "Real-Time Analytics", desc: "Live tracking insights" },
    ].map((item, i) => (
      <div
        key={i}
        className="p-5 sm:p-6 rounded-2xl border border-slate-800 
        bg-gradient-to-br from-slate-900 to-slate-800 
        hover:border-[#25ccad] transition duration-300"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 flex items-center justify-center rounded-lg bg-[#142937] text-[#25ccad]">
          {item.icon}
        </div>

        <h3 className="font-semibold text-base sm:text-lg">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* ================= PLATFORMS ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Platforms We Master</h2>
        <p className="text-gray-400 mb-10 text-sm">
          Expert implementation across major CMS platforms
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["WordPress", "Contentful", "Strapi", "Sanity", "Drupal", "Custom CMS"].map(
            (p, i) => (
              <div
                key={i}
                className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900 hover:border-[#25ccad] transition"
              >
                {p}
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#27ccae]/20 to-emerald-500/20 text-center">
        <div className="max-w-3xl mx-auto text-center p-16 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform
            <br />
            <span className="text-[#25ccad]">
              Your Content Management?
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
           Let's build a CMS solution that scales with your ambitions. Get <br />
           started with a free consultation.
          </p>

          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 mt-4
      bg-gradient-to-r from-[#25ccad] to-[#1a9b8e]
       text-white font-semibold rounded-xl
      hover:scale-105 hover:shadow-[0_0_20px_rgba(39,204,174,0.5)]
      transition duration-300">
            Get Started Now →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SaaSsolution;