import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function SuccessState() {
  return (
    <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/40">
      <CardContent className="flex items-center gap-3 py-6">
        <CheckCircle2 className="h-5 w-5 text-green-600" />
        <div>
          <h3 className="font-semibold text-green-900 dark:text-green-200">Completed successfully</h3>
          <p className="text-sm text-green-700 dark:text-green-300">This preview state confirms the design treatment.</p>
        </div>
      </CardContent>
    </Card>
  )
}
