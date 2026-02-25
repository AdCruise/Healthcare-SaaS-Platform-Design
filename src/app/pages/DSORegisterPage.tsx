import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Plus, X, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export function DSORegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: '',
    dsoId: '',
    role: '',
  });

  const [clinics, setClinics] = useState<string[]>(['']);

  const addClinic = () => {
    setClinics([...clinics, '']);
  };

  const removeClinic = (index: number) => {
    setClinics(clinics.filter((_, i) => i !== index));
  };

  const updateClinic = (index: number, value: string) => {
    const newClinics = [...clinics];
    newClinics[index] = value;
    setClinics(newClinics);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const steps = [
    { number: 1, label: 'Account', completed: true },
    { number: 2, label: 'Organization', completed: true },
    { number: 3, label: 'Setup', completed: false },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Progress */}
      <div className="hidden lg:block w-80 bg-secondary/30 border-r border-border p-8">
        <Logo className="mb-12" />
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Setup Progress</h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.completed ? 'bg-accent text-accent-foreground' : 
                    step.number === 3 ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.completed ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="font-semibold">{step.number}</span>
                    )}
                  </div>
                  <div className="pt-2">
                    <div className={`font-medium ${step.number === 3 ? 'text-foreground' : 'text-muted-foreground'}`}>
                      Step {step.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{step.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground space-y-3">
              <p>Setting up a DSO account allows you to:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-accent" />
                  <span>Manage multiple clinics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-accent" />
                  <span>Centralized reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-accent" />
                  <span>Role-based access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex h-16 items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
          <div className="w-full max-w-2xl space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-3">DSO Registration</h1>
              <p className="text-muted-foreground text-lg">
                Set up your Dental Support Organization
              </p>
            </div>

            <Card className="p-8 border-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name *</Label>
                  <Input
                    id="orgName"
                    type="text"
                    placeholder="Dental Excellence Group"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    required
                    className="h-11"
                  />
                  <p className="text-xs text-muted-foreground">
                    The official name of your DSO
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dsoId">DSO ID *</Label>
                  <Input
                    id="dsoId"
                    type="text"
                    placeholder="DSO-12345"
                    value={formData.dsoId}
                    onChange={(e) => setFormData({ ...formData, dsoId: e.target.value })}
                    required
                    className="h-11"
                  />
                  <p className="text-xs text-muted-foreground">
                    Unique identifier for your organization
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Clinic Locations *</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addClinic}
                      className="h-8"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Clinic
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {clinics.map((clinic, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          type="text"
                          placeholder={`Clinic ${index + 1} name`}
                          value={clinic}
                          onChange={(e) => updateClinic(index, e.target.value)}
                          required
                          className="h-11"
                        />
                        {clinics.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeClinic(index)}
                            className="h-11 w-11 flex-shrink-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role *</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ceo">CEO / President</SelectItem>
                      <SelectItem value="coo">COO / Operations Director</SelectItem>
                      <SelectItem value="manager">Clinic Manager</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="director">Regional Director</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    This determines your access level and permissions
                  </p>
                </div>

                <div className="flex gap-3 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/org-select')}
                    className="flex-1 h-11"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 h-11"
                    disabled={!formData.organizationName || !formData.dsoId || !formData.role || clinics.some(c => !c)}
                  >
                    Complete Setup
                  </Button>
                </div>
              </form>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                Need help?{' '}
                <a href="#" className="text-accent hover:underline">
                  Contact support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
