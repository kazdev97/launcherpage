'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { GuideContent } from '@/components/guide-content'
import { SECTIONS } from '@/lib/guide-data'

export default function Page() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  const handleNavigate = (id: string) => {
    setActiveId(id)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[18rem_1fr]">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />
      <main className="min-w-0">
        <GuideContent activeId={activeId} onNavigate={handleNavigate} />
      </main>
    </div>
  )
}
