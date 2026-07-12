import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Cpu,
  FileCheck2,
  Layers3,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const trustPillars = [
  {
    icon: ShieldCheck,
    title: 'Transparency',
    description: 'Clear service status, predictable steps, and complete visibility for every visit.',
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Designed to feel simple, welcoming, and usable across desktop and mobile devices.',
  },
  {
    icon: Clock3,
    title: 'Efficiency',
    description: 'Reduce repeated visits while moving more services online and ahead of time.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description: 'Secure flows and protective guidance keep citizen data and service information safe.',
  },
  {
    icon: Cpu,
    title: 'AI Assistance',
    description: 'Smart guidance helps citizens prepare documents and answer service questions quickly.',
  },
]

const features = [
  {
    icon: CalendarDays,
    title: 'Online Appointments',
    description: 'Book a visit in minutes with department-aware recommendations and flexible scheduling.',
    detail: 'Reserve a slot, receive a confirmation, and avoid unnecessary office waiting.',
  },
  {
    icon: ScanLine,
    title: 'Smart Queue Management',
    description: 'Stay ahead of the line with live queue updates and clear service progress.',
    detail: 'Citizens and staff both benefit from transparent, organized service flow.',
  },
  {
    icon: FileCheck2,
    title: 'Document Upload & Verification',
    description: 'Prepare every file before arrival with guided checks and readiness prompts.',
    detail: 'Reduce missing-document surprises and shorten counter time significantly.',
  },
  {
    icon: BellRing,
    title: 'Real-Time Notifications',
    description: 'Get timely reminders about appointment changes, queue movement, and service updates.',
    detail: 'Keep communication effortless and consistent from planning through completion.',
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Get helpful answers to common questions and document-related guidance.',
    detail: 'Support citizens with a trusted digital companion that reduces friction.',
  },
  {
    icon: Layers3,
    title: 'Multi-Department Support',
    description: 'Connect departments into one shared experience for appointments, verification, and service updates.',
    detail: 'Scale easily without sacrificing clarity or consistency across services.',
  },
]

const steps = [
  {
    title: 'Create Account',
    description: 'Register securely and unlock a personalized service experience for upcoming appointments.',
  },
  {
    title: 'Book Appointment',
    description: 'Choose the right department, office, and time slot from a guided experience.',
  },
  {
    title: 'Upload Documents',
    description: 'Share supporting files early so verification can happen before arrival.',
  },
  {
    title: 'Visit Office',
    description: 'Receive your digital token, keep track of queue progress, and finish the service quickly.',
  },
]

const benefits = [
  {
    icon: Clock3,
    title: 'Real-Time Queue Tracking',
    description: 'Keep citizens informed with visible queue movement and accurate service timing.',
  },
  {
    icon: Layers3,
    title: 'Multi Department Support',
    description: 'Serve many public departments from a single, coherent experience.',
  },
  {
    icon: Bot,
    title: 'AI Document Assistant',
    description: 'Help residents prepare the correct documents before they ever leave home.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Digital Platform',
    description: 'Protect service journeys with trustworthy, privacy-conscious digital experiences.',
  },
]

const whyChoose = [
  {
    title: 'Faster Service Delivery',
    description: 'Reduce delay by moving appointments, verification, and updates online.',
  },
  {
    title: 'Transparency',
    description: 'Offer a clear and predictable path from booking to completion.',
  },
  {
    title: 'Smart Queue System',
    description: 'Organize visits with clarity, fairness, and better resource planning.',
  },
  {
    title: 'AI Assistance',
    description: 'Guide citizens with helpful service insights at the moment they need them.',
  },
  {
    title: 'Citizen Friendly',
    description: 'Make public service interactions feel calm, supported, and easy to navigate.',
  },
  {
    title: 'Modern Digital Experience',
    description: 'Deliver a polished experience that reflects the best of current digital products.',
  },
]

const faqs = [
  {
    question: 'Do I need to create an account to use SevaFlow?',
    answer: 'An account makes it easier to track appointments, documents, and updates, but public service discovery stays simple and accessible.',
  },
  {
    question: 'Can I book appointments for family members?',
    answer: 'Yes. The platform is designed to support household and family service planning with guided steps for each request.',
  },
  {
    question: 'What happens after I upload my documents?',
    answer: 'Your documents are reviewed for readiness and you will receive updates if anything needs attention before your visit.',
  },
  {
    question: 'Is SevaFlow suitable for multiple departments?',
    answer: 'Yes. It is built to support a wide range of public departments through a single, consistent experience.',
  },
]

const journeySteps = [
  { title: 'Citizen', status: 'Ready to begin', icon: Users, className: 'left-0 top-10 md:left-2' },
  { title: 'Book Appointment', status: 'Selected', icon: CalendarDays, className: 'right-0 top-32 md:right-3' },
  { title: 'Digital Token', status: 'Queued', icon: Sparkles, className: 'left-2 bottom-24 md:left-4' },
  { title: 'Officer Verification', status: 'In progress', icon: ShieldCheck, className: 'right-4 bottom-8 md:right-6' },
  { title: 'Service Completed', status: 'Complete', icon: CheckCircle2, className: 'left-1/2 top-[78%] -translate-x-1/2 md:left-[58%]' },
]

export function LandingPage() {
  return (
    <main className="space-y-8 py-6 md:py-10">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_40%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(241,245,249,0.95))] p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.16),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.94))] md:p-10 lg:p-14">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-fade-up space-y-6">
            <Badge variant="secondary" className="gap-2 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Skip the queue. Not the service.
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-50">
                Modern public services for a faster, simpler future.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                SevaFlow brings appointments, document readiness, smart queues, and AI guidance into one trustworthy platform for citizens and government teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/about">Explore Services</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Faster visits
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Secure by design
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950/95 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-slate-800/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_30%)]" />
              <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.24),transparent_60%)]" />
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 460 430" aria-hidden="true">
                  <path d="M122 92 C 170 92, 176 125, 208 154" className="flow-line" stroke="rgba(255,255,255,0.6)" strokeWidth="2.2" fill="none" />
                  <path d="M260 154 C 300 168, 304 215, 316 246" className="flow-line delay-200" stroke="rgba(255,255,255,0.6)" strokeWidth="2.2" fill="none" />
                  <path d="M320 246 C 325 275, 302 305, 264 315" className="flow-line delay-400" stroke="rgba(255,255,255,0.6)" strokeWidth="2.2" fill="none" />
                  <path d="M206 315 C 166 324, 154 352, 138 374" className="flow-line delay-600" stroke="rgba(255,255,255,0.6)" strokeWidth="2.2" fill="none" />
                  <path d="M136 374 C 136 352, 132 328, 130 304" className="flow-line delay-800" stroke="rgba(255,255,255,0.6)" strokeWidth="2.2" fill="none" />
                </svg>

                {journeySteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={step.title}
                      className={cn(
                        'glass-panel animate-float absolute flex min-w-[170px] items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 text-left shadow-[0_12px_45px_rgba(15,23,42,0.24)] backdrop-blur-lg',
                        step.className,
                        index % 2 === 0 ? 'animate-float' : 'animate-float-delay',
                      )}
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{step.title}</p>
                        <p className="text-xs text-slate-300">{step.status}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card key={pillar.title} className="border-slate-200/80 bg-slate-50/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50">
                <CardHeader className="space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      <section id="features" className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Features</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            Designed to make public service access feel effortless.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Every experience is intentional, clear, and built for digital-first service delivery.
          </p>
        </div>
        <div className="space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group overflow-hidden border-slate-200/80 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950/70"
              >
                <div className={`grid gap-6 p-2 md:grid-cols-[0.35fr_0.65fr] md:items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="rounded-[1.5rem] border border-transparent bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-400/10 p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-slate-50">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-50/80 p-6 dark:bg-slate-900/60">
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{feature.detail}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <section id="how-it-works" className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/50 md:p-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">How SevaFlow Works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            A calm, guided path from first visit to completed service.
          </h2>
        </div>
        <div className="relative space-y-4">
          <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-blue-300 via-slate-300 to-transparent md:block" />
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-4 md:pl-12">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-sm font-semibold text-blue-600 shadow-sm dark:border-blue-900 dark:bg-slate-900">
                  0{index + 1}
                </div>
                <Card className="flex-1 border-slate-200/80 bg-white/90 transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950/70">
                  <CardHeader>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon
          return (
            <Card key={benefit.title} className="border-slate-200/80 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/70">
              <CardContent className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">{benefit.title}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{benefit.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Why Choose SevaFlow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            Built to feel premium, practical, and trustworthy.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item, index) => (
            <Card
              key={item.title}
              className={cn('border-slate-200/80 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/70', index % 2 === 1 && 'md:translate-y-6')}
            >
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

      <section id="faq" className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60 md:p-8">
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

      <section className="rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-600 to-slate-900 p-8 text-white shadow-[0_18px_70px_rgba(37,99,235,0.25)] dark:border-blue-900 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">Ready to begin?</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Transform the way citizens access public services.
            </h2>
            <p className="text-base text-blue-50/90">
              Experience appointments, digital verification, smart queues, and AI-powered assistance—all from one platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
              <Link to="/register">Register</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link to="/about">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
