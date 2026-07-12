import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Container } from './container'

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <Container className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-semibold text-blue-600">SevaFlow</p>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Design System</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 sm:flex dark:border-slate-800 dark:bg-slate-900">
            <Search className="h-4 w-4 text-slate-500" />
            <Input placeholder="Search" className="h-8 w-40 border-0 bg-transparent p-0 shadow-none" />
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <Avatar>
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
        </div>
      </Container>
    </header>
  )
}
