import { LayoutGrid, Layers3, Sparkles, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Components', icon: Layers3 },
  { label: 'Tokens', icon: Sparkles },
  { label: 'Settings', icon: Settings },
]

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn('hidden w-64 shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:block', className)}>
      <div className="mb-6 px-2">
        <p className="text-sm font-semibold text-blue-600">SevaFlow</p>
        <p className="text-sm text-slate-500">Reusable UI kit</p>
      </div>
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <button key={item.label} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
