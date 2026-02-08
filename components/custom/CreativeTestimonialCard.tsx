"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';

interface CreativeTestimonialCardProps {
  name: string;
  petName: string;
  petType: string;
  rating: number;
  text: string;
  image?: string;
}

export const CreativeTestimonialCard: React.FC<CreativeTestimonialCardProps> = ({
  name,
  petName,
  petType,
  rating,
  text,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full glass border-none hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
        {/* Decorative paw print watermark */}
        <div className="absolute top-4 right-4 opacity-5">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="#FF6B7A">
            <circle cx="12" cy="8" r="2" />
            <circle cx="8" cy="12" r="1.5" />
            <circle cx="16" cy="12" r="1.5" />
            <ellipse cx="12" cy="16" rx="3" ry="4" />
          </svg>
        </div>

        <CardContent className="p-8 flex flex-col h-full relative">
          {/* Pet type badge with illustration */}
          <div className="absolute top-6 right-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {petType.toLowerCase() === 'dog' ? (
                <svg width="40" height="40" viewBox="0 0 100 100" className="drop-shadow-lg">
                  <circle cx="50" cy="35" r="18" fill="#FDB913" />
                  <ellipse cx="35" cy="28" rx="8" ry="15" fill="#FDB913" />
                  <ellipse cx="65" cy="28" rx="8" ry="15" fill="#FDB913" />
                  <ellipse cx="50" cy="60" rx="25" ry="20" fill="#FDB913" />
                  <circle cx="45" cy="33" r="3" fill="white" />
                  <circle cx="55" cy="33" r="3" fill="white" />
                  <circle cx="50" cy="40" r="4" fill="#333" />
                </svg>
              ) : (
                <svg width="40" height="40" viewBox="0 0 100 100" className="drop-shadow-lg">
                  <circle cx="50" cy="38" r="16" fill="#FF6B7A" />
                  <path d="M 35 30 L 32 15 L 42 28 Z" fill="#FF6B7A" />
                  <path d="M 65 30 L 68 15 L 58 28 Z" fill="#FF6B7A" />
                  <ellipse cx="50" cy="60" rx="22" ry="18" fill="#FF6B7A" />
                  <ellipse cx="44" cy="36" rx="2" ry="4" fill="white" />
                  <ellipse cx="56" cy="36" rx="2" ry="4" fill="white" />
                </svg>
              )}
            </motion.div>
          </div>

          {/* Quote mark with heart */}
          <motion.div
            className="mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="relative inline-block">
              <svg width="48" height="48" viewBox="0 0 24 24" className="text-[#FF6B7A]/20">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" fill="currentColor" />
              </svg>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-[#FF6B7A] text-[#FF6B7A]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Rating with animated stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.3, rotate: 360 }}
              >
                <Star
                  className={`w-5 h-5 ${
                    i < rating ? 'fill-[#FDB913] text-[#FDB913]' : 'text-gray-300'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Testimonial Text with speech bubble effect */}
          <div className="relative mb-6 flex-1">
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#FF6B7A] via-[#FDB913] to-[#7B4397] rounded-full" />
            <p className="text-gray-700 italic leading-relaxed pl-4">
              {text}
            </p>
          </div>

          {/* Client Info with creative layout */}
          <div className="flex items-center gap-4 pt-4 border-t-2 border-dashed border-gray-200 relative">
            {/* Decorative paw prints on border */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDB913">
                <circle cx="12" cy="8" r="2" />
                <circle cx="8" cy="12" r="1.5" />
                <circle cx="16" cy="12" r="1.5" />
                <ellipse cx="12" cy="16" rx="3" ry="4" />
              </svg>
            </div>

            {/* Avatar with gradient border */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B7A] via-[#FDB913] to-[#7B4397] p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-br from-[#FF6B7A] to-[#7B4397] bg-clip-text text-transparent">
                    {name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Heart badge */}
              <motion.div
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 fill-[#FF6B7A] text-[#FF6B7A]" />
              </motion.div>
            </motion.div>

            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg">{name}</p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600">
                  Pet Parent of{' '}
                  <span className="font-semibold text-[#FF6B7A]">{petName}</span>
                </p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDB913">
                  <circle cx="12" cy="8" r="2" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <ellipse cx="12" cy="16" rx="3" ry="4" />
                </svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
