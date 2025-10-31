"use client"
import React from 'react'
import Image from 'next/image'

export default function ProfileModal({ profile, onClose }) {
  if (!profile) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-md shadow-lg w-full max-w-2xl mx-4 overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src={profile.image} alt={profile.name} fill className="object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-black">{profile.name}</h3>
              <p className="text-sm text-slate-600">{profile.role}</p>
            </div>
            <button onClick={onClose} className="text-slate-500">Close ✕</button>
          </div>

          <div className="mt-4 text-sm text-slate-700">
            <p>{profile.bio || 'No detailed bio available. Contact to request more info.'}</p>
            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li>Rating: ⭐ {profile.rating || 4.5}</li>
              <li>Location: {profile.location || 'Not specified'}</li>
              {profile.age && <li>Age: {profile.age}</li>}
              {profile.height && <li>Height: {profile.height} cm</li>}
              {profile.weight && <li>Weight: {profile.weight} kg</li>}
              {profile.languages && <li>Languages: {profile.languages.join(', ')}</li>}
              {profile.services && <li>Services: {profile.services.join(', ')}</li>}
              {profile.availability && <li>Availability: {profile.availability}</li>}
              {profile.contact && <li>Contact: {profile.contact}</li>}
            </ul>
          </div>

          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/918433522673?text=${encodeURIComponent(`Hi, I'm interested in ${profile.name}`)}`} className="inline-flex items-center px-4 py-2 btn-nykaa rounded-md text-white">Contact via WhatsApp</a>

          </div>
        </div>
      </div>
    </div>
  )
}
