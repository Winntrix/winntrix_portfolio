import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  Zap,
  Target,
  Lock,
  TrendingUp,
  Clock,
  Rocket,
  BugIcon,
  ChevronRight,
  Sparkles,
  Shield,
  Award,
  Briefcase,
  Users,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Clear, upfront costs with no hidden fees. Pay only for what you need.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Zap,
    title: "Proven Expertise",
    desc: "Years of experience delivering cutting-edge solutions that drive results.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Top-Notch IT Solutions",
    desc: "Enterprise-grade solutions that scale seamlessly with your business.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    desc: "Bank-level security protocols ensuring your data stays protected.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "ROI Focused",
    desc: "Strategic solutions designed to maximize your return on investment.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock support whenever you need it, wherever you are.",
    color: "from-red-400 to-rose-500",
  },
];

const WhyUs = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
        staggerChildren: 0.1,
      },
    },
  };

  const staggerFast = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardHover = {
    whileHover: { 
      y: -8,
      transition: { duration: 0.2 }
    },
  };

  const iconHover = {
    whileHover: { 
      rotate: 10, 
      scale: 1.15,
      transition: { duration: 0.2 }
    },
  };

  // Particles
  const particles = useMemo(() => {
    return [...Array(80)].map(() => ({
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
    }));
  }, []);

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      className="relative bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden py-28"
    >
      {/* 🔥 ANIMATED GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,204,173,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,204,173,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* 🔥 GRADIENT ORBS */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-[#25ccad]/30 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25ccad]/5 rounded-full blur-[100px]" />

      {/* 🔥 PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0.5, 0],
              scale: [0, 1, 1, 0],
              y: [0, -30, -60, -90]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-gradient-to-r from-[#25ccad] to-emerald-400"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div 
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#25ccad]/20 to-emerald-500/20 border border-[#25ccad]/30 backdrop-blur-sm">
              <motion.span 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#25ccad] shadow-lg shadow-[#25ccad]"
              />
              <span className="text-[#25ccad] text-xs font-bold tracking-[0.2em] uppercase">
                WHY CHOOSE US
              </span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-[#25ccad] via-emerald-400 to-[#25ccad] bg-clip-text text-transparent">
              WinNtrix
            </span>
            ?
          </motion.h2>

          <motion.div variants={fadeUp} className="w-24 h-1 bg-gradient-to-r from-[#25ccad] to-emerald-400 rounded-full mx-auto mt-6" />

          <motion.p variants={fadeUp} className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
            We wholeheartedly support you in transforming your vision into a
            tangible reality, ensuring your digital transformation drives
            sustained growth and success.
          </motion.p>
        </motion.div>

        {/* STATS CARDS - Premium Design */}
        <motion.div 
          variants={staggerFast}
          className="grid md:grid-cols-4 gap-6 mb-24"
        >
          {[
            { num: "50+", label: "Projects Delivered", icon: Briefcase, gradient: "from-emerald-500/20 to-transparent" },
            { num: "20+", label: "Happy Clients", icon: Award, gradient: "from-blue-500/20 to-transparent" },
            { num: "10+", label: "Expert Talent", icon: Sparkles, gradient: "from-purple-500/20 to-transparent" },
            { num: "99%", label: "Success Rate", icon: Shield, gradient: "from-orange-500/20 to-transparent" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              {...cardHover}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-8 text-center cursor-pointer hover:border-[#25ccad]/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#25ccad]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[#25ccad]" />
                </div>
                <motion.h3 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-[#25ccad] to-emerald-400 bg-clip-text text-transparent"
                >
                  {item.num}
                </motion.h3>
                <p className="text-gray-400 mt-2 text-sm font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MAIN GRID - Premium Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT SIDE - Team Showcase */}
          <motion.div 
            variants={fadeUp}
            {...cardHover}
            className="relative rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-8 overflow-hidden"
          >
            {/* Premium Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#25ccad]/10 to-transparent rounded-bl-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#25ccad] to-emerald-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Leadership</h3>
                  <p className="text-gray-400 text-sm">Meet the experts behind your success</p>
                </div>
              </div>

              <motion.div 
                variants={staggerFast}
                className="grid grid-cols-2 gap-5"
              >
                {[
                  { t: "T", name: "Team Lead", role: "Strategy & Vision", color: "from-emerald-500 to-teal-500" },
                  { t: "D", name: "Developer", role: "Engineering", color: "from-blue-500 to-cyan-500" },
                  { t: "D", name: "Designer", role: "Creative", color: "from-purple-500 to-pink-500" },
                  { t: "M", name: "Manager", role: "Operations", color: "from-orange-500 to-red-500" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#25ccad]/50 transition-all duration-300"
                  >
                    <div className="text-center">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${m.color} flex items-center justify-center text-black text-2xl font-bold shadow-lg`}
                      >
                        {m.t}
                      </motion.div>
                      <p className="font-semibold text-white text-sm">{m.name}</p>
                      <p className="text-gray-500 text-xs mt-1">{m.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Innovation Cards */}
              <motion.div 
                variants={staggerFast}
                className="grid grid-cols-2 gap-4 mt-6"
              >
                {[
                  { icon: <BugIcon className="w-5 h-5" />, title: "Innovation Hub", desc: "Creative Solutions" },
                  { icon: <Rocket className="w-5 h-5" />, title: "Fast Delivery", desc: "Quick Turnaround" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    className="group p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#25ccad]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#25ccad]/10 flex items-center justify-center text-[#25ccad] group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Features Grid */}
          <motion.div 
            variants={stagger}
            className="space-y-4"
          >
            {features.map((f, i) => {
              const Icon = f.icon;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="group relative flex items-start gap-5 p-5 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-[#25ccad]/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25ccad]/0 via-[#25ccad]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div 
                    {...iconHover}
                    className={`w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br ${f.color} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-[#25ccad] transition-colors duration-300">
                      {f.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#25ccad] group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Section - Premium */}
        <motion.div 
          variants={fadeUp}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#25ccad] to-emerald-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <a
                href="https://wa.me/917007458210?text=Hello%20Pravesh,%20I'd%20like%20to%20get%20a%20free%20consultation"
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#25ccad] to-emerald-500 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#25ccad]/50 group-hover:scale-105"
              >
              
                Get Free Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;