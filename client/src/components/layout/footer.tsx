import { Link } from 'react-router-dom'
import { BookOpen, Globe2, MessageCircle, Send } from 'lucide-react'
import { Container } from './container'

const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

const socialLinks = [
  { label: 'GitHub', icon: Globe2, href: 'https://github.com' },
  { label: 'Twitter', icon: Send, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: MessageCircle, href: 'https://linkedin.com' },
  { label: 'Instagram', icon: BookOpen, href: 'https://instagram.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-8 dark:border-slate-800 dark:bg-slate-950/80">
      <Container className="flex flex-col gap-8 text-sm text-slate-500">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-2">
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">SevaFlow</p>
            <p>Modern digital services for citizens and government teams.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition-colors hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 pt-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SevaFlow. Public service experiences, reimagined.</p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-800">
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
