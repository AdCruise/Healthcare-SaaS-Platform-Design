import { Shield, Lock, Activity, CheckCircle2, FileCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function SecurityPage() {
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
              <Link to="/features" className="text-sm hover:text-accent transition-colors">
                Features
              </Link>
              <Link to="/security" className="text-sm text-accent">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-accent">ENTERPRISE SECURITY</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Built for <span className="text-accent">Healthcare Security</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security and compliance designed specifically for healthcare data protection
          </p>
        </div>
      </section>

      {/* Security Badges */}
      <section className="py-12 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'HIPAA Ready' },
              { icon: Lock, label: 'SOC 2 Type II' },
              { icon: FileCheck, label: 'FHIR Compliant' },
              { icon: Activity, label: '99.9% Uptime' },
            ].map((badge, idx) => (
              <Card key={idx} className="p-6 text-center border-2 border-accent/20">
                <badge.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                <div className="font-semibold">{badge.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Encryption */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">End-to-End Encryption</h2>
              <p className="text-muted-foreground mb-8">
                All patient data is protected with military-grade encryption at every stage—in transit, 
                at rest, and during processing. Your data security is our top priority.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data in Transit</h3>
                    <p className="text-sm text-muted-foreground">
                      TLS 1.3 encryption for all network communications with perfect forward secrecy
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data at Rest</h3>
                    <p className="text-sm text-muted-foreground">
                      AES-256 encryption for all stored data with key rotation every 90 days
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Key Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Hardware Security Module (HSM) backed encryption key management
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-secondary/50 border-2 border-accent/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="font-semibold">Encryption Status</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-success">Active</span>
                  </div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Protocol:</span>
                    <span className="text-success">TLS 1.3</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Cipher:</span>
                    <span className="text-success">AES-256-GCM</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Key Length:</span>
                    <span className="text-success">256-bit</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Last Rotation:</span>
                    <span className="text-success">15 days ago</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">HIPAA Compliance</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built from the ground up to meet and exceed HIPAA requirements for healthcare data protection
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Shield className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Administrative Safeguards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Security management process
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Workforce training and management
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  BAA agreements available
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <Lock className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technical Safeguards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Access control mechanisms
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Audit controls and logging
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Data integrity controls
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <FileCheck className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Physical Safeguards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Secure facility access
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Workstation security
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  Device and media controls
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Circuit Breaker */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-card border-2 border-accent/20 order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="font-semibold">API Protection Status</span>
                  <div className="px-3 py-1 bg-success/20 text-success rounded-full text-xs font-medium">
                    Closed
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Success Rate</span>
                      <span className="text-lg font-bold text-success">99.8%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-success" style={{ width: '99.8%' }} />
                    </div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <span className="text-lg font-bold text-accent">45ms</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Average latency</div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Requests/min</span>
                      <span className="text-lg font-bold">1,247</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Current throughput</div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Circuit Breaker Protection</h2>
              <p className="text-muted-foreground mb-8">
                Our circuit breaker pattern automatically detects failures and prevents cascading issues. 
                If an external service fails, the system gracefully degrades while maintaining data integrity.
              </p>
              <div className="space-y-4">
                {[
                  'Automatic failure detection',
                  'Exponential backoff retry logic',
                  'Graceful degradation',
                  'Real-time health monitoring',
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

      {/* Redis & Async */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Redis Idempotency & Async Queue</h2>
              <p className="text-muted-foreground mb-8">
                Our Redis-powered queue system ensures that every operation is idempotent and reliably processed. 
                Duplicate requests are automatically detected and prevented.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Idempotency Protection</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Every request gets a unique ID. Duplicate requests are detected and rejected automatically, 
                    preventing data corruption from retries.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Async Webhook Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Webhooks are queued and processed asynchronously, ensuring no data loss even during high load. 
                    Failed webhooks are automatically retried with exponential backoff.
                  </p>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-card border-2 border-accent/20">
              <div className="space-y-4 font-mono text-xs">
                <div className="text-muted-foreground"># Queue Status</div>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                    <span>Pending Jobs:</span>
                    <span className="text-accent font-bold">142</span>
                  </div>
                  <div className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                    <span>Processing:</span>
                    <span className="text-accent font-bold">8</span>
                  </div>
                  <div className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                    <span>Completed:</span>
                    <span className="text-success font-bold">45,239</span>
                  </div>
                  <div className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                    <span>Failed:</span>
                    <span className="text-warning font-bold">12</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="text-muted-foreground mb-2"># Recent Operations</div>
                  <div className="space-y-2 text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-success" />
                      <span>webhook_received_abc123</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-success" />
                      <span>sync_appointment_def456</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-success" />
                      <span>send_reminder_ghi789</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Security FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                Is MediSync HIPAA compliant?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, MediSync is designed to meet HIPAA requirements. We implement all required administrative, 
                technical, and physical safeguards. Business Associate Agreements (BAAs) are available for all customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                How is my data encrypted?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. Encryption keys are 
                managed using Hardware Security Modules (HSM) and rotated every 90 days automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                What happens if there's a system failure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our circuit breaker pattern automatically detects failures and prevents cascading issues. The system 
                gracefully degrades while maintaining data integrity. All webhooks are queued and automatically retried.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                Do you perform security audits?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we undergo regular third-party security audits and penetration testing. We maintain SOC 2 Type II 
                compliance and provide audit reports to enterprise customers upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                Where is my data stored?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Data is stored in SOC 2 certified data centers with redundant backups. We offer regional data residency 
                options to meet specific compliance requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Questions About Security?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our security team is here to answer your questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="text-base px-8 h-12">
                Contact Security Team
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
