import React from 'react'

export const meta = {
  slug: 'keyword-research-for-local-businesses',
  title: 'Keyword Research for Local Businesses',
  description: 'How to find the right keywords that local customers actually search for.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

  <h2>Start with intent</h2>
  <p>Prioritize keywords that indicate intent to buy or contact — &quot;near me&quot;, city names, and service + location combinations.</p>

      <h2>Tools and validation</h2>
      <p>Use keyword tools and Google Autocomplete to validate search volume and variations.</p>
    </article>
  )
}
