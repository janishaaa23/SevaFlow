import { Container } from './container'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-6 dark:border-slate-800 dark:bg-slate-950/80">
      <Container className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>SevaFlow Design System</p>
        <p>Preview-only · No application logic</p>
      </Container>
    </footer>
  )
}
