import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function NgoDashboardPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>NGO Dashboard</CardTitle>
          <CardDescription>Placeholder dashboard shell for NGOs.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This route is part of the scaffolded app structure.</p>
        </CardContent>
      </Card>
    </div>
  )
}
