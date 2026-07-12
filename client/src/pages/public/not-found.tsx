import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="py-6">
      <Card className="mx-auto max-w-xl text-center">
        <CardHeader>
          <CardTitle>404 Not Found</CardTitle>
          <CardDescription>The page you are looking for does not exist.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">This is a placeholder route for unknown paths.</p>
          <Button asChild>
            <Link to="/">Go to home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
