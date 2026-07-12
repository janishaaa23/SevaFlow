import { Link } from 'react-router-dom'
import { MailOpen, ShieldCheck } from 'lucide-react'
import { AuthLayout } from '@/components/auth/auth-layout'
import { SuccessStateCard } from '@/components/auth/auth-state-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function VerifyEmailPage() {
  return (
    <AuthLayout
      brandTitle="Check your inbox."
      brandDescription="A polished confirmation step keeps the experience calm and trustworthy while your account is prepared."
      brandPoints={[
        { label: 'Secure setup', icon: ShieldCheck },
        { label: 'Email ready', icon: MailOpen },
      ]}
      brandContent={
        <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-lg shadow-slate-200/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="rounded-[1.25rem] border border-slate-200/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96),_rgba(241,245,249,0.86))] p-6 dark:border-slate-800 dark:bg-slate-950/70">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 animate-float">
              <MailOpen className="h-7 w-7" />
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-slate-900 dark:text-slate-100">Verification email is on the way</p>
            <p className="mt-2 text-center text-sm leading-6 text-slate-600 dark:text-slate-400">Use this UI-only moment to guide citizens toward the next step.</p>
          </div>
        </div>
      }
    >
      <Card className="w-full border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300">
            <MailOpen className="h-7 w-7" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl text-slate-950 dark:text-slate-50">Check your email</CardTitle>
            <CardDescription className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              We’ve prepared a secure confirmation step for your account setup.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <SuccessStateCard
            title="Verification pending"
            description="Verification instructions and next steps are displayed here as a premium UI placeholder."
          />
          <Button variant="outline" className="w-full rounded-full" disabled>
            Resend Email · 01:30
          </Button>
          <Button className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-600/25">
            Open Email App
          </Button>
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            <Link to="/login" className="font-medium text-blue-600 transition-colors hover:text-blue-700">
              Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
