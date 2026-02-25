import { Building2, Home, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';

export function OrgSelectPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl space-y-8">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-24 bg-accent rounded-full" />
            <div className="h-2 w-24 bg-accent rounded-full" />
            <div className="h-2 w-24 bg-muted rounded-full" />
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Choose Your Organization Type</h1>
            <p className="text-muted-foreground text-lg">
              Select the option that best describes your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* DSO Card */}
            <Card 
              className="p-8 border-2 hover:border-accent hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => navigate('/dso-register')}
            >
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Dental Support Organization
                  </h3>
                  <p className="text-muted-foreground">
                    Manage multiple clinic locations under one organization. Perfect for DSOs with 2+ locations.
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Multi-clinic management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Centralized dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">Continue</span>
                  <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>

            {/* Standalone Card */}
            <Card 
              className="p-8 border-2 hover:border-accent hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => navigate('/dashboard')}
            >
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Home className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Standalone Clinic
                  </h3>
                  <p className="text-muted-foreground">
                    Single clinic or practice location. Get started quickly with streamlined setup.
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Quick setup process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Single location focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Essential features</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">Continue</span>
                  <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/signin" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Not sure? Contact our sales team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
