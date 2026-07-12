import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TablePreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-slate-700 dark:text-slate-300">Name</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 dark:text-slate-300">Service</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-950">
              <tr>
                <td className="px-4 py-3">Asha Verma</td>
                <td className="px-4 py-3">Passport Renewal</td>
                <td className="px-4 py-3">Queued</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
