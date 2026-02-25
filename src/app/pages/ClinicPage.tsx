import { Plus, Search, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
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

const clinicsData = [
  { id: 'CLINIC001', name: 'Downtown Dental', location: 'Manhattan, NY', synced: 127, status: 'active' },
  { id: 'CLINIC002', name: 'Westside Clinic', location: 'Brooklyn, NY', synced: 89, status: 'active' },
  { id: 'CLINIC003', name: 'Eastside Dental', location: 'Queens, NY', synced: 0, status: 'error' },
  { id: 'CLINIC004', name: 'Northside Clinic', location: 'Bronx, NY', synced: 234, status: 'active' },
  { id: 'CLINIC005', name: 'Central Dental', location: 'Manhattan, NY', synced: 0, status: 'maintenance' },
];

export function ClinicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredClinics = clinicsData.filter(clinic => {
    const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || clinic.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Active</Badge>;
      case 'error':
        return <Badge className="bg-red-500/20 text-red-600 hover:bg-red-500/30">Sync Error</Badge>;
      case 'maintenance':
        return <Badge className="bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/30">Maintenance</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'active') {
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    } else if (status === 'error') {
      return <AlertCircle className="h-5 w-5 text-red-600" />;
    }
    return null;
  };

  const activeClinics = clinicsData.filter(c => c.status === 'active').length;
  const totalSynced = clinicsData.reduce((sum, c) => sum + c.synced, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Clinic Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor all registered clinics.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Clinic
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Clinics</p>
            <p className="text-4xl font-bold">{clinicsData.length}</p>
            <p className="text-xs text-green-600">{activeClinics} active</p>
          </div>
        </Card>
        <Card className="p-6 border-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Active Sync Connections</p>
            <p className="text-4xl font-bold">{activeClinics}</p>
            <p className="text-xs text-green-600">{totalSynced} appointments synced today</p>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6 border-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by clinic name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="error">Sync Error</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
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
                <TableHead>Clinic Name</TableHead>
                <TableHead>Clinic ID</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Synced Today</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClinics.map((clinic) => (
                <TableRow key={clinic.id}>
                  <TableCell className="font-medium">{clinic.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{clinic.id}</TableCell>
                  <TableCell>{clinic.location}</TableCell>
                  <TableCell>
                    <span className="font-medium">{clinic.synced}</span>
                    <span className="text-muted-foreground text-sm"> appointments</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(clinic.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Disable
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredClinics.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No clinics found matching your criteria.</p>
          </div>
        )}
      </Card>

      {/* Pagination Info */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredClinics.length} of {clinicsData.length} clinics
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
