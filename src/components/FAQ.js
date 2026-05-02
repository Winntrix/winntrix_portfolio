import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  return (
    <section className="section bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="h2 text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`group border rounded-xl overflow-hidden transition-all duration-300 bg-white
      ${
        isOpen
          ? "border-[#25ccad] shadow-[0_0_20px_rgba(37,204,173,0.15)]"
          : "border-gray-200 hover:border-[#25ccad]"
      }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  {/* QUESTION */}
                  <span
                    className={`font-semibold text-sm transition-all duration-300
          ${
            isOpen ? "text-[#25ccad]" : "text-black group-hover:text-[#25ccad]"
          }`}
                  >
                    {faq.q}
                  </span>

                  {/* ICON */}
                  <ChevronDown
                    size={18}
                    className={`transition-all duration-300
          ${
            isOpen
              ? "rotate-180 text-[#25ccad]"
              : "text-gray-400 group-hover:text-[#25ccad]"
          }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`px-6 text-sm leading-relaxed transition-all duration-300 overflow-hidden
        ${isOpen ? "max-h-40 pb-5 text-gray-600" : "max-h-0"}
        `}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <a
            href="https://wa.me/918989944488?text=Hello%20Ashish,%20I'd%20like%20to%20get%20a%20free%20consultation"
            target="_blank"
            className="btn-accent"
          >
            More Questions? Contect Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
