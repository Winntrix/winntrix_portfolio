import React, { useState } from "react";
import { Globe, Code, Smartphone, Shield, BarChart, Cloud, X, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  {
    title: "Web Development",
    desc: "Build high-performance, scalable websites using modern frameworks like React, Next.js, and Vue.",
    icon: Globe,
    size: "col-span-1 row-span-1",
    gradient: "from-blue-500 to-cyan-500",
    color: "#24ccad",
    detailedInfo: {
      overview: "We create cutting-edge web applications that drive business growth and deliver exceptional user experiences.",
      features: [
        "Responsive and mobile-first design",
        "SEO-optimized architecture",
        "High performance and fast loading times",
        "Secure and scalable backend solutions",
        "CMS integration (WordPress, Strapi, Contentful)",
        "E-commerce functionality"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "Python", "PHP"],
      benefits: [
        "Increased online visibility",
        "Better user engagement",
        "Higher conversion rates",
        "Scalable infrastructure"
      ]
    }
  },
  {
    title: "Custom Software & Product Development",
    desc: "Transform your unique business requirements into powerful software solutions tailored to your workflows.",
    icon: Code,
    size: "col-span-1 row-span-1",
    gradient: "from-purple-500 to-pink-500",
    color: "#24ccad",
    detailedInfo: {
      overview: "We build custom software solutions that streamline your operations and give you a competitive edge.",
      features: [
        "Tailored to your specific business needs",
        "Scalable architecture for future growth",
        "Integration with existing systems",
        "Advanced security features",
        "User-friendly interfaces",
        "Comprehensive documentation"
      ],
      technologies: ["Java", "Python", "C#", ".NET", "Spring Boot", "Django"],
      benefits: [
        "Improved operational efficiency",
        "Reduced manual work",
        "Better data management",
        "Competitive advantage"
      ]
    }
  },
  {
    title: "E-commerce Development",
    desc: "Launch and scale your online store with feature-rich e-commerce platforms optimized for conversions.",
    icon: Smartphone,
    size: "col-span-1 row-span-1",
    gradient: "from-green-500 to-emerald-500",
    color: "#24ccad",
    detailedInfo: {
      overview: "Create powerful online stores that drive sales and provide seamless shopping experiences.",
      features: [
        "Secure payment gateway integration",
        "Inventory management system",
        "Order tracking and management",
        "Customer review and rating system",
        "Abandoned cart recovery",
        "Multi-language and multi-currency support"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
      benefits: [
        "Increased sales revenue",
        "Better customer experience",
        "Reduced cart abandonment",
        "Global reach"
      ]
    }
  },
  {
    title: "Mobile App & SaaS Solutions",
    desc: "Create powerful mobile applications and SaaS platforms that deliver exceptional user experiences.",
    icon: Cloud,
    size: "md:col-span-2 row-span-1",
    gradient: "from-orange-500 to-red-500",
    color: "#24ccad",
    detailedInfo: {
      overview: "Develop innovative mobile apps and SaaS platforms that solve real business problems.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions (React Native, Flutter)",
        "Subscription management",
        "Cloud infrastructure setup",
        "Real-time synchronization",
        "Push notifications and analytics"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      benefits: [
        "Reach customers on mobile",
        "Recurring revenue model",
        "Scalable cloud infrastructure",
        "Real-time updates"
      ]
    }
  },
  {
    title: "AI / ML Development",
    desc: "Leverage artificial intelligence and machine learning to gain competitive advantages and automate processes.",
    icon: BarChart,
    size: "col-span-1 row-span-1",
    gradient: "from-indigo-500 to-purple-500",
    color: "#24ccad",
    featured: true,
    detailedInfo: {
      overview: "Harness the power of AI and ML to transform your business operations and decision-making.",
      features: [
        "Custom AI model development",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics",
        "Process automation",
        "Intelligent recommendation systems"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"],
      benefits: [
        "Data-driven decisions",
        "Automated workflows",
        "Predictive insights",
        "Competitive advantage"
      ]
    }
  },
  {
    title: "SEO & Digital Growth",
    desc: "Increase online visibility and drive qualified traffic with proven SEO strategies and marketing campaigns.",
    icon: Shield,
    size: "col-span-1 row-span-1",
    gradient: "from-teal-500 to-green-500",
    color: "#24ccad",
    detailedInfo: {
      overview: "Boost your online presence and drive sustainable growth with data-driven digital marketing.",
      features: [
        "Technical SEO optimization",
        "Content marketing strategy",
        "Link building campaigns",
        "Local SEO services",
        "Social media management",
        "Performance analytics and reporting"
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
      benefits: [
        "Higher search rankings",
        "Increased organic traffic",
        "Better ROI on marketing",
        "Brand authority growth"
      ]
    }
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <motion.section 
        id="services" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[rgb(233,250,246)] to-[rgb(220,245,240)] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER */}
          <motion.div 
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-6"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 rounded-full bg-[#25ccad]"
              ></motion.div>
              <span className="text-[#25ccad] text-xs tracking-[0.2em] uppercase font-bold">
                Our Services
              </span>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
              Transform Your Business with{" "}
              <span className="text-[#25ccad] relative inline-block">
                Expert Solutions
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-0 left-0 h-1 bg-[#25ccad]/30 w-full"
                ></motion.span>
              </span>
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Comprehensive digital services designed to help your business grow, scale, and succeed in the digital age.
            </motion.p>
          </motion.div>

          {/* BENTO GRID */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6"
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`${service.size} group relative`}
              >
                {/* Animated Background Gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20, transparent)`
                  }}
                />
                
                {/* Glow Effect on Hover */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.15, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}80)`
                  }}
                />

                {/* Card Content */}
                <motion.div 
                  className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative Top Bar */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r rounded-t-2xl"
                    style={{
                      background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`
                    }}
                  />

                  {/* Icon Container */}
                  <div className="mb-6">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`
                      }}
                    >
                      <service.icon 
                        className="w-7 h-7 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-110"
                        style={{ color: service.color }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl md:text-2xl font-bold text-slate-900 mb-3 transition-colors group-hover:text-[#24ccad]"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>

                  {/* Learn More Link - Now Clickable */}
                  <div 
                    onClick={() => openModal(service)}
                    className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:gap-3"
                    style={{ color: service.color }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Decorative Dot Pattern */}
                  <div className="absolute bottom-4 right-4 opacity-10">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-gray-600"></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modal with Blur Background */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            />
            
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-4xl w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${selectedService.color}20, ${selectedService.color}10)`
                      }}
                    >
                      <selectedService.icon 
                        className="w-8 h-8"
                        style={{ color: selectedService.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {selectedService.title}
                      </h2>
                      <div className="w-20 h-1 bg-[#25ccad] rounded-full mt-2" />
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedService.detailedInfo.overview}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.detailedInfo.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#25ccad] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.detailedInfo.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Benefits</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.detailedInfo.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#25ccad] mt-2" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;