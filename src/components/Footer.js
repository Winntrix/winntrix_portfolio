import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#060606] border-t border-border pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 group mb-4">
              {/* Circle Logo */}
              <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/images/logoC2.svg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Name Logo */}
              <img
                src="/images/Name_C1_no_tag.svg"
                alt="Winntrix"
                className="h-4 sm:h-5 object-contain transition-transform group-hover:scale-110"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming digital experiences through innovative web, mobile,
              SaaS, and AI-powered solutions.
            </p>
            <div className="flex gap-4 mt-5 gap-4 border-t border-border pt-4">
              <a
                href="https://www.instagram.com/winntrix/"
                className="text-gray-400 hover:text-[#25ccad] hover:scale-110 transition text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/winntrix/"
                className="text-gray-400 hover:text-[#25ccad] hover:scale-110 transition text-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/winntrix/"
                className="text-gray-400 hover:text-[#25ccad] hover:scale-110 transition text-lg"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/@winntrix"
                className="text-gray-400 hover:text-[#25ccad] hover:scale-110 transition text-lg"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-[#25ccad] text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", path: "/services/web-development" },
                { name: "Mobile Development", path: "/services/mobile-development" },
                { name: "CMS Solutions", path: "/services/cms-solutions" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" },
                { name: "Digital Marketing", path: "/services/digital-marketing" },
                { name: "AI Integration", path: "/services/ai-integration" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-white text-sm hover:text-[#25ccad] hover:scale-110 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-[#25ccad] text-lg">
              Contact
            </h4>

            <div className="space-y-4">
              {/* EMAIL */}
              <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#0b0b0b] border border-white/10 hover:border-[#25ccad] transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,204,173,0.2)]">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#25ccad]/10 text-[#25ccad]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-gray-400 text-[10px]">Email</p>
                  <a
                    href="mailto:info@winntrix.com"
                    className="text-white text-[12px] hover:text-[#25ccad] transition "
                  >
                    info@winntrix.com
                  </a>
                </div>
              </div>

              {/* REGISTRATION */}
              {/* <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b0b0b] border border-white/10 hover:border-[#25ccad] transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,204,173,0.2)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#25ccad]/10 text-[#25ccad]">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Registration</p>
                  <p className="text-white text-base"></p>
                </div>
              </div>

              {/* DUNS */}
              {/* <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b0b0b] border border-white/10 hover:border-[#25ccad] transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,204,173,0.2)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#25ccad]/10 text-[#25ccad]">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">DUNS Number</p>
                  <p className="text-white text-base"></p>
                </div>
              </div>  */}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-[#25ccad] text-lg">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {[
                { name: "News", path: "/news" },
                { name: "Contact Us", path: "/contact" },
                { name: "About", path: "/about" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Cookie Policy", path: "/cookies" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-white text-sm hover:text-[#25ccad] transition transform hover:scale-105 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6  pr-10 flex flex-col md:flex-row justify-between gap-4 text-sm">
          {/* LEFT SIDE (STACKED) */}
          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-gray-400">
              © 2026 <span className="text-[#25ccad]">Winntrix.</span> All
              rights reserved.
            </p>

            <p className="text-gray-500 text-[8px] leading-relaxed">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
              <span className="text-[#25ccad] ml-1 cursor-pointer hover:underline">
                Manage Preferences
              </span>
            </p>
          </div>

          {/* RIGHT SIDE (keep your links same) */}
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-[#25ccad] transition"
            >
              Privacy
            </a>
            <a
              href="/cookies"
              className="text-gray-400 hover:text-[#25ccad] transition"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
