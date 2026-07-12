import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from './container'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`rounded-full border border-white/70 bg-white/70 px-3 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 dark:border-slate-800/70 dark:bg-slate-950/70 ${isScrolled ? 'py-2 shadow-[0_12px_48px_rgba(37,99,235,0.12)]' : 'py-3'}`}
      >
        <Container className="flex items-center justify-between gap-3 px-0">
          <Link to="/" className="flex items-center gap-2 rounded-full px-2 py-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">SevaFlow</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Citizen services</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/register">Get Started</Link>
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </div>

      {isMobileMenuOpen ? (
        <div className="mt-3 rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-3 shadow-lg backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <Link to="/login">Login</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
