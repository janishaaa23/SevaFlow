import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function TermsPage() {
  return (
    <div className="py-6">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Terms & Conditions</CardTitle>
          <CardDescription>Placeholder terms and conditions page.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This route is reserved for future legal content.</p>
        </CardContent>
      </Card>
    </div>
  )
}
