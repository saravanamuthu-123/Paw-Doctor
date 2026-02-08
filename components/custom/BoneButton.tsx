"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BoneButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'coral' | 'gold' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

export const BoneButton: React.FC<BoneButtonProps> = ({
  children,
  onClick,
  variant = 'coral',
  size = 'md',
  className,
  href,
}) => {
  const variantStyles = {
    coral: 'from-[#FF6B7A] to-[#e55566]',
    gold: 'from-[#FDB913] to-[#e5a40f]',
    purple: 'from-[#7B4397] to-[#663380]',
  };

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const ButtonContent = (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05, rotate: [-2, 2, -2, 0] }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Bone-shaped button using SVG path */}
      <svg
        viewBox="0 0 200 80"
        className={cn("w-full h-auto drop-shadow-xl", className)}
        style={{ minWidth: size === 'sm' ? '140px' : size === 'md' ? '180px' : '220px' }}
      >
        <defs>
          <linearGradient id={`bone-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className={cn("", variant === 'coral' && 'stop-[#FF6B7A]', variant === 'gold' && 'stop-[#FDB913]', variant === 'purple' && 'stop-[#7B4397]')} />
            <stop offset="100%" className={cn("", variant === 'coral' && 'stop-[#e55566]', variant === 'gold' && 'stop-[#e5a40f]', variant === 'purple' && 'stop-[#663380]')} />
          </linearGradient>
          <filter id="bone-shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Bone shape path */}
        <path
          d="M 30 40
             C 30 28, 20 20, 15 20
             C 8 20, 5 25, 5 32
             C 5 39, 8 44, 15 44
             C 20 44, 26 38, 30 36
             L 170 36
             C 174 38, 180 44, 185 44
             C 192 44, 195 39, 195 32
             C 195 25, 192 20, 185 20
             C 180 20, 170 28, 170 40
             L 30 40 Z"
          fill={`url(#bone-gradient-${variant})`}
          stroke="white"
          strokeWidth="2"
          filter="url(#bone-shadow)"
        />

        {/* Shine effect */}
        <ellipse
          cx="50"
          cy="28"
          rx="25"
          ry="8"
          fill="white"
          opacity="0.2"
        />
      </svg>

      {/* Button text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("font-bold text-white", sizeStyles[size])}>
          {children}
        </span>
      </div>

      {/* Paw print decoration on hover */}
      <motion.div
        className="absolute -top-2 -right-2"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="drop-shadow-lg">
          <circle cx="12" cy="8" r="2" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
          <ellipse cx="12" cy="16" rx="3" ry="4" />
        </svg>
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {ButtonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="cursor-pointer">
      {ButtonContent}
    </button>
  );
};
