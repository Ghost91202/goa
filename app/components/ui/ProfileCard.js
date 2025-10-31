"use client"
import React from 'react'
import Card from './Card'
import Image from 'next/image'

export default function ProfileCard({ profile, onView }) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="relative w-full h-48 ">
        <Image src={profile.image} alt={profile.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-black">{profile.name}</h4>
        <p className="text-sm text-slate-600">{profile.role || 'Top provider'}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-slate-500">⭐ {profile.rating || 4.5}</div>
          {onView ? (
            <button onClick={() => onView(profile)} className="inline-flex items-center px-3 py-2 btn-nykaa rounded-md text-white">View</button>
          ) : (
            <a href={profile.link || '#'} className="inline-flex items-center px-3 py-2 btn-nykaa rounded-md text-white">View</a>
          )}
        </div>
      </div>
    </Card>
  )
}
