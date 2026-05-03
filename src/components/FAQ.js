import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What IT outsourcing services does Winntrix Technologies offer?",
    a: "We provide custom software, AI/ML, mobile apps, cloud engineering, and offshore development teams from India.",
  },
  {
    q: "Do you provide AI development services for global enterprises?",
    a: "Yes, we build Generative AI, AI agents, predictive analytics, and custom machine learning models.",
  },
  {
    q: "Can I hire dedicated developers from India through Winntrix?",
    a: "Absolutely — React, MERN, AI/ML, Mobile, and DevOps engineers are available with flexible engagement models.",
  },
  {
    q: "Which countries do you serve for IT outsourcing?",
    a: "We serve UAE, USA, India and other global markets through remote/offshore delivery.",
  },
  {
    q: "Do you work with startups and large enterprises?",
    a: "Yes, we partner with startups, scale-ups, and enterprises with tailored product and AI engineering.",
  },
  {
    q: "How do you ensure data security and compliance?",
    a: "We follow secure coding, encryption, access control, NDA protection, and compliance-ready architecture.",
  },
  {
    q: "How can I get a project estimate or consultation?",
    a: "Reach us via email , Contact Number or WhatsApp for a free consultation and a customized project estimate.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="section bg-white"
    >
      <div className="container-custom max-w-3xl">
        <motion.h2 
          variants={fadeInUp}
          className="h2 text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className={`group border rounded-xl overflow-hidden transition-all duration-300 bg-white
                ${
                  isOpen
                    ? "border-[#25ccad] shadow-[0_0_20px_rgba(37,204,173,0.15)]"
                    : "border-gray-200 hover:border-[#25ccad]"
                }`}
              >
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  whileHover={{ backgroundColor: "rgba(37,204,173,0.05)" }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* QUESTION */}
                  <motion.span
                    className={`font-semibold text-sm transition-all duration-300
                    ${
                      isOpen ? "text-[#25ccad]" : "text-black group-hover:text-[#25ccad]"
                    }`}
                  >
                    {faq.q}
                  </motion.span>

                  {/* ICON */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-all duration-300
                      ${
                        isOpen
                          ? "text-[#25ccad]"
                          : "text-gray-400 group-hover:text-[#25ccad]"
                      }`}
                    />
                  </motion.div>
                </motion.button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="px-6 text-sm leading-relaxed text-gray-600 pb-5"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="flex justify-center flex-wrap gap-4 mt-8"
        >
          <motion.a
            href="https://wa.me/917007458210?text=Hello%20Pravesh,%20I'd%20like%20to%20get%20a%20free%20consultation"
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Questions? Contact Us →
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;