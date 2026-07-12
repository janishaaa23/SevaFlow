import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react'
import { AuthLayout } from '@/components/auth/auth-layout'
import { SuccessStateCard } from '@/components/auth/auth-state-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ForgotPasswordPage() {
  return (
    <AuthLayout
      brandTitle="Secure your access."
      brandDescription="Recover access to your SevaFlow profile without leaving the trusted public service experience."
      brandPoints={[
        { label: 'Secure Recovery', icon: ShieldCheck },
        { label: 'Private Guidance', icon: Mail },
      ]}
      brandContent={
        <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-lg shadow-slate-200/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="rounded-[1.25rem] border border-slate-200/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96),_rgba(241,245,249,0.86))] p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Protected recovery flow</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">A calm, secure path back to your account.</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <Card className="w-full border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <CardHeader className="space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
            <Mail className="h-5 w-5" />
          </div>
          <CardTitle className="text-2xl text-slate-950 dark:text-slate-50">Reset your password</CardTitle>
          <CardDescription className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Enter your email and we’ll guide you to the next step.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="forgot-email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email address
            </label>
            <input
              id="forgot-email"
              type="email"
              placeholder="name@government.gov"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              aria-label="Email address"
            />
          </div>
          <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-600/25">
            Send Reset Link
          </Button>
          <div className="flex items-center justify-center text-sm text-slate-600 dark:text-slate-400">
            <Link to="/login" className="inline-flex items-center gap-2 transition-colors hover:text-blue-600">
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
          <SuccessStateCard
            title="UI-only experience"
            description="This screen is intentionally presentational and does not send or validate any email."
          />
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
