import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/navbar'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { PageWrapper } from '@/components/layout/page-wrapper'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <PageWrapper>
        <Container className="flex gap-6">
          <Sidebar className="hidden lg:block" />
          <main className="flex-1">
            <Outlet />
          </main>
        </Container>
      </PageWrapper>
      <Footer />
    </div>
  )
}
