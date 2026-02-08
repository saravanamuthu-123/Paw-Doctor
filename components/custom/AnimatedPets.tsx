"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedPets: React.FC = () => {
  return (
    <>
      {/* Animated Dog - enters from left */}
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32 z-10"
        initial={{ x: -200, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Dog silhouette */}
          <g fill="#FDB913">
            {/* Body */}
            <ellipse cx="50" cy="60" rx="25" ry="20" />
            {/* Head */}
            <circle cx="50" cy="35" r="18" />
            {/* Ears */}
            <ellipse cx="38" cy="28" rx="8" ry="15" />
            <ellipse cx="62" cy="28" rx="8" ry="15" />
            {/* Legs */}
            <rect x="35" y="70" width="6" height="15" rx="3" />
            <rect x="48" y="70" width="6" height="15" rx="3" />
            <rect x="59" y="70" width="6" height="15" rx="3" />
            {/* Tail */}
            <path d="M 70 55 Q 80 50 85 60" stroke="#FDB913" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Eyes */}
            <circle cx="45" cy="33" r="2" fill="white" />
            <circle cx="55" cy="33" r="2" fill="white" />
            {/* Nose */}
            <circle cx="50" cy="40" r="3" fill="#333" />
          </g>
        </motion.svg>

        {/* Paw prints trailing */}
        <motion.div
          className="absolute -bottom-8 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FDB913" opacity="0.3">
            <circle cx="12" cy="8" r="2" />
            <circle cx="8" cy="12" r="1.5" />
            <circle cx="16" cy="12" r="1.5" />
            <ellipse cx="12" cy="16" rx="3" ry="4" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Animated Cat - enters from right */}
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 z-10"
        initial={{ x: 200, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {/* Cat silhouette */}
          <g fill="#FF6B7A">
            {/* Body */}
            <ellipse cx="50" cy="60" rx="22" ry="18" />
            {/* Head */}
            <circle cx="50" cy="38" r="16" />
            {/* Ears - pointed */}
            <path d="M 35 30 L 32 15 L 42 28 Z" />
            <path d="M 65 30 L 68 15 L 58 28 Z" />
            {/* Legs */}
            <rect x="38" y="70" width="5" height="12" rx="2.5" />
            <rect x="48" y="70" width="5" height="12" rx="2.5" />
            <rect x="57" y="70" width="5" height="12" rx="2.5" />
            {/* Tail - curved */}
            <path d="M 70 58 Q 85 50 88 65 Q 90 75 85 80" stroke="#FF6B7A" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Eyes - cat eyes */}
            <ellipse cx="44" cy="36" rx="2" ry="4" fill="white" />
            <ellipse cx="56" cy="36" rx="2" ry="4" fill="white" />
            <ellipse cx="44" cy="36" rx="1" ry="3" fill="#1a1a1a" />
            <ellipse cx="56" cy="36" rx="1" ry="3" fill="#1a1a1a" />
            {/* Nose */}
            <path d="M 50 42 L 48 44 L 52 44 Z" fill="#ff9e9e" />
            {/* Whiskers */}
            <line x1="35" y1="42" x2="25" y2="40" stroke="#FF6B7A" strokeWidth="1" />
            <line x1="35" y1="44" x2="25" y2="45" stroke="#FF6B7A" strokeWidth="1" />
            <line x1="65" y1="42" x2="75" y2="40" stroke="#FF6B7A" strokeWidth="1" />
            <line x1="65" y1="44" x2="75" y2="45" stroke="#FF6B7A" strokeWidth="1" />
          </g>
        </motion.svg>

        {/* Paw prints trailing */}
        <motion.div
          className="absolute -bottom-8 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6B7A" opacity="0.3">
            <circle cx="12" cy="8" r="2" />
            <circle cx="8" cy="12" r="1.5" />
            <circle cx="16" cy="12" r="1.5" />
            <ellipse cx="12" cy="16" rx="3" ry="4" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating paw prints in background */}
      <motion.div
        className="absolute top-20 left-1/4 opacity-10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF6B7A">
          <circle cx="12" cy="8" r="2" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
          <ellipse cx="12" cy="16" rx="3" ry="4" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-40 right-1/4 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <svg width="35" height="35" viewBox="0 0 24 24" fill="#FDB913">
          <circle cx="12" cy="8" r="2" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
          <ellipse cx="12" cy="16" rx="3" ry="4" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 opacity-10"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#7B4397">
          <circle cx="12" cy="8" r="2" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
          <ellipse cx="12" cy="16" rx="3" ry="4" />
        </svg>
      </motion.div>
    </>
  );
};
