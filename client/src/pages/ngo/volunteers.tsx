import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function NgoVolunteersPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Volunteers</CardTitle>
          <CardDescription>Placeholder volunteers view for NGOs.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">No volunteer workflows are implemented.</p>
        </CardContent>
      </Card>
    </div>
  )
}
