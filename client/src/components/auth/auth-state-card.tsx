import type { ReactNode } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

interface AuthStateCardProps {
  type: 'success' | 'error'
  title: string
  description: string
  children?: ReactNode
}

export function AuthStateCard({ type, title, description, children }: AuthStateCardProps) {
  const isSuccess = type === 'success'
  const Icon = isSuccess ? CheckCircle2 : AlertCircle
  const containerClass = isSuccess
    ? 'border-emerald-200 bg-emerald-50/80 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300'
    : 'border-rose-200 bg-rose-50/80 text-rose-700 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-300'

  return (
    <div className={`rounded-2xl border p-4 ${containerClass}`}>
      <div className="flex items-start gap-2">
        <Icon className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="space-y-1">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-sm leading-6">{description}</p>
          {children ? <div className="pt-1">{children}</div> : null}
        </div>
      </div>
    </div>
  )
}

export function SuccessStateCard(props: Omit<AuthStateCardProps, 'type'>) {
  return <AuthStateCard type="success" {...props} />
}

export function ErrorStateCard(props: Omit<AuthStateCardProps, 'type'>) {
  return <AuthStateCard type="error" {...props} />
}
