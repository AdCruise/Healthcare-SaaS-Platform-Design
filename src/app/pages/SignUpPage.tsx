import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Lock, Check, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';

export function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    workEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (field: 'password' | 'confirmPassword', value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    
    if (field === 'confirmPassword' || (field === 'password' && newData.confirmPassword)) {
      setPasswordMatch(newData.password === newData.confirmPassword);
    }
  };

  const passwordRequirements = [
    { label: 'At least 8 characters', met: formData.password.length >= 8 },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { label: 'Contains number', met: /[0-9]/.test(formData.password) },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      navigate('/org-select');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Form */}
        <div className="flex flex-col p-8 lg:p-12">
          <div className="flex items-center justify-between mb-12">
            <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <Logo className="justify-center mb-8" />
                <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
                <p className="text-muted-foreground">
                  Get started with MediSync in minutes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Personal Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@personal.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workEmail">Work Email</Label>
                  <Input
                    id="workEmail"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handlePasswordChange('password', e.target.value)}
                    required
                    className="h-11"
                  />
                  {formData.password && (
                    <div className="space-y-1.5 mt-3">
                      {passwordRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          {req.met ? (
                            <Check className="h-3 w-3 text-success" />
                          ) : (
                            <X className="h-3 w-3 text-muted-foreground" />
                          )}
                          <span className={req.met ? 'text-success' : 'text-muted-foreground'}>
                            {req.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                    required
                    className={`h-11 ${formData.confirmPassword && !passwordMatch ? 'border-destructive' : ''}`}
                  />
                  {formData.confirmPassword && !passwordMatch && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <X className="h-3 w-3" />
                      Passwords do not match
                    </p>
                  )}
                  {formData.confirmPassword && passwordMatch && (
                    <p className="text-xs text-success flex items-center gap-1">
                      <Check className="h-3 w-3" />
                      Passwords match
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11" 
                  size="lg"
                  disabled={!passwordMatch || !formData.password || !formData.confirmPassword}
                >
                  Continue
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-accent hover:underline font-medium">
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-4">
                <div className="flex items-center gap-1">
                  <Lock className="h-3 w-3" />
                  <span>Secure</span>
                </div>
                <span>•</span>
                <span>HIPAA-ready</span>
                <span>•</span>
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex bg-secondary/30 items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern-signup" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern-signup)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-lg space-y-6">
            <Card className="p-8 bg-card border-2 border-accent/20">
              <h3 className="text-xl font-bold mb-4">Why MediSync?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Real-Time Synchronization</div>
                    <div className="text-sm text-muted-foreground">
                      Instant data sync between PMS and CRM systems
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">HIPAA Compliant</div>
                    <div className="text-sm text-muted-foreground">
                      Enterprise-grade security and compliance
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Easy Integration</div>
                    <div className="text-sm text-muted-foreground">
                      Connect your systems in minutes, not months
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="text-center text-sm text-muted-foreground">
              <p>"MediSync has transformed how we manage patient data across our 12 clinics"</p>
              <p className="mt-2 font-medium text-foreground">— Sarah Johnson, DSO Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
