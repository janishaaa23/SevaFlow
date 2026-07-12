import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutPage() {
  return (
    <div className="py-6">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>Information about the SevaFlow platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This page is intentionally limited to placeholder content.</p>
        </CardContent>
      </Card>
    </div>
  )
}
