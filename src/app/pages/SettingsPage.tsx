import { useState } from 'react';
import { Save, Eye, EyeOff, Copy, LogOut, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useUser } from '../context/UserContext';
import { Badge } from '../components/ui/badge';

export function SettingsPage() {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Profile Tab State
  const [profileForm, setProfileForm] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });
  const [profileSaved, setProfileSaved] = useState(false);

  // Organization Tab State
  const [orgForm] = useState({
    orgName: 'Dental Network Inc.',
    dsoId: 'DSO-123456',
    apiKey: 'your_api_key_here_••••••••••',
  });
  const [apiKeyCopied, setApiKeyCopied] = useState(false);

  // Notifications Tab State
  const [notifications, setNotifications] = useState({
    appointmentAlerts: true,
    failedSyncAlerts: true,
    claimUpdates: true,
    emailNotifications: true,
  });

  // Security Tab State
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleProfileSave = () => {
    updateUser({
      name: profileForm.name,
      email: profileForm.email,
      role: profileForm.role,
      avatar: user.avatar,
    });
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2000);
  };

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(orgForm.apiKey);
    setApiKeyCopied(true);
    setTimeout(() => setApiKeyCopied(false), 2000);
  };

  const activeSessions = [
    { device: 'MacBook Pro', location: 'New York, NY', lastActive: 'Now', current: true },
    { device: 'iPhone 14', location: 'New York, NY', lastActive: '2 hours ago', current: false },
    { device: 'Chrome on Windows', location: 'New Jersey, NJ', lastActive: '1 day ago', current: false },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, organization, and preferences.
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full md:w-max grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="p-8 border-2">
            <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
            
            <div className="space-y-6">
              {/* Avatar */}
              <div>
                <label className="text-sm font-medium mb-3 block">Profile Avatar</label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-accent text-background flex items-center justify-center font-bold text-2xl">
                    {user.avatar}
                  </div>
                  <Button variant="outline">Upload Photo</Button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  placeholder="Enter your email"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-sm font-medium mb-2 block">Role</label>
                <Input
                  value={profileForm.role}
                  onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                  placeholder="Your role"
                />
              </div>

              {/* Save Button */}
              <div className="flex items-center gap-4 pt-4">
                <Button onClick={handleProfileSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
                {profileSaved && (
                  <span className="text-sm text-green-600">Changes saved successfully!</span>
                )}
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Organization Tab */}
        <TabsContent value="organization" className="space-y-6">
          <Card className="p-8 border-2">
            <h2 className="text-xl font-semibold mb-6">Organization Settings</h2>

            <div className="space-y-6">
              {/* Organization Name */}
              <div>
                <label className="text-sm font-medium mb-2 block">Organization Name</label>
                <Input
                  value={orgForm.orgName}
                  readOnly
                  disabled
                />
              </div>

              {/* DSO ID */}
              <div>
                <label className="text-sm font-medium mb-2 block">DSO ID / Clinic ID</label>
                <Input
                  value={orgForm.dsoId}
                  readOnly
                  disabled
                />
              </div>

              {/* API Key */}
              <div>
                <label className="text-sm font-medium mb-2 block">API Key</label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    value={orgForm.apiKey}
                    readOnly
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyApiKey}
                    className="gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    {apiKeyCopied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Keep your API key private. Never share it publicly.
              </p>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-8 border-2">
            <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>

            <div className="space-y-4">
              {/* Appointment Sync Alerts */}
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                <div>
                  <p className="font-medium">Appointment Sync Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified when appointments sync successfully</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.appointmentAlerts}
                  onChange={(e) => setNotifications({ ...notifications, appointmentAlerts: e.target.checked })}
                  className="h-5 w-5 cursor-pointer"
                />
              </div>

              {/* Failed Sync Alerts */}
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                <div>
                  <p className="font-medium">Failed Sync Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified of any sync failures</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.failedSyncAlerts}
                  onChange={(e) => setNotifications({ ...notifications, failedSyncAlerts: e.target.checked })}
                  className="h-5 w-5 cursor-pointer"
                />
              </div>

              {/* Claim Updates */}
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                <div>
                  <p className="font-medium">Claim Updates</p>
                  <p className="text-sm text-muted-foreground">Get notified about claim status changes</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.claimUpdates}
                  onChange={(e) => setNotifications({ ...notifications, claimUpdates: e.target.checked })}
                  className="h-5 w-5 cursor-pointer"
                />
              </div>

              {/* Email Notifications */}
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.emailNotifications}
                  onChange={(e) => setNotifications({ ...notifications, emailNotifications: e.target.checked })}
                  className="h-5 w-5 cursor-pointer"
                />
              </div>
            </div>

            <Button className="mt-6">Save Preferences</Button>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          {/* Change Password */}
          <Card className="p-8 border-2">
            <h2 className="text-xl font-semibold mb-6">Change Password</h2>

            <div className="space-y-4">
              {/* Current Password */}
              <div>
                <label className="text-sm font-medium mb-2 block">Current Password</label>
                <div className="relative">
                  <Input
                    type={showCurrentPassword ? 'text' : 'password'}
                    placeholder="Enter current password"
                    value={passwordForm.current}
                    onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                  />
                  <button
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="text-sm font-medium mb-2 block">New Password</label>
                <div className="relative">
                  <Input
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Enter new password"
                    value={passwordForm.new}
                    onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })}
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium mb-2 block">Confirm New Password</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm new password"
                    value={passwordForm.confirm}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button className="mt-4">Update Password</Button>
            </div>
          </Card>

          {/* Two-Factor Authentication */}
          <Card className="p-8 border-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Two-Factor Authentication</h2>
                <p className="text-sm text-muted-foreground mt-2">Add an extra layer of security to your account</p>
              </div>
              <input
                type="checkbox"
                checked={twoFactorEnabled}
                onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                className="h-5 w-5 cursor-pointer"
              />
            </div>

            {twoFactorEnabled && (
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm mb-4">2FA is enabled on your account. You'll be asked for a verification code when signing in.</p>
              </div>
            )}
          </Card>

          {/* Active Sessions */}
          <Card className="p-8 border-2">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Active Sessions
            </h2>

            <div className="space-y-4">
              {activeSessions.map((session, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{session.device}</p>
                      {session.current && <Badge className="text-xs">Current</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{session.location} • Last active {session.lastActive}</p>
                  </div>
                  {!session.current && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <LogOut className="h-3 w-3" />
                      Sign Out
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
