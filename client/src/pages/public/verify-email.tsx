import { Link } from 'react-router-dom'
import { CheckCircle2, MailOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function VerifyEmailPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-8">
      <Card className="w-full max-w-xl border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300">
            <MailOpen className="h-7 w-7" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl">Check your email</CardTitle>
            <CardDescription>We’ve prepared a secure confirmation step for your account setup.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
              <span>Verification instructions and next steps are displayed here as a premium UI placeholder.</span>
            </div>
          </div>
          <Button variant="outline" className="w-full rounded-full">
            Resend Email
          </Button>
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            <Link to="/login" className="font-medium text-blue-600 transition-colors hover:text-blue-700">
              Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
