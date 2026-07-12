import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CitizenAppointmentsPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>My Appointments</CardTitle>
          <CardDescription>Placeholder appointments view for citizens.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This route is for shelling the citizen experience.</p>
        </CardContent>
      </Card>
    </div>
  )
}
