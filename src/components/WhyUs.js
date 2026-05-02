import React from "react";
import {
  DollarSign,
  Zap,
  Target,
  Lock,
  TrendingUp,
  Clock,
  Rocket,
  BugIcon,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Clear, upfront costs with no hidden fees.",
  },
  {
    icon: Zap,
    title: "Proven Expertise",
    desc: "Years of experience delivering cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Top-Notch IT Solutions",
    desc: "Enterprise-grade solutions that scale with your business.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    desc: "Bank-level security protocols for your data.",
  },
  {
    icon: TrendingUp,
    title: "ROI Focused",
    desc: "Maximize return on investment.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock support whenever you need.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden py-24">
      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(37,204,173,0.2),transparent_40%)]" />

      {/* 🔥 PARTICLES */}
     <div className="absolute inset-0 overflow-hidden">
  {[...Array(60)].map((_, i) => {
    const size = Math.random() * 6 + 3;

    return (
      <span
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: size,
          height: size,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 5}s`, // 🔥 faster
        }}
      />
    );
  })}
</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-10">
            {/* PILL */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#25ccad] text-[#25ccad] text-sm tracking-[0.25em] font-semibold">
              {/* DOT */}
              <span className="w-2.5 h-2.5 rounded-full bg-[#25ccad] shadow-[0_0_10px_#25ccad]"></span>
              WHY US
            </div>

            {/* LINE */}
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#25ccad] to-transparent"></div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mt-6 leading-tight">
            Why{" "}
            <span className="text-[#25ccad]">
              WinNtrix <span className="text-white">?</span>
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl">
            We wholeheartedly support you in transforming your vision into a
            tangible reality, ensuring that your digital transformation serves
            as a robust foundation for your sustained growth and success in the
            ever-evolving marketplace.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "20+", label: "Happy Clients" },
            { num: "10+", label: "Expert Talent" },
            { num: "99%", label: "Success Rate" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center text-center p-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:border-[#25ccad] hover:shadow-[0_0_40px_rgba(37,204,173,0.3)]"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#25ccad]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h3 className="text-4xl font-bold text-[#25ccad] relative z-10">
                {item.num}
              </h3>

              <p className="text-gray-400 mt-2 text-sm relative z-10">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="relative rounded-[32px] border border-[#25ccad]/20 p-10 bg-gradient-to-br from-[#071a17] to-black overflow-hidden">
            {/* TEAM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-16">
              {[
                { t: "T", name: "Team Lead", role: "Strategy" },
                { t: "D", name: "Developer", role: "Engineering" },
                { t: "D", name: "Designer", role: "Creative" },
                { t: "M", name: "Manager", role: "Operations" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="group relative p-4 rounded-2xl border border-[#25ccad]/20 bg-gradient-to-br from-[#0b2521] to-black transition-all duration-500 hover:scale-[1.04] hover:border-[#25ccad]"
                >
                  {/* ✅ FLOATING BADGE ONLY ON FIRST CARD */}
                  {i === 0 && (
                    <div className="absolute -top-20 left-1 bg-[#25ccad] text-black px-8 py-5 rounded-full text-center shadow-[0_0_50px_#25ccad]">
                      <div className="text-xs font-bold tracking-widest">
                        OUR GOAL
                      </div>
                      <div className="text-xs">IS YOUR</div>
                      <div className="text-md font-extrabold">SUCCESS</div>
                    </div>
                  )}

                  {/* Glow ONLY on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#25ccad]/15 to-transparent"></div>

                  {/* ICON */}
                  <div className="relative flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-full bg-[#25ccad] flex items-center justify-center text-black text-2xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_#25ccad]">
                      {m.t}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="text-center relative z-10">
                    <p className="text-md font-semibold text-white">{m.name}</p>
                    <p className="text-gray-400 text-xs">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-8">
              <button className="group flex items-center gap-2 px-2 py-1 rounded-full border border-[#25ccad]/30 text-[#25ccad] hover:bg-[#25ccad] hover:text-black transition-all duration-300 text-xs">
                Team Excellence
              </button>
            </div>
            {/* EXTRA CARDS BELOW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {/* CARD 1 */}
              <div className="group relative p-6 rounded-2xl border border-[#25ccad]/20 bg-gradient-to-br from-[#0b2521] to-black transition-all duration-500 hover:scale-[1.04] hover:border-[#25ccad]">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#25ccad]/10 to-transparent"></div>

                {/* Optional circle effect */}
                <div className="absolute right-[-40px] top-[-40px] w-40 h-40 rounded-full border border-[#25ccad]/10 opacity-30"></div>

                {/* ICON */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#25ccad]/10 flex items-center justify-center text-[#25ccad] transition-all duration-500 group-hover:bg-[#25ccad] group-hover:text-black group-hover:scale-110">
                    <BugIcon className="w-6 h-6" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="text-center relative z-10">
                  <p className="font-semibold text-white">Innovation Hub</p>
                  <p className="text-sm text-gray-400">Creative Solutions</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="group relative p-6 rounded-2xl border border-[#25ccad]/20 bg-gradient-to-br from-[#0b2521] to-black transition-all duration-500 hover:scale-[1.04] hover:border-[#25ccad]">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#25ccad]/10 to-transparent"></div>

                {/* Optional circle effect */}
                <div className="absolute right-[-40px] top-[-40px] w-40 h-40 rounded-full border border-[#25ccad]/10 opacity-30"></div>

                {/* ICON */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#25ccad]/10 flex items-center justify-center text-[#25ccad] transition-all duration-500 group-hover:bg-[#25ccad] group-hover:text-black group-hover:scale-110">
                    <Rocket className="w-6 h-6" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="text-center relative z-10">
                  <p className="font-semibold text-white">Fast Delivery</p>
                  <p className="text-sm text-gray-400">Quick Turnaround</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {features.map((f, i) => {
              const Icon = f.icon;

              return (
                <div
                  key={i}
                  className="group relative flex items-start gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-500 overflow-hidden hover:scale-[1.03] hover:border-[#25ccad] hover:shadow-[0_0_40px_rgba(37,204,173,0.25)]"
                >
                  {/* 🔥 LEFT GLOW BAR */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-transparent group-hover:bg-[#25ccad] transition-all duration-500"></div>

                  {/* ICON BOX */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#25ccad]/10 text-[#25ccad] transition-all duration-500 group-hover:bg-[#25ccad] group-hover:text-black group-hover:scale-110 shadow-sm group-hover:shadow-[0_0_20px_#25ccad]">
                    <Icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#25ccad]">
                      {f.title}
                    </h4>

                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>

                  {/* 🔥 HOVER GLOW BACKGROUND */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#25ccad]/10 to-transparent"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918989944488?text=Hello%20Ashish,%20I'd%20like%20to%20get%20a%20free%20consultation"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-5 rounded-full font-bold transition-all duration-300 hover:bg-[#24ccad] hover:scale-110"
            >
              Get Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
