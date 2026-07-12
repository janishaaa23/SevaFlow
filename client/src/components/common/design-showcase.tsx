import { AlertCircle, Layers3, Search, ShieldCheck } from 'lucide-react'
import { Alert } from '@/components/ui/alert'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Pagination } from '@/components/ui/pagination'
import { EmptyState } from '@/components/common/empty-state'
import { ErrorState } from '@/components/common/error-state'
import { SuccessState } from '@/components/common/success-state'
import { TablePreview } from '@/components/common/table'
import { DataGrid } from '@/components/common/data-grid'
import { StatusBadge } from '@/components/common/status-badge'
import { StatCard } from '@/components/common/stat-card'

export function DesignShowcase() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Preview only</p>
            <h1 className="text-3xl font-semibold">SevaFlow Design System</h1>
          </div>
          <div className="flex gap-2">
            <Button>Primary button</Button>
            <Button variant="secondary">Secondary button</Button>
            <Button variant="outline">Outline button</Button>
          </div>
        </div>
        <Alert variant="success" className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          Accessible, reusable UI primitives for future product surfaces.
        </Alert>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <StatCard title="Appointments" value="184" hint="Pending review" trend="up" />
        <StatCard title="Queue" value="24" hint="Average wait 12 min" trend="down" />
        <StatCard title="Officers" value="8" hint="Available now" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Form Controls</CardTitle>
            <CardDescription>Inputs, selects, search, and textarea styling.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
              <Search className="h-4 w-4 text-slate-500" />
              <Input placeholder="Search citizens" className="border-0 bg-transparent p-0 shadow-none" />
            </div>
            <Input placeholder="Full name" />
            <Input type="password" placeholder="Password" />
            <Textarea placeholder="Add notes for the service desk" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="citizen">Citizens</SelectItem>
                <SelectItem value="reception">Reception</SelectItem>
                <SelectItem value="officer">Officer</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Badges & Status</CardTitle>
            <CardDescription>Visual states for queues and resources.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="success">Approved</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="destructive">Blocked</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status="queued" />
              <StatusBadge status="in-progress" />
              <StatusBadge status="done" />
              <StatusBadge status="blocked" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Service readiness</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Navigation primitives</CardTitle>
            <CardDescription>Breadcrumb, tabs, and accordion.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb items={['Home', 'Design', 'Components']} />
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="patterns">Patterns</TabsTrigger>
              </TabsList>
              <TabsContent value="overview"><p className="text-sm text-slate-600">Reusable patterns for a government-grade experience.</p></TabsContent>
              <TabsContent value="tokens"><p className="text-sm text-slate-600">Themed color, spacing, and typography tokens.</p></TabsContent>
              <TabsContent value="patterns"><p className="text-sm text-slate-600">Layout, surfaces, and empty/error/success states.</p></TabsContent>
            </Tabs>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Accessibility</AccordionTrigger>
                <AccordionContent>Keyboard support and semantic structure are built into each primitive.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Responsive behavior</AccordionTrigger>
                <AccordionContent>Layouts are mobile-first and adapt cleanly across breakpoints.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avatar, loading, and states</CardTitle>
            <CardDescription>Preview presentation state treatments.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>SV</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Sanjay Verma</p>
                <p className="text-sm text-slate-500">Service desk lead</p>
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Spinner />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <TablePreview />
        <DataGrid />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <EmptyState />
        <ErrorState />
        <SuccessState />
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Icon button"><Layers3 className="h-4 w-4" /></Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <Pagination />
        <Alert variant="warning" className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          This page is for development preview only and does not implement any business features.
        </Alert>
      </section>
    </div>
  )
}
