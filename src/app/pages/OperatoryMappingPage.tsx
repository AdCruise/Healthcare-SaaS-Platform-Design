import { useState } from 'react';
import { Plus, Trash2, Save, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { DashboardLayout } from '../components/DashboardLayout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

interface Operatory {
  id: string;
  name: string;
  calendarId: string;
  color: string;
}

export function OperatoryMappingPage() {
  const [operatories, setOperatories] = useState<Operatory[]>([
    { id: '1', name: 'Operatory 1', calendarId: 'cal_001', color: '#2F80ED' },
    { id: '2', name: 'Operatory 2', calendarId: 'cal_002', color: '#10b981' },
    { id: '3', name: 'Operatory 3', calendarId: 'cal_003', color: '#f59e0b' },
  ]);

  const addOperatory = () => {
    const newOp: Operatory = {
      id: Date.now().toString(),
      name: `Operatory ${operatories.length + 1}`,
      calendarId: '',
      color: '#8b5cf6',
    };
    setOperatories([...operatories, newOp]);
  };

  const removeOperatory = (id: string) => {
    setOperatories(operatories.filter(op => op.id !== id));
  };

  const updateOperatory = (id: string, field: keyof Operatory, value: string) => {
    setOperatories(operatories.map(op => 
      op.id === id ? { ...op, [field]: value } : op
    ));
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Operatory Mapping</h1>
            <p className="text-muted-foreground">
              Map treatment rooms to calendar systems for appointment scheduling
            </p>
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Operatory Configuration</h3>
                <Button variant="outline" size="sm" onClick={addOperatory}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Operatory
                </Button>
              </div>

              <div className="space-y-4">
                {operatories.map((op) => (
                  <Card key={op.id} className="p-4 bg-secondary/30 border-2">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{op.name}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeOperatory(op.id)}
                          className="h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label className="text-xs">Operatory Name</Label>
                          <Input
                            value={op.name}
                            onChange={(e) => updateOperatory(op.id, 'name', e.target.value)}
                            className="h-9 mt-1"
                          />
                        </div>

                        <div>
                          <Label className="text-xs">Calendar ID</Label>
                          <Input
                            value={op.calendarId}
                            onChange={(e) => updateOperatory(op.id, 'calendarId', e.target.value)}
                            placeholder="cal_xxx"
                            className="h-9 mt-1"
                          />
                        </div>

                        <div>
                          <Label className="text-xs">Display Color</Label>
                          <div className="flex gap-2 mt-1">
                            <input
                              type="color"
                              value={op.color}
                              onChange={(e) => updateOperatory(op.id, 'color', e.target.value)}
                              className="h-9 w-16 rounded border border-border cursor-pointer"
                            />
                            <Input
                              value={op.color}
                              onChange={(e) => updateOperatory(op.id, 'color', e.target.value)}
                              className="h-9 flex-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* JSON Preview */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Configuration JSON</h3>
              <div className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                <pre className="text-xs font-mono">
                  {JSON.stringify({ operatories }, null, 2)}
                </pre>
              </div>
            </Card>
          </div>

          {/* Visual Calendar Preview */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">Calendar Preview</h3>
              </div>

              <div className="space-y-4">
                {/* Time slots */}
                <div className="grid grid-cols-1 gap-2">
                  {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'].map((time, idx) => (
                    <div key={idx} className="grid grid-cols-4 gap-2">
                      <div className="col-span-1 text-sm text-muted-foreground py-2">
                        {time}
                      </div>
                      <div className="col-span-3 grid grid-cols-3 gap-2">
                        {operatories.map((op) => (
                          <div
                            key={op.id}
                            className="p-2 rounded border-2 border-border hover:border-accent transition-colors cursor-pointer"
                            style={{
                              backgroundColor: `${op.color}15`,
                              borderColor: idx % 2 === 0 ? op.color : undefined,
                            }}
                          >
                            {idx % 2 === 0 && (
                              <div className="text-xs font-medium truncate">
                                Patient {idx + 1}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Legend */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Operatory Legend</h3>
              <div className="space-y-3">
                {operatories.map((op) => (
                  <div key={op.id} className="flex items-center gap-3">
                    <div
                      className="h-4 w-4 rounded"
                      style={{ backgroundColor: op.color }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{op.name}</div>
                      <div className="text-xs text-muted-foreground">{op.calendarId || 'Not mapped'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sync Info */}
            <Card className="p-6 bg-accent/5 border-accent/20">
              <h4 className="font-semibold mb-3">How Mapping Works</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Each operatory maps to a unique calendar in your CRM</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Appointments are synced based on operatory assignments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Changes are reflected in real-time across systems</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
