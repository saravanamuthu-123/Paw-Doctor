"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone } from 'lucide-react';
import clinicInfo from '@/data/clinic-info.json';

export const CreativeMapSection: React.FC = () => {
  const [isMapHovered, setIsMapHovered] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Custom Illustrated Map Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onHoverStart={() => setIsMapHovered(true)}
        onHoverEnd={() => setIsMapHovered(false)}
      >
        {/* Dog Face Shaped Container */}
        <div className="relative">
          {/* Map Container with Custom Shape */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="relative h-[450px] bg-gradient-to-br from-[#FFE5E8] to-[#FFF4D6]">
              {/* Actual Google Map iframe */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.9!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) hue-rotate(10deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lifecare Pet Specialty Clinic Location"
              />

              {/* Creative Overlay - Animated Paw Marker */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{
                  y: [0, -20, 0],
                  scale: isMapHovered ? 1.3 : 1,
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Custom Paw Location Marker */}
                <div className="relative">
                  {/* Pulse Rings */}
                  <motion.div
                    className="absolute inset-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-full bg-[#FF6B7A]" />
                  </motion.div>

                  {/* Paw Marker */}
                  <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-2xl">
                    {/* Main Paw Pad */}
                    <ellipse cx="40" cy="50" rx="18" ry="22" fill="#FF6B7A" stroke="white" strokeWidth="3" />
                    {/* Top Left Toe */}
                    <circle cx="25" cy="30" r="8" fill="#FF6B7A" stroke="white" strokeWidth="3" />
                    {/* Top Middle Toe */}
                    <circle cx="40" cy="22" r="9" fill="#FF6B7A" stroke="white" strokeWidth="3" />
                    {/* Top Right Toe */}
                    <circle cx="55" cy="30" r="8" fill="#FF6B7A" stroke="white" strokeWidth="3" />
                    {/* Bottom Left Toe */}
                    <circle cx="30" cy="42" r="7" fill="#FF6B7A" stroke="white" strokeWidth="3" />
                    {/* Bottom Right Toe */}
                    <circle cx="50" cy="42" r="7" fill="#FF6B7A" stroke="white" strokeWidth="3" />

                    {/* Shine effect */}
                    <ellipse cx="35" cy="45" rx="6" ry="8" fill="white" opacity="0.3" />
                  </svg>

                  {/* Location Label */}
                  <motion.div
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    animate={{ opacity: isMapHovered ? 1 : 0 }}
                  >
                    <div className="bg-white px-4 py-2 rounded-full shadow-xl border-2 border-[#FF6B7A]">
                      <p className="text-sm font-bold text-[#FF6B7A]">We're Here!</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Pet Silhouettes Around Map */}
              <motion.div
                className="absolute top-4 left-4"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-20">
                  <circle cx="50" cy="35" r="18" fill="#FF6B7A" />
                  <ellipse cx="35" cy="28" rx="8" ry="15" fill="#FF6B7A" />
                  <ellipse cx="65" cy="28" rx="8" ry="15" fill="#FF6B7A" />
                  <ellipse cx="50" cy="60" rx="25" ry="20" fill="#FF6B7A" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-20">
                  <circle cx="50" cy="38" r="16" fill="#FDB913" />
                  <path d="M 35 30 L 32 15 L 42 28 Z" fill="#FDB913" />
                  <path d="M 65 30 L 68 15 L 58 28 Z" fill="#FDB913" />
                  <ellipse cx="50" cy="60" rx="22" ry="18" fill="#FDB913" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Decorative Paw Prints Trail */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                bottom: `${-40 - i * 25}px`,
                right: `${20 + i * 30}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#7B4397">
                <circle cx="12" cy="8" r="2" />
                <circle cx="8" cy="12" r="1.5" />
                <circle cx="16" cy="12" r="1.5" />
                <ellipse cx="12" cy="16" rx="3" ry="4" />
              </svg>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Creative Contact Cards */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Dog Tag Styled Location Card */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="relative overflow-hidden border-4 border-[#FF6B7A] bg-gradient-to-br from-white to-[#FFE5E8]">
            {/* Dog Tag Hole */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-[#FF6B7A] shadow-lg" />

            <CardContent className="pt-10 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B7A] to-[#e55566] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Find Us Here</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {clinicInfo.address.street}, {clinicInfo.address.area}, {clinicInfo.address.city}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cat Bowl Styled Hours Card */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="relative overflow-hidden border-4 border-[#FDB913] bg-gradient-to-br from-white to-[#FFF4D6]">
            {/* Bowl Rim Effect */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FDB913] via-[#e5a40f] to-[#FDB913]" />

            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FDB913] to-[#e5a40f] flex items-center justify-center flex-shrink-0 shadow-lg relative">
                  <Clock className="w-8 h-8 text-white" />
                  {/* Clock hands animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-1 h-4 bg-white/50 rounded-full" />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Always Open</h3>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    {clinicInfo.hours.weekdays}
                  </p>
                  <p className="text-[#FF6B7A] font-bold mt-1">
                    {clinicInfo.hours.emergency}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Phone Bone Styled Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="relative overflow-hidden border-4 border-[#7B4397] bg-gradient-to-br from-white to-[#E9D5FF]">
            {/* Bone Shape Decoration */}
            <div className="absolute -top-1 -right-1 w-16 h-16 opacity-10">
              <svg viewBox="0 0 100 50" fill="#7B4397">
                <ellipse cx="15" cy="25" rx="15" ry="12" />
                <rect x="15" y="20" width="70" height="10" />
                <ellipse cx="85" cy="25" rx="15" ry="12" />
              </svg>
            </div>

            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B4397] to-[#663380] flex items-center justify-center flex-shrink-0 shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Anytime</h3>
                  <a
                    href={`tel:${clinicInfo.contact.phone}`}
                    className="text-2xl font-bold text-[#7B4397] hover:text-[#663380] transition-colors"
                  >
                    {clinicInfo.contact.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Emergency? We're ready!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};
