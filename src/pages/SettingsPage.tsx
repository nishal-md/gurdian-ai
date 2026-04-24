import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  User, Shield, CreditCard, Users, Bell, Settings, ChevronRight,
  X, Upload, Globe, Palette, LayoutGrid, Key, Smartphone, Lock,
  LogOut, Mail, Building, Clock, Zap, Database, Download, Trash2,
  Plus, Copy, RefreshCw, ToggleLeft, ToggleRight, Check, AlertTriangle,
  Eye, EyeOff, ArrowLeft, BookOpen, HelpCircle, MessageSquare, Activity
} from 'lucide-react';
import Logo from '../components/Logo';

const sections = [
  { id: 'profile', label: 'Profile & Organization', icon: User },
  { id: 'security', label: 'Security & Access', icon: Shield },
  { id: 'billing', label: 'Billing & Subscription', icon: CreditCard },
  { id: 'team', label: 'Team & Collaboration', icon: Users },
  { id: 'notifications', label: 'Notifications & Alerts', icon: Bell },
  { id: 'system', label: 'System & Integrations', icon: Settings },
];

// ── Reusable small components ───────────────────────────────────────────────

function Toggle({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${value ? 'bg-accent-blue' : 'bg-border'}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${value ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-card-border rounded-2xl p-6 mb-6 soft-shadow">
      <h3 className="text-sm font-bold text-primary-navy tracking-tight mb-5 pb-3 border-b border-border/40">{title}</h3>
      {children}
    </div>
  );
}

function FieldRow({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-3 border-b border-border/20 last:border-0">
      <div className="sm:w-48 flex-shrink-0">
        <p className="text-sm font-semibold text-text-heading">{label}</p>
        {hint && <p className="text-xs text-text-secondary mt-0.5">{hint}</p>}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function TextInput({ placeholder, defaultValue, readOnly }: { placeholder?: string; defaultValue?: string; readOnly?: boolean }) {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      readOnly={readOnly}
      placeholder={placeholder}
      className="w-full px-3 py-2 text-sm bg-white border border-border rounded-lg text-text-heading placeholder:text-text-secondary focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all read-only:bg-section read-only:cursor-default"
    />
  );
}

function Badge({ label, color = 'blue' }: { label: string; color?: 'blue' | 'green' | 'orange' | 'navy' }) {
  const colors = {
    blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    green: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    navy: 'bg-primary-navy/10 text-primary-navy border-primary-navy/20',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${colors[color]}`}>
      {label}
    </span>
  );
}

// ── Section panels ──────────────────────────────────────────────────────────

function ProfileSection() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-navy tracking-tight">Profile & Organization</h2>
        <p className="text-text-secondary text-sm mt-1">Manage your personal information, organization details, and preferences.</p>
      </div>

      <SectionCard title="Profile Information">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-accent-blue/10 border-2 border-dashed border-accent-blue/30 flex flex-col items-center justify-center cursor-pointer hover:bg-accent-blue/15 transition-colors group">
            <Upload className="w-5 h-5 text-accent-blue group-hover:scale-110 transition-transform" />
            <span className="text-[9px] font-bold text-accent-blue mt-1 tracking-wide">UPLOAD</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-heading">Profile Picture</p>
            <p className="text-xs text-text-secondary mt-0.5">JPG, PNG up to 5MB</p>
            <button className="mt-2 text-xs font-bold text-accent-blue hover:underline">Remove photo</button>
          </div>
        </div>
        <FieldRow label="Full Name"><TextInput defaultValue="Nishal Kumar" /></FieldRow>
        <FieldRow label="Email Address">
          <div className="flex gap-2">
            <TextInput defaultValue="nishal@guardianai.co.in" />
            <button className="flex-shrink-0 px-3 py-2 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold rounded-lg hover:bg-accent-blue/20 transition-colors whitespace-nowrap">Verify OTP</button>
          </div>
        </FieldRow>
      </SectionCard>

      <SectionCard title="Organization Details">
        <FieldRow label="Company Name"><TextInput defaultValue="Guardian AI Systems" /></FieldRow>
        <FieldRow label="Organization Type">
          <div className="flex gap-2 flex-wrap">
            {['Startup', 'Enterprise', 'Agency'].map((t) => (
              <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${t === 'Enterprise' ? 'bg-primary-navy text-white border-primary-navy' : 'bg-white text-text-secondary border-border hover:border-accent-blue/40'}`}>{t}</button>
            ))}
          </div>
        </FieldRow>
        <FieldRow label="Organization ID" hint="Auto-generated, read-only"><TextInput defaultValue="ORG-GAI-20240424-X9K2" readOnly /></FieldRow>
      </SectionCard>

      <SectionCard title="Preferences">
        <FieldRow label="Time Zone">
          <select className="w-full px-3 py-2 text-sm bg-white border border-border rounded-lg text-text-heading focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20">
            <option>Asia/Kolkata (IST +5:30)</option>
            <option>UTC (Coordinated Universal Time)</option>
            <option>America/New_York (EST -5:00)</option>
            <option>Europe/London (GMT ±0)</option>
          </select>
        </FieldRow>
        <FieldRow label="Language">
          <select className="w-full px-3 py-2 text-sm bg-white border border-border rounded-lg text-text-heading focus:outline-none focus:border-accent-blue">
            <option>English (Default)</option>
            <option disabled>More languages coming soon</option>
          </select>
        </FieldRow>
        <FieldRow label="Theme Mode">
          <div className="flex gap-2">
            {['Light', 'Dark', 'System Default'].map((t) => (
              <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${t === 'Light' ? 'bg-primary-navy text-white border-primary-navy' : 'bg-white text-text-secondary border-border hover:border-accent-blue/40'}`}>{t}</button>
            ))}
          </div>
        </FieldRow>
        <FieldRow label="UI Density">
          <div className="flex gap-2">
            {['Comfortable', 'Compact'].map((t) => (
              <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${t === 'Comfortable' ? 'bg-primary-navy text-white border-primary-navy' : 'bg-white text-text-secondary border-border hover:border-accent-blue/40'}`}>{t}</button>
            ))}
          </div>
        </FieldRow>
      </SectionCard>

      <SectionCard title="Dashboard Preferences">
        <FieldRow label="Default Landing Page">
          <select className="w-full px-3 py-2 text-sm bg-white border border-border rounded-lg text-text-heading focus:outline-none focus:border-accent-blue">
            <option>Overview Dashboard</option>
            <option>Moderation Queue</option>
            <option>Analytics</option>
            <option>Live Status</option>
          </select>
        </FieldRow>
        <FieldRow label="Layout">
          <div className="flex gap-2">
            {['Grid', 'List'].map((t) => (
              <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${t === 'Grid' ? 'bg-primary-navy text-white border-primary-navy' : 'bg-white text-text-secondary border-border hover:border-accent-blue/40'}`}>{t}</button>
            ))}
          </div>
        </FieldRow>
        <FieldRow label="Widget Layout" hint="Drag & drop customization">
          <button className="px-4 py-2 bg-section border border-border rounded-lg text-xs font-bold text-text-secondary hover:border-accent-blue/30 transition-colors">Customize Widgets →</button>
        </FieldRow>
      </SectionCard>

      <div className="flex justify-end gap-3">
        <button className="px-5 py-2.5 text-sm font-semibold text-text-secondary bg-section border border-border rounded-lg hover:bg-border/30 transition-colors">Cancel</button>
        <button className="px-5 py-2.5 text-sm font-bold text-white bg-primary-navy rounded-lg hover:bg-primary-navy-hover transition-colors flex items-center gap-2">
          <Check className="w-4 h-4" /> Save Changes
        </button>
      </div>
    </div>
  );
}

function SecuritySection() {
  const [show2fa, setShow2fa] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [pwdStrength, setPwdStrength] = useState(3);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-navy tracking-tight">Security & Access</h2>
        <p className="text-text-secondary text-sm mt-1">Manage authentication, sessions, and access permissions.</p>
      </div>

      <SectionCard title="Change Password">
        <FieldRow label="Current Password">
          <div className="relative">
            <input type={showPwd ? 'text' : 'password'} placeholder="Enter current password" className="w-full px-3 py-2 pr-10 text-sm bg-white border border-border rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20" />
            <button onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-heading"><Eye className="w-4 h-4" /></button>
          </div>
        </FieldRow>
        <FieldRow label="New Password">
          <div>
            <input type="password" placeholder="Enter new password" onChange={(e) => setPwdStrength(Math.min(4, Math.floor(e.target.value.length / 3)))} className="w-full px-3 py-2 text-sm bg-white border border-border rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 mb-2" />
            <div className="flex gap-1 items-center">
              {[1,2,3,4].map(i => <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= pwdStrength ? (pwdStrength <= 1 ? 'bg-red-400' : pwdStrength <= 2 ? 'bg-orange-400' : pwdStrength <= 3 ? 'bg-yellow-400' : 'bg-emerald-400') : 'bg-border'}`} />)}
              <span className="text-[10px] font-bold text-text-secondary ml-2">{['', 'WEAK', 'FAIR', 'GOOD', 'STRONG'][pwdStrength]}</span>
            </div>
          </div>
        </FieldRow>
        <FieldRow label="Confirm Password"><input type="password" placeholder="Confirm new password" className="w-full px-3 py-2 text-sm bg-white border border-border rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20" /></FieldRow>
        <div className="pt-2"><button className="px-5 py-2.5 text-sm font-bold text-white bg-primary-navy rounded-lg hover:bg-primary-navy-hover transition-colors">Update Password</button></div>
      </SectionCard>

      <SectionCard title="Two-Factor Authentication (2FA)">
        <FieldRow label="2FA Status">
          <div className="flex items-center gap-3">
            <Toggle value={show2fa} onChange={() => setShow2fa(!show2fa)} />
            <Badge label={show2fa ? 'ENABLED' : 'DISABLED'} color={show2fa ? 'green' : 'orange'} />
          </div>
        </FieldRow>
        {show2fa && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 space-y-3">
            <FieldRow label="Authentication Method">
              <div className="flex gap-2 flex-wrap">
                {['Authenticator App', 'Email OTP'].map((m) => (
                  <button key={m} className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${m === 'Authenticator App' ? 'bg-primary-navy text-white border-primary-navy' : 'bg-white text-text-secondary border-border'}`}>{m}</button>
                ))}
              </div>
            </FieldRow>
            <FieldRow label="Backup Codes">
              <button className="flex items-center gap-2 px-4 py-2 bg-section border border-border rounded-lg text-xs font-bold text-text-secondary hover:border-accent-blue/30 transition-colors">
                <Download className="w-3.5 h-3.5" /> Download Backup Codes
              </button>
            </FieldRow>
          </motion.div>
        )}
      </SectionCard>

      <SectionCard title="Login Activity">
        <div className="space-y-3">
          {[
            { device: 'Chrome · Windows 11', ip: '103.55.12.4', time: '2 hours ago', current: true },
            { device: 'Safari · iPhone 15', ip: '49.204.1.9', time: 'Yesterday, 11:42 PM', current: false },
            { device: 'Firefox · MacOS', ip: '122.178.45.2', time: '3 days ago', current: false },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-section rounded-xl border border-border/30">
              <div>
                <p className="text-sm font-semibold text-text-heading">{s.device}</p>
                <p className="text-xs text-text-secondary mt-0.5">IP: {s.ip} · {s.time}</p>
              </div>
              <div className="flex items-center gap-2">
                {s.current && <Badge label="CURRENT" color="green" />}
                {!s.current && <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors">Revoke</button>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border/30">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-500 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
            <LogOut className="w-3.5 h-3.5" /> Logout from All Devices
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Access Control">
        <FieldRow label="Current Role"><Badge label="ADMIN" color="navy" /></FieldRow>
        <div className="mt-4 rounded-xl overflow-hidden border border-border/30">
          <table className="w-full text-xs">
            <thead className="bg-section">
              <tr>
                {['Permission', 'Admin', 'Analyst', 'Viewer'].map(h => <th key={h} className="py-2.5 px-4 text-left font-bold text-text-secondary tracking-wide">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Moderation', true, true, false], ['Analytics', true, true, true], ['Billing', true, false, false], ['API Access', true, false, false], ['Team Mgmt', true, false, false]].map(([label, admin, analyst, viewer], i) => (
                <tr key={i} className="border-t border-border/20 hover:bg-section/50">
                  <td className="py-2.5 px-4 font-semibold text-text-heading">{label as string}</td>
                  {[admin, analyst, viewer].map((v, j) => <td key={j} className="py-2.5 px-4">{v ? <Check className="w-4 h-4 text-emerald-500" /> : <X className="w-4 h-4 text-red-300" />}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function BillingSection() {
  const [autoRenew, setAutoRenew] = useState(true);
  const [cycle, setCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-navy tracking-tight">Billing & Subscription</h2>
        <p className="text-text-secondary text-sm mt-1">Manage your plan, payment methods, and billing history.</p>
      </div>

      <SectionCard title="Current Plan">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-navy to-accent-blue rounded-xl text-white">
          <div>
            <Badge label="PRO PLAN" color="blue" />
            <p className="text-xl font-bold mt-2">₹9,999 / month</p>
            <p className="text-xs text-white/70 mt-0.5">Renews on May 24, 2026</p>
          </div>
          <div className="text-right text-xs text-white/70 space-y-1">
            {['Unlimited API calls', '30-day retention', 'Priority support', 'Team collaboration'].map(f => (
              <div key={f} className="flex items-center gap-1 justify-end"><Check className="w-3 h-3" /> {f}</div>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 text-xs font-bold text-white bg-primary-navy rounded-lg hover:bg-primary-navy-hover transition-colors">Upgrade Plan</button>
          <button className="px-4 py-2 text-xs font-bold text-text-secondary bg-section border border-border rounded-lg hover:bg-border/30 transition-colors">Downgrade</button>
        </div>
      </SectionCard>

      <SectionCard title="Billing Cycle">
        <div className="flex gap-3">
          <button onClick={() => setCycle('monthly')} className={`flex-1 p-4 rounded-xl border-2 text-sm font-bold transition-all ${cycle === 'monthly' ? 'border-accent-blue bg-accent-blue/5 text-accent-blue' : 'border-border text-text-secondary hover:border-accent-blue/40'}`}>Monthly</button>
          <button onClick={() => setCycle('yearly')} className={`flex-1 p-4 rounded-xl border-2 text-sm font-bold transition-all relative ${cycle === 'yearly' ? 'border-accent-blue bg-accent-blue/5 text-accent-blue' : 'border-border text-text-secondary hover:border-accent-blue/40'}`}>
            Yearly
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">-20%</span>
          </button>
        </div>
        <FieldRow label="Auto-Renew">
          <div className="flex items-center gap-3">
            <Toggle value={autoRenew} onChange={() => setAutoRenew(!autoRenew)} />
            <span className="text-sm text-text-secondary">{autoRenew ? 'Enabled' : 'Disabled'}</span>
          </div>
        </FieldRow>
      </SectionCard>

      <SectionCard title="Payment Methods">
        <div className="space-y-3 mb-4">
          {[
            { name: 'Visa •••• 4242', type: 'Global', default: true },
            { name: 'UPI · nishal@oksbi', type: 'India', default: false },
          ].map((pm, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-section rounded-xl border border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg border border-border/30 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">{pm.name}</p>
                  <p className="text-xs text-text-secondary">{pm.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {pm.default && <Badge label="DEFAULT" color="blue" />}
                <button className="text-xs font-bold text-red-400 hover:text-red-600">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-accent-blue bg-accent-blue/5 border border-accent-blue/20 rounded-lg hover:bg-accent-blue/10 transition-colors">
          <Plus className="w-3.5 h-3.5" /> Add Payment Method
        </button>
        <div className="mt-4 pt-4 border-t border-border/30">
          <p className="text-xs font-bold text-text-secondary mb-2">India Payment Options</p>
          <div className="flex gap-2 flex-wrap">
            {['UPI', 'Net Banking', 'Wallets', 'GPay', 'PhonePe', 'Paytm'].map(m => (
              <span key={m} className="px-3 py-1 bg-section border border-border/30 rounded-lg text-xs font-medium text-text-secondary">{m}</span>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Coupon & Discounts">
        <div className="flex gap-2">
          <input type="text" placeholder="Enter coupon code" className="flex-1 px-3 py-2 text-sm bg-white border border-border rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20" />
          <button className="px-4 py-2 text-sm font-bold text-white bg-primary-navy rounded-lg hover:bg-primary-navy-hover transition-colors">Apply</button>
        </div>
      </SectionCard>

      <SectionCard title="Billing History">
        <div className="space-y-2">
          {[
            { date: 'Apr 24, 2026', desc: 'Pro Plan · Monthly', amount: '₹9,999', status: 'Paid' },
            { date: 'Mar 24, 2026', desc: 'Pro Plan · Monthly', amount: '₹9,999', status: 'Paid' },
            { date: 'Feb 24, 2026', desc: 'Pro Plan · Monthly', amount: '₹9,999', status: 'Paid' },
          ].map((inv, i) => (
            <div key={i} className="flex items-center justify-between p-3 hover:bg-section rounded-xl transition-colors">
              <div>
                <p className="text-sm font-semibold text-text-heading">{inv.desc}</p>
                <p className="text-xs text-text-secondary">{inv.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-text-heading">{inv.amount}</span>
                <Badge label={inv.status} color="green" />
                <button className="text-xs font-bold text-accent-blue hover:underline flex items-center gap-1"><Download className="w-3 h-3" /> PDF</button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function TeamSection() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-navy tracking-tight">Team & Collaboration</h2>
        <p className="text-text-secondary text-sm mt-1">Invite members, assign roles, and manage team permissions.</p>
      </div>

      <SectionCard title="Invite Members">
        <div className="flex gap-2 mb-4">
          <input type="email" placeholder="Enter email address to invite..." className="flex-1 px-3 py-2 text-sm bg-white border border-border rounded-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20" />
          <select className="px-3 py-2 text-sm bg-white border border-border rounded-lg focus:outline-none focus:border-accent-blue">
            <option>Analyst</option>
            <option>Admin</option>
            <option>Viewer</option>
          </select>
          <button className="px-4 py-2 text-sm font-bold text-white bg-primary-navy rounded-lg hover:bg-primary-navy-hover transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Invite
          </button>
        </div>
        <button className="text-xs font-bold text-accent-blue hover:underline flex items-center gap-1"><Upload className="w-3 h-3" /> Bulk invite via CSV</button>
      </SectionCard>

      <SectionCard title="Team Members">
        <div className="space-y-2">
          {[
            { name: 'Nishal Kumar', email: 'nishal@guardianai.co.in', role: 'Admin', status: 'Active', last: '2 hours ago' },
            { name: 'Priya Sharma', email: 'priya@guardianai.co.in', role: 'Analyst', status: 'Active', last: 'Yesterday' },
            { name: 'Rahul Verma', email: 'rahul@guardianai.co.in', role: 'Viewer', status: 'Pending', last: 'Never' },
          ].map((m, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-section rounded-xl border border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-sm font-bold text-accent-blue">{m.name[0]}</div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">{m.name}</p>
                  <p className="text-xs text-text-secondary">{m.email} · Last active: {m.last}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge label={m.role.toUpperCase()} color={m.role === 'Admin' ? 'navy' : m.role === 'Analyst' ? 'blue' : 'orange'} />
                <Badge label={m.status.toUpperCase()} color={m.status === 'Active' ? 'green' : 'orange'} />
                <button className="p-1 text-text-secondary hover:text-accent-blue transition-colors"><Settings className="w-3.5 h-3.5" /></button>
                <button className="p-1 text-text-secondary hover:text-red-500 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Activity Tracking">
        <div className="space-y-2">
          {[
            { user: 'Nishal Kumar', action: 'Generated API key', time: '2h ago', severity: 'info' },
            { user: 'Priya Sharma', action: 'Approved 12 moderation flags', time: '5h ago', severity: 'success' },
            { user: 'Rahul Verma', action: 'Viewed analytics dashboard', time: '1d ago', severity: 'info' },
          ].map((log, i) => (
            <div key={i} className="flex items-center gap-3 p-3 hover:bg-section rounded-xl transition-colors">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${log.severity === 'success' ? 'bg-emerald-400' : 'bg-accent-blue'}`} />
              <div className="flex-1">
                <span className="text-sm font-semibold text-text-heading">{log.user}</span>
                <span className="text-sm text-text-secondary"> · {log.action}</span>
              </div>
              <span className="text-xs text-text-secondary">{log.time}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function NotificationsSection() {
  const [channels, setChannels] = useState({ email: true, inApp: true, slack: false, webhooks: false });
  const [frequency, setFrequency] = useState('realtime');

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-navy tracking-tight">Notifications & Alerts</h2>
        <p className="text-text-secondary text-sm mt-1">Configure alert channels, types, and delivery frequency.</p>
      </div>

      <SectionCard title="Notification Channels">
        {[
          { key: 'email', label: 'Email Notifications', desc: 'Receive alerts via email' },
          { key: 'inApp', label: 'In-App Alerts', desc: 'Real-time alerts within the dashboard' },
          { key: 'slack', label: 'Slack Integration', desc: 'Push alerts to your Slack workspace' },
          { key: 'webhooks', label: 'Webhooks', desc: 'POST events to your custom endpoint' },
        ].map(({ key, label, desc }) => (
          <FieldRow key={key} label={label} hint={desc}>
            <Toggle value={channels[key as keyof typeof channels]} onChange={() => setChannels(prev => ({ ...prev, [key]: !prev[key as keyof typeof channels] }))} />
          </FieldRow>
        ))}
      </SectionCard>

      <SectionCard title="Alert Types & Severity">
        <div className="rounded-xl overflow-hidden border border-border/30">
          <table className="w-full text-xs">
            <thead className="bg-section">
              <tr>
                {['Alert Type', 'Low', 'Medium', 'High'].map(h => <th key={h} className="py-2.5 px-4 text-left font-bold text-text-secondary tracking-wide">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {['Moderation Alerts', 'Security Alerts', 'API Usage Alerts', 'System Errors'].map((alert, i) => (
                <tr key={i} className="border-t border-border/20 hover:bg-section/50">
                  <td className="py-2.5 px-4 font-semibold text-text-heading">{alert}</td>
                  {['low', 'medium', 'high'].map(sev => (
                    <td key={sev} className="py-2.5 px-4">
                      <input type="checkbox" defaultChecked={sev !== 'low'} className="w-4 h-4 accent-accent-blue rounded" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="Delivery Frequency">
        <div className="flex gap-3">
          {[['realtime', 'Real-Time'], ['daily', 'Daily Summary'], ['weekly', 'Weekly Summary']].map(([val, label]) => (
            <button key={val} onClick={() => setFrequency(val)} className={`flex-1 p-3 rounded-xl border-2 text-xs font-bold transition-all ${frequency === val ? 'border-accent-blue bg-accent-blue/5 text-accent-blue' : 'border-border text-text-secondary hover:border-accent-blue/40'}`}>{label}</button>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Custom Alerts">
        <p className="text-xs text-text-secondary mb-4">Define trigger conditions for automated alerts.</p>
        <div className="space-y-3">
          {[
            { label: 'High-risk content detected', enabled: true },
            { label: 'API usage exceeds 80%', enabled: true },
            { label: 'Suspicious login attempt', enabled: true },
          ].map((trigger, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-section rounded-xl border border-border/30">
              <span className="text-sm font-medium text-text-heading">{trigger.label}</span>
              <Toggle value={trigger.enabled} onChange={() => {}} />
            </div>
          ))}
        </div>
        <button className="mt-3 flex items-center gap-2 px-4 py-2 text-xs font-bold text-accent-blue bg-accent-blue/5 border border-accent-blue/20 rounded-lg hover:bg-accent-blue/10 transition-colors">
          <Plus className="w-3.5 h-3.5" /> Add Custom Trigger
        </button>
      </SectionCard>
    </div>
  );
}

function SystemSection() {
  const [apiKey, setApiKey] = useState('gai_sk_live_xK9mP2qR7nL4vT8wJ3cH6bY1fD5uE0aZ');
  const [copied, setCopied] = useState(false);
  const [gdpr, setGdpr] = useState(true);
  const [itRules, setItRules] = useState(true);
  const [ccpa, setCcpa] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-navy tracking-tight">System, Integrations & Compliance</h2>
        <p className="text-text-secondary text-sm mt-1">Manage API keys, data region, compliance settings, and account controls.</p>
      </div>

      <SectionCard title="API Management">
        <p className="text-xs text-text-secondary mb-4">Use this key to authenticate API requests. Keep it secret.</p>
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <input type="password" value={apiKey} readOnly className="w-full px-3 py-2 pr-10 text-sm font-mono bg-section border border-border rounded-lg text-text-secondary" />
          </div>
          <button onClick={handleCopy} className={`px-3 py-2 rounded-lg border text-xs font-bold transition-all flex items-center gap-1 ${copied ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-section border-border text-text-secondary hover:border-accent-blue/40'}`}>
            {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
          </button>
          <button className="px-3 py-2 bg-section border border-border rounded-lg text-xs font-bold text-text-secondary hover:border-accent-blue/40 flex items-center gap-1 transition-all"><RefreshCw className="w-3.5 h-3.5" /> Regenerate</button>
        </div>
        <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-orange-700 font-medium">Regenerating your API key will immediately invalidate the current key. Update all integrations before proceeding.</p>
        </div>
      </SectionCard>

      <SectionCard title="Data Region">
        <div className="grid grid-cols-3 gap-3">
          {[['India', '🇮🇳'], ['Europe', '🇪🇺'], ['USA', '🇺🇸']].map(([region, flag]) => (
            <button key={region} className={`p-4 rounded-xl border-2 text-center transition-all ${region === 'India' ? 'border-accent-blue bg-accent-blue/5' : 'border-border hover:border-accent-blue/40'}`}>
              <div className="text-2xl mb-1">{flag}</div>
              <p className="text-xs font-bold text-text-heading">{region}</p>
            </button>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Compliance Toggles">
        {[
          { label: 'GDPR', hint: 'General Data Protection Regulation (EU)', value: gdpr, set: setGdpr },
          { label: 'India IT Rules 2021', hint: 'Intermediary Guidelines & Digital Media Ethics', value: itRules, set: setItRules },
          { label: 'CCPA', hint: 'California Consumer Privacy Act (Future-Ready)', value: ccpa, set: setCcpa },
        ].map(({ label, hint, value, set }) => (
          <FieldRow key={label} label={label} hint={hint}>
            <div className="flex items-center gap-3">
              <Toggle value={value} onChange={() => set(!value)} />
              <Badge label={value ? 'ACTIVE' : 'INACTIVE'} color={value ? 'green' : 'orange'} />
            </div>
          </FieldRow>
        ))}
      </SectionCard>

      <SectionCard title="Data Retention Policy">
        <div className="flex gap-3 flex-wrap">
          {['7 days', '30 days', '90 days', 'Custom'].map(d => (
            <button key={d} className={`px-4 py-2 rounded-lg border-2 text-xs font-bold transition-all ${d === '30 days' ? 'border-accent-blue bg-accent-blue/5 text-accent-blue' : 'border-border text-text-secondary hover:border-accent-blue/40'}`}>{d}</button>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Data Controls">
        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-accent-blue bg-accent-blue/5 border border-accent-blue/20 rounded-lg hover:bg-accent-blue/10 transition-colors">
            <Download className="w-4 h-4" /> Export My Data
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-red-500 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
            <Trash2 className="w-4 h-4" /> Delete Account
          </button>
        </div>
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-700 font-medium">Account deletion is permanent and cannot be undone. All data will be erased within 30 days.</p>
        </div>
      </SectionCard>

      <SectionCard title="Audit Logs">
        <p className="text-xs text-text-secondary mb-4">View all user activity, security events, API usage, and system events.</p>
        <div className="space-y-2 mb-4">
          {[
            { type: 'Security', msg: 'New 2FA device enrolled', time: '1h ago', severity: 'orange' },
            { type: 'API', msg: 'Key regenerated by Admin', time: '3h ago', severity: 'blue' },
            { type: 'System', msg: 'Data retention policy updated: 30 days', time: '1d ago', severity: 'navy' },
            { type: 'User', msg: 'Priya Sharma role changed to Analyst', time: '2d ago', severity: 'green' },
          ].map((log, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-section rounded-xl border border-border/30">
              <Badge label={log.type.toUpperCase()} color={log.severity as any} />
              <p className="flex-1 text-sm text-text-heading">{log.msg}</p>
              <span className="text-xs text-text-secondary">{log.time}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-text-secondary bg-section border border-border rounded-lg hover:border-accent-blue/30 transition-colors"><Download className="w-3.5 h-3.5" /> Export CSV</button>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-text-secondary bg-section border border-border rounded-lg hover:border-accent-blue/30 transition-colors"><Download className="w-3.5 h-3.5" /> Export JSON</button>
        </div>
      </SectionCard>
    </div>
  );
}

// ── Main Settings Page ─────────────────────────────────────────────────────

export default function SettingsPage() {
  const [active, setActive] = useState('profile');
  const navigate = useNavigate();

  const panels: Record<string, JSX.Element> = {
    profile: <ProfileSection />,
    security: <SecuritySection />,
    billing: <BillingSection />,
    team: <TeamSection />,
    notifications: <NotificationsSection />,
    system: <SystemSection />,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary-navy border-b border-white/10 h-16 flex items-center px-6 gap-4">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="h-5 w-px bg-white/20" />
        <Logo invert />
        <div className="ml-auto flex items-center gap-4">
          <span className="text-xs font-mono text-white/40">SETTINGS_PANEL_V1</span>
        </div>
      </div>

      <div className="flex pt-16 min-h-screen">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-primary-navy border-r border-white/10 overflow-y-auto flex flex-col">
          <div className="p-6 flex-1">
            <p className="text-[9px] font-bold text-white/30 tracking-[0.25em] uppercase mb-4">Settings Menu</p>
            <nav className="space-y-1">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${isActive ? 'bg-accent-blue text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    <s.icon className="w-4 h-4 flex-shrink-0" />
                    {s.label}
                    {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Footer links */}
          <div className="p-6 border-t border-white/10">
            <div className="space-y-2">
              {[['Help Center', HelpCircle], ['Contact Support', MessageSquare], ['System Status', Activity]].map(([label, Icon]: any) => (
                <button key={label} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-white/40 hover:text-white/70 transition-colors">
                  <Icon className="w-3.5 h-3.5" /> {label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-64 p-8 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {panels[active]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
