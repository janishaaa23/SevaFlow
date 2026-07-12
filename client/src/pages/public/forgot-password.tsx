import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-8">
      <Card className="w-full max-w-xl border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <CardHeader className="space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
            <Mail className="h-5 w-5" />
          </div>
          <CardTitle className="text-2xl">Reset your password</CardTitle>
          <CardDescription>Enter your email and we’ll guide you to the next step.</CardDescription>
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
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900"
            />
          </div>
          <Button className="w-full rounded-full">Send Reset Link</Button>
          <div className="flex items-center justify-center text-sm text-slate-600 dark:text-slate-400">
            <Link to="/login" className="inline-flex items-center gap-2 transition-colors hover:text-blue-600">
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300">
            <div className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4" />
              <span>This screen is UI-only and does not send or validate any email.</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
