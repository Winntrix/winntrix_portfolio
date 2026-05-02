import React from "react";

const focuses = [
  {
    num: "01",
    title: "Web Development",
    desc: "We build fast, responsive and scalable websites tailored for businesses, delivering seamless user experiences and modern design",
  },
  {
    num: "02",
    title: "Software Development",
    desc: "We develop secure, scalable and high-performance software solutions to transform business ideas into powerful digital products",
  },
  {
    num: "03",
    title: "AI Development",
    desc: "We create intelligent AI solutions that automate, optimize, and empower businesses with data-driven innovation",
  },
  {
    num: "04",
    title: "Android Development",
    desc: "We build smooth, user-friendly Android apps with high performance and modern UI for growing businesses",
  },
  {
    num: "05",
    title: "AI Integration",
    desc: "We seamlessly integrate AI into your existing systems to automate workflows, improve decisions, and boost efficiency",
  },
  {
    num: "06",
    title: "UI/UX Design",
    desc: "We design intuitive, engaging and user-centric digital experiences that blend creativity with seamless functionality",
  },
];

const CoreFocus = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="mb-12 flex justify-center items-center flex-col text-center gap-4">
          <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-8 font-bold">
            <div class="w-2 h-2 rounded-full bg-[#25ccad] animate-pulse"></div>
            <span class="text-[#25ccad] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-black">
              WHAT WE DO BEST
            </span>
          </div>
          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Our Core
            <br />
            <span class="text-[#25ccad]">Focus Areas</span>
          </h2>
          <p class="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Delivering exceptional results through expertise, innovation, and
            unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focuses.map((focus, idx) => (
            <div className="group relative h-full bg-white rounded-3xl p-8 border-2 border-gray-100 transition-all duration-500 hover:border-[#25ccad] hover:shadow-[0_20px_60px_rgba(37,204,173,0.15)] hover:-translate-y-2">
  
  <div className="relative">
    
    {/* Top Section */}
    <div className="flex items-center justify-between mb-6">
      
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25ccad]/10 group-hover:bg-[#25ccad] transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#25ccad] group-hover:text-white transition-colors"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      </div>

      {/* Number */}
      <span className="text-5xl font-bold text-[#25ccad]/20 group-hover:text-[#25ccad] transition-colors">
        {focus.num}
      </span>
    </div>

    {/* Title */}
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#25ccad] transition-colors">
      {focus.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed mb-6">
      {focus.desc}
    </p>

    {/* Button */}
    <button className="flex items-center gap-2 text-[#25ccad] font-semibold transition-all duration-300 group-hover:gap-4">
      <span>Learn More</span>
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </button>

  </div>

  {/* Corner Glow */}
  <div className="absolute top-0 right-0 w-20 h-20 bg-[#25ccad] opacity-0 group-hover:opacity-10 rounded-tr-3xl rounded-bl-full transition-opacity"></div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFocus;
