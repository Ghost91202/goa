import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/ui/Button'

export const metadata = {
  title: 'Gallery - Goa',
  description: 'Photo gallery clone (placeholder images)'
}

export default function Page() {
  const publicImages = ['/hero.jpeg', '/window.svg', '/file.svg', '/globe.svg', '/next.svg', '/vercel.svg']
  const images = Array.from({ length: 12 }).map((_, i) => publicImages[i % publicImages.length])
  const waNumber = '918433522673'
  const phone = '+918433522673'

  return (
    <div className="min-h-screen">
      <section className="bg-linear-to-r from-sky-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-slate-900">Gallery</h1>
          <p className="mt-2 text-slate-600">A visual gallery — this is a layout clone using placeholder imagery. Replace images with your own assets to match the original site.</p>
          <div className="mt-4">
            <Link href="/" className="text-sm text-sky-600 hover:underline">Home</Link>
            <span className="text-sm text-slate-400 mx-2"></span>
            <span className="text-sm text-slate-700">Gallery</span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
              <div className="mt-2 text-sm text-slate-700">Image caption {idx + 1}</div>
              <div className="mt-3 flex gap-2">
                <Button href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Hi, I want to book related to image ${idx + 1}`)}`} variant="nykaa" size="sm">Book</Button>
                <a href={`tel:${phone}`} className="inline-flex items-center px-3 py-2 border rounded-md text-slate-700">Call</a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
