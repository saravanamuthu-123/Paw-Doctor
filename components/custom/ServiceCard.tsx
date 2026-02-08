"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Activity, Syringe, Stethoscope, Heart, Bone, Smile, Sparkles, Eye, Brain, ShieldPlus, Bird, Scissors, Home, Apple } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  category: string;
}

const iconMap: { [key: string]: any } = {
  activity: Activity,
  syringe: Syringe,
  stethoscope: Stethoscope,
  'heart-pulse': Heart,
  bone: Bone,
  smile: Smile,
  sparkles: Sparkles,
  eye: Eye,
  brain: Brain,
  'shield-plus': ShieldPlus,
  bird: Bird,
  scissors: Scissors,
  home: Home,
  apple: Apple,
  microscope: Activity, // fallback
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  icon,
  shortDescription,
  category,
}) => {
  const IconComponent = iconMap[icon] || Stethoscope;

  return (
    <Link href={`/services#${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="h-full"
      >
        <Card className="h-full glass hover:shadow-2xl transition-all duration-300 border-none group relative overflow-hidden">
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B7A]/10 to-[#FDB913]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <CardHeader className="relative">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B7A] to-[#e55566] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <IconComponent className="w-8 h-8 text-white" />
            </motion.div>

            {/* Animated pet silhouette on hover */}
            <motion.div
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#FDB913]/30">
                <circle cx="12" cy="8" r="2" />
                <circle cx="8" cy="12" r="1.5" />
                <circle cx="16" cy="12" r="1.5" />
                <ellipse cx="12" cy="16" rx="3" ry="4" />
              </svg>
            </motion.div>

            <div className="text-xs font-semibold text-[#FF6B7A] mb-2">{category}</div>
            <CardTitle className="text-xl font-bold group-hover:text-[#FF6B7A] transition-colors duration-300">
              {name}
            </CardTitle>
          </CardHeader>

          <CardContent className="relative">
            <CardDescription className="text-gray-600 mb-4 line-clamp-3">
              {shortDescription}
            </CardDescription>

            <div className="flex items-center text-[#FF6B7A] font-semibold group-hover:translate-x-2 transition-transform duration-300">
              <span className="text-sm">Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};
