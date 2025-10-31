import React from 'react'

export const meta = {
  slug: 'schema-markup',
  title: 'Using Schema Markup for Local Businesses',
  description: 'Structured data and schema.org usage to improve rich results and click-through rates.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Organization and LocalBusiness</h2>
      <p>Add Organization or LocalBusiness schema to your pages to provide search engines with key business details.</p>

      <h2>FAQ and HowTo</h2>
      <p>Use FAQ or HowTo schema for content that answers common questions—this can generate rich snippets.</p>
    </article>
  )
}
