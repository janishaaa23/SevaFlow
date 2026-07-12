import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, Lock, Mail, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const trustBadges = [
  { label: 'Secure', icon: ShieldCheck },
  { label: 'Government Ready', icon: Users },
  { label: 'AI Powered', icon: Sparkles },
  { label: 'Fast Queue Management', icon: CheckCircle2 },
]

const journeySteps = [
  { label: 'Citizen', position: 'left-[6%] top-[8%] animate-float' },
  { label: 'Appointment Booked', position: 'right-[4%] top-[12%] animate-float-delay' },
  { label: 'Digital Token', position: 'left-[10%] top-[56%] animate-float' },
  { label: 'AI Verification', position: 'right-[8%] top-[48%] animate-float-delay' },
  { label: 'Officer Ready', position: 'left-[26%] bottom-[8%] animate-float' },
  { label: 'Service Completed', position: 'right-[15%] bottom-[10%] animate-float-delay' },
]

export function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.14),_transparent_34%),linear-gradient(135deg,_rgba(248,250,252,0.96),_rgba(239,246,255,0.95))] px-4 py-4 sm:px-6 lg:px-0 lg:py-0 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.15),_transparent_34%),linear-gradient(135deg,_rgba(2,6,23,0.97),_rgba(15,23,42,0.96))]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-20 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:grid-cols-[0.4fr_0.6fr] lg:min-h-[calc(100vh-2rem)] dark:border-slate-800 dark:bg-slate-950/70">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_34%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(239,246,255,0.95))] p-8 sm:p-10 lg:p-12 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_34%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.96))]">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] opacity-40" />
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">SevaFlow</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">AI-powered public service experiences</p>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-md text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
                  Skip the Queue.
                  <br />
                  Not the Service.
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
                  Deliver trusted, frictionless public services with intelligent booking, queue insights, and human-ready handoffs.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon
                  return (
                    <div key={badge.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
                      <Icon className="h-4 w-4 text-blue-600" />
                      {badge.label}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative z-10 mt-10 h-64 rounded-[1.75rem] border border-white/70 bg-white/60 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-slate-200/60 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(241,245,249,0.85))] p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/80" />
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/80" />
                <div className="absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                <div className="absolute inset-x-8 bottom-10 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                {journeySteps.map((step) => (
                  <div
                    key={step.label}
                    className={`absolute rounded-2xl border border-white/80 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-200/70 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 ${step.position}`}
                  >
                    {step.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
            <Card className="w-full max-w-[450px] border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl text-slate-950 dark:text-slate-50">Welcome back</CardTitle>
                <CardDescription className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Sign in to continue your service journey and access your trusted public service tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <form className="space-y-5" noValidate>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="email"
                        type="email"
                        placeholder="name@government.gov"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      />
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

                  <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-600/25">
                    Log in
                  </Button>
                </form>

                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
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
        </section>
      </div>
    </main>
  )
}
