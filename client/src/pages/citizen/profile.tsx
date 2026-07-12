import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CitizenProfilePage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Placeholder profile page for citizens.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">Profile management is not implemented.</p>
        </CardContent>
      </Card>
    </div>
  )
}
