import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ContactPage() {
  return (
    <div className="py-6">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>Contact information placeholder for SevaFlow.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">This route exists for future public contact support.</p>
        </CardContent>
      </Card>
    </div>
  )
}
