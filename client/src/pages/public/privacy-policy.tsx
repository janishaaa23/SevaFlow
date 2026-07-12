import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function PrivacyPolicyPage() {
  return (
    <div className="py-6">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
          <CardDescription>Placeholder privacy policy page.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This route is reserved for future policy content.</p>
        </CardContent>
      </Card>
    </div>
  )
}
