import { createBrowserRouter } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { SecurityPage } from './pages/SecurityPage';
import { PricingPage } from './pages/PricingPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { OrgSelectPage } from './pages/OrgSelectPage';
import { DSORegisterPage } from './pages/DSORegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { OperatoryMappingPage } from './pages/OperatoryMappingPage';
import { AppointmentSyncPage } from './pages/AppointmentSyncPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingPage,
  },
  {
    path: '/features',
    Component: FeaturesPage,
  },
  {
    path: '/security',
    Component: SecurityPage,
  },
  {
    path: '/pricing',
    Component: PricingPage,
  },
  {
    path: '/signin',
    Component: SignInPage,
  },
  {
    path: '/signup',
    Component: SignUpPage,
  },
  {
    path: '/org-select',
    Component: OrgSelectPage,
  },
  {
    path: '/dso-register',
    Component: DSORegisterPage,
  },
  {
    path: '/dashboard',
    Component: DashboardPage,
  },
  {
    path: '/dashboard/operatory',
    Component: OperatoryMappingPage,
  },
  {
    path: '/dashboard/appointments',
    Component: AppointmentSyncPage,
  },
  {
    path: '/dashboard/clinics',
    Component: DashboardPage,
  },
  {
    path: '/dashboard/patients',
    Component: DashboardPage,
  },
  {
    path: '/dashboard/revenue',
    Component: DashboardPage,
  },
  {
    path: '/dashboard/analytics',
    Component: DashboardPage,
  },
  {
    path: '/dashboard/settings',
    Component: DashboardPage,
  },
  {
    path: '*',
    Component: LandingPage,
  },
]);
