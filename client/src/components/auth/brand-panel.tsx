import type { ReactNode } from 'react'
import { Sparkles } from 'lucide-react'

interface BrandPanelProps {
  title: string
  description: string
  badge?: string
  points?: Array<{ label: string; icon?: React.ElementType }>
  children?: ReactNode
}

export function BrandPanel({ title, description, badge = 'SevaFlow', points, children }: BrandPanelProps) {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_32%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(239,246,255,0.95))] p-8 sm:p-10 lg:p-12 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_32%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.96))]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.48)_50%,transparent_100%)] opacity-35" />
      <div className="relative z-10 space-y-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{badge}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Trusted for modern public services</p>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="max-w-md text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
            {title}
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>
        </div>

        {points && points.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {points.map((point) => {
              const Icon = point.icon
              return (
                <div
                  key={point.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                >
                  {Icon ? <Icon className="h-4 w-4 text-blue-600" /> : null}
                  {point.label}
                </div>
              )
            })}
          </div>
        ) : null}
      </div>

      {children ? <div className="relative z-10 mt-10">{children}</div> : null}
    </div>
  )
}
