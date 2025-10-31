import React from 'react'

export const meta = {
  slug: 'seo-for-escorts',
  title: 'SEO Tips for Local Services',
  description: 'Simple SEO tips to improve visibility for local service providers.'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      <h2>Local keywords</h2>
      <p>Focus on local keywords and directory listings. Use clean titles and structured data where possible.</p>
      <h2>Images</h2>
      <p>Optimize images with descriptive alt text and size them appropriately for fast loading.</p>
    </article>
  )
}
