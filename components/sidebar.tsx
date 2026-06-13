'use client'

import { useState } from 'react'
import { Menu, X, Boxes } from 'lucide-react'
import { GROUPS, SECTIONS } from '@/lib/guide-data'
import { cn } from '@/lib/utils'

type SidebarProps = {
  activeId: string
  onNavigate: (id: string) => void
}

function NavList({
  activeId,
  onNavigate,
}: {
  activeId: string
  onNavigate: (id: string) => void
}) {
  return (
    <nav className="flex flex-col gap-6">
      {GROUPS.map((group) => {
        const items = SECTIONS.filter((s) => s.group === group)
        if (items.length === 0) return null
        return (
          <div key={group} className="flex flex-col gap-1">
            <p className="px-3 mb-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {group}
            </p>
            {items.map((section) => {
              const isActive = section.id === activeId
              return (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-foreground font-medium'
                      : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'h-1.5 w-1.5 shrink-0 rounded-[2px]',
                      isActive ? 'bg-primary' : 'bg-border',
                    )}
                    aria-hidden="true"
                  />
                  {section.label}
                </button>
              )
            })}
          </div>
        )
      })}
    </nav>
  )
}

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (id: string) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <>
      {/* Encabezado móvil */}
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-primary text-primary-foreground">
            <Boxes className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-semibold">KazLauncher</span>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Overlay móvil */}
      {open && (
        <button
          className="lg:hidden fixed inset-0 z-30 bg-background/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-72 transform border-r border-sidebar-border bg-sidebar transition-transform duration-200 lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-full flex-col">
          <div className="hidden lg:flex items-center gap-2.5 border-b border-sidebar-border px-6 py-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-primary text-primary-foreground">
              <Boxes className="h-5 w-5" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-mono text-sm font-semibold">
                KazLauncher
              </span>
              <span className="text-xs text-muted-foreground">Guía de uso</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-6 mt-12 lg:mt-0">
            <NavList activeId={activeId} onNavigate={handleNavigate} />
          </div>
        </div>
      </aside>
    </>
  )
}
