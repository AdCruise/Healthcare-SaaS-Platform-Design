import { Activity, Bell, CreditCard, Database, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/features" className="text-sm text-accent">
                Features
              </Link>
              <Link to="/security" className="text-sm hover:text-accent transition-colors">
                Security
              </Link>
              <Link to="/pricing" className="text-sm hover:text-accent transition-colors">
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link to="/signin">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Everything You Need to <span className="text-accent">Connect Healthcare</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade features designed for modern dental practices and healthcare organizations
          </p>
        </div>
      </section>

      {/* Data Interoperability */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Database className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-accent">DATA INTEROPERABILITY</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">FHIR Resource Conversion</h2>
              <p className="text-muted-foreground mb-8">
                Seamlessly convert between FHIR resources and your existing data formats. 
                Our platform handles all the complexity of healthcare data standards.
              </p>
              <div className="space-y-4">
                {[
                  'FHIR R4 compliant data exchange',
                  'Automatic schema validation',
                  'Bi-directional sync support',
                  'Real-time data transformation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-card border-2 border-accent/20">
              <div className="space-y-4 font-mono text-xs">
                <div className="text-muted-foreground">// FHIR Appointment Resource</div>
                <div className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-xs">{`{
  "resourceType": "Appointment",
  "status": "booked",
  "serviceCategory": [{
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "108252007",
      "display": "Dental service"
    }]
  }],
  "participant": [{
    "actor": {
      "reference": "Patient/example"
    },
    "status": "accepted"
  }]
}`}</pre>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-Time Syncing */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-card border-2 border-accent/20 order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="font-semibold">Sync Dashboard</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { time: '2m ago', event: 'Appointment synced to CRM', status: 'success' },
                    { time: '5m ago', event: 'Patient record updated', status: 'success' },
                    { time: '8m ago', event: 'Insurance verified', status: 'success' },
                    { time: '12m ago', event: 'Reminder sent', status: 'success' },
                  ].map((log, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{log.event}</div>
                        <div className="text-xs text-muted-foreground">{log.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-accent">REAL-TIME SYNC</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Instant Appointment Updates</h2>
              <p className="text-muted-foreground mb-8">
                Every appointment change is instantly reflected across all connected systems. 
                No delays, no manual updates, no data inconsistencies.
              </p>
              <div className="space-y-4">
                {[
                  'Sub-second sync latency',
                  'Conflict resolution built-in',
                  'Automatic retry on failure',
                  'Complete audit trail',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Engagement */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Bell className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-accent">PATIENT ENGAGEMENT</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Automated Reminders & Campaigns</h2>
              <p className="text-muted-foreground mb-8">
                Smart, automated communication that reduces no-shows and keeps patients engaged. 
                SMS and email reminders sent at the perfect time.
              </p>
              <div className="space-y-4">
                {[
                  'Customizable reminder templates',
                  'Multi-channel delivery (SMS, email)',
                  'Appointment confirmation tracking',
                  'Follow-up campaign automation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-card border-2 border-accent/20">
              <div className="space-y-6">
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Bell className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Appointment Reminder</div>
                      <div className="text-xs text-muted-foreground">Sent 24h before</div>
                    </div>
                  </div>
                  <div className="text-sm bg-background p-3 rounded border border-border">
                    Hi John! Reminder: Your dental appointment is tomorrow at 2:00 PM with Dr. Smith. 
                    Reply C to confirm or R to reschedule.
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success mb-1">94%</div>
                    <div className="text-xs text-muted-foreground">Delivery Rate</div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-2xl font-bold text-accent mb-1">87%</div>
                    <div className="text-xs text-muted-foreground">Open Rate</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue Cycle */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-card border-2 border-accent/20 order-2 md:order-1">
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent/20 mb-4">
                    <CreditCard className="h-10 w-10 text-accent" />
                  </div>
                  <div className="text-3xl font-bold mb-2">$247,500</div>
                  <div className="text-sm text-muted-foreground">Revenue This Month</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="text-sm">Insurance Claims</span>
                    <span className="font-semibold text-success">+$85K</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="text-sm">Patient Payments</span>
                    <span className="font-semibold text-success">+$42K</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="text-sm">Outstanding</span>
                    <span className="font-semibold text-warning">$18K</span>
                  </div>
                </div>
              </div>
            </Card>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <CreditCard className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-accent">REVENUE CYCLE</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Automated Insurance & Claims</h2>
              <p className="text-muted-foreground mb-8">
                Streamline your revenue cycle with automated insurance verification and claims processing. 
                Reduce days in A/R and improve cash flow.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time insurance eligibility checks',
                  'Automated claims submission',
                  'Denial management workflow',
                  'Payment posting automation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See It in Action?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of practices already using MediSync
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="text-base px-8 h-12">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="text-base px-8 h-12">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
