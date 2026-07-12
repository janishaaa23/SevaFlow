import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function RegisterPage() {
  return (
    <div className="min-h-[80vh] py-6 md:py-10">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_35%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(239,246,255,0.95))] p-8 md:p-10 lg:p-12 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.96))]">
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">SevaFlow</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Create your citizen account</p>
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
                  Join a smarter public service experience.
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
                  Register in seconds to access services, appointments, queue updates, and AI-powered guidance.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-blue-600" /> Secure
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
                  <Users className="h-4 w-4 text-blue-600" /> Government Ready
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> AI Powered
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Fast onboarding</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Create your account in a few clicks.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Trusted experience</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Professional, simple, and public-service ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 md:p-10">
          <Card className="w-full max-w-lg border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">Create your account</CardTitle>
              <CardDescription>Start your digital public service journey with one secure profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">First name</label>
                  <input id="first-name" type="text" placeholder="Aarav" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last name</label>
                  <input id="last-name" type="text" placeholder="Sharma" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="register-email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input id="register-email" type="email" placeholder="name@government.gov" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone number</label>
                <input id="phone" type="tel" placeholder="+91 98765 43210" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="register-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                  <input id="register-password" type="password" placeholder="Create a password" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm password</label>
                  <input id="confirm-password" type="password" placeholder="Confirm password" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="department" className="text-sm font-medium text-slate-700 dark:text-slate-300">Department</label>
                  <select id="department" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900">
                    <option>Choose department</option>
                    <option>Passport</option>
                    <option>Municipal</option>
                    <option>Revenue</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
                  <select id="role" className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900">
                    <option>Select role</option>
                    <option>Citizen</option>
                    <option>Officer</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
              <label className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                I agree to the terms and privacy policy for SevaFlow.
              </label>
              <Button className="w-full rounded-full">
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
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
      </div>
    </div>
  )
}
