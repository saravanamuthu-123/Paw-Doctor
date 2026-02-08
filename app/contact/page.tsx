"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PawButton } from '@/components/custom';
import { FloatingElements } from '@/components/custom/FloatingElements';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import clinicInfo from '@/data/clinic-info.json';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  petType: z.string().min(1, 'Please select a pet type'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  contactMethod: z.enum(['email', 'phone']),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contactMethod: 'email',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <Badge className="bg-[#FF6B7A] text-white mb-6 px-6 py-2">Contact Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or want to schedule an appointment? We're here to help! Reach out to us and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                content: `${clinicInfo.address.street}, ${clinicInfo.address.area}, ${clinicInfo.address.city}`,
                link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.address.street + ' ' + clinicInfo.address.area + ' ' + clinicInfo.address.city)}`,
                color: 'from-[#FF6B7A] to-[#e55566]',
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: clinicInfo.contact.phone,
                link: `tel:${clinicInfo.contact.phone}`,
                color: 'from-[#FDB913] to-[#e5a40f]',
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: clinicInfo.contact.email,
                link: `mailto:${clinicInfo.contact.email}`,
                color: 'from-[#7B4397] to-[#663380]',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                content: clinicInfo.hours.weekdays,
                color: 'from-[#FF6B7A] to-[#e55566]',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass border-none hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm text-gray-600 hover:text-[#FF6B7A] transition-colors"
                        target={item.icon === MapPin ? '_blank' : undefined}
                        rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600">{item.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-[#FF6B7A] text-white mb-4">Send us a message</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We'd Love to Hear from You
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <Card className="glass border-none">
                <CardContent className="p-8">
                  {isSubmitted && (
                    <motion.div
                      className="mb-6 p-4 bg-[#7B4397]/10 border border-[#7B4397] rounded-lg flex items-center gap-3"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#7B4397]" />
                      <p className="text-sm text-gray-700">
                        Thanks! We'll get back to you within 24 hours 🐾
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        className="mt-2"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          className="mt-2"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className="mt-2"
                          placeholder="+91 90879 90819"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Pet Type */}
                    <div>
                      <Label htmlFor="petType">Pet Type *</Label>
                      <Select onValueChange={(value) => setValue('petType', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select pet type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">Dog</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                          <SelectItem value="bird">Bird</SelectItem>
                          <SelectItem value="rabbit">Rabbit</SelectItem>
                          <SelectItem value="exotic">Exotic Pet</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.petType && (
                        <p className="text-sm text-red-500 mt-1">{errors.petType.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        {...register('subject')}
                        className="mt-2"
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <Label>Preferred Contact Method *</Label>
                      <RadioGroup
                        defaultValue="email"
                        onValueChange={(value) => setValue('contactMethod', value as 'email' | 'phone')}
                        className="flex gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-method" />
                          <Label htmlFor="email-method" className="cursor-pointer">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-method" />
                          <Label htmlFor="phone-method" className="cursor-pointer">Phone</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FF6B7A] hover:bg-[#e55566] text-white rounded-full py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge className="bg-[#FF6B7A] text-white mb-4">Find Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Our Clinic
              </h2>
              <p className="text-gray-600 mb-8">
                Located in {clinicInfo.address.area}, {clinicInfo.address.city}, we're easily accessible from all parts of the city.
              </p>

              {/* Google Maps Embed */}
              <Card className="glass border-none overflow-hidden h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.9!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lifecare Pet Specialty Clinic Location"
                />
              </Card>

              {/* Directions */}
              <Card className="glass border-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Getting Here</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We're located on {clinicInfo.address.street}, near major landmarks in {clinicInfo.address.area}. Ample parking space is available for visitors.
                  </p>
                  <PawButton variant="outline" size="sm" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinicInfo.address.street + ' ' + clinicInfo.address.area + ' ' + clinicInfo.address.city)}`}>
                    Get Directions
                  </PawButton>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FDB913] to-[#e5a40f]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white text-[#FDB913] mb-4 px-4 py-2 text-sm font-bold">
              Emergency?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              For pet emergencies, call us immediately. Our 24/7 emergency team is always ready to help.
            </p>
            <motion.a
              href={`tel:${clinicInfo.contact.emergencyPhone}`}
              className="inline-flex items-center gap-3 bg-white text-[#FDB913] px-8 py-4 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-8 h-8" />
              {clinicInfo.contact.emergencyPhone}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
