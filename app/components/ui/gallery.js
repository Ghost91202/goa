import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

export const metadata = {
  title: 'Gallery - Goa',
  description: 'Photo gallery clone (placeholder images)'
}

export default function Gallery() {
  // static images available in /public
  const publicImages = ['/hero.jpeg', '/images.jpg', '/images1.jpg', '/hero.jpeg', '/images.jpg', '/images1.jpg','/hero.jpeg', '/images.jpg', '/images1.jpg',]
  const images = Array.from({ length: 12 }).map((_, i) => publicImages[i % publicImages.length])
  const waNumber = '918433522673'

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <article key={idx} className="group">
              <div className="w-full h-44 relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="mt-3 text-sm text-slate-700">Image caption {idx + 1}</div>

              <div className="mt-2">
                <Button
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Hi, I want to book a call about image ${idx + 1}`)}`}
                  variant="nykaa"
                  size="sm"
                >
                  Book a call
                </Button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
