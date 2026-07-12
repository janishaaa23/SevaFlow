import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/providers/theme-provider'
import { ToastProvider } from '@/components/ui/toast'
import { router } from '@/routes'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastProvider />
    </ThemeProvider>
  )
}

export default App
