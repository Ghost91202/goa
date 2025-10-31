import React from 'react'

export const meta = {
  slug: 'reviews-and-trust',
  title: 'Leverage Reviews and Trust Signals',
  description: 'How to collect and surface customer reviews to boost local trust and click-through rates.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Ask for reviews</h2>
      <p>Request reviews after a successful service — make it easy with direct links and templates.</p>

      <h2>Display reviews</h2>
      <p>Show testimonials and aggregate ratings on landing pages and service pages to improve conversions.</p>
    </article>
  )
}
