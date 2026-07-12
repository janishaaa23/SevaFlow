import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Drawer = DialogPrimitive.Root
const DrawerTrigger = DialogPrimitive.Trigger
const DrawerPortal = DialogPrimitive.Portal
const DrawerClose = DialogPrimitive.Close

const DrawerContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <div className="fixed inset-0 z-50 bg-slate-950/50" />
    <DialogPrimitive.Content ref={ref} className={cn('fixed bottom-0 left-0 z-50 w-full rounded-t-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950', className)} {...props}>
      {children}
      <DrawerClose className="absolute right-4 top-4 rounded-md p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
        <X className="h-4 w-4" />
      </DrawerClose>
    </DialogPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = DialogPrimitive.Content.displayName

export { Drawer, DrawerTrigger, DrawerContent, DrawerClose }
