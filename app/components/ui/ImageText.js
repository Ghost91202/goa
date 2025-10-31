"use client";
import React from 'react';
import Image from 'next/image';

export default function ImageText({
  title,
  content,
  image,
  alt = "",
  imageLeft = false,
  className = ""
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${className}`}>
      <div className={imageLeft ? "order-0" : "order-last"}>
        <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div>
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
        <div className="prose max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
}
