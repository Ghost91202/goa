"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Card from "./Card"

export default function ShowMoreGrid({ items = [], variant = "city", initial = 4 }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? items : items.slice(0, initial)

  return (
    <div>
      <div
        className={
          variant === "hotel"
            ? "grid grid-cols-1 sm:grid-cols-2 text-black lg:grid-cols-3 gap-6"
            : "grid grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {visible.map((it, i) => {
          // Default fallback slug if not provided (normalize the name)
          const slug =
            it.slug ||
            it.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

          const card = (
            <Card key={i} className="p-0 overflow-hidden w-auto  text-center cursor-pointer hover:scale-[1.02] transition">
              <div className="relative w-full h-40">
                {typeof it.image === "string" && it.image.startsWith("http") ? (
                  <img
                    src={it.image}
                    alt={it.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Image src={it.image} alt={it.name} fill className="object-cover" />
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold">{it.name}</h3>

                {variant === "hotel" ? (
                  <div className="mt-3 flex gap-2 justify-center">
                    <a
                      href={`https://wa.me/${it.wa || "918433522673"}?text=${encodeURIComponent(
                        `Hi, I want to book at ${it.name}`
                      )}`}
                      className="inline-flex items-center px-3 py-2 btn-nykaa rounded-md text-white"
                    >
                      Book a call
                    </a>
                    <a
                      href={`/gallery`}
                      className="inline-flex items-center px-3 py-2 border rounded-md text-slate-700"
                    >
                      View photos
                    </a>
                  </div>
                ) : (
                  <p className="text-sm text-slate-600 mt-2">
                    Explore providers in {it.name}
                  </p>
                )}
              </div>
            </Card>
          )

          // For city variant: wrap the card with Link to the dynamic city route
          if (variant === "city") {
            const href = `/location/${encodeURIComponent(slug)}`
            return (
              <Link key={i} href={href} className="block">
                {card}
              </Link>
            )
          }

          // For hotels: return the plain card (no link)
          return <React.Fragment key={i}>{card}</React.Fragment>
        })}
      </div>

      {/* Show More / See Less Button */}
      {items.length > initial && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="inline-flex items-center px-4 py-2 border-black border-2 rounded-md hover:bg-slate-50 text-black transition"
          >
            {showAll
              ? "See less"
              : `See more (${
                  items.length - visible.length > 0
                    ? items.length - visible.length
                    : items.length
                })`}
          </button>
        </div>
      )}
    </div>
  )
}
