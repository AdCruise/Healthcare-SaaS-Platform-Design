import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';
import { useState } from 'react';

export function PricingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const pricingTiers = [
    {
      name: 'Starter',
      subtitle: 'For Standalone Clinics',
      description: 'Best for independent dental practices',
      features: [
        'Real-time appointment syncing',
        'FHIR data interoperability',
        'Automated SMS & email reminders',
        'Basic dashboard analytics',
        'Email support',
      ],
      cta: 'Get Started',
      ctaVariant: 'outline' as const,
    },
    {
      name: 'Growth',
      subtitle: 'For Multi-Clinic DSOs',
      description: 'Everything in Starter, plus:',
      features: [
        'Multi-clinic management',
        'Role-based access control',
        'Advanced analytics dashboard',
        'Priority support',
        'API access',
      ],
      cta: 'Request Demo',
      ctaVariant: 'default' as const,
      highlighted: true,
    },
    {
      name: 'Enterprise',
      subtitle: 'Custom Healthcare Networks',
      description: 'Everything in Growth, plus:',
      features: [
        'Custom PMS integrations',
        'Insurance verification automation',
        'Electronic claim submission',
        'Dedicated account manager',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      ctaVariant: 'outline' as const,
    },
  ];

  const faqs = [
    {
      question: 'Do you integrate with Open Dental?',
      answer: 'Yes, we fully support Open Dental integration through our FHIR-compliant API. Our platform seamlessly syncs appointment data, patient information, and clinical records in real-time. Setup typically takes less than 24 hours.',
    },
    {
      question: 'Is patient data secure?',
      answer: 'Absolutely. All patient data is HIPAA-ready and encrypted both in transit and at rest. We use industry-standard security protocols, regular security audits, and our infrastructure is built on secure, asynchronous FastAPI and Redis architecture. You maintain full control of your data.',
    },
    {
      question: 'Can we manage multiple clinics under one account?',
      answer: 'Yes! Our Growth and Enterprise plans include multi-clinic management. You can manage unlimited clinics with centralized reporting, role-based access control, and clinic-specific configurations all from one dashboard.',
    },
    {
      question: 'Do you support insurance claim automation?',
      answer: 'Insurance claim automation is available on our Enterprise plan. It includes automated claim generation, verification, and submission to major insurance carriers. Our dedicated team will work with you to ensure seamless integration with your existing workflows.',
    },
  ];

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
              <Link to="/security" className="text-sm hover:text-accent transition-colors">
                Security
              </Link>
              <Link to="/pricing" className="text-sm text-accent">
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
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Simple, <span className="text-accent">Scalable Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible plans for independent clinics and growing DSOs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <Card
                key={idx}
                className={`p-8 relative flex flex-col h-full transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-2 border-accent ring-1 ring-accent/20 md:scale-105'
                    : 'border-2 hover:border-accent/50'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{tier.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={tier.ctaVariant}
                  className="w-full group"
                  asChild
                >
                  <a href="#contact">
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Note */}
      <section className="py-12 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            All plans are HIPAA-ready and built on secure, asynchronous infrastructure powered by FastAPI and Redis.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our pricing and platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="p-6 cursor-pointer hover:border-accent/50 transition-all duration-300"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <button className="text-left w-full">
                      <h3 className="font-semibold text-lg mb-2 hover:text-accent transition-colors">
                        {faq.question}
                      </h3>
                    </button>
                    {expandedFaq === idx && (
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <Card className="p-12 border-2 border-accent/20 bg-accent/5">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              Join healthcare organizations already using our platform to streamline operations and improve patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
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
            <p>&copy; 2024 Healthcare SaaS Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
