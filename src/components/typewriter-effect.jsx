"use client";
import React from "react";
import { motion } from "framer-motion";

// Simple cn utility function to merge class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const TypewriterEffectSmooth = ({
  words,
  className = "",
  cursorClassName = "",
}) => {
  // Split each word into characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              <div className="inline-block">
                {word.text.map((char, index) => (
                  <motion.span
                    key={`char-${index}`}
                    className={cn("text-white", word.className)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.1 + index * 0.03,
                      ease: "easeOut",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-2", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
        viewport={{ once: true }}
      >
        <div
          className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-8 sm:h-10 md:h-12 lg:h-14 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};