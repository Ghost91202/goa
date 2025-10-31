import React from 'react'
import posts from '../../posts'

export const metadata = {
  title: 'Blog',
  description: 'Articles and SEO tips'
}

export default function BlogPage(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl text-black font-bold">Blog</h1>
      <p className="mt-2 text-black">Latest articles</p>

      <div className="mt-6 text-pink-500 grid gap-6">
        {posts.map(p => (
          <article key={p.slug} className="border border-black rounded-lg p-4">
            <h2 className="text-xl font-semibold"><a href={`/blog/${p.slug}`} className="hover:underline">{p.title}</a></h2>
            <div className="text-sm text-slate-500 mt-1">{p.date || ''}</div>
            <p className="text-sm text-slate-600 mt-2">{p.description}</p>
            <div className="mt-3">
              <a href={`/blog/${p.slug}`} className="text-sky-600 hover:underline">Read article</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
