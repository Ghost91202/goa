"use client"
import React, { useState } from 'react'

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const open = i === openIndex
        return (
          <div key={i} className="border rounded-md overflow-hidden">
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-black bg-white">
              <span className="text-left font-medium">{it.q}</span>
              <span className="ml-4 text-sm text-slate-600">{open ? '−' : '+'}</span>
            </button>
            {open && (
              <div className="px-4 py-3 bg-slate-50 text-sm text-slate-700">{it.a}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
