import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { PageWrapper } from '@/components/layout/page-wrapper'

const authRoutes = ['/login', '/register', '/forgot-password', '/verify-email', '/reset-password']

export function PublicLayout() {
  const location = useLocation()
  const isAuthRoute = authRoutes.includes(location.pathname)

  if (isAuthRoute) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Outlet />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <PageWrapper>
        <Container>
          <Outlet />
        </Container>
      </PageWrapper>
      <Footer />
    </div>
  )
}
