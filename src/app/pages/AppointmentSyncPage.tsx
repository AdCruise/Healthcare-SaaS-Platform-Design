import { useState } from 'react';
import { RefreshCw, CheckCircle2, XCircle, Clock, Activity, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { DashboardLayout } from '../components/DashboardLayout';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Input } from '../components/ui/input';

interface SyncEvent {
  id: string;
  timestamp: string;
  patient: string;
  clinic: string;
  action: string;
  status: 'success' | 'pending' | 'failed';
  details: string;
}

const mockEvents: SyncEvent[] = [
  {
    id: '1',
    timestamp: '2 min ago',
    patient: 'Sarah Johnson',
    clinic: 'Downtown Dental',
    action: 'Appointment Created',
    status: 'success',
    details: 'Successfully synced to CRM',
  },
  {
    id: '2',
    timestamp: '5 min ago',
    patient: 'Michael Chen',
    clinic: 'Westside Clinic',
    action: 'Appointment Updated',
    status: 'success',
    details: 'Time changed to 2:00 PM',
  },
  {
    id: '3',
    timestamp: '8 min ago',
    patient: 'Emily Davis',
    clinic: 'Eastside Dental',
    action: 'Patient Record Sync',
    status: 'pending',
    details: 'Waiting for confirmation',
  },
  {
    id: '4',
    timestamp: '12 min ago',
    patient: 'David Wilson',
    clinic: 'Downtown Dental',
    action: 'Appointment Cancelled',
    status: 'failed',
    details: 'CRM connection timeout',
  },
  {
    id: '5',
    timestamp: '15 min ago',
    patient: 'Lisa Anderson',
    clinic: 'Northside Clinic',
    action: 'Insurance Verification',
    status: 'success',
    details: 'Coverage confirmed',
  },
];

export function AppointmentSyncPage() {
  const [events, setEvents] = useState<SyncEvent[]>(mockEvents);
  const [filter, setFilter] = useState<'all' | 'success' | 'pending' | 'failed'>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.status === filter);

  const stats = {
    total: events.length,
    success: events.filter(e => e.status === 'success').length,
    pending: events.filter(e => e.status === 'pending').length,
    failed: events.filter(e => e.status === 'failed').length,
  };

  const retrySync = (id: string) => {
    setEvents(events.map(e => 
      e.id === id ? { ...e, status: 'pending' as const } : e
    ));
    // Simulate retry
    setTimeout(() => {
      setEvents(events.map(e => 
        e.id === id ? { ...e, status: 'success' as const, details: 'Retry successful' } : e
      ));
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Appointment Sync Monitoring</h1>
            <p className="text-muted-foreground">
              Real-time monitoring of appointment synchronization between PMS and CRM
            </p>
          </div>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card 
            className={`p-6 cursor-pointer transition-all ${filter === 'all' ? 'border-2 border-accent' : 'hover:border-accent/50'}`}
            onClick={() => setFilter('all')}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Events</p>
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Activity className="h-5 w-5 text-accent" />
              </div>
            </div>
          </Card>

          <Card 
            className={`p-6 cursor-pointer transition-all ${filter === 'success' ? 'border-2 border-success' : 'hover:border-success/50'}`}
            onClick={() => setFilter('success')}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Successful</p>
                <p className="text-3xl font-bold text-success">{stats.success}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
            </div>
          </Card>

          <Card 
            className={`p-6 cursor-pointer transition-all ${filter === 'pending' ? 'border-2 border-warning' : 'hover:border-warning/50'}`}
            onClick={() => setFilter('pending')}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending</p>
                <p className="text-3xl font-bold text-warning">{stats.pending}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-warning" />
              </div>
            </div>
          </Card>

          <Card 
            className={`p-6 cursor-pointer transition-all ${filter === 'failed' ? 'border-2 border-destructive' : 'hover:border-destructive/50'}`}
            onClick={() => setFilter('failed')}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Failed</p>
                <p className="text-3xl font-bold text-destructive">{stats.failed}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="h-5 w-5 text-destructive" />
              </div>
            </div>
          </Card>
        </div>

        {/* API Health Status */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">PMS API</h3>
              <Badge className="bg-success/20 text-success hover:bg-success/30">
                Operational
              </Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Response Time:</span>
                <span className="font-medium">45ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate:</span>
                <span className="font-medium">99.8%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">CRM API</h3>
              <Badge className="bg-success/20 text-success hover:bg-success/30">
                Operational
              </Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Response Time:</span>
                <span className="font-medium">52ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate:</span>
                <span className="font-medium">99.5%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Circuit Breaker</h3>
              <Badge className="bg-success/20 text-success hover:bg-success/30">
                Closed
              </Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium">Healthy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Failures:</span>
                <span className="font-medium">0/50</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Live Activity Feed */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <h3 className="font-semibold">Live Activity Feed</h3>
              </div>
              {filter !== 'all' && (
                <Badge variant="secondary">
                  Filtered: {filter}
                </Badge>
              )}
            </div>
            <Input
              type="search"
              placeholder="Search events..."
              className="max-w-xs h-9"
            />
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Clinic</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="text-sm text-muted-foreground">
                      {event.timestamp}
                    </TableCell>
                    <TableCell className="font-medium">{event.patient}</TableCell>
                    <TableCell>{event.clinic}</TableCell>
                    <TableCell>{event.action}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          event.status === 'success' ? 'default' :
                          event.status === 'pending' ? 'secondary' :
                          'destructive'
                        }
                        className={
                          event.status === 'success' ? 'bg-success/20 text-success hover:bg-success/30' :
                          event.status === 'pending' ? 'bg-warning/20 text-warning hover:bg-warning/30' :
                          ''
                        }
                      >
                        <span className="flex items-center gap-1">
                          {event.status === 'success' && <CheckCircle2 className="h-3 w-3" />}
                          {event.status === 'pending' && <Clock className="h-3 w-3" />}
                          {event.status === 'failed' && <XCircle className="h-3 w-3" />}
                          {event.status}
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {event.details}
                    </TableCell>
                    <TableCell>
                      {event.status === 'failed' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => retrySync(event.id)}
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="p-6 bg-accent/5 border-accent/20">
          <div className="flex gap-4">
            <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-2">About Sync Monitoring</h4>
              <p className="text-sm text-muted-foreground mb-3">
                This dashboard provides real-time visibility into all appointment synchronization events. 
                Failed syncs are automatically retried with exponential backoff.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Syncs are processed asynchronously through Redis queue</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Circuit breaker prevents cascading failures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>All events are logged with full audit trail</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
