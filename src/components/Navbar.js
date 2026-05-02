import React, { useState, useEffect } from "react";
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
import { GrSecure } from "react-icons/gr";
import { SlSupport } from "react-icons/sl";
import { BiMobile } from "react-icons/bi";
import { CiMobile1 } from "react-icons/ci";
import { TbGrowth } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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
      path: "/services/software-development",
      icon: <Database />,
    },
    {
      name: "UI/UX Design",
      subtitle: "User-centered design solutions",
      path: "/services/ui-ux-design",
      icon: <Speaker />,
    },
    {
      name: "Cyber Security",
      subtitle: "Protect your digital assets",
      path: "/services/cyber-security",
      icon: <GrSecure className="w-6 h-6" />,
    },
    {
      name: "Support & Maintenance",
      subtitle: "Ongoing support and maintenance",
      path: "/services/support-maintenance",
      icon: <Settings />,
    },
    {
      name: "Digital Marketiong",
      subtitle: "Comprehensive digital marketing solutions",
      path: "/services/ecommerce-development",
      icon: <GiProgression />,
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg-dark/80 ${isScrolled ? "bg-bg-dark/80 backdrop-blur-xl border-b border-border" : ""}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-[75px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Circle Logo */}
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/logoC2.svg" // 👈 your circle logo
                alt="Logo"
                className="w-full h-full object-contain "
              />
            </div>

            {/* Name Logo */}
            <img
              src="/images/Name_C1_no_tag.svg" // 👈 your horizontal name image
              alt="Winntrix"
              className="h-4 sm:h-5 object-contain transition-transform group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-xs font-bold tracking-[1px] transition font-display ${isActive("/") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"}`}
            >
              HOME
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`text-xs font-bold tracking-[1px] transition font-display flex items-center gap-1 ${location.pathname.includes("/services") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"}`}
              >
                SERVICES <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-bg-card border border-border rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-2xl">
                {servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="relative flex items-start gap-3 px-3 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5 hover:translate-x-1"
                  >
                    {/* LEFT ACCENT BAR */}
                    <span className="absolute left-0 top-0 h-full w-[2px] bg-[#25ccad] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></span>

                    {/* ICON */}
                    <div className="text-[#25ccad] mt-1 w-6 h-6 flex items-center justify-center rounded-md bg-white/5 transition-all duration-300 group-hover:bg-[#25ccad]/10 group-hover:shadow-[0_0_10px_rgba(37,204,173,0.4)]">
                      {service.icon}
                    </div>

                    {/* TEXT */}
                    <div className="leading-tight">
                      <p className="text-xs font-semibold text-white transition-all duration-300 group-hover:tracking-wide">
                        {service.name}
                      </p>

                      <p className="text-[10px] text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                        {service.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Integration Mega Dropdown */}
            <div className="relative group">
              <button
                className={`text-xs font-bold tracking-[1px] transition font-display flex items-center gap-1 ${
                  location.pathname.includes("/ai-integration")
                    ? "text-[#24ccad]"
                    : "text-gray-300 hover:text-[#24ccad]"
                }`}
              >
                AI INTEGRATION <ChevronDown size={12} />
              </button>

              {/* MEGA MENU */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[650px] bg-black border border-white/10 rounded-3xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl">
                <div className="grid grid-cols-3">
                  {aiMenu.map((section, i) => (
                    <div key={i}>
                      {/* COLUMN TITLE */}
                      <p className="text-[#25ccad] text-[10px] tracking-[2px] font-bold mb-6">
                        {section.title}
                      </p>

                      {/* ITEMS */}
                      <div className="space-y-4">
                        {section.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex items-center gap-3 px-2 py-2 rounded-lg group transition-all duration-300 hover:bg-white/5 hover:translate-x-1"
                          >
                            {/* ICON BOX */}
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#25ccad] text-sm transition-all duration-300 group-hover:bg-[#25ccad]/10 group-hover:shadow-[0_0_10px_rgba(37,204,173,0.4)]">
                              {item.icon}
                            </div>

                            {/* TEXT */}
                            <p className="text-gray-300 text-xs transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
                              {item.name}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-xs font-bold tracking-[1px] transition font-display ${isActive("/about") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"}`}
            >
              ABOUT
            </Link>

            <Link
              to="/news"
              className={`text-xs font-bold tracking-[1px] transition font-display ${isActive("/news") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"}`}
            >
              NEWS
            </Link>

            <Link
              to="/contact"
              className={`text-xs font-bold tracking-[1px] transition font-display ${isActive("/contact") ? "text-[#24ccad]" : "text-gray-300 hover:text-[#24ccad]"}`}
            >
              CONTACT US
            </Link>

            <Link
              to="/contact"
              className="bg-[#24ccad] text-black px-5 py-2 rounded-lg text-sm font-bold font-display hover:bg-[#1fa98c] transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl max-h-[calc(100vh-70px)] overflow-y-auto">

    <div className="flex flex-col gap-2 px-4 py-4">

      {/* HOME */}
      <Link
        to="/"
        className="py-3 text-sm font-semibold text-gray-300 hover:text-[#25ccad] transition"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        HOME
      </Link>

      {/* SERVICES */}
      <div className="border-t border-white/5 pt-3">
        <button
          onClick={() => toggleSection("services")}
          className="w-full flex justify-between items-center text-gray-300 font-semibold py-2"
        >
          SERVICES
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              openSection === "services"
                ? "rotate-180 text-[#25ccad]"
                : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "services" ? "max-h-[500px] mt-2" : "max-h-0"
          }`}
        >
          <div className="pl-3 space-y-2">
            {servicesList.slice(0, 6).map((service, idx) => (
              <Link
                key={idx}
                to={service.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-start gap-3 py-2 px-2 rounded-lg hover:bg-white/5 transition"
              >
                {/* ICON */}
                <div className="text-[#25ccad] text-lg mt-1">
                  {service.icon}
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm text-white font-medium">
                    {service.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {service.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* AI INTEGRATION */}
<div className="border-t border-white/5 pt-3">
  <button
    onClick={() => toggleSection("ai")}
    className="w-full flex justify-between items-center text-gray-300 font-semibold py-2"
  >
    AI INTEGRATION
    <ChevronDown
      size={16}
      className={`transition-transform duration-300 ${
        openSection === "ai"
          ? "rotate-180 text-[#25ccad]"
          : ""
      }`}
    />
  </button>

  <div
    className={`overflow-hidden transition-all duration-300 ${
      openSection === "ai" ? "max-h-[800px] mt-2" : "max-h-0"
    }`}
  >
    <div className="pl-3 space-y-4">

      {aiMenu.map((section, i) => (
        <div key={i}>

          {/* SECTION TITLE */}
          <p className="text-[10px] text-[#25ccad] font-bold tracking-widest mb-2">
            {section.title}
          </p>

          {/* ITEMS */}
          <div className="space-y-2">
            {section.items.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 py-2 px-2 rounded-lg text-sm text-gray-400 hover:text-[#25ccad] hover:bg-white/5 transition"
              >
                {/* ICON */}
                <span className="text-[#25ccad] text-sm">
                  {item.icon}
                </span>

                {/* TEXT */}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

        </div>
      ))}

    </div>
  </div>
</div>

      {/* OTHER LINKS */}
      <div className="border-t border-white/5 pt-3 flex flex-col gap-2">
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
      </div>

      {/* CTA */}
      <div className="pt-4">
        <Link
          to="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="block w-full text-center bg-gradient-to-r from-[#25ccad] to-cyan-400 text-black py-3 rounded-full font-bold shadow-lg shadow-[#25ccad]/30 hover:scale-[1.02] transition"
        >
          Get Started
        </Link>
      </div>

    </div>
  </div>
)}
      </div>
    </nav>
  );
};

export default Navbar;
