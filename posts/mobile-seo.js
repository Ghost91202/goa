import React from 'react'

export const meta = {
  slug: 'mobile-seo',
  title: 'Mobile SEO and Performance',
  description: 'Tips to make your site fast and mobile-friendly for better rankings.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Responsive design</h2>
      <p>Ensure your site adapts to different screen sizes and that buttons are easy to tap.</p>

      <h2>Reduce JavaScript</h2>
      <p>Minimize client-side scripts and defer non-critical code to improve load times.</p>
    </article>
  )
}
