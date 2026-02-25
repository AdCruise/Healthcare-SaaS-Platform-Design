import { Search, FileText, Clock } from 'lucide-react';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

const patientsData = [
  { id: 'P001', name: 'Sarah Johnson', dob: '1985-03-15', clinic: 'Downtown Dental', lastAppointment: '2026-02-20', source: 'Synced' },
  { id: 'P002', name: 'Michael Chen', dob: '1990-07-22', clinic: 'Westside Clinic', lastAppointment: '2026-02-18', source: 'PMS' },
  { id: 'P003', name: 'Emily Davis', dob: '1988-11-05', clinic: 'Eastside Dental', lastAppointment: '2026-02-15', source: 'Local' },
  { id: 'P004', name: 'David Wilson', dob: '1992-01-30', clinic: 'Downtown Dental', lastAppointment: '2026-02-25', source: 'Synced' },
  { id: 'P005', name: 'Lisa Anderson', dob: '1987-06-12', clinic: 'Northside Clinic', lastAppointment: '2026-02-17', source: 'PMS' },
  { id: 'P006', name: 'James Brown', dob: '1995-09-08', clinic: 'Central Dental', lastAppointment: '2026-02-10', source: 'Local' },
];

export function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clinicFilter, setClinicFilter] = useState<string>('all');
  const [selectedPatient, setSelectedPatient] = useState<typeof patientsData[0] | null>(null);

  const clinics = [...new Set(patientsData.map(p => p.clinic))];

  const filteredPatients = patientsData.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.dob.includes(searchTerm) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClinic = clinicFilter === 'all' || patient.clinic === clinicFilter;
    return matchesSearch && matchesClinic;
  });

  const getSourceBadge = (source: string) => {
    switch (source) {
      case 'Synced':
        return <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Synced</Badge>;
      case 'PMS':
        return <Badge className="bg-blue-500/20 text-blue-600 hover:bg-blue-500/30">PMS</Badge>;
      case 'Local':
        return <Badge className="bg-purple-500/20 text-purple-600 hover:bg-purple-500/30">Local</Badge>;
      default:
        return <Badge variant="secondary">{source}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Patient Directory</h1>
        <p className="text-muted-foreground">
          Unified patient records across all systems.
        </p>
      </div>

      {/* Filters */}
      <Card className="p-6 border-2">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or DOB (YYYY-MM-DD)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
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
                <TableHead>Full Name</TableHead>
                <TableHead>Date of Birth</TableHead>
                <TableHead>Clinic</TableHead>
                <TableHead>Last Appointment</TableHead>
                <TableHead>Data Source</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{patient.dob}</TableCell>
                  <TableCell>{patient.clinic}</TableCell>
                  <TableCell>{patient.lastAppointment}</TableCell>
                  <TableCell>{getSourceBadge(patient.source)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedPatient(patient)}
                    >
                      View Profile
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredPatients.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No patients found matching your criteria.</p>
          </div>
        )}
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredPatients.length} of {patientsData.length} patients
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

      {/* Patient Profile Modal */}
      <Dialog open={selectedPatient !== null} onOpenChange={(open) => !open && setSelectedPatient(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedPatient?.name}</DialogTitle>
            <DialogDescription>Patient ID: {selectedPatient?.id}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Profile Info */}
            <Card className="p-6 border-2">
              <h3 className="font-semibold mb-4">Profile Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">{selectedPatient?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{selectedPatient?.dob}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Primary Clinic</p>
                  <p className="font-medium">{selectedPatient?.clinic}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data Source</p>
                  <p className="font-medium">{selectedPatient?.source}</p>
                </div>
              </div>
            </Card>

            {/* Sync History */}
            <Card className="p-6 border-2">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Sync History
              </h3>
              <div className="space-y-3">
                <div className="flex items-start justify-between p-3 bg-secondary/30 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Profile synced</p>
                    <p className="text-xs text-muted-foreground">All patient data updated</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-start justify-between p-3 bg-secondary/30 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Appointment added</p>
                    <p className="text-xs text-muted-foreground">New appointment scheduled</p>
                  </div>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </Card>

            {/* Appointment History */}
            <Card className="p-6 border-2">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent Appointments
              </h3>
              <div className="space-y-3">
                <div className="flex items-start justify-between p-3 bg-secondary/30 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Routine Checkup</p>
                    <p className="text-xs text-muted-foreground">{selectedPatient?.clinic}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{selectedPatient?.lastAppointment}</span>
                </div>
                <div className="flex items-start justify-between p-3 bg-secondary/30 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Cleaning</p>
                    <p className="text-xs text-muted-foreground">{selectedPatient?.clinic}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2026-02-01</span>
                </div>
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
