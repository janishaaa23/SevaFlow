import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function RegisterPage() {
  return (
    <div className="py-6">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Placeholder registration page for SevaFlow.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This route is scaffolded for future onboarding flows.</p>
        </CardContent>
      </Card>
    </div>
  )
}
