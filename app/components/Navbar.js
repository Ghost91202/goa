"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* thin accent strip like fashion sites */}
      <div className="h-1 bg-linear-to-r from-[#ff3b8f] to-[#b11261]" />
      <div className="backdrop-blur bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff3b8f] to-[#b11261]"
            onClick={() => setOpen(false)}
          >
            MySite
          </Link>

          {/* Hamburger - visible on small screens */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <svg
              className="w-6 h-6 text-slate-900"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu - hidden on small screens unless open */}
          <nav
            className={`absolute inset-x-4 top-full bg-white rounded-b-lg shadow-md md:static md:bg-transparent md:inset-auto md:top-auto md:block ${
              open ? "block" : "hidden"
            } md:ml-6`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:gap-6 p-4 md:p-0">
              <li>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/category"
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Category
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/location"
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Location
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>

              <li className="mt-2 md:mt-0">
                <Link
                  href="/blog"
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
              </li>



              <li>
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>

<li className="md:ml-3 md:mt-0">
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-3 py-2 rounded-md btn-nykaa text-sm"
                  onClick={() => setOpen(false)}
                >
                  +91 000000000
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
