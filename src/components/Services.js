import React from "react";
import { Globe, Code, Smartphone, Shield, BarChart, Cloud} from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Web Development",
    desc: "Build high-performance, scalable websites using modern frameworks like React, Next.js, and Vue.",
    icon: Globe,
    size: "col-span-1 row-span-1",
    gradient: "from-blue-500 to-cyan-500",
    color: "#24ccad",
  },
  {
    title: "Custom Software & Product Development",
    desc: "Transform your unique business requirements into powerful software solutions tailored to your workflows.",
    icon: Code,
    size: "col-span-1 row-span-1",
    gradient: "from-purple-500 to-pink-500",
    color: "#24ccad",
  },
  {
    title: "E-commerce Development",
    desc: "Launch and scale your online store with feature-rich e-commerce platforms optimized for conversions.",
    icon: Smartphone,
    size: "col-span-1 row-span-1",
    gradient: "from-green-500 to-emerald-500",
    color: "#24ccad",
  },
  {
    title: "Mobile App & SaaS Solutions",
    desc: "Create powerful mobile applications and SaaS platforms that deliver exceptional user experiences.",
    icon: Cloud,
    size: "md:col-span-2 row-span-1",
    gradient: "from-orange-500 to-red-500",
    color: "#24ccad",
  },
  {
    title: "AI / ML Development",
    desc: "Leverage artificial intelligence and machine learning to gain competitive advantages and automate processes.",
    icon: BarChart,
    size: "col-span-1 row-span-1",
    gradient: "from-indigo-500 to-purple-500",
    color: "#24ccad",
    featured: true,
  },
  {
    title: "SEO & Digital Growth",
    desc: "Increase online visibility and drive qualified traffic with proven SEO strategies and marketing campaigns.",
    icon: Shield,
    size: "col-span-1 row-span-1",
    gradient: "from-teal-500 to-green-500",
    color: "#24ccad",
  },
];

const Services = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="services" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[rgb(233,250,246)] to-[rgb(220,245,240)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
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
              className="w-2 h-2 rounded-full bg-[#25ccad]"
            ></motion.div>
            <span className="text-[#25ccad] text-xs tracking-[0.2em] uppercase font-bold">
              Our Services
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Transform Your Business with{" "}
            <span className="text-[#25ccad] relative inline-block">
              Expert Solutions
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-1 bg-[#25ccad]/30 w-full"
              ></motion.span>
            </span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Comprehensive digital services designed to help your business grow, scale, and succeed in the digital age.
          </motion.p>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`${service.size} group relative`}
            >
              {/* Animated Background Gradient */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, transparent)`
                }}
              />
              
              {/* Glow Effect on Hover */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}80)`
                }}
              />

              {/* Card Content */}
              <motion.div 
                className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Top Bar */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`
                  }}
                />

                {/* Icon Container - Simplified */}
                <div className="mb-6">
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`
                    }}
                  >
                    <service.icon 
                      className="w-7 h-7 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-110"
                      style={{ color: service.color }}
                    />
                  </div>
                </div>

                {/* Title - Simplified */}
                <h3 
                  className="text-xl md:text-2xl font-bold text-slate-900 mb-3 transition-colors group-hover:text-[#24ccad]"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>

                {/* Learn More Link - Simplified */}
                <div 
                  className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: service.color }}
                >
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Decorative Dot Pattern */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-gray-600"></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </motion.section>
  );
};

export default Services;