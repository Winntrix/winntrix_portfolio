import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#25ccad] mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-8">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1a9b8e] to-[#2bc4b5] text-white hover:scale-105 transition"
      >
        Go Back Home →
      </Link>
    </section>
  );
};

export default NotFound;