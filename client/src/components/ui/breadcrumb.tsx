import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Breadcrumb({ items }: { items: string[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          {index > 0 ? <ChevronRight className="h-4 w-4" /> : null}
          <span className={cn(index === items.length - 1 && 'font-medium text-slate-900 dark:text-slate-100')}>{item}</span>
        </React.Fragment>
      ))}
    </nav>
  )
}
