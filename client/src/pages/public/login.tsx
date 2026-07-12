import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function LoginPage() {
  return (
    <div className="py-6">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Placeholder sign-in page for SevaFlow.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">Authentication and form handling are intentionally not implemented.</p>
        </CardContent>
      </Card>
    </div>
  )
}
