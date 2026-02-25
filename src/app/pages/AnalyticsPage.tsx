import { Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const syncVolumeData = [
  { date: 'Feb 1', syncs: 234 },
  { date: 'Feb 5', syncs: 389 },
  { date: 'Feb 10', syncs: 456 },
  { date: 'Feb 15', syncs: 612 },
  { date: 'Feb 20', syncs: 751 },
  { date: 'Feb 25', syncs: 894 },
];

const revenuePerClinicData = [
  { clinic: 'Downtown', value: 45000 },
  { clinic: 'Westside', value: 32000 },
  { clinic: 'Northside', value: 56000 },
  { clinic: 'Eastside', value: 28000 },
  { clinic: 'Central', value: 38000 },
];

const syncStatusData = [
  { name: 'Success', value: 823, fill: '#22c55e' },
  { name: 'Pending', value: 45, fill: '#3b82f6' },
  { name: 'Failed', value: 12, fill: '#ef4444' },
];

export function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('30days');
  const [clinicFilter, setClinicFilter] = useState<string>('all');

  const clinics = ['Downtown', 'Westside', 'Northside', 'Eastside', 'Central'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">System Analytics</h1>
        <p className="text-muted-foreground">
          Performance insights across all clinics.
        </p>
      </div>

      {/* Filters */}
      <Card className="p-6 border-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Date Range</label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Clinic</label>
            <Select value={clinicFilter} onValueChange={setClinicFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Clinics</SelectItem>
                {clinics.map(clinic => (
                  <SelectItem key={clinic} value={clinic}>{clinic}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sync Volume Chart */}
        <Card className="p-6 border-2">
          <h3 className="font-semibold mb-6">Appointment Sync Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={syncVolumeData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="syncs"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--accent))' }}
                name="Synced Appointments"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Revenue per Clinic Chart */}
        <Card className="p-6 border-2">
          <h3 className="font-semibold mb-6">Revenue per Clinic</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenuePerClinicData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="clinic" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Legend />
              <Bar dataKey="value" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Sync Status Distribution */}
      <Card className="p-6 border-2">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-6">Sync Status Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={syncStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {syncStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Summary Stats */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-4 bg-secondary/30 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Successful Syncs</p>
                  <p className="text-2xl font-bold">823</p>
                </div>
                <div className="h-2 w-32 bg-green-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-secondary/30 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Syncs</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <div className="h-2 w-32 bg-blue-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-16 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-secondary/30 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Failed Syncs</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="h-2 w-32 bg-red-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-4 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
                  <p className="text-2xl font-bold text-accent">96.2%</p>
                </div>
                <div className="h-2 w-32 bg-accent/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-accent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Additional Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 border-2">
          <p className="text-sm text-muted-foreground mb-2">Avg Sync Time</p>
          <p className="text-3xl font-bold">2.3s</p>
        </Card>
        <Card className="p-6 border-2">
          <p className="text-sm text-muted-foreground mb-2">Uptime</p>
          <p className="text-3xl font-bold">99.9%</p>
        </Card>
        <Card className="p-6 border-2">
          <p className="text-sm text-muted-foreground mb-2">Total Synced Records</p>
          <p className="text-3xl font-bold">12.4K</p>
        </Card>
        <Card className="p-6 border-2">
          <p className="text-sm text-muted-foreground mb-2">API Calls Today</p>
          <p className="text-3xl font-bold">5.2K</p>
        </Card>
      </div>
    </div>
  );
}
