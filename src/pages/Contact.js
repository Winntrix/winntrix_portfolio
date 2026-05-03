import { Clock } from "lucide-react";
import React, { useState } from "react";
import { MdSecurity } from "react-icons/md";
import { motion } from "framer-motion";

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

      const url = `https://wa.me/917007458210?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
      setLoading(false);
    }, 1200);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(37,204,173,0.15),transparent_40%)]" />

      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-10 lg:px-16">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 md:space-y-10"
          >
            
            <motion.div variants={fadeInLeft}>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="px-4 py-2 text-[10px] sm:text-xs uppercase tracking-widest bg-[#25ccad]/10 border border-[#25ccad]/20 rounded-full text-[#25ccad]"
              >
                Strategic Consulting
              </motion.span>

              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mt-6"
              >
                Connect with <br />
                <span className="text-[#25ccad] relative">
                  Winntrix.
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute left-0 -bottom-2 w-full h-2 bg-[#25ccad]/20 rounded-full"
                  ></motion.span>
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 mt-4 md:mt-6 max-w-md md:max-w-lg text-sm sm:text-base"
              >
                Experience a partnership built on transparency, technical excellence,
                and rapid scaling. Fill the form to initiate a high-priority discussion.
              </motion.p>
            </motion.div>

            {/* CARDS */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              
              <motion.div 
                variants={fadeInLeft}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                className="p-5 md:p-6 bg-[#25ccad]/10 border border-[#25ccad]/20 rounded-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  <Clock className="mb-2 w-6 h-6 md:w-8 md:h-8"/>
                </motion.div>
                <p className="text-[10px] md:text-xs uppercase text-[#25ccad] mb-1 md:mb-2">
                  Response Time
                </p>
                <h3 className="text-lg md:text-xl font-bold">Under 2 Hours</h3>
              </motion.div>

              <motion.div 
                variants={fadeInRight}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  <MdSecurity className="mb-2 w-6 h-6 md:w-8 md:h-8"/>
                </motion.div>
                <p className="text-[10px] md:text-xs uppercase text-gray-400 mb-1 md:mb-2">
                  Priority Support
                </p>
                <h3 className="text-lg md:text-xl font-bold">Active Team</h3>
              </motion.div>
            </motion.div>

            {/* PHONE */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className="pt-6 border-t border-white/10"
            >
              <p className="text-xs uppercase text-gray-500 mb-2">
                Support Central
              </p>
              <motion.p 
                whileHover={{ scale: 1.05 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-[#25ccad]"
              >
                +91 7007458210
              </motion.p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative"
          >
            <motion.div 
              variants={fadeInRight}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-8 md:mb-10">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-md sm:text-xl md:text-2xl lg:text-3xl font-black"
                >
                  Inquiry Form
                </motion.h2>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-1"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                    className="w-2 h-2 bg-[#25ccad] rounded-full"
                  ></motion.span>
                  <span className="w-4 h-2 bg-[#25ccad]/40 rounded-full"></span>
                  <span className="w-2 h-2 bg-[#25ccad]/20 rounded-full"></span>
                </motion.div>
              </div>

              {/* FORM */}
              <motion.div variants={staggerContainer} className="space-y-5 md:space-y-6">

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: "#25ccad" }}
                    name="name" 
                    placeholder="Full Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="input-premium" 
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: "#25ccad" }}
                    name="email" 
                    placeholder="Business Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="input-premium" 
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: "#25ccad" }}
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="input-premium" 
                  />
                  <motion.select 
                    whileFocus={{ scale: 1.02, borderColor: "#25ccad" }}
                    className="input-premium"
                  >
                    <option>Custom Development</option>
                    <option>Mobile Application</option>
                    <option>Enterprise SaaS</option>
                    <option>AI & Automation</option>
                    <option>E-Commerce Hub</option>
                    <option>UI/UX Consultion</option>
                  </motion.select>
                </motion.div>

                <motion.textarea 
                  variants={fadeInUp}
                  whileFocus={{ scale: 1.02, borderColor: "#25ccad" }}
                  name="message" 
                  placeholder="Describe your project..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  className="input-premium resize-none" 
                />

                {/* BUTTON */}
                <motion.div variants={fadeInUp}>
                  <motion.button
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(37,204,173,0.6)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 sm:h-16 bg-[#25ccad] text-black font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-[0_20px_60px_rgba(37,204,173,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center"
                  >
                    {loading ? (
                      <motion.span 
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="animate-pulse"
                      >
                        Syncing with WhatsApp...
                      </motion.span>
                    ) : (
                      <>Connect via WhatsApp →</>
                    )}
                  </motion.button>
                </motion.div>

              </motion.div>
            </motion.div>

            {/* ANIMATION */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="hidden md:block absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 border border-[#25ccad]/20 rounded-full"
            ></motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;