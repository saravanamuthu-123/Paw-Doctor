"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';
import { PawButton } from './PawButton';

interface DoctorCardProps {
  name: string;
  title: string;
  specialization: string;
  qualifications: string;
  experience: number;
  bio: string;
  education: string[];
  image: string;
  email: string;
  phone: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  title,
  specialization,
  qualifications,
  experience,
  bio,
  education,
  image,
  email,
  phone,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-[480px] perspective-1000"
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <Card
          className="absolute w-full h-full glass hover:shadow-2xl transition-shadow duration-300 cursor-pointer border-none"
          style={{ backfaceVisibility: "hidden" }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <CardContent className="p-0 h-full flex flex-col">
            {/* Doctor Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-[#FF6B7A] to-[#e55566]">
              {/* Top Left Paw Group */}
              <motion.div
                className="absolute top-4 left-4 opacity-30"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="2" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <ellipse cx="12" cy="16" rx="3" ry="4" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute top-6 left-12 opacity-30"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="2" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <ellipse cx="12" cy="16" rx="3" ry="4" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute top-12 left-6 opacity-30"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="2" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <ellipse cx="12" cy="16" rx="3" ry="4" />
                </svg>
              </motion.div>

              {/* Bottom Right Paw Group */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-30"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="2" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <ellipse cx="12" cy="16" rx="3" ry="4" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute bottom-12 right-12 opacity-30"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="2" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <ellipse cx="12" cy="16" rx="3" ry="4" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute bottom-8 right-16 opacity-30"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="2" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <ellipse cx="12" cy="16" rx="3" ry="4" />
                </svg>
              </motion.div>

              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm p-2 flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={image}
                      alt={name}
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge className="bg-[#7B4397] text-white border-none">
                  <Award className="w-3 h-3 mr-1" />
                  {experience}+ Years
                </Badge>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-sm font-semibold text-[#FF6B7A] mb-2">{title}</p>
              <p className="text-sm text-gray-600 mb-3">{qualifications}</p>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  {specialization}
                </Badge>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3 mb-auto">{bio}</p>

              <p className="text-xs text-center text-gray-400 mt-4">Click to see more details</p>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className="absolute w-full h-full glass hover:shadow-2xl transition-shadow duration-300 cursor-pointer border-none"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <CardContent className="p-6 h-full flex flex-col overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About {name.split(' ')[1]}</h3>

            {/* Education */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-[#FF6B7A]" />
                <h4 className="font-semibold text-sm text-gray-900">Education</h4>
              </div>
              <ul className="space-y-1">
                {education.map((edu, index) => (
                  <li key={index} className="text-xs text-gray-600 pl-6">
                    • {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bio */}
            <div className="mb-4 flex-1">
              <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
            </div>

            {/* Contact */}
            <div className="space-y-2 mt-auto">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-[#FF6B7A] hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-[#FF6B7A] hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            </div>

            <div className="mt-4" onClick={(e) => e.stopPropagation()}>
              <PawButton variant="primary" size="sm" className="w-full">
                Book Consultation
              </PawButton>
            </div>

            <p className="text-xs text-center text-gray-400 mt-3">Click to flip back</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
