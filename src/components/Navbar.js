import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Database,
  Speaker,
  Settings,
  Smartphone,
  Brain,
} from "lucide-react";
import { GiProgression } from "react-icons/gi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const servicesList = [
    {
      name: "Web Development",
      subtitle: "Custom web solutions",
      path: "/services/web-development",
      icon: <Cpu />,
    },
    {
      name: "Mobile App",
      subtitle: "Native and hybrid mobile apps",
      path: "/services/mobile-development",
      icon: <Smartphone />,
    },
    {
      name: "SaaS Solutions",
      subtitle: "Scalable software as a service",
      path: "/services/saas-solutions",
      icon: <Database />,
    },
    {
      name: "UI/UX Design",
      subtitle: "User-centered design solutions",
      path: "/services/ui-ux-design",
      icon: <Speaker />,
    },
  ];

  const aiMenu = [
    {
      title: "GENERATIVE AI & LLMS",
      items: [
        { name: "Gen AI Development", icon: <Brain />, path: "/ai-integration/generative-ai-development" },
        { name: "LLM Development", icon: <Cpu />, path: "/ai-integration/LLMdevelopment" },
        {
          name: "Gen AI Integration",
          icon: <Settings />,
          path: "/ai-integration/generative-ai-integration",
        },
        { name: "ChatGPT Integration", icon: <Speaker />, path: "/ai-integration/chatgpt" },
        {
          name: "Gen AI Consulting",
          icon: <GiProgression />,
          path: "/ai-integration/generative-ai-consulting",
        },
      ],
    },
    {
      title: "AI SOLUTIONS",
      items: [
        { name: "AI Agent Development", icon: <Brain />, path: "/ai-integration/ai-agent-development" },
        {
          name: "AI Chatbot Development",
          icon: <Speaker />,
          path: "/ai-integration/ai-chatbot-development",
        },
        { name: "Enterprise AI", icon: <Cpu />, path: "/ai-integration/enterprise-ai" },
        { name: "AI-as-a-Service", icon: <Settings />, path: "/ai-integration/ai-as-a-service" },
      ],
    },
    {
      title: "ML & DATA SCIENCE",
      items: [
        {
          name: "ML Model Engineering",
          icon: <GiProgression />,
          path: "/ai-integration/ml-model-engineering",
        },
        { name: "ML Development", icon: <Cpu />, path: "/ai-integration/ml-development" },
        {
          name: "Data Science Consulting",
          icon: <GiProgression />,
          path: "/ai-integration/data-science",
        },
        { name: "AI Consulting", icon: <Brain />, path: "/ai-integration/ai-consulting" },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.98,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg-dark/80 ${
        isScrolled ? "bg-bg-dark/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-[75px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Circle Logo */}
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center"
            >
              <img
                src="/images/logoC2.svg"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Name Logo */}
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/images/Name_C1_no_tag.svg"
              alt="Winntrix"
              className="h-4 sm:h-5 object-contain transition-transform group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/"
                className={`text-xs font-bold tracking-[1px] transition font-display ${
                  isActive("/") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"
                }`}
              >
                HOME
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <div className="relative group">
              <motion.button
                whileHover={{ y: -2 }}
                className={`text-xs font-bold tracking-[1px] transition font-display flex items-center gap-1 ${
                  location.pathname.includes("/services") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"
                }`}
              >
                SERVICES <ChevronDown size={12} />
              </motion.button>
              
              <AnimatePresence>
                <div className="absolute top-full left-0 mt-2 w-64 bg-bg-card border border-border rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-2xl">
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-1"
                  >
                    {servicesList.map((service, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        custom={idx}
                      >
                        <Link
                          to={service.path}
                          className="relative flex items-start gap-3 px-3 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5 hover:translate-x-1"
                        >
                          <span className="absolute left-0 top-0 h-full w-[2px] bg-[#25ccad] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></span>
                          <div className="text-[#25ccad] mt-1 w-6 h-6 flex items-center justify-center rounded-md bg-white/5 transition-all duration-300 group-hover:bg-[#25ccad]/10 group-hover:shadow-[0_0_10px_rgba(37,204,173,0.4)]">
                            {service.icon}
                          </div>
                          <div className="leading-tight">
                            <p className="text-xs font-semibold text-white transition-all duration-300 group-hover:tracking-wide">
                              {service.name}
                            </p>
                            <p className="text-[10px] text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                              {service.subtitle}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>

            {/* AI Integration Mega Dropdown */}
            <div className="relative group">
              <motion.button
                whileHover={{ y: -2 }}
                className={`text-xs font-bold tracking-[1px] transition font-display flex items-center gap-1 ${
                  location.pathname.includes("/ai-integration")
                    ? "text-[#24ccad]"
                    : "text-gray-300 hover:text-[#24ccad]"
                }`}
              >
                AI INTEGRATION <ChevronDown size={12} />
              </motion.button>

              <AnimatePresence>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[650px] bg-black border border-white/10 rounded-3xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl">
                  <motion.div
                    variants={megaMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {aiMenu.map((section, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <p className="text-[#25ccad] text-[10px] tracking-[2px] font-bold mb-6">
                            {section.title}
                          </p>
                          <div className="space-y-4">
                            {section.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  to={item.path}
                                  className="flex items-center gap-3 px-2 py-2 rounded-lg group transition-all duration-300 hover:bg-white/5"
                                >
                                  <motion.div 
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#25ccad] text-sm transition-all duration-300 group-hover:bg-[#25ccad]/10 group-hover:shadow-[0_0_10px_rgba(37,204,173,0.4)]"
                                  >
                                    {item.icon}
                                  </motion.div>
                                  <p className="text-gray-300 text-xs transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
                                    {item.name}
                                  </p>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/about"
                className={`text-xs font-bold tracking-[1px] transition font-display ${
                  isActive("/about") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"
                }`}
              >
                ABOUT
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/news"
                className={`text-xs font-bold tracking-[1px] transition font-display ${
                  isActive("/news") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"
                }`}
              >
                NEWS
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/contact"
                className={`text-xs font-bold tracking-[1px] transition font-display ${
                  isActive("/contact") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"
                }`}
              >
                CONTACT US
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-[#24ccad] text-black px-5 py-2 rounded-lg text-sm font-bold font-display hover:bg-[#1fa98c] transition"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col gap-2 px-4 py-4 max-h-[calc(100vh-70px)] overflow-y-auto">
                {/* HOME */}
                <motion.div variants={itemVariants}>
                  <Link
                    to="/"
                    className="py-3 text-sm font-semibold text-gray-300 hover:text-[#25ccad] transition block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </motion.div>

                {/* SERVICES */}
                <motion.div variants={itemVariants} className="border-t border-white/5 pt-3">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleSection("services")}
                    className="w-full flex justify-between items-center text-gray-300 font-semibold py-2"
                  >
                    SERVICES
                    <motion.div
                      animate={{ rotate: openSection === "services" ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openSection === "services" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 space-y-2 mt-2">
                          {servicesList.slice(0, 6).map((service, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                to={service.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-start gap-3 py-2 px-2 rounded-lg hover:bg-white/5 transition"
                              >
                                <div className="text-[#25ccad] text-lg mt-1">
                                  {service.icon}
                                </div>
                                <div>
                                  <p className="text-sm text-white font-medium">
                                    {service.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {service.subtitle}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* AI INTEGRATION */}
                <motion.div variants={itemVariants} className="border-t border-white/5 pt-3">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleSection("ai")}
                    className="w-full flex justify-between items-center text-gray-300 font-semibold py-2"
                  >
                    AI INTEGRATION
                    <motion.div
                      animate={{ rotate: openSection === "ai" ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openSection === "ai" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 space-y-4 mt-2">
                          {aiMenu.map((section, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <p className="text-[10px] text-[#25ccad] font-bold tracking-widest mb-2">
                                {section.title}
                              </p>
                              <div className="space-y-2">
                                {section.items.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                  >
                                    <Link
                                      to={item.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-3 py-2 px-2 rounded-lg text-sm text-gray-400 hover:text-[#25ccad] hover:bg-white/5 transition"
                                    >
                                      <span className="text-[#25ccad] text-sm">
                                        {item.icon}
                                      </span>
                                      <span>{item.name}</span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* OTHER LINKS */}
                <motion.div variants={itemVariants} className="border-t border-white/5 pt-3 flex flex-col gap-2">
                  <Link
                    to="/about"
                    className="py-2 text-gray-300 hover:text-[#25ccad] transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="/news"
                    className="py-2 text-gray-300 hover:text-[#25ccad] transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    NEWS
                  </Link>
                  <Link
                    to="/contact"
                    className="py-2 text-gray-300 hover:text-[#25ccad] transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CONTACT US
                  </Link>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="pt-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center bg-gradient-to-r from-[#25ccad] to-cyan-400 text-black py-3 rounded-full font-bold shadow-lg shadow-[#25ccad]/30 transition"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;