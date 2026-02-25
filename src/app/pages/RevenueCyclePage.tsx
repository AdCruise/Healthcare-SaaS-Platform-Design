import { Search, Eye, RotateCcw, TrendingUp, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
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

const claimsData = [
  { id: 'CLM001', patient: 'Sarah Johnson', insurance: 'Blue Cross', claimId: 'BC-2026-001', status: 'approved', amount: 2500 },
  { id: 'CLM002', patient: 'Michael Chen', insurance: 'Aetna', claimId: 'AET-2026-002', status: 'pending', amount: 1800 },
  { id: 'CLM003', patient: 'Emily Davis', insurance: 'United Health', claimId: 'UHC-2026-003', status: 'rejected', amount: 950 },
  { id: 'CLM004', patient: 'David Wilson', insurance: 'Cigna', claimId: 'CIG-2026-004', status: 'approved', amount: 3200 },
  { id: 'CLM005', patient: 'Lisa Anderson', insurance: 'Blue Shield', claimId: 'BS-2026-005', status: 'pending', amount: 2100 },
];

export function RevenueCyclePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedClaim, setSelectedClaim] = useState<typeof claimsData[0] | null>(null);

  const filteredClaims = claimsData.filter(claim => {
    const matchesSearch = claim.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.claimId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || claim.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/30">Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-500/20 text-red-600 hover:bg-red-500/30">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const approvedClaims = claimsData.filter(c => c.status === 'approved').length;
  const rejectedClaims = claimsData.filter(c => c.status === 'rejected').length;
  const pendingClaims = claimsData.filter(c => c.status === 'pending').length;
  const totalValue = claimsData.reduce((sum, c) => sum + c.amount, 0);
  const approvedValue = claimsData.filter(c => c.status === 'approved').reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Revenue Cycle Automation</h1>
        <p className="text-muted-foreground">
          Insurance verification and claims management.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 border-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Claims Pending</p>
              <p className="text-3xl font-bold">{pendingClaims}</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>
        <Card className="p-6 border-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Claims Approved</p>
              <p className="text-3xl font-bold">{approvedClaims}</p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
        </Card>
        <Card className="p-6 border-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Claims Rejected</p>
              <p className="text-3xl font-bold">{rejectedClaims}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
        </Card>
        <Card className="p-6 border-2 bg-accent/5 border-accent/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Claim Value</p>
              <p className="text-3xl font-bold">${(totalValue / 1000).toFixed(1)}K</p>
              <p className="text-xs text-green-600 mt-1">${(approvedValue / 1000).toFixed(1)}K approved</p>
            </div>
            <TrendingUp className="h-8 w-8 text-accent" />
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6 border-2">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by patient or claim ID..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Claims Table */}
      <Card className="p-6 border-2">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Insurance Provider</TableHead>
                <TableHead>Claim ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClaims.map((claim) => (
                <TableRow key={claim.id}>
                  <TableCell className="font-medium">{claim.patient}</TableCell>
                  <TableCell>{claim.insurance}</TableCell>
                  <TableCell className="font-mono text-sm">{claim.claimId}</TableCell>
                  <TableCell className="font-medium">${claim.amount}</TableCell>
                  <TableCell>{getStatusBadge(claim.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => setSelectedClaim(claim)}
                      >
                        <Eye className="h-3 w-3" />
                        View
                      </Button>
                      {claim.status === 'rejected' && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <RotateCcw className="h-3 w-3" />
                          Resubmit
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredClaims.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No claims found matching your criteria.</p>
          </div>
        )}
      </Card>

      {/* Claim Detail Modal */}
      <Dialog open={selectedClaim !== null} onOpenChange={(open) => !open && setSelectedClaim(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Claim Details</DialogTitle>
            <DialogDescription>Claim ID: {selectedClaim?.claimId}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Claim Info */}
            <Card className="p-6 border-2">
              <h3 className="font-semibold mb-4">Claim Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Patient</p>
                  <p className="font-medium">{selectedClaim?.patient}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Insurance Provider</p>
                  <p className="font-medium">{selectedClaim?.insurance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Claim Amount</p>
                  <p className="font-medium text-lg">${selectedClaim?.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Status</p>
                  <p className="font-medium">{selectedClaim && getStatusBadge(selectedClaim.status)}</p>
                </div>
              </div>
            </Card>

            {/* Status Timeline */}
            <Card className="p-6 border-2">
              <h3 className="font-semibold mb-4">Status Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                    <div className="h-8 w-0.5 bg-border"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Claim Submitted</p>
                    <p className="text-xs text-muted-foreground">2026-02-20 10:30 AM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                    <div className="h-8 w-0.5 bg-border"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Verification Started</p>
                    <p className="text-xs text-muted-foreground">2026-02-20 11:15 AM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/30"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Awaiting Insurance Response</p>
                    <p className="text-xs text-muted-foreground">In progress</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
