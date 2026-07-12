import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Circle, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const benefitCards = [
  { title: 'Instant access', description: 'Start bookings and queue updates immediately.', icon: Sparkles },
  { title: 'Trusted profile', description: 'A single secure identity for every public service.', icon: ShieldCheck },
  { title: 'Queue-ready', description: 'Move from arrival to assistance without friction.', icon: Users },
  { title: 'AI guidance', description: 'Receive smart next steps before you arrive.', icon: CheckCircle2 },
]

export function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_34%),linear-gradient(135deg,_rgba(248,250,252,0.97),_rgba(239,246,255,0.94))] px-4 py-4 sm:px-6 lg:px-0 lg:py-0 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.16),_transparent_34%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.96))]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-12 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:grid-cols-[0.4fr_0.6fr] lg:min-h-[calc(100vh-2rem)] dark:border-slate-800 dark:bg-slate-950/70">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_32%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(239,246,255,0.95))] p-8 sm:p-10 lg:p-12 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_32%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.96))]">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.48)_50%,transparent_100%)] opacity-35" />
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">SevaFlow</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Trusted for modern public services</p>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-md text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
                  Create a seamless service profile.
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
                  Join a calmer, smarter way to access appointments, queue updates, and digitally guided assistance.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {benefitCards.map((card, index) => {
                  const Icon = card.icon
                  return (
                    <div
                      key={card.title}
                      className={`rounded-[1.25rem] border border-white/70 bg-white/70 p-4 shadow-lg shadow-slate-200/60 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delay'}`}
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{card.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
            <Card className="w-full max-w-[520px] border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl text-slate-950 dark:text-slate-50">Create your account</CardTitle>
                <CardDescription className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Start your digital public service journey with one secure profile.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <form className="space-y-5" noValidate>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        First name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        placeholder="Aarav"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        placeholder="Sharma"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="register-email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email address
                    </label>
                    <input
                      id="register-email"
                      type="email"
                      placeholder="name@government.gov"
                      className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="register-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Password
                      </label>
                      <input
                        id="register-password"
                        type="password"
                        placeholder="Create a password"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirm-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Confirm password
                      </label>
                      <input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm password"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="department" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Department
                      </label>
                      <select
                        id="department"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      >
                        <option value="">Choose department</option>
                        <option value="passport">Passport</option>
                        <option value="municipal">Municipal</option>
                        <option value="revenue">Revenue</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Role
                      </label>
                      <select
                        id="role"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                      >
                        <option value="">Select role</option>
                        <option value="citizen">Citizen</option>
                        <option value="officer" disabled>
                          Officer
                        </option>
                        <option value="admin" disabled>
                          Admin
                        </option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    I agree to the terms and privacy policy for SevaFlow.
                  </label>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-600/25"
                  >
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
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
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-blue-600 transition-colors hover:text-blue-700">
                    Log in
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
