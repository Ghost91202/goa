"use client";
import React from 'react'
import Link from 'next/link'

export default function Footer(){
  const whatsappNumber = '+918433522673'
  const waLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g,'')}`

  return (
    <footer className="mt-16" style={{background: 'linear-gradient(180deg, var(--nykaa-deep), #7a0f4a)'}}>
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <div className="flex items-center gap-4">
          <div className="text-lg font-bold">MySite</div>
          <nav className="hidden sm:flex gap-3 text-sm opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/category" className="hover:underline">Category</Link>
            <Link href="/gallery" className="hover:underline">Gallery</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/privacy" className="hover:underline">Privacy & Policy</Link>

          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-nykaa px-3 py-2 rounded-md shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 0 1-2 2h-1l-2 2v-2H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
            <span className="text-sm">WhatsApp</span>
          </a>
          <div className="text-sm opacity-90">© {new Date().getFullYear()} MySite</div>
        </div>
      </div>
    </footer>
  )
}
