"use client";
import React, { useEffect, useRef, useState } from "react";

// Updated sample with more items so sliding is visible
const sample = [
  { quote: "Amazing service, the team was professional and responsive.", author: "Ravi K.", role: "Happy Customer" },
  { quote: "A delightful experience from start to finish.", author: "Priya S.", role: "Verified Client" },
  { quote: "Exceeded expectations — would recommend to everyone.", author: "Arjun M.", role: "Long-time Client" },
  { quote: "Great value and excellent communication.", author: "Sneha T.", role: "New Customer" },
  { quote: "Fast, friendly and helpful service.", author: "Karan P.", role: "Client" },
  { quote: "Quality that speaks for itself.", author: "Meera L.", role: "Customer" },
  { quote: "They went above and beyond to help.", author: "Anil R.", role: "Satisfied Client" },
  { quote: "Professional team and excellent follow-up.", author: "Sana Q.", role: "Repeat Customer" },
];

export default function Testimonials({ autoplay = true, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const len = sample.length;
  const timerRef = useRef(null);

  // responsive visible count
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      let v = 1;
      if (w >= 1024) v = 4; // desktop: 4 cards
      else if (w >= 768) v = 3; // tablet: 3
      else if (w >= 640) v = 2; // small tablet / landscape mobile: 2
      else v = 1; // mobile
      setVisibleCount(v);
      // clamp index to valid range when visibleCount changes
      setIndex((cur) => Math.min(cur, Math.max(0, len - v)));
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [len]);

  // autoplay advances one card at a time
  useEffect(() => {
    if (!autoplay) return;
    if (len <= visibleCount) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => {
        const maxStart = Math.max(0, len - visibleCount);
        return i >= maxStart ? 0 : i + 1;
      });
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [autoplay, interval, len, visibleCount]);

  function goto(i) {
    const maxStart = Math.max(0, len - visibleCount);
    const next = Math.max(0, Math.min(i, maxStart));
    setIndex(next);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  const maxStart = Math.max(0, len - visibleCount);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-slate-900">Testimonials</h2>
      <p className="mt-2 text-slate-600">What our customers say</p>

      <div className="relative mt-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
          >
            {sample.map((t, i) => (
              <div key={i} className="px-2 shrink-0" style={{ width: `${100 / visibleCount}%` }}>
                <div className="rounded-xl border p-6 bg-white shadow-sm h-full flex flex-col justify-between">
                  <p className="text-slate-700 text-lg">“{t.quote}”</p>
                  <div className="mt-4">
                    <div className="font-semibold text-black">{t.author}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next buttons (only show when there is overflow) */}
        {len > visibleCount && (
          <>
            <button
              aria-label="Previous"
              onClick={() => goto(index - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => goto(index + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              ›
            </button>
          </>
        )}

        {/* Indicators show the possible start positions (one per card-shift) */}
        {len > visibleCount && (
          <div className="flex gap-2 justify-center mt-4">
            {Array.from({ length: maxStart + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goto(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-sky-600" : "bg-slate-300"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
