import { Link } from 'react-router-dom'
import { CheckCircle2, Lock, Mail, ShieldCheck, Sparkles, Users, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const trustBadges = [
  { label: 'Secure', icon: ShieldCheck },
  { label: 'Government Ready', icon: Users },
  { label: 'AI Powered', icon: Sparkles },
  { label: 'Fast Queue Management', icon: CheckCircle2 },
]

export function LoginPage() {
  return (
    <div className="min-h-[80vh] py-6 md:py-10">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_35%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(239,246,255,0.95))] p-8 md:p-10 lg:p-12 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.96))]">
          <div className="absolute -left-10 top-12 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">SevaFlow</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">AI-powered public service experiences</p>
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
                  Sign in to manage your service journey.
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
                  Book appointments, track queue status, and prepare documents with a modern, trusted platform.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon
                  return (
                    <div key={badge.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
                      <Icon className="h-4 w-4 text-blue-600" />
                      {badge.label}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              <svg viewBox="0 0 420 220" className="w-full" aria-label="Illustration of a digital service journey">
                <rect x="40" y="34" width="340" height="146" rx="24" fill="rgba(15,23,42,0.07)" stroke="rgba(37,99,235,0.18)" />
                <rect x="72" y="62" width="110" height="16" rx="8" fill="#2563EB" opacity="0.85" />
                <rect x="72" y="92" width="170" height="12" rx="6" fill="rgba(148,163,184,0.8)" />
                <rect x="72" y="114" width="148" height="12" rx="6" fill="rgba(148,163,184,0.6)" />
                <rect x="250" y="58" width="96" height="70" rx="18" fill="#0F172A" />
                <circle cx="298" cy="92" r="20" fill="#38BDF8" />
                <path d="M284 94c7-12 19-18 32-18" stroke="white" strokeWidth="7" strokeLinecap="round" />
                <rect x="84" y="148" width="230" height="22" rx="11" fill="rgba(37,99,235,0.15)" />
                <rect x="100" y="154" width="112" height="10" rx="5" fill="#34D399" />
                <circle cx="82" cy="182" r="7" fill="#F59E0B" />
                <circle cx="106" cy="182" r="7" fill="white" />
                <circle cx="130" cy="182" r="7" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 md:p-10">
          <Card className="w-full max-w-lg border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>Access your service dashboard and continue your journey.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input id="email" type="email" placeholder="name@government.gov" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input id="password" type="password" placeholder="Enter your password" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="font-medium text-blue-600 transition-colors hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full rounded-full">Login</Button>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                <span>or</span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>
              <Button variant="outline" className="w-full rounded-full" disabled>
                <Circle className="mr-2 h-4 w-4" />
                Continue with Google · Coming Soon
              </Button>
              <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                New here?{' '}
                <Link to="/register" className="font-medium text-blue-600 transition-colors hover:text-blue-700">
                  Create account
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
