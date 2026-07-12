import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

export function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <Button variant="outline" size="sm">
        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((page) => (
          <Button key={page} variant={page === 2 ? 'default' : 'outline'} size="sm">
            {page}
          </Button>
        ))}
      </div>
      <Button variant="outline" size="sm">
        Next <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
