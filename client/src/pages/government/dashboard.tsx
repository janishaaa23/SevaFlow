import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function GovernmentDashboardPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Government Dashboard</CardTitle>
          <CardDescription>Placeholder dashboard shell for government users.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">Government workflows are not implemented.</p>
        </CardContent>
      </Card>
    </div>
  )
}
