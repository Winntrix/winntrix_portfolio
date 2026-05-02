import {
  Bell,
  Check,
  Clock,
  Code,
  DollarSign,
  PenTool,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const steps = [
  {
    num: "01",
    icon: <Clock />,
    title: "Discovery & Planning",
    subtitle: "Understanding your vision",
  },
  {
    num: "02",
    icon: <Bell />,
    title: "Information Architecture",
    subtitle: "Structuring content",
  },
  {
    num: "03",
    icon: <PenTool />,
    title: "Design",
    subtitle: "Creating experiences",
  },
  {
    num: "04",
    icon: <Code />,
    title: "Development",
    subtitle: "Building solutions",
  },
  {
    num: "05",
    icon: <Check />,
    title: "Testing & QA",
    subtitle: "Ensuring quality",
  },
  {
    num: "06",
    icon: <DollarSign />,
    title: "Launch & Support",
    subtitle: "Deployment & care",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  // AUTO ROTATE
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-[rgb(233,250,246)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-6">
            <div className="w-2 h-2 bg-[#25ccad] rounded-full animate-pulse"></div>
            <span className="text-[#25ccad] text-xs tracking-widest font-bold">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-black">
            Our Development <span className="text-[#25ccad]">Process</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            A systematic approach ensuring quality, efficiency, and results.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ========================= */}
          {/* DESKTOP CIRCLE */}
          {/* ========================= */}
          <div className="hidden lg:block relative w-full max-w-[500px] aspect-square mx-auto">

            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
              

              {/* progress */}
              <circle
                cx="250"
                cy="250"
                r="200"
                fill="none"
                stroke="#25ccad"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={1256}
                strokeDashoffset={
                  1256 - (1256 / steps.length) * (activeStep + 1)
                }
                className="transition-all duration-700"
              />
            </svg>

            {steps.map((step, i) => {
              const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 200;

              const x = 250 + radius * Math.cos(angle);
              const y = 250 + radius * Math.sin(angle);

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: x,
                    top: y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* STEP */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border-4
                    ${
                      activeStep === i
                        ? "bg-[#25ccad] text-white scale-125 shadow-[0_0_40px_#25ccad] border-white"
                        : "bg-white text-gray-500 border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg">{step.icon}</span>
                      <span className="text-[10px] font-bold mt-1">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* FLOAT CARD */}
                  {activeStep === i && (
                    <div
                      className="absolute w-72"
                      style={{
                        left: i < 3 ? "120%" : "-120%",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-xl p-5 border">
                        <p className="text-xs text-gray-400 mb-1 font-bold">
                          STEP {step.num}
                        </p>
                        <p className="font-bold text-black">
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* CENTER */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center">
                <p className="font-bold text-lg text-black">WinNtrix</p>
                <p className="text-xs text-[#25ccad] tracking-widest">
                  METHODOLOGY
                </p>
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* MOBILE STEPS */}
          {/* ========================= */}
          <div className="lg:hidden space-y-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 rounded-[20px] border transition-all duration-300 shadow-md
                ${
                  activeStep === i
                    ? "border-[#25ccad] bg-white shadow-[0_0_25px_rgba(37,204,173,0.3)]"
                    : "border-gray-200 bg-white"
                }`}
              >
                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl
                  ${
                    activeStep === i
                      ? "bg-[#25ccad] text-white shadow-lg"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {step.icon}
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-[10px] tracking-widest text-gray-400 font-bold">
                    STEP {step.num}
                  </p>
                  <h4 className="font-bold text-black text-sm">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ========================= */}
          {/* RIGHT CONTENT */}
          {/* ========================= */}
          <div>
            <h3 className="text-4xl font-extrabold mb-4 text-black">
              Powered by Modern <br />
              Technology
            </h3>

            <p className="text-gray-600 mb-8">
              We build high-performance systems using modern tech.
            </p>

            {/* TECH */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "react",
                "nextjs",
                "typescript",
                "nodejs",
                "python",
                "docker",
                "amazonwebservices",
                "postgresql",
              ].map((tech, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 flex items-center justify-center border"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                    className="w-12 h-12 md:w-10 md:h-10"
                    alt=""
                  />
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-10 text-center">
              <div>
                <p className="text-4xl font-bold text-black">50+</p>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#25ccad]">20+</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black">10+</p>
                <p className="text-gray-500 text-sm">Expert Talent</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;