import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react'
import { AuthLayout } from '@/components/auth/auth-layout'
import { SuccessStateCard } from '@/components/auth/auth-state-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const requirements = [
  'At least 8 characters',
  'One uppercase letter',
  'One number',
  'One special character',
]

export function ResetPasswordPage() {
  return (
    <AuthLayout
      brandTitle="Set a stronger password."
      brandDescription="Guide citizens through a calm security step with clear expectations and reassuring visual feedback."
      brandPoints={[
        { label: 'Secure reset', icon: ShieldCheck },
        { label: 'Protected account', icon: LockKeyhole },
      ]}
      brandContent={
        <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-lg shadow-slate-200/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="rounded-[1.25rem] border border-slate-200/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96),_rgba(241,245,249,0.86))] p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Strong password guidance</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">This is a visual-only strength indicator for the reset experience.</p>
          </div>
        </div>
      }
    >
      <Card className="w-full border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <CardHeader className="space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
            <LockKeyhole className="h-5 w-5" />
          </div>
          <CardTitle className="text-2xl text-slate-950 dark:text-slate-50">Set a new password</CardTitle>
          <CardDescription className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Create a fresh password for your SevaFlow account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="new-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              New password
            </label>
            <input
              id="new-password"
              type="password"
              placeholder="Enter a secure password"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              aria-label="New password"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Confirm password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Re-enter your password"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              aria-label="Confirm password"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Password strength</p>
              <span className="text-sm font-medium text-emerald-600">Strong</span>
            </div>
            <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {requirements.map((requirement) => (
                <li key={requirement} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-600/25">
            Reset Password
          </Button>
          <SuccessStateCard
            title="Visual-only reset"
            description="This password flow is UI-only and does not perform validation or send requests."
          />
          <div className="flex items-center justify-center text-sm text-slate-600 dark:text-slate-400">
            <Link to="/login" className="inline-flex items-center gap-2 transition-colors hover:text-blue-600">
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
