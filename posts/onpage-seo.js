import React from 'react'

export const meta = {
  slug: 'on-page-seo-checklist',
  title: 'On-page SEO Checklist',
  description: 'A concise on-page SEO checklist for local service pages (title tags, headers, meta, and HTML structure).',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Title and meta</h2>
      <p>Keep title tags descriptive and include primary local keywords near the front.</p>

      <h2>Headers and content</h2>
      <p>Use H1 for the main title, H2/H3 for sections, and keep paragraphs scannable with bullets where appropriate.</p>
    </article>
  )
}
