import React from 'react'

export const meta = {
  slug: 'image-optimization',
  title: 'Image Optimization for Faster Pages',
  description: 'How to optimize images for performance and SEO on your local business website.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

  <h2>Responsive images</h2>
  <p>Serve images sized to the visitor&apos;s viewport using srcset or responsive image helpers.</p>

      <h2>Alt text and captions</h2>
      <p>Provide descriptive alt text and captions to improve accessibility and help search engines understand images.</p>
    </article>
  )
}
