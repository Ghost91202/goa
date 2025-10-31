"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroNightlife({ title, subtitle, image, video }) {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image/video */}
      <div className="absolute inset-0 z-0">
        {video ? (
          <video src={video} autoPlay loop muted playsInline className="object-cover w-full h-full" />
        ) : (
          <img src={image} alt="Nightlife Hero" className="object-cover w-full h-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>
      {/* Glass headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 px-8 py-10 rounded-2xl card-lux backdrop-blur-xl border border-[var(--lux-gold)] shadow-xl text-center"
        style={{ boxShadow: '0 0 32px 8px var(--lux-gold)' }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--lux-gold)] font-serif mb-4 drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-[var(--lux-beige)] font-sans mb-6" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
          {subtitle}
        </p>
        <motion.a
          href="#book"
          whileHover={{ scale: 1.08, boxShadow: '0 0 32px 8px var(--lux-gold)' }}
          className="btn-lux px-8 py-4 text-xl font-bold shadow-lg"
        >
          Book Now
        </motion.a>
      </motion.div>
    </section>
  );
}
