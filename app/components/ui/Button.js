"use client";
import React from 'react';
import Link from 'next/link';

const variants = {
  primary: "bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow",
  nykaa: "btn-nykaa",
  secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 shadow-sm hover:shadow",
  outline: "border-2 border-sky-600 text-sky-600 hover:bg-sky-50",
  whatsapp: "bg-green-600 hover:bg-green-700 text-white shadow-sm hover:shadow",
  ghost: "hover:bg-slate-100 text-slate-700"
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg"
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-md transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
