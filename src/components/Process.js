import {
  Bell,
  Check,
  Clock,
  Code,
  DollarSign,
  PenTool,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerFast = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const scalePop = {
    scale: [1, 1.2, 1],
    transition: { duration: 0.5 }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 bg-[rgb(233,250,246)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div 
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-6"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-[#25ccad] rounded-full"
            ></motion.div>
            <span className="text-[#25ccad] text-xs tracking-widest font-bold">
              HOW WE WORK
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-extrabold text-black"
          >
            Our Development <span className="text-[#25ccad]">Process</span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 mt-4 max-w-xl mx-auto"
          >
            A systematic approach ensuring quality, efficiency, and results.
          </motion.p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ========================= */}
          {/* DESKTOP CIRCLE */}
          {/* ========================= */}
          <motion.div 
            variants={fadeInLeft}
            className="hidden lg:block relative w-full max-w-[500px] aspect-square mx-auto"
          >

            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
              {/* progress */}
              <motion.circle
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
                initial={{ strokeDashoffset: 1256 }}
                animate={{ 
                  strokeDashoffset: 1256 - (1256 / steps.length) * (activeStep + 1)
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
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
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    animate={activeStep === i ? scalePop : {}}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border-4 cursor-pointer
                    ${
                      activeStep === i
                        ? "bg-[#25ccad] text-white scale-125 shadow-[0_0_40px_#25ccad] border-white"
                        : "bg-white text-gray-500 border-gray-200 hover:border-[#25ccad]"
                    }`}
                    onClick={() => setActiveStep(i)}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg">{step.icon}</span>
                      <span className="text-[10px] font-bold mt-1">
                        {step.num}
                      </span>
                    </div>
                  </motion.div>

                  {/* FLOAT CARD */}
                  <AnimatePresence>
                    {activeStep === i && (
                      <motion.div
                        initial={{ opacity: 0, x: i < 3 ? 50 : -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: i < 3 ? 50 : -50, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* CENTER */}
            <div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-40 h-40 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center"
              >
                <p className="font-bold text-lg text-black">WinNtrix</p>
                <p className="text-xs text-[#25ccad] tracking-widest">
                  METHODOLOGY
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================= */}
          {/* MOBILE STEPS */}
          {/* ========================= */}
          <motion.div 
            variants={staggerContainer}
            className="lg:hidden space-y-5"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInRight}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-4 p-5 rounded-[20px] border transition-all duration-300 shadow-md cursor-pointer
                ${
                  activeStep === i
                    ? "border-[#25ccad] bg-white shadow-[0_0_25px_rgba(37,204,173,0.3)]"
                    : "border-gray-200 bg-white"
                }`}
              >
                {/* ICON */}
                <motion.div
                  animate={activeStep === i ? scalePop : {}}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl
                  ${
                    activeStep === i
                      ? "bg-[#25ccad] text-white shadow-lg"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {step.icon}
                </motion.div>

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
              </motion.div>
            ))}
          </motion.div>

          {/* ========================= */}
          {/* RIGHT CONTENT */}
          {/* ========================= */}
          <motion.div 
            variants={staggerContainer}
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-4xl font-extrabold mb-4 text-black"
            >
              Powered by Modern <br />
              Technology
            </motion.h3>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 mb-8"
            >
              We build high-performance systems using modern tech.
            </motion.p>

            {/* TECH */}
            <motion.div 
              variants={staggerFast}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {[
                "react",
                "nextjs",
                "typescript",
                "nodejs",
                "python",
                "docker",
                "flutter",
                "postgresql",
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white rounded-xl p-6 flex items-center justify-center border cursor-pointer"
                >
                  <motion.img
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                    className="w-12 h-12 md:w-10 md:h-10"
                    alt=""
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-3 gap-6 mt-10 text-center"
            >
              {[
                { value: "50+", label: "Projects Delivered", color: "text-black" },
                { value: "20+", label: "Happy Clients", color: "text-[#25ccad]" },
                { value: "10+", label: "Expert Talent", color: "text-black" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.p 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
                    className={`text-4xl font-bold ${stat.color}`}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Process;