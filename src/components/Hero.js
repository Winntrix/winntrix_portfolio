import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://www.webintegratorz.com/herovedio.webm"
          type="video/webm"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-bg-dark/10 z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-12">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full  py-8 mb-8">
            Build With Us. Grow Without Limits.
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-2px] text-white max-w-4xl mb-6">
            Empowering Businesses with{" "}
            <span className="text-[#24ccad]"> Next-Gen </span> Technology
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-10">
            Delivering intelligent
            <span className="text-[#24ccad]">
              ,scalable, and future-ready digital solutions,
            </span>{" "}
            we empower startups and enterprises globally to achieve innovation
            and excellence.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918989944488?text=Hello%20Ashish,%20I'd%20like%20to%20get%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              Get Free Consultation →
            </a>
          </div>

         
          {/* Badges */}
          <div className="flex items-center gap-10 mt-20 flex-wrap">
            {[
              {
                img: "/images/linkdin.png",
                line1: "TOP RATED AGENCY",
                line2: "ON LINKEDIN",
              },
              {
                img: "/images/digital.png",
                line1: "DIGITAL MARKETING",
                line2: "CERTIFIED",
              },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2"
              >
                {/* Image */}
                <img
                  src={badge.img}
                  alt={badge.line1}
                  className="w-16 h-16 object-contain"
                />

                {/* Text */}
                <div>
                  <div className="text-[0.7rem] font-semibold tracking-[1.5px] text-white">
                    {badge.line1}
                  </div>
                  <div className="text-[0.65rem] text-gray-400 tracking-[1px]">
                    {badge.line2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
