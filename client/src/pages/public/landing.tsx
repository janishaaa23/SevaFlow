import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function LandingPage() {
  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle>Landing</CardTitle>
          <CardDescription>Public landing experience for SevaFlow.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">This is a placeholder page for the public entry point.</p>
          <div className="flex flex-wrap gap-3">
            <Button>Get started</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
