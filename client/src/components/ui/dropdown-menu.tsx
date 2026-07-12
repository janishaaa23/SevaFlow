import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn('z-50 min-w-[8rem] rounded-lg border border-slate-200 bg-white p-1 text-slate-900 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100', className)} {...props} />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item ref={ref} className={cn('relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm outline-none hover:bg-slate-100 dark:hover:bg-slate-800', className)} {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem ref={ref} className={cn('relative flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm outline-none hover:bg-slate-100 dark:hover:bg-slate-800', className)} checked={checked} {...props}>
    <span className="mr-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator><Check className="h-4 w-4" /></DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuSubTrigger = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger ref={ref} className={cn('flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm outline-none hover:bg-slate-100 dark:hover:bg-slate-800', className)} {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuRadioGroup, DropdownMenuSubTrigger }
