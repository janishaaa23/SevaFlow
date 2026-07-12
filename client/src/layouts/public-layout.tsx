import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { PageWrapper } from '@/components/layout/page-wrapper'

export function PublicLayout() {
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
