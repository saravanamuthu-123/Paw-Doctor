"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PawButton, CreativeServiceCard, BoneButton } from '@/components/custom';
import { FloatingElements } from '@/components/custom/FloatingElements';
import { CheckCircle2, Phone } from 'lucide-react';
import services from '@/data/services.json';

export default function ServicesPage() {
  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA] overflow-hidden">
        <FloatingElements count={15} className="absolute inset-0 opacity-5">
          {() => (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="#FF6B7A">
              <circle cx="12" cy="8" r="2" />
              <circle cx="8" cy="12" r="1.5" />
              <circle cx="16" cy="12" r="1.5" />
              <ellipse cx="12" cy="16" rx="3" ry="4" />
            </svg>
          )}
        </FloatingElements>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#FF6B7A] text-white mb-6 px-6 py-2">Our Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Pet Healthcare Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From routine checkups to specialized treatments, we offer a complete range of veterinary services to keep your pets healthy and happy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Category Filter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#FF6B7A] text-white shadow-lg scale-105'
                      : 'glass text-gray-700 hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <CreativeServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-[#FF6B7A] text-white mb-4">Service Details</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="glass border-none overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Left side - Service Info */}
                      <div className="p-8 md:p-12">
                        <Badge className="bg-[#FF6B7A] text-white mb-4">{service.category}</Badge>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                        {/* Features */}
                        <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#7B4397] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <PawButton variant="primary" size="md" href="/contact">
                          Book This Service
                        </PawButton>
                      </div>

                      {/* Right side - Visual */}
                      <div className="relative bg-gradient-to-br from-[#FF6B7A] to-[#e55566] p-12 flex items-center justify-center">
                        <motion.div
                          className="text-white text-center"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <svg
                            className="w-32 h-32 mx-auto mb-6 opacity-80"
                            viewBox="0 0 24 24"
                            fill="white"
                          >
                            <circle cx="12" cy="8" r="2.5" />
                            <circle cx="7" cy="12" r="2" />
                            <circle cx="17" cy="12" r="2" />
                            <ellipse cx="12" cy="17" rx="4" ry="5" />
                          </svg>
                          <p className="text-2xl font-bold mb-2">{service.name}</p>
                          <p className="text-white/80">Expert Care for Your Pet</p>
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/20 rounded-full" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/20 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FDB913] to-[#e5a40f] relative overflow-hidden">
        <FloatingElements count={10}>
          {() => <Phone className="w-16 h-16 text-white" />}
        </FloatingElements>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white text-[#FDB913] mb-4 px-4 py-2 text-sm font-bold">
              Need Help Choosing?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Not Sure Which Service Your Pet Needs?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our expert team is here to help. Call us or book a consultation to discuss your pet's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#FDB913] px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.a>
              <motion.a
                href="tel:+919087990819"
                className="inline-flex items-center gap-3 bg-white text-[#FDB913] px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
