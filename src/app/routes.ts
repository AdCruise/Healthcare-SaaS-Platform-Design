import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./components/DashboardLayout";

// Landing Pages
import { LandingPage } from "./pages/LandingPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { SecurityPage } from "./pages/SecurityPage";
import { PricingPage } from "./pages/PricingPage";

// Auth Pages
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { DSORegisterPage } from "./pages/DSORegisterPage";

// Dashboard Pages
import { DashboardPage } from "./pages/DashboardPage";
import { OperatoryMappingPage } from "./pages/OperatoryMappingPage";
import { AppointmentSyncPage } from "./pages/AppointmentSyncPage";
import { OrgSelectPage } from "./pages/OrgSelectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/features",
    Component: FeaturesPage,
  },
  {
    path: "/security",
    Component: SecurityPage,
  },
  {
    path: "/pricing",
    Component: PricingPage,
  },
  {
    path: "/signin",
    Component: SignInPage,
  },
  {
    path: "/signup",
    Component: SignUpPage,
  },
  {
    path: "/dso-register",
    Component: DSORegisterPage,
  },
  {
    path: "/org-select",
    Component: OrgSelectPage,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "operatory-mapping", Component: OperatoryMappingPage },
      { path: "sync-monitor", Component: AppointmentSyncPage },
    ],
  },
]);
