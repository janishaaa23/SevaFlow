import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function VolunteerDashboardPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Volunteer Dashboard</CardTitle>
          <CardDescription>Placeholder dashboard shell for volunteers.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">Volunteer workflows are not implemented.</p>
        </CardContent>
      </Card>
    </div>
  )
}
