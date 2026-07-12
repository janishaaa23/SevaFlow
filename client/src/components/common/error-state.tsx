import { AlertTriangle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ErrorState() {
  return (
    <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40">
      <CardContent className="flex items-center gap-3 py-6">
        <AlertTriangle className="h-5 w-5 text-red-600" />
        <div>
          <h3 className="font-semibold text-red-900 dark:text-red-200">Something went wrong</h3>
          <p className="text-sm text-red-700 dark:text-red-300">This is a preview-only state.</p>
        </div>
      </CardContent>
    </Card>
  )
}
