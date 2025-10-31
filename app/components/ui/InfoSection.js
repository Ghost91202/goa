import React from 'react';
import Image from 'next/image';

export default function InfoSection({ title, text, image, reverse = false, children }) {
  return (
    <section className={`py-8 px-8 bg-pink-500 flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <Image src={image} alt={title + ' image'} className="rounded-2xl card-lux shadow-xl object-cover" loading="lazy" width={600} height={500} />

      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl font-bold font-serif text-(--lux-gold) mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{title}</h2>
        <p className="text-lg text-(--lux-muted) mb-4 font-sans" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>{text}</p>
        {children}
      </div>
    </section>
  );
}
