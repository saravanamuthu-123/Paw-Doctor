"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { PawButton } from '@/components/custom';

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#FF6B7A] text-white mb-6 px-6 py-2">Gallery</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Coming soon! We're working on showcasing our clinic facilities, happy pets, and team moments.
            </p>
            <PawButton variant="primary" size="lg" href="/contact">
              Visit Us
            </PawButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
