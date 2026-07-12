import { Inbox } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function EmptyState() {
  return (
    <Card className="text-center">
      <CardContent className="py-10">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
          <Inbox className="h-6 w-6 text-slate-500" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">No items yet</h3>
        <p className="mt-2 text-sm text-slate-500">This preview area is intentionally empty.</p>
      </CardContent>
    </Card>
  )
}
