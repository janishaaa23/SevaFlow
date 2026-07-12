import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function VolunteerOpportunitiesPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Opportunities</CardTitle>
          <CardDescription>Placeholder opportunities view for volunteers.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">No opportunity list is wired here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
