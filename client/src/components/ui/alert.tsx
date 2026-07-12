import * as React from 'react'
import { cn } from '@/lib/utils'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive'
}

function Alert({ className, variant = 'default', ...props }: AlertProps) {
  const tone = {
    default: 'border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100',
    success: 'border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-200',
    warning: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
    destructive: 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200',
  }[variant]

  return <div className={cn('rounded-xl border p-4 text-sm', tone, className)} {...props} />
}

export { Alert }
