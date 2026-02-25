import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';

export function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign in - in real app would authenticate
    navigate('/dashboard');
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
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-muted-foreground">
                  Sign in to your MediSync account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm text-accent hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>

                <Button type="submit" className="w-full h-11" size="lg">
                  Sign In
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-accent hover:underline font-medium">
                    Create Account
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
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-lg">
            <Card className="p-8 bg-card border-2 border-accent/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" className="stroke-accent" strokeWidth="2" fill="none" />
                      <circle cx="9" cy="12" r="2" className="fill-accent" />
                      <circle cx="15" cy="12" r="2" className="fill-accent" />
                      <line x1="11" y1="12" x2="13" y2="12" className="stroke-accent" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Connected Healthcare Systems</div>
                    <div className="text-sm text-muted-foreground">Real-time data synchronization</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm">Practice Management System</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm">CRM Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm">Patient Engagement</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
