"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PawButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

export const PawButton: React.FC<PawButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  href,
}) => {
  const [pawPrints, setPawPrints] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newPaw = { id: Date.now(), x, y };
    setPawPrints((prev) => [...prev, newPaw]);

    setTimeout(() => {
      setPawPrints((prev) => prev.filter((paw) => paw.id !== newPaw.id));
    }, 1000);
  };

  const variantStyles = {
    primary: 'bg-[#FF6B7A] hover:bg-[#e55566] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-[#FDB913] hover:bg-[#e5a40f] text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#FF6B7A] text-[#FF6B7A] hover:bg-[#FF6B7A] hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const ButtonContent = (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={onClick}
        onMouseMove={handleMouseMove}
        className={cn(
          'relative overflow-hidden rounded-full font-semibold transition-all duration-300 paw-cursor inline-flex items-center',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        asChild={!!href}
      >
        {href ? (
          <a href={href} className="inline-flex items-center">{children}</a>
        ) : (
          <span className="inline-flex items-center">{children}</span>
        )}
      </Button>

      {/* Paw print trail */}
      {pawPrints.map((paw) => (
        <motion.div
          key={paw.id}
          className="absolute pointer-events-none"
          style={{
            left: paw.x,
            top: paw.y,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0.5], rotate: [0, 10, 20] }}
          transition={{ duration: 1 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/50">
            <circle cx="12" cy="8" r="2" />
            <circle cx="8" cy="12" r="1.5" />
            <circle cx="16" cy="12" r="1.5" />
            <ellipse cx="12" cy="16" rx="3" ry="4" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );

  return ButtonContent;
};
