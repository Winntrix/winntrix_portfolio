import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, PhoneIcon } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6 },
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
        staggerChildren: 0.05,
      },
    },
  };

  const itemHover = {
    whileHover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  const iconHover = {
    whileHover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const cardHover = {
    whileHover: {
      y: -5,
      borderColor: "#25ccad",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      className="bg-[#060606] border-t border-border pt-16 pb-8"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Logo & Social */}
          <motion.div variants={stagger}>
            <motion.div variants={fadeUp}>
              <Link to="/" className="flex items-center gap-3 group mb-4">
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
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-sm leading-relaxed"
            >
              Transforming digital experiences through innovative web, mobile,
              SaaS, and AI-powered solutions.
            </motion.p>

            <motion.div
              variants={staggerFast}
              className="flex gap-4 mt-5 border-t border-border pt-4"
            >
              {[
                {
                  Icon: FaInstagram,
                  href: "https://www.instagram.com/winntrix/",
                  label: "Instagram",
                },
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/company/winntrix/",
                  label: "LinkedIn",
                },
                {
                  Icon: FaFacebook,
                  href: "https://www.facebook.com/winntrix/",
                  label: "Facebook",
                },
                {
                  Icon: FaYoutube,
                  href: "https://www.youtube.com/@winntrix",
                  label: "YouTube",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  className="text-gray-400 hover:text-[#25ccad] transition text-lg"
                  aria-label={social.label}
                >
                  <social.Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 2 - Services */}
          <motion.div variants={stagger}>
            <motion.h4
              variants={fadeUp}
              className="font-display font-bold mb-4 text-[#25ccad] text-lg"
            >
              Services
            </motion.h4>

            <motion.ul variants={staggerFast} className="space-y-2">
              {[
                { name: "Web Development", path: "/services/web-development" },
                {
                  name: "Mobile Development",
                  path: "/services/mobile-development",
                },
                { name: "CMS Solutions", path: "/services/cms-solutions" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" },
                {
                  name: "Digital Marketing",
                  path: "/services/digital-marketing",
                },
                { name: "AI Integration", path: "/services/ai-integration" },
              ].map((item, idx) => (
                <motion.li key={idx} variants={fadeUp}>
                  <motion.div {...itemHover}>
                    <Link
                      to={item.path}
                      className="text-white text-sm hover:text-[#25ccad] transition inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div variants={stagger}>
            <motion.h4
              variants={fadeUp}
              className="font-display font-bold mb-6 text-[#25ccad] text-lg"
            >
              Contact
            </motion.h4>

            <motion.div variants={staggerFast} className="space-y-4">
              {/* EMAIL */}
              <motion.div
                variants={fadeUp}
                {...cardHover}
                className="flex items-center gap-3 p-2 rounded-2xl bg-[#0b0b0b] border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  {...iconHover}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#25ccad]/10 text-[#25ccad]"
                >
                  <Mail size={20} />
                </motion.div>

                <div>
                  <p className="text-gray-400 text-[10px]">Email</p>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="mailto:info@winntrix.com"
                    className="text-white text-[12px] hover:text-[#25ccad] transition inline-block"
                  >
                    info@winntrix.com
                  </motion.a>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                variants={fadeUp}
                {...cardHover}
                className="flex items-center gap-3 p-2 rounded-2xl bg-[#0b0b0b] border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  {...iconHover}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#25ccad]/10 text-[#25ccad]"
                >
                  <PhoneIcon size={20} />
                </motion.div>

                <div>
                  <p className="text-white text-[10px]">Phone</p>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="tel:+917007458210"
                    className="text-white text-[12px] hover:text-[#25ccad] transition inline-block"
                  >
                    +91 7007458210
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Column 4 - Quick Links */}
          <motion.div variants={stagger}>
            <motion.h4
              variants={fadeUp}
              className="font-display font-bold mb-4 text-[#25ccad] text-lg"
            >
              Quick Links
            </motion.h4>

            <motion.ul variants={staggerFast} className="space-y-2">
              {[
                { name: "News", path: "/news" },
                { name: "Contact Us", path: "/contact" },
                { name: "About", path: "/about" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Cookie Policy", path: "/cookies" },
              ].map((item, idx) => (
                <motion.li key={idx} variants={fadeUp}>
                  <motion.div {...itemHover}>
                    <Link
                      to={item.path}
                      className="text-white text-sm hover:text-[#25ccad] transition inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-t border-border pt-6 pr-10 flex flex-col md:flex-row justify-between gap-4 text-sm"
        >
          {/* LEFT SIDE (STACKED) */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-2 max-w-md"
          >
            <p className="text-gray-400">
              © 2026 <span className="text-[#25ccad]">Winntrix.</span> All
              rights reserved.
            </p>

            <p className="text-gray-500 text-[8px] leading-relaxed">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
              <motion.span
                whileHover={{ x: 3 }}
                className="text-[#25ccad] ml-1 cursor-pointer hover:underline inline-block"
              >
                Manage Preferences
              </motion.span>
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div variants={fadeUp} className="flex gap-6">
            <motion.a
              whileHover={{ y: -2 }}
              href="/privacy-policy"
              className="text-gray-400 hover:text-[#25ccad] transition"
            >
              Privacy
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="/cookies"
              className="text-gray-400 hover:text-[#25ccad] transition"
            >
              Cookies
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
