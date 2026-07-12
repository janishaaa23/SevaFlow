import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function StatCard({ title, value, hint, trend }: { title: string; value: string; hint?: string; trend?: 'up' | 'down' }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">{title}</CardTitle>
          {trend ? <Badge variant={trend === 'up' ? 'success' : 'warning'}>{trend === 'up' ? '▲' : '▼'}</Badge> : null}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{value}</div>
        {hint ? <p className="mt-1 text-sm text-slate-500">{hint}</p> : null}
      </CardContent>
    </Card>
  )
}
