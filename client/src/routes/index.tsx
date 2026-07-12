import { createBrowserRouter } from 'react-router-dom'

import { PublicLayout } from '@/layouts/public-layout'
import { DashboardLayout } from '@/layouts/dashboard-layout'

import { LandingPage } from '@/pages/public/landing'
import { LoginPage } from '@/pages/public/login'
import { RegisterPage } from '@/pages/public/register'
import { ForgotPasswordPage } from '@/pages/public/forgot-password'
import { VerifyEmailPage } from '@/pages/public/verify-email'
import { ResetPasswordPage } from '@/pages/public/reset-password'
import { AboutPage } from '@/pages/public/about'
import { ContactPage } from '@/pages/public/contact'
import { PrivacyPolicyPage } from '@/pages/public/privacy-policy'
import { TermsPage } from '@/pages/public/terms'
import { NotFoundPage } from '@/pages/public/not-found'

import { CitizenDashboardPage } from '@/pages/citizen/dashboard'
import { CitizenRequestsPage } from '@/pages/citizen/requests'
import { CitizenAppointmentsPage } from '@/pages/citizen/appointments'
import { CitizenNotificationsPage } from '@/pages/citizen/notifications'
import { CitizenProfilePage } from '@/pages/citizen/profile'
import { CitizenSettingsPage } from '@/pages/citizen/settings'

import { NgoDashboardPage } from '@/pages/ngo/dashboard'
import { NgoVolunteersPage } from '@/pages/ngo/volunteers'
import { NgoCampaignsPage } from '@/pages/ngo/campaigns'

import { VolunteerDashboardPage } from '@/pages/volunteer/dashboard'
import { VolunteerOpportunitiesPage } from '@/pages/volunteer/opportunities'

import { GovernmentDashboardPage } from '@/pages/government/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'verify-email', element: <VerifyEmailPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy', element: <PrivacyPolicyPage /> },
      { path: 'terms', element: <TermsPage /> },
    ],
  },
  {
    path: '/citizen',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <CitizenDashboardPage /> },
      { path: 'requests', element: <CitizenRequestsPage /> },
      { path: 'appointments', element: <CitizenAppointmentsPage /> },
      { path: 'notifications', element: <CitizenNotificationsPage /> },
      { path: 'profile', element: <CitizenProfilePage /> },
      { path: 'settings', element: <CitizenSettingsPage /> },
    ],
  },
  {
    path: '/ngo',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <NgoDashboardPage /> },
      { path: 'volunteers', element: <NgoVolunteersPage /> },
      { path: 'campaigns', element: <NgoCampaignsPage /> },
    ],
  },
  {
    path: '/volunteer',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <VolunteerDashboardPage /> },
      { path: 'opportunities', element: <VolunteerOpportunitiesPage /> },
    ],
  },
  {
    path: '/government',
    element: <DashboardLayout />,
    children: [{ index: true, element: <GovernmentDashboardPage /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
