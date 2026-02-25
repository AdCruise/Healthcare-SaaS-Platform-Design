import { Search, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';

const appointmentsData = [
  { id: 'APT001', patient: 'Sarah Johnson', clinic: 'Downtown Dental', time: '10:00 AM', status: 'success', date: '2026-02-25' },
  { id: 'APT002', patient: 'Michael Chen', clinic: 'Westside Clinic', time: '11:30 AM', status: 'pending', date: '2026-02-25' },
  { id: 'APT003', patient: 'Emily Davis', clinic: 'Eastside Dental', time: '2:00 PM', status: 'failed', date: '2026-02-25' },
  { id: 'APT004', patient: 'David Wilson', clinic: 'Downtown Dental', time: '3:30 PM', status: 'success', date: '2026-02-25' },
  { id: 'APT005', patient: 'Lisa Anderson', clinic: 'Northside Clinic', time: '4:00 PM', status: 'failed', date: '2026-02-24' },
  { id: 'APT006', patient: 'James Brown', clinic: 'Central Dental', time: '9:00 AM', status: 'success', date: '2026-02-24' },
];

export function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [clinicFilter, setClinicFilter] = useState<string>('all');

  const clinics = [...new Set(appointmentsData.map(a => a.clinic))];

  const filteredAppointments = appointmentsData.filter(apt => {
    const matchesSearch = apt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    const matchesClinic = clinicFilter === 'all' || apt.clinic === clinicFilter;
    return matchesSearch && matchesStatus && matchesClinic;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Success</Badge>;
      case 'pending':
        return <Badge className="bg-blue-500/20 text-blue-600 hover:bg-blue-500/30">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-500/20 text-red-600 hover:bg-red-500/30">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const successCount = appointmentsData.filter(a => a.status === 'success').length;
  const failedCount = appointmentsData.filter(a => a.status === 'failed').length;
  const pendingCount = appointmentsData.filter(a => a.status === 'pending').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Appointment Sync</h1>
        <p className="text-muted-foreground">
          Monitor and manage appointment synchronization across all clinics.
        </p>
      </div>

      {/* Health Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 border-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Synced</p>
              <p className="text-3xl font-bold">{successCount}</p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
        </Card>
        <Card className="p-6 border-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pending</p>
              <p className="text-3xl font-bold">{pendingCount}</p>
            </div>
            <RefreshCw className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-6 border-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Failed</p>
              <p className="text-3xl font-bold">{failedCount}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </Card>
        <Card className="p-6 border-2 bg-accent/5 border-accent/20">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Circuit Breaker Status</p>
            <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Healthy</Badge>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6 border-2">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by patient name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={clinicFilter} onValueChange={setClinicFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by clinic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clinics</SelectItem>
              {clinics.map(clinic => (
                <SelectItem key={clinic} value={clinic}>{clinic}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Table */}
      <Card className="p-6 border-2">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Clinic</TableHead>
                <TableHead>Appointment Time</TableHead>
                <TableHead>Sync Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAppointments.map((apt) => (
                <TableRow key={apt.id}>
                  <TableCell className="font-medium">{apt.patient}</TableCell>
                  <TableCell>{apt.clinic}</TableCell>
                  <TableCell>{apt.time}</TableCell>
                  <TableCell>{getStatusBadge(apt.status)}</TableCell>
                  <TableCell className="text-right">
                    {apt.status === 'failed' && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <RefreshCw className="h-3 w-3" />
                        Retry
                      </Button>
                    )}
                    {apt.status !== 'failed' && (
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredAppointments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No appointments found matching your criteria.</p>
          </div>
        )}
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredAppointments.length} of {appointmentsData.length} appointments
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
