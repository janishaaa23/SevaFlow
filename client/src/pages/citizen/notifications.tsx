import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CitizenNotificationsPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Placeholder notification page for citizens.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">No notification data is wired here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
