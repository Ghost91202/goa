import React from 'react'

export default function Section({ title, children, className = '' }){
  return (
    <section className={`my-12 ${className}`.trim()}>
      {title && <h2 className="text-2xl text-black font-semibold mb-4">{title}</h2>}
      {children}
    </section>
  )
}
