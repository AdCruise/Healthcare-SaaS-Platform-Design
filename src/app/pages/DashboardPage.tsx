import { Building2, Calendar, Users, AlertTriangle, TrendingUp, Activity, CheckCircle2, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const syncData = [
  { time: '00:00', syncs: 45 },
  { time: '04:00', syncs: 32 },
  { time: '08:00', syncs: 127 },
  { time: '12:00', syncs: 243 },
  { time: '16:00', syncs: 189 },
  { time: '20:00', syncs: 87 },
];

const revenueData = [
  { month: 'Jan', revenue: 85000 },
  { month: 'Feb', revenue: 92000 },
  { month: 'Mar', revenue: 98000 },
  { month: 'Apr', revenue: 105000 },
  { month: 'May', revenue: 112000 },
  { month: 'Jun', revenue: 125000 },
];

const recentAppointments = [
  { patient: 'Sarah Johnson', clinic: 'Downtown Dental', time: '10:00 AM', status: 'confirmed' },
  { patient: 'Michael Chen', clinic: 'Westside Clinic', time: '11:30 AM', status: 'pending' },
  { patient: 'Emily Davis', clinic: 'Eastside Dental', time: '2:00 PM', status: 'confirmed' },
  { patient: 'David Wilson', clinic: 'Downtown Dental', time: '3:30 PM', status: 'cancelled' },
  { patient: 'Lisa Anderson', clinic: 'Northside Clinic', time: '4:00 PM', status: 'confirmed' },
];

export function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening across your organization.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Clinics</p>
                <p className="text-3xl font-bold">12</p>
                <div className="flex items-center gap-1 mt-2 text-sm text-success">
                  <TrendingUp className="h-4 w-4" />
                  <span>2 new this month</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Synced Today</p>
                <p className="text-3xl font-bold">1,247</p>
                <div className="flex items-center gap-1 mt-2 text-sm text-success">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>99.8% success rate</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Failed Syncs</p>
                <p className="text-3xl font-bold">8</p>
                <div className="flex items-center gap-1 mt-2 text-sm text-warning">
                  <Clock className="h-4 w-4" />
                  <span>Retrying...</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Claims Pending</p>
                <p className="text-3xl font-bold">42</p>
                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                  <Activity className="h-4 w-4" />
                  <span>$127,500 value</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-6">Sync Activity (24h)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={syncData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="time" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="syncs" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-6">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                />
                <Bar dataKey="revenue" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Appointments */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">Recent Appointments</h3>
            <a href="#" className="text-sm text-accent hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Clinic</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAppointments.map((apt, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{apt.patient}</TableCell>
                    <TableCell>{apt.clinic}</TableCell>
                    <TableCell>{apt.time}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          apt.status === 'confirmed' ? 'default' :
                          apt.status === 'pending' ? 'secondary' :
                          'destructive'
                        }
                        className={
                          apt.status === 'confirmed' ? 'bg-success/20 text-success hover:bg-success/30' :
                          apt.status === 'pending' ? 'bg-warning/20 text-warning hover:bg-warning/30' :
                          ''
                        }
                      >
                        {apt.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* System Status */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="font-semibold">PMS Connector</div>
                <div className="text-sm text-success">Active</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Last sync: 2 minutes ago
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="font-semibold">CRM Connector</div>
                <div className="text-sm text-success">Active</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Last sync: 1 minute ago
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Activity className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="font-semibold">Queue System</div>
                <div className="text-sm text-success">Healthy</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              142 jobs pending
            </div>
          </Card>
        </div>
      </div>
    );
  }

