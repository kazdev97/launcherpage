import Image from 'next/image'
import { ImageIcon, Info } from 'lucide-react'
import type { Step } from '@/lib/guide-data'

export function ScreenshotSlot({
  caption,
  src,
}: {
  caption: string
  src?: string
}) {
  // next/image requiere rutas absolutas (que empiecen con "/") o una URL completa.
  // Normalizamos las rutas relativas (p. ej. "launcher_1.png") añadiendo la barra inicial.
  const normalizedSrc = src
    ? /^(https?:)?\/\//.test(src) || src.startsWith('/')
      ? src
      : `/${src}`
    : undefined

  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      {normalizedSrc ? (
        <Image
          src={normalizedSrc}
          alt={caption}
          width={1280}
          height={720}
          className="h-auto w-full"
        />
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-muted/40 px-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-md border border-dashed border-border text-muted-foreground">
            <ImageIcon className="h-6 w-6" />
          </span>
          <p className="max-w-sm text-sm text-muted-foreground text-pretty">
            {caption}
          </p>
          <p className="font-mono text-xs text-muted-foreground/70">
            Sustituye con tu captura
          </p>
        </div>
      )}
      <figcaption className="border-t border-border bg-card px-4 py-2.5 text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}

export function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <div className="flex gap-4 sm:gap-5">
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-sm font-semibold text-primary-foreground">
          {index + 1}
        </span>
        <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <div className="flex-1 pb-10">
        <h3 className="text-lg font-semibold text-balance">{step.title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
          {step.description}
        </p>

        {step.notes && step.notes.length > 0 && (
          <ul className="mt-4 flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
            {step.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground text-pretty">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        )}

        {step.screenshot && (
          <div className="mt-4">
            <ScreenshotSlot
              caption={step.screenshot.caption}
              src={step.screenshot.src}
            />
          </div>
        )}
      </div>
    </div>
  )
}
