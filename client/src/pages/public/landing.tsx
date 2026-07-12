import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  CalendarDays,
  Layers3,
  ScanLine,
  BellRing,
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const visionPillars = ['Transparency', 'Accessibility', 'Efficiency', 'Security', 'AI Powered']

const features = [
  {
    icon: CalendarDays,
    title: 'Online Appointments',
    description: 'Book government visits from anywhere and receive instant confirmations.',
  },
  {
    icon: ScanLine,
    title: 'Smart Queue Management',
    description: 'Reduce congestion with live queue status and predictable service flow.',
  },
  {
    icon: FileCheck2,
    title: 'Document Upload & Verification',
    description: 'Prepare the right files before your visit with guided document checks.',
  },
  {
    icon: BellRing,
    title: 'Real-Time Notifications',
    description: 'Stay informed with updates about appointment changes and service progress.',
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Get contextual guidance for common service questions and document readiness.',
  },
  {
    icon: Layers3,
    title: 'Multi-Department Support',
    description: 'Serve citizens across departments from a unified digital experience.',
  },
]

const steps = [
  'Create Account',
  'Book Appointment',
  'Upload Documents',
  'Visit Office / Complete Service',
]

const benefits = [
  { value: '60%', label: 'Reduced Waiting Time' },
  { value: '100%', label: 'Digital Services' },
  { value: '24/7', label: 'Secure Platform' },
  { value: '2x', label: 'Faster Processing' },
]

const whyChoose = [
  {
    title: 'Faster Service Delivery',
    description: 'Streamline service requests so citizens can move from planning to completion with fewer steps.',
  },
  {
    title: 'Transparency',
    description: 'Provide clear updates and visibility at every stage of the service journey.',
  },
  {
    title: 'Smart Queue System',
    description: 'Organize visit flow intelligently to reduce crowding and improve staff allocation.',
  },
  {
    title: 'AI Assistance',
    description: 'Help residents prepare documents and ask the right questions before they arrive.',
  },
  {
    title: 'Citizen Friendly',
    description: 'Make public services approachable through guided experiences and thoughtful design.',
  },
  {
    title: 'Modern Digital Experience',
    description: 'Deliver a premium interface that feels simple, fast, and trustworthy.',
  },
]

const faqs = [
  {
    question: 'Do I need to create an account to use SevaFlow?',
    answer: 'An account makes it easier to track appointments, documents, and updates, but public service discovery is available without signing in.',
  },
  {
    question: 'Can I book appointments for family members?',
    answer: 'Yes. The platform is designed to support household and family service planning with guided steps for each request.',
  },
  {
    question: 'What happens after I upload my documents?',
    answer: 'Your documents are checked for readiness and you will receive updates if anything needs attention before your visit.',
  },
  {
    question: 'Is SevaFlow suitable for multiple departments?',
    answer: 'Yes. It is built to support a wide range of public departments through a single, consistent experience.',
  },
]

export function LandingPage() {
  return (
    <div className="space-y-8 py-6 md:py-10">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <Badge variant="secondary" className="gap-2 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Skip the queue, not the service
          </Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-50">
              Modern public services, designed for every citizen.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              SevaFlow helps residents book appointments, prepare documents, and receive real-time updates through a trusted digital platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/register">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Explore Services</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              No queues, fewer visits
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Secure and accessible
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/15 via-transparent to-emerald-400/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-6 shadow-2xl dark:border-slate-800">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-200">SevaFlow</p>
                <p className="text-xl font-semibold text-white">Service Journey</p>
              </div>
              <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
                Live queue sync
              </div>
            </div>
            <svg viewBox="0 0 420 320" className="w-full" aria-label="Illustration of a digital public service experience">
              <rect x="36" y="44" width="348" height="232" rx="28" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
              <rect x="62" y="76" width="128" height="20" rx="10" fill="#60A5FA" opacity="0.85" />
              <rect x="62" y="109" width="170" height="14" rx="7" fill="rgba(255,255,255,0.75)" />
              <rect x="62" y="136" width="146" height="14" rx="7" fill="rgba(255,255,255,0.6)" />
              <rect x="248" y="78" width="104" height="86" rx="18" fill="#0F172A" stroke="rgba(255,255,255,0.2)" />
              <circle cx="300" cy="120" r="24" fill="#38BDF8" />
              <path d="M283 121c8-15 24-24 41-24" stroke="white" strokeWidth="8" strokeLinecap="round" />
              <rect x="74" y="186" width="276" height="58" rx="18" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.16)" />
              <rect x="96" y="204" width="88" height="12" rx="6" fill="#34D399" />
              <rect x="198" y="204" width="120" height="12" rx="6" fill="rgba(255,255,255,0.7)" />
              <circle cx="90" cy="248" r="8" fill="#F59E0B" />
              <circle cx="118" cy="248" r="8" fill="#F8FAFC" />
              <circle cx="146" cy="248" r="8" fill="#F8FAFC" />
            </svg>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Trusted by the public service vision</p>
          <div className="flex flex-wrap gap-3">
            {visionPillars.map((pillar) => (
              <Badge key={pillar} variant="outline" className="px-3 py-1.5">
                {pillar}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Features</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            Built to simplify every step of public service access.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Every experience is designed to be clear, digital, and citizen-first.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="group transition-transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-start gap-3">
                  <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/50 md:p-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">How SevaFlow Works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            A simple flow from planning to completion.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step} className="relative overflow-hidden">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <CardTitle>{step}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Progress smoothly through the service journey with guided status and updates.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <Card key={benefit.label} className="text-center">
            <CardContent className="space-y-2">
              <p className="text-3xl font-semibold text-slate-950 dark:text-slate-50">{benefit.value}</p>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{benefit.label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Why Choose SevaFlow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            A premium experience for public services.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item) => (
            <Card key={item.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2 text-blue-600">
                  <BadgeCheck className="h-4 w-4" />
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60 md:p-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            Common questions from citizens.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-600 to-slate-900 p-8 text-white shadow-xl dark:border-blue-900 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">Ready to begin?</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Make public services simpler for everyone.
            </h2>
            <p className="text-base text-blue-50/90">
              Register to explore how SevaFlow can support faster, clearer service delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Link to="/register">Register</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
