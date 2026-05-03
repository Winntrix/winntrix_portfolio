import React, { useMemo } from "react";

const logos = [
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Flutter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Android",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "React Native",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "kubernetes",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  
  {
    name: "GitLab",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "Jenkins",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Django",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  
  {
    name: "Ruby on Rails",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
  },
  
  {
    name: "Spring",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
];

const TechnologyUsed = () => {
  // ✅ stable particles (no flicker)
  const particles = useMemo(() => {
    return [...Array(60)].map(() => ({
      size: Math.random() * 6 + 3,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden py-24">
      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,204,173,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(37,204,173,0.1),transparent_40%)]" />

      {/* 🔥 PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            The <span className="text-[#25ccad]">Technology</span> We Used
          </h2>
          <p className="text-gray-400 mt-3">
            Modern tools powering scalable solutions
          </p>
        </div>

        {/* MARQUEE */}
        <div className="relative w-full overflow-hidden">
          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex gap-6 animate-marquee w-max">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-[#111] border border-white/10 rounded-2xl p-6 w-[140px] h-[140px] flex-shrink-0 transition-all duration-300 hover:border-[#25ccad] hover:shadow-[0_0_20px_rgba(37,204,173,0.3)]"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="w-12 h-12 object-contain mb-3"
                />

                <p className="text-xs text-gray-400 font-medium text-center">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyUsed;
