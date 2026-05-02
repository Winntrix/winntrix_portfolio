import React from "react";
import { Globe, Code, Smartphone, Shield, BarChart, Cloud } from "lucide-react";

const servicesList = [
  {
    title: "Web Development",
    desc: "Build high-performance, scalable websites using modern frameworks like React, Next.js, and Vue. Our expert team delivers responsive, SEO-optimized solutions that drive engagement and conversions.",
    icon: Globe,
  },
  {
    title: "Custom Software & Product Development",
    desc: "Transform your unique business requirements into powerful software solutions. We design and develop custom applications tailored to your workflows, ensuring seamless integration with existing systems.",
    icon: Code,
  },
  {
    title: "E-commerce Development",
    desc: "Launch and scale your online store with feature-rich e-commerce platforms built on Shopify, WooCommerce, or custom solutions. We optimize every aspect from checkout flows to inventory management.",
    icon: Smartphone,
  },
  {
    title: "Mobile App & SaaS Solutions",
    desc: "Create powerful mobile applications and SaaS platforms that deliver exceptional user experiences across all devices. Whether native iOS/Android apps or progressive web apps, we build solutions that are intuitive, performant, and designed for long-term growth. Our cloud-native architecture ensures reliability and scalability.",
    icon: Cloud,
  },
  {
    title: "AI / ML Development",
    desc: "Leverage the power of artificial intelligence and machine learning to gain competitive advantages. From predictive analytics to natural language processing, we build intelligent systems that automate processes, uncover insights, and drive data-driven decision making. Transform your business with cutting-edge AI solutions.",
    icon: BarChart,
  },
  {
    title: "SEO & Digital Growth",
    desc: "Increase your online visibility and drive qualified traffic with proven SEO strategies and digital marketing campaigns. Our data-driven approach combines technical SEO, content optimization, and performance tracking to improve rankings, boost conversions, and deliver measurable ROI for your business.",
    icon: Shield,
  },
];

const Services = () => {

  return (
    <section id="services" className="section bg-[rgb(233,250,246)]">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-8 font-bold">
            <div className="w-2 h-2 rounded-full bg-[#25ccad] animate-pulse"></div>
            <span className="text-[#25ccad] text-xs tracking-[0.2em] uppercase">
              Our Services
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6">
            Transform Your Business with{" "}
            <span className="text-[#25ccad] font-bold">Expert Solutions</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital services designed to help your business grow,
            scale, and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25ccad] to-emerald-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 border border-green-200 shadow-md hover:shadow-xl transition-all duration-500">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#25ccad]/10 group-hover:bg-[#25ccad] transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#25ccad] group-hover:text-white transition-all duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#25ccad] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#25ccad] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#25ccad] hover:bg-[#1fb89c] text-black font-bold text-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <span className="relative z-10">Let's Talk</span>

            <svg
              className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
