import { Clock } from "lucide-react";
import React, { useState } from "react";
import { MdSecurity } from "react-icons/md";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    setLoading(true);

    setTimeout(() => {
      const message = `Hello Winntrix 👋

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

      const url = `https://wa.me/918989944488?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(37,204,173,0.15),transparent_40%)]" />

      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-10 lg:px-16">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-8 md:space-y-10">
            
            <div>
              <span className="px-4 py-2 text-[10px] sm:text-xs uppercase tracking-widest bg-[#25ccad]/10 border border-[#25ccad]/20 rounded-full text-[#25ccad]">
                Strategic Consulting
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mt-6">
                Connect with <br />
                <span className="text-[#25ccad] relative">
                  Winntrix.
                  <span className="absolute left-0 -bottom-2 w-full h-2 bg-[#25ccad]/20 rounded-full"></span>
                </span>
              </h1>

              <p className="text-gray-400 mt-4 md:mt-6 max-w-md md:max-w-lg text-sm sm:text-base">
                Experience a partnership built on transparency, technical excellence,
                and rapid scaling. Fill the form to initiate a high-priority discussion.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              
              <div className="p-5 md:p-6 bg-[#25ccad]/10 border border-[#25ccad]/20 rounded-2xl">
                <Clock className="mb-2 w-6 h-6 md:w-8 md:h-8"/>
                <p className="text-[10px] md:text-xs uppercase text-[#25ccad] mb-1 md:mb-2">
                  Response Time
                </p>
                <h3 className="text-lg md:text-xl font-bold">Under 2 Hours</h3>
              </div>

              <div className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl">
                <MdSecurity className="mb-2 w-6 h-6 md:w-8 md:h-8"/>
                <p className="text-[10px] md:text-xs uppercase text-gray-400 mb-1 md:mb-2">
                  Priority Support
                </p>
                <h3 className="text-lg md:text-xl font-bold">Active Team</h3>
              </div>
            </div>

            {/* PHONE */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs uppercase text-gray-500 mb-2">
                Support Central
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#25ccad]">
                +91 7007458210
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-8 md:mb-10">
                <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-black">
                  Inquiry Form
                </h2>

                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#25ccad] rounded-full"></span>
                  <span className="w-4 h-2 bg-[#25ccad]/40 rounded-full"></span>
                  <span className="w-2 h-2 bg-[#25ccad]/20 rounded-full"></span>
                </div>
              </div>

              {/* FORM */}
              <div className="space-y-5 md:space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="input-premium" />
                  <input name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} className="input-premium" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input-premium" />
                  <select className="input-premium">
                    <option>Custom Development</option>
                    <option>Mobile Application</option>
                    <option>Enterprise SaaS</option>
                    <option>AI & Automation</option>
                    <option>E-Commerce Hub</option>
                    <option>UI/UX Consultion</option>
                  </select>
                </div>

                <textarea name="message" placeholder="Describe your project..." value={formData.message} onChange={handleChange} rows="4" className="input-premium resize-none" />

                {/* BUTTON */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full h-14 sm:h-16 bg-[#25ccad] text-black font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-[0_20px_60px_rgba(37,204,173,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center"
                >
                  {loading ? (
                    <span className="animate-pulse">Syncing with WhatsApp...</span>
                  ) : (
                    <>Connect via WhatsApp →</>
                  )}
                </button>

              </div>
            </div>

            {/* ANIMATION */}
            <div className="hidden md:block absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 border border-[#25ccad]/20 rounded-full animate-spin-slow"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;