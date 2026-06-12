'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SECTIONS } from '@/lib/guide-data'
import { StepCard } from '@/components/step-card'

type GuideContentProps = {
  activeId: string
  onNavigate: (id: string) => void
}

export function GuideContent({ activeId, onNavigate }: GuideContentProps) {
  const index = SECTIONS.findIndex((s) => s.id === activeId)
  const section = SECTIONS[index] ?? SECTIONS[0]
  const prev = index > 0 ? SECTIONS[index - 1] : null
  const next = index < SECTIONS.length - 1 ? SECTIONS[index + 1] : null

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 lg:py-16">
      <p className="font-mono text-xs uppercase tracking-wider text-primary">
        {section.group}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {section.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
        {section.intro}
      </p>

      <div className="mt-10 border-t border-border pt-10">
        {section.steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} />
        ))}
      </div>

      {/* Navegación inferior */}
      <nav className="mt-4 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
        {prev ? (
          <button
            onClick={() => onNavigate(prev.id)}
            className="group flex flex-1 items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-left transition-colors hover:border-primary/60"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="flex flex-col">
              <span className="text-xs text-muted-foreground">Anterior</span>
              <span className="text-sm font-medium">{prev.label}</span>
            </span>
          </button>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <button
            onClick={() => onNavigate(next.id)}
            className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-border bg-card px-4 py-3 text-right transition-colors hover:border-primary/60"
          >
            <span className="flex flex-col">
              <span className="text-xs text-muted-foreground">Siguiente</span>
              <span className="text-sm font-medium">{next.label}</span>
            </span>
            <ChevronRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </button>
        ) : (
          <span className="flex-1" />
        )}
      </nav>
    </article>
  )
}
