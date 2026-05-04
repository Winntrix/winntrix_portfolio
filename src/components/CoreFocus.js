import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Code2, 
  Brain, 
  Smartphone, 
  Cpu, 
  Palette,
} from "lucide-react";

const focuses = [
  {
    num: "01",
    title: "Web Development",
    desc: "We build fast, responsive and scalable websites tailored for businesses, delivering seamless user experiences and modern design",
    icon: Globe,
    size: "col-span-1 row-span-1",
    gradient: "from-blue-500 to-cyan-400",
    iconColor: "#24ccad",
    sectionId: "web-development",
  },
  {
    num: "02",
    title: "Software Development",
    desc: "We develop secure, scalable and high-performance software solutions to transform business ideas into powerful digital products",
    icon: Code2,
    size: "col-span-1 row-span-1",
    gradient: "from-purple-500 to-pink-400",
    iconColor: "#24ccad",
    sectionId: "software-development",
  },
  {
    num: "03",
    title: "AI Development",
    desc: "We create intelligent AI solutions that automate, optimize, and empower businesses with data-driven innovation",
    icon: Brain,
    size: "md:col-span-1 row-span-2",
    gradient: "from-indigo-500 to-purple-400",
    iconColor: "#24ccad",
    featured: true,
    sectionId: "ai-development",
  },
  {
    num: "04",
    title: "Android Development",
    desc: "We build smooth, user-friendly Android apps with high performance and modern UI for growing businesses",
    icon: Smartphone,
    size: "col-span-1 row-span-1",
    gradient: "from-green-500 to-emerald-400",
    iconColor: "#24ccad",
    sectionId: "android-development",
  },
  {
    num: "05",
    title: "AI Integration",
    desc: "We seamlessly integrate AI into your existing systems to automate workflows, improve decisions, and boost efficiency",
    icon: Cpu,
    size: "col-span-1 row-span-1",
    gradient: "from-orange-500 to-red-400",
    iconColor: "#24ccad",
    sectionId: "ai-integration",
  },
  {
    num: "06",
    title: "UI/UX Design",
    desc: "We design intuitive, engaging and user-centric digital experiences that blend creativity with seamless functionality",
    icon: Palette,
    size: "md:col-span-2 row-span-1",
    gradient: "from-teal-500 to-green-400",
    iconColor: "#24ccad",
    sectionId: "ui-ux-design",
  },
];

const CoreFocus = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      // If specific section doesn't exist, scroll to services section
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const navbarHeight = 80;
        const elementPosition = servicesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

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
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -12,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const numberAnimation = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, delay: 0.2 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={stagger}
          className="mb-16 flex justify-center items-center flex-col text-center gap-4"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-8 font-bold">
              <motion.div 
                variants={pulseAnimation}
                animate="animate"
                className="w-2 h-2 rounded-full bg-[#25ccad]"
              />
              <span className="text-[#25ccad] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-black">
                WHAT WE DO BEST
              </span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Our Core
            <br />
            <span className="text-[#25ccad] relative inline-block">
              Focus Areas
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-2 bg-[#25ccad]/20 w-full rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Delivering exceptional results through expertise, innovation, and
            unwavering commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Premium Bento Grid */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6"
        >
          {focuses.map((focus, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className={`${focus.size} group relative cursor-pointer`}
            >
              {/* Premium Glow Effect */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 0.2, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute -inset-3 rounded-3xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${focus.iconColor}, ${focus.iconColor}80)`
                }}
              />

              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                
                {/* Premium Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at top right, ${focus.iconColor}, transparent 70%)`
                  }}
                />

                {/* Top Decorative Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${focus.iconColor}, ${focus.iconColor}80, transparent)`
                  }}
                />

                {/* Content */}
                <div className="p-6 md:p-8 relative z-10">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon Container */}
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="relative"
                    >
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${focus.iconColor}20, ${focus.iconColor}10)`
                        }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2 }}
                        >
                          <focus.icon 
                            className="w-7 h-7"
                            style={{ color: focus.iconColor }}
                          />
                        </motion.div>
                        
                        {/* Shine Effect */}
                        <motion.div 
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </div>
                      
                      {/* Glowing Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
                        className="absolute -inset-1 rounded-xl"
                        style={{
                          border: `1px solid ${focus.iconColor}`,
                          opacity: 0.3
                        }}
                      />
                    </motion.div>

                    {/* Number Badge */}
                    <motion.div 
                      variants={numberAnimation}
                      className="relative"
                    >
                      <div className="text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ color: focus.iconColor }}
                      >
                        {focus.num}
                      </div>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
                        style={{
                          background: `${focus.iconColor}20`,
                          filter: "blur(8px)"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:transition-colors"
                    style={{ color: focus.iconColor }}
                  >
                    {focus.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                    {focus.desc}
                  </p>

                  {/* CTA Button - Now Working */}
                  <motion.button 
                    onClick={() => scrollToSection(focus.sectionId)}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn"
                    style={{ color: focus.iconColor }}
                  >
                    <span>Discover More</span>
                    <motion.svg
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Bottom Decorative Pattern */}
                <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full" style={{ background: focus.iconColor }}></div>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 rotate-45 translate-x-8 -translate-y-8"
                    style={{ background: `${focus.iconColor}20` }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoreFocus;