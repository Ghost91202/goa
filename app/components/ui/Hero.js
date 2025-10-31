"use client";
import React from 'react'
import Card from './Card'
import Link from 'next/link'

export default function Hero({ title = 'Discover Local Services', subtitle, image = '/window.svg' }){
  const waLink = 'https://wa.me/918433522673'

  return (
    <header className="relative overflow-hidden h-screen align-middle content-center justify-center">
      {/* background image via CSS to avoid next/image SSR issues */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/70" />
      </div>

      <div className="py-24 flex ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="p-8 text-left" centered={false}>
                <h1 className="text-4xl font-extrabold text-slate-900">{title}</h1>
                {subtitle && <p className="mt-3 text-slate-600 max-w-xl">{subtitle}</p>}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/gallery" className="inline-flex items-center px-5 py-3 rounded-md btn-nykaa">View Gallery</Link>
                  <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-white border text-slate-700">Contact via WhatsApp</a>
                </div>
              </Card>
            </div>

            {/* <div>
              <div className="flex items-center justify-center">
                <Card className="p-6 w-full max-w-md text-center" centered={true}>
                  <div className="text-slate-700">Featured</div>
                  <div className="mt-3 text-2xl font-semibold">Top local providers</div>
                </Card>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
