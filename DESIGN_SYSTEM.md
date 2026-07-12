# SevaFlow Design System

This document describes the reusable UI foundation for SevaFlow. It is intended for development preview only and does not implement business logic.

## 1. Principles

- Simple and intuitive
- Government-grade clarity
- Accessible by default
- Mobile-first and responsive
- Consistent spacing and typography

## 2. Theme

### Color palette
- Primary: #2563EB
- Secondary: #0F172A
- Success: #16A34A
- Warning: #F59E0B
- Error: #DC2626
- Background: #F8FAFC
- Card: #FFFFFF
- Border: #E2E8F0
- Text: #1E293B

### Theme support
- Light theme
- Dark theme
- Theme provider in src/providers/theme-provider.tsx
- Theme toggle in src/components/ui/theme-toggle.tsx

## 3. Layout components

- Navbar: top navigation shell with search, notifications, theme toggle, and avatar placeholder
- Sidebar: vertical navigation surface for product sections
- Footer: simple footer used by preview pages
- Container: responsive wrapper for max-width layout
- Section: spacing wrapper for grouped content
- Page Wrapper: full-page background shell

## 4. UI components

### Buttons
- Primary Button
- Secondary Button
- Outline Button
- Icon Button

### Inputs and forms
- Input
- Password Input
- Search Box
- Textarea
- Select

### Content and feedback
- Badge
- Alert
- Dialog
- Drawer
- Sheet
- Dropdown
- Avatar
- Tabs
- Accordion
- Breadcrumb
- Pagination
- Spinner
- Skeleton
- Empty State
- Error State
- Success State

## 5. Data components

- Table
- Data Grid
- Status Badge
- Progress Bar

## 6. Notifications

- Toast configuration via Sonner

## 7. Folder structure

- src/components/ui
- src/components/layout
- src/components/common
- src/hooks
- src/lib
- src/providers
