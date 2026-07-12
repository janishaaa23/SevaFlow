import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function NgoCampaignsPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Campaigns</CardTitle>
          <CardDescription>Placeholder campaigns view for NGOs.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">Campaign management is intentionally not implemented.</p>
        </CardContent>
      </Card>
    </div>
  )
}
