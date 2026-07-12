import { Link } from 'react-router-dom'
import { BookOpen, Globe2, Mail, MessageCircle } from 'lucide-react'
import { Container } from './container'

const platformLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/#features' },
  { label: 'How it Works', to: '/#how-it-works' },
  { label: 'FAQ', to: '/#faq' },
]

const resourceLinks = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

const connectLinks = [
  { label: 'GitHub', icon: Globe2, href: 'https://github.com' },
  { label: 'LinkedIn', icon: MessageCircle, href: 'https://linkedin.com' },
  { label: 'Email', icon: Mail, href: 'mailto:hello@sevaflow.com' },
  { label: 'Docs', icon: BookOpen, href: '/about' },
]

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/80 py-10 dark:border-slate-800 dark:bg-slate-950/80">
      <Container className="grid gap-8 text-sm text-slate-500 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-3">
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">SevaFlow</p>
          <p className="max-w-xs leading-7">Premium digital experiences for modern public service delivery.</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700 dark:text-slate-300">Platform</p>
          <div className="flex flex-col gap-2">
            {platformLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition-colors hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700 dark:text-slate-300">Resources</p>
          <div className="flex flex-col gap-2">
            {resourceLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition-colors hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700 dark:text-slate-300">Connect</p>
          <div className="flex flex-col gap-2">
            {connectLinks.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-blue-600">
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
