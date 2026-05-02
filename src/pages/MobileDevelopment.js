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

const MobileDevelopment = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617] text-white">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#27ccae]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              {/* TAG */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full text-sm">
                
                <span className="text-[#27ccae] font-medium">
                  Leading Mobile App Development Company in India
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building High-Performance,
                <span className="block mt-2 bg-gradient-to-r from-[#27ccae] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Scalable Mobile Apps
                </span>
              </h1>

              {/* DESC */}
              <p className="text-lg md:text-xl text-slate-300">
                We craft exceptional mobile experiences that captivate users and
                drive business growth. From concept to App Store, we're your
                trusted partner.
              </p>

              {/* BUTTON */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl 
          bg-gradient-to-r from-[#27ccae] to-emerald-400 
          font-bold hover:scale-105 transition"
              >
                Get Started →
              </Link>

              {/* STATS */}
              <div className="flex gap-16 pt-6 border-t border-slate-800">
                <div>
                  <Rocket />
                  <div className="text-2xl font-bold text-[#27ccae] mt-2">
                    30+
                  </div>
                  <div className="text-sm text-slate-400">Apps Delivered</div>
                </div>
                <div>
                  <Stars />
                  <div className="text-2xl font-bold text-[#27ccae] mt-2">
                    98%
                  </div>
                  <div className="text-sm text-slate-400">Satisfaction</div>
                </div>
                <div>
                  <User />
                  <div className="text-2xl font-bold text-[#27ccae] mt-2">
                    10L+
                  </div>
                  <div className="text-sm text-slate-400">Users</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (FLOATING CARDS) */}
            <div className="relative flex justify-center items-center group">
              {/* BACK CARD */}
              <div
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
              </div>
              {/* MAIN CARD */}
              <div className="relative z-10 w-56 h-[450px] rounded-[2rem] p-3 border-2 border-[#27ccae]/30 bg-slate-900 shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br  from-[#27ccae] to-emerald-400 rounded-[1.5rem] flex flex-col items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold">30+</div>
                    <div className="text-sm">Apps Built</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full px-4">
                    <div className="aspect-square bg-white/20 rounded-xl" />
                    <div className="aspect-square bg-white/20 rounded-xl" />
                    <div className="aspect-square bg-white/20 rounded-xl" />
                    <div className="aspect-square bg-white/20 rounded-xl" />
                  </div>
                </div>
              </div>
              {/* FRONT CARD */}
              <div
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
              </div>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-4">
            Our <span className="text-[#27ccae]">Services</span>
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg">
            Comprehensive mobile development solutions tailored to your needs
          </p>

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
              <div
                key={i}
                className="group p-8 rounded-2xl border border-slate-800 
             bg-gradient-to-br from-slate-900 to-slate-800
             hover:border-[#27ccae] hover:shadow-[0_0_40px_rgba(39,204,174,0.2)]
             transition-all duration-300 ease-out"
              >
                {/* ICON */}
                <div className="text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition duration-300 p-4 bg-[#27ccae] text-white rounded-xl w-max">
                  {item.icon}
                </div>

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

                {/* ✅ FEATURES (NOW INSIDE) */}
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-300 text-[12px]"
                    >
                      <span
                        className="w-4 h-4 flex items-center justify-center rounded-full 
            bg-[#27ccae]/10 border border-[#27ccae] text-[#27ccae] text-xs"
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-[#27ccae] text-sm font-medium cursor-pointer mt-6 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}

      <section className="py-24 bg-[#020617] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Powered By{" "}
          <span className="text-[#27ccae]">Cutting-Edge Technology</span>
        </h2>
        <p className="text-slate-400 mb-12">
          We leverage the best tools to build exceptional apps
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Flutter",
            "React Native",
            "Swift",
            "Kotlin",
            "Firebase",
            "AWS",
          ].map((tech, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-xl border border-slate-700 
          text-slate-300 hover:text-[#27ccae] 
          hover:border-[#27ccae] transition duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Our process */}
      <section className="py-28 bg-[#020617] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Our <span className="text-[#27ccae]">Process</span>
        </h2>
        <p className="text-slate-400 mb-16">
          A proven methodology that delivers exceptional results
        </p>

        <div className="grid md:grid-cols-4 gap-10 relative">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "Deep dive into your vision and goals",
            },
            {
              step: "02",
              title: "Design",
              desc: "Craft stunning, user-centric interfaces",
            },
            {
              step: "03",
              title: "Develop",
              desc: "Build with precision and excellence",
            },
            {
              step: "04",
              title: "Deploy",
              desc: "Launch and scale with confidence",
            },
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              {/* STEP BOX */}
              <div
                className="w-20 h-20 mx-auto flex items-center justify-center 
          rounded-2xl text-white font-bold text-xl
          bg-gradient-to-br from-[#27ccae] to-[#1a9b8e]
          shadow-[0_0_25px_rgba(39,204,174,0.5)]"
              >
                {item.step}
              </div>

              {/* LINE (except last) */}
              {i !== 3 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-[#27ccae] to-transparent"></div>
              )}

              <h3 className="mt-6 text-white font-semibold">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success */}
      <section className="py-28 bg-[#020617] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Client <span className="text-[#27ccae]">Success Stories</span>
        </h2>
        <p className="text-slate-400 mb-16">Don’t just take our word for it</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "CEO, TechStart",
              text: "They transformed our vision into a stunning app that our users absolutely love. The attention to detail is remarkable.",
            },
            {
              name: "Michael Roberts",
              role: "CTO, FinanceFlow",
              text: "Best mobile development team we’ve worked with. Professional, responsive, and delivered ahead of schedule.",
            },
            {
              name: "Emily Davis",
              role: "Product Lead, HealthSync",
              text: "The Flutter app they built performs flawlessly across all devices. Couldn’t be happier with the results.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-slate-800 
        bg-gradient-to-br from-slate-900 to-slate-800
        hover:border-[#27ccae] hover:shadow-[0_0_40px_rgba(39,204,174,0.15)]
        transition duration-300 text-left"
            >
              {/* STARS */}
              <div className="text-[#27ccae] mb-4 text-lg">★★★★★</div>

              {/* TEXT */}
              <p className="text-slate-400 text-sm leading-[1.8] mb-6">
                "{item.text}"
              </p>

              <div className="border-t border-slate-700 pt-4">
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-slate-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Glow + Glass Card */}
      <section className="py-32 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] flex justify-center">
        <div
          className="max-w-3xl w-full text-center p-12 rounded-3xl 
    bg-gradient-to-br from-slate-900 to-slate-800 
    border border-slate-700
    shadow-[0_0_80px_rgba(39,204,174,0.2)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something{" "}
            <span className="text-[#27ccae]">Extraordinary?</span>
          </h2>

          <p className="text-slate-400 mb-8">
            Let’s transform your idea into a mobile app that users will love.
            Get a free consultation today.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 
      bg-[#27ccae] text-black font-semibold rounded-xl
      hover:scale-105 hover:shadow-[0_0_20px_rgba(39,204,174,0.5)]
      transition duration-300"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
};

export default MobileDevelopment;
