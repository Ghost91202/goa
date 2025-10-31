"use client"
import React, { useMemo, useState } from 'react'
import ProfileCard from './ProfileCard'
import ProfileModal from './ProfileModal'

export default function ProfilesList({ profiles = [] }) {
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [selected, setSelected] = useState(null)

  const roles = useMemo(() => {
    const s = new Set(profiles.map(p => p.role).filter(Boolean))
    return ['', ...Array.from(s)]
  }, [profiles])

  const filtered = profiles.filter(p => {
    const matchesQuery = query.trim() === '' || p.name.toLowerCase().includes(query.toLowerCase()) || (p.role || '').toLowerCase().includes(query.toLowerCase())
    const matchesRole = roleFilter === '' || (p.role || '') === roleFilter
    return matchesQuery && matchesRole
  })

  return (
    <div>
      <div className="mb-4 text-black flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search profiles" className="flex-1 px-3 py-2 border rounded-md" />
        <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)} className="px-3 py-2 border rounded-md bg-pink-500 text-white font-bold">
          {roles.map((r, i) => (
            <option key={i} value={r}>{r === '' ? 'All roles' : r}</option>
          ))}
        </select>
        <div className="ml-auto text-sm text-slate-500">{filtered.length} profiles</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <div key={i}>
            <ProfileCard profile={p} onView={() => setSelected(p)} />
          </div>
        ))}
      </div>

      {selected && <ProfileModal profile={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
