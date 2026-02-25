import { ArrowRight, Shield, Zap, Database, Activity, Lock, CheckCircle2, Server, Bell } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              <Link to="/features" className="text-sm hover:text-accent transition-colors">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-xs font-medium text-accent">HIPAA-Ready Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Eliminate Data Silos in Your{' '}
              <span className="text-accent">Dental Practice</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time appointment syncing, automated patient engagement, and revenue cycle automation. 
              Connect your Practice Management System with CRM in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="text-base px-8 h-12">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-base px-8 h-12">
                  See How It Works
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-accent" />
                <span>End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>Real-Time Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Healthcare Data Challenge</h2>
            <p className="text-muted-foreground text-lg">
              Traditional systems create barriers that hurt patient care and revenue
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Disconnected Systems</h3>
              <p className="text-muted-foreground">
                Data trapped in silos between PMS and CRM systems leads to inefficiencies and errors
              </p>
            </Card>
            <Card className="p-8 border-2 hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manual Follow-ups</h3>
              <p className="text-muted-foreground">
                Staff waste hours manually tracking appointments and sending reminders
              </p>
            </Card>
            <Card className="p-8 border-2 hover:border-accent/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue Delays</h3>
              <p className="text-muted-foreground">
                Slow insurance verification and claims processing impact cash flow
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">One Platform, Complete Integration</h2>
            <p className="text-muted-foreground text-lg">
              FHIR-compliant middleware that connects everything seamlessly
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent/20 hover:border-accent transition-all">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">FHIR Data Interoperability</h3>
              <p className="text-muted-foreground">
                Industry-standard data exchange ensures compatibility with any healthcare system
              </p>
            </Card>
            <Card className="p-8 border-2 border-accent/20 hover:border-accent transition-all">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Sync</h3>
              <p className="text-muted-foreground">
                Appointments, patient data, and updates flow instantly between systems
              </p>
            </Card>
            <Card className="p-8 border-2 border-accent/20 hover:border-accent transition-all">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Reminders</h3>
              <p className="text-muted-foreground">
                Smart SMS and email campaigns reduce no-shows and improve patient engagement
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Features</h2>
            <p className="text-muted-foreground text-lg">
              Built for scale, security, and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, title: 'FastAPI Backend', desc: 'High-performance async architecture' },
              { icon: Activity, title: 'Circuit Breaker', desc: 'Automatic failure recovery' },
              { icon: Database, title: 'Redis Queue', desc: 'Reliable async processing' },
              { icon: Shield, title: 'Idempotency', desc: 'Duplicate-proof operations' },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <feature.icon className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Built for Healthcare at Scale</h2>
              <p className="text-muted-foreground mb-8">
                Our architecture is designed for the unique demands of healthcare data exchange. 
                Every component is optimized for reliability, security, and performance.
              </p>
              <div className="space-y-4">
                {[
                  'FastAPI backend with async request handling',
                  'Redis-powered async queue system',
                  'Circuit breaker pattern for fault tolerance',
                  'Comprehensive audit logging',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-secondary/50">
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-muted-foreground">System Status: </span>
                  <span className="text-accent">Operational</span>
                </div>
                <div className="border-l-2 border-accent/30 pl-4 space-y-2">
                  <div>PMS Connector: <span className="text-success">Active</span></div>
                  <div>CRM Connector: <span className="text-success">Active</span></div>
                  <div>Redis Queue: <span className="text-success">Healthy</span></div>
                  <div>Circuit Breaker: <span className="text-success">Closed</span></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium text-accent">SECURITY & COMPLIANCE</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">HIPAA-Ready Architecture</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enterprise-grade security designed for healthcare data protection and regulatory compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Lock className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">End-to-End Encryption</h3>
              <p className="text-muted-foreground mb-4">
                All data encrypted in transit and at rest using industry-standard AES-256 encryption
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  TLS 1.3 for data in transit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  AES-256 for data at rest
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <Shield className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">HIPAA Compliance</h3>
              <p className="text-muted-foreground mb-4">
                Built with healthcare regulations in mind from day one
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  BAA agreements available
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Comprehensive audit trails
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-accent text-accent-foreground border-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join leading dental organizations using MediSync to streamline operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-base px-8 h-12">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Enterprise healthcare middleware for dental practices
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-accent transition-colors">Features</Link></li>
                <li><Link to="/security" className="hover:text-accent transition-colors">Security</Link></li>
                <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">HIPAA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 MediSync Healthcare Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
