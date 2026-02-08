"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  petName: string;
  petType: string;
  rating: number;
  text: string;
  image?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
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
      className="h-full"
    >
      <Card className="h-full glass border-none hover:shadow-2xl transition-all duration-300 animate-heartbeat">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Quote Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Quote className="w-12 h-12 text-[#FF6B7A]/20 mb-4" />
          </motion.div>

          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Star
                  className={`w-5 h-5 ${
                    i < rating ? 'fill-[#FFB800] text-[#FFB800]' : 'text-gray-300'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 italic mb-6 flex-1 leading-relaxed">
            "{text}"
          </p>

          {/* Client Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B7A] to-[#e55566] flex items-center justify-center text-white font-bold">
              {name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-600">
                Pet Parent of {petName} ({petType})
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
