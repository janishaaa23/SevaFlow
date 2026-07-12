import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetPortal = DialogPrimitive.Portal
const SheetClose = DialogPrimitive.Close

const SheetOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn('fixed inset-0 z-50 bg-slate-950/50', className)} {...props} />
))
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName

const SheetContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content ref={ref} className={cn('fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950', className)} {...props}>
      {children}
      <SheetClose className="absolute right-4 top-4 rounded-md p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
        <X className="h-4 w-4" />
      </SheetClose>
    </DialogPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName

export { Sheet, SheetTrigger, SheetContent, SheetClose }
