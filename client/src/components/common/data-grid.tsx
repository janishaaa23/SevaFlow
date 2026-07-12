import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DataGrid() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Grid</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <div className="text-sm text-slate-500">Record {index + 1}</div>
            <div className="mt-2 font-semibold text-slate-900 dark:text-slate-100">Citizen Service Summary</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
