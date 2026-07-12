import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CitizenDashboardPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Citizen Dashboard</CardTitle>
          <CardDescription>Placeholder dashboard shell for citizens.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This page is a routing placeholder only.</p>
        </CardContent>
      </Card>
    </div>
  )
}
