import { Badge } from '@/components/ui/badge'

export function StatusBadge({ status }: { status: 'queued' | 'in-progress' | 'done' | 'blocked' }) {
  const map = {
    queued: 'secondary',
    'in-progress': 'warning',
    done: 'success',
    blocked: 'destructive',
  } as const

  return <Badge variant={map[status]}>{status.replace('-', ' ')}</Badge>
}
