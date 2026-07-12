import type { ReactNode } from 'react'

import { BrandPanel } from '@/components/auth/brand-panel'

interface AuthLayoutProps {
  children: ReactNode
  brandTitle: string
  brandDescription: string
  brandBadge?: string
  brandPoints?: Array<{ label: string; icon?: React.ElementType }>
  brandContent?: ReactNode
}

export function AuthLayout({
  children,
  brandTitle,
  brandDescription,
  brandBadge = 'SevaFlow',
  brandPoints,
  brandContent,
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_34%),linear-gradient(135deg,_rgba(248,250,252,0.97),_rgba(239,246,255,0.94))] px-4 py-4 sm:px-6 lg:px-0 lg:py-0 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.14),_transparent_34%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.96))]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-12 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:grid-cols-[0.4fr_0.6fr] lg:min-h-[calc(100vh-2rem)] dark:border-slate-800 dark:bg-slate-950/70">
          <BrandPanel
            title={brandTitle}
            description={brandDescription}
            badge={brandBadge}
            points={brandPoints}
          >
            {brandContent}
          </BrandPanel>

          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
            <div className="w-full max-w-[500px]">{children}</div>
          </div>
        </section>
      </div>
    </main>
  )
}
