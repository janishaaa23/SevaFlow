import './App.css'
import { Button } from './components/ui/button'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm">
            SevaFlow • Scaffolding complete
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A modern foundation for citizen service delivery.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              This starter structure prepares the web client, API server, and mobile app for the SevaFlow platform with the documented stack and clean project boundaries.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>Explore frontend</Button>
            <Button variant="outline">View API health</Button>
          </div>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Project structure</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• React + Vite + Tailwind + ShadCN-inspired UI shell</li>
            <li>• Express API with a health endpoint</li>
            <li>• Expo React Native starter app</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
