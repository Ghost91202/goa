import React from 'react'

export const meta = {
  slug: 'content-strategy',
  title: 'Content Strategy for Local Businesses',
  description: 'How to build a content calendar and topics that attract local customers.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Topic clusters</h2>
      <p>Create pillar pages and supporting posts to cover topics in-depth and internal link between them.</p>

      <h2>Local events and news</h2>
      <p>Write about local events and partnerships to attract nearby searchers and backlinks.</p>
    </article>
  )
}
