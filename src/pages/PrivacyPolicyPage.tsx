import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Shield, Database, Share2, Archive, Lock,
  UserCheck, Globe, Cookie, Link2, RefreshCw, ChevronRight,
  Mail, ExternalLink
} from 'lucide-react';
import Logo from '../components/Logo';

const sections = [
  {
    id: 'collect',
    num: '01',
    title: 'Information We Collect',
    icon: Database,
    content: [
      { subtitle: 'Personal Data', items: ['Full name, email address, and company information', 'Billing details and payment information', 'Account credentials and authentication data'] },
      { subtitle: 'Usage Data', items: ['IP address and device information', 'Browser type, OS, and access timestamps', 'Behavioral activity logs within the platform'] },
      { subtitle: 'Content Data', items: ['Text and images analyzed by Guardian AI', 'AI-generated results and moderation decisions', 'API request and response metadata'] },
    ],
  },
  {
    id: 'use',
    num: '02',
    title: 'How We Use Your Information',
    icon: Shield,
    content: [
      { subtitle: 'Core Services', items: ['Provide, operate, and maintain Guardian AI services', 'Process payments and manage subscriptions', 'Respond to support requests and technical issues'] },
      { subtitle: 'Improvement & Security', items: ['Improve AI models and system performance', 'Detect fraud, abuse, and security risks', 'Send service updates, alerts, and policy changes'] },
    ],
  },
  {
    id: 'sharing',
    num: '03',
    title: 'Data Sharing & Disclosure',
    icon: Share2,
    content: [
      { subtitle: 'Data We Do NOT Sell', items: ['We never sell or rent personal data to third parties', 'Data is not shared for marketing purposes without explicit consent'] },
      { subtitle: 'Authorized Disclosures', items: ['Payment providers: Stripe, Razorpay (for billing)', 'Cloud infrastructure: Amazon Web Services (AWS)', 'Legal authorities when required by applicable law'] },
    ],
  },
  {
    id: 'retention',
    num: '04',
    title: 'Data Retention',
    icon: Archive,
    content: [
      { subtitle: 'Retention Periods', items: ['7 days – Starter plan', '30 days – Pro plan', '90 days – Business & Enterprise plans'] },
      { subtitle: 'User Rights & Backups', items: ['Users may request data deletion at any time', 'Temporary backups maintained for security and recovery', 'Deleted data is purged from all systems within 30 days'] },
    ],
  },
  {
    id: 'security',
    num: '05',
    title: 'Security Measures',
    icon: Lock,
    content: [
      { subtitle: 'Technical Safeguards', items: ['SSL/TLS encryption for all data in transit', 'AES-256 encrypted storage for data at rest', 'Role-based access control (RBAC) for all platform operations'] },
      { subtitle: 'Organizational Controls', items: ['Regular internal and third-party security audits', 'Strict employee access policies and training', 'Incident response and breach notification procedures'] },
    ],
  },
  {
    id: 'rights',
    num: '06',
    title: 'Your Rights',
    icon: UserCheck,
    content: [
      { subtitle: 'Data Subject Rights', items: ['Access and review all personal data we hold', 'Correct or update inaccurate information', 'Request deletion of your personal data', 'Request a portable copy of your data', 'Object to certain processing activities'] },
      { subtitle: 'How to Exercise Rights', items: ['Submit requests via the Settings → Data Controls panel', 'Email: support@guardianai.co.in', 'We respond to all valid requests within 30 days'] },
    ],
  },
  {
    id: 'gdpr',
    num: '07',
    title: 'GDPR & Compliance',
    icon: Globe,
    content: [
      { subtitle: 'EU Compliance', items: ['Fully GDPR-compliant for all EU/EEA users', 'Lawful processing based on consent and legitimate interest', 'Data Protection Officer (DPO) available on request'] },
      { subtitle: 'Global Standards', items: ['India IT Rules 2021 (Intermediary Guidelines)', 'CCPA-ready for California residents', 'Ongoing alignment with emerging global data protection laws'] },
    ],
  },
  {
    id: 'cookies',
    num: '08',
    title: 'Cookies & Tracking',
    icon: Cookie,
    content: [
      { subtitle: 'Purpose of Cookies', items: ['Maintain secure login sessions', 'Analyze platform usage and performance', 'Enhance and personalize user experience'] },
      { subtitle: 'Managing Cookies', items: ['Users can disable cookies via browser settings', 'Disabling certain cookies may limit platform functionality', 'We do not use third-party advertising cookies'] },
    ],
  },
  {
    id: 'thirdparty',
    num: '09',
    title: 'Third-Party Services',
    icon: Link2,
    content: [
      { subtitle: 'Our Partners', items: ['Payment: Stripe (global), Razorpay (India)', 'Infrastructure: Amazon Web Services (AWS)', 'Analytics: Internal monitoring tools only'] },
      { subtitle: 'Third-Party Policies', items: ['Each provider operates under their own privacy policy', 'Guardian AI is not responsible for third-party data practices', 'We vet all partners for GDPR and security compliance'] },
    ],
  },
  {
    id: 'changes',
    num: '10',
    title: 'Changes & Contact',
    icon: RefreshCw,
    content: [
      { subtitle: 'Policy Updates', items: ['This policy is subject to updates or revisions', 'Major changes will be notified via email and in-app alerts', 'Continued use after changes constitutes acceptance'] },
      { subtitle: 'Contact Us', items: ['support@guardianai.co.in', 'info@guardianai.co.in', 'Guardian AI Systems Pvt. Ltd., India'] },
    ],
  },
];

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('collect');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(s => {
        const el = document.getElementById(`pp-${s.id}`);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : 9999 };
      });
      const current = offsets.filter(o => o.top <= 140).pop();
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary-navy border-b border-white/10 h-16 flex items-center px-6 gap-4">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="h-5 w-px bg-white/20" />
        <Logo invert />
        <div className="ml-auto">
          <span className="text-xs font-mono text-white/40">PRIVACY_POLICY_v2.1 · Apr 2026</span>
        </div>
      </div>

      <div className="flex pt-16">
        {/* Sticky TOC Sidebar */}
        <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-border overflow-y-auto">
          <div className="p-6">
            <p className="text-[9px] font-bold text-text-secondary tracking-[0.25em] uppercase mb-4">Contents</p>
            <nav className="space-y-0.5">
              {sections.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#pp-${s.id}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(`pp-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setActiveSection(s.id); }}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${isActive ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20' : 'text-text-secondary hover:text-text-heading hover:bg-section'}`}
                  >
                    <span className={`text-[9px] font-mono font-bold ${isActive ? 'text-accent-blue' : 'text-text-secondary/50'}`}>{s.num}</span>
                    {s.title}
                    {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Contact Card */}
          <div className="m-4 p-4 bg-primary-navy rounded-2xl border border-white/10">
            <p className="text-[9px] font-bold text-white/40 tracking-widest uppercase mb-3">Privacy Inquiries</p>
            {['support@guardianai.co.in', 'info@guardianai.co.in'].map(email => (
              <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors py-1">
                <Mail className="w-3 h-3" /> {email}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 max-w-4xl mx-auto px-6 py-12 lg:px-12">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Legal · Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-6">
              Guardian AI<br />
              <span className="text-accent-blue">Privacy Policy</span>
            </h1>
            <p className="text-text-body text-lg leading-relaxed max-w-xl">
              We're committed to protecting your data with transparency and care. This policy outlines exactly what we collect, why, and how you stay in control.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1.5 bg-section border border-border/30 rounded-lg text-xs font-bold text-text-secondary">Last Updated: April 24, 2026</span>
              <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-600">GDPR Compliant</span>
              <span className="px-3 py-1.5 bg-section border border-border/30 rounded-lg text-xs font-bold text-text-secondary">India IT Rules 2021</span>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={`pp-${section.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent-blue/10 border border-accent-blue/20 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono font-bold text-text-secondary/50">{section.num}</span>
                      <h2 className="text-xl font-bold text-primary-navy tracking-tight">{section.title}</h2>
                    </div>

                    <div className="bg-card border border-card-border rounded-2xl p-6 soft-shadow space-y-5">
                      {section.content.map((block, bi) => (
                        <div key={bi}>
                          <p className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase mb-2">{block.subtitle}</p>
                          <ul className="space-y-1.5">
                            {block.items.map((item, ii) => (
                              <li key={ii} className="flex items-start gap-2.5 text-sm text-text-body leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/50 flex-shrink-0 mt-2" />
                                {item.includes('@') ? (
                                  <a href={`mailto:${item}`} className="text-accent-blue font-medium hover:underline flex items-center gap-1">{item} <ExternalLink className="w-3 h-3" /></a>
                                ) : item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {idx < sections.length - 1 && <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />}
              </motion.div>
            ))}
          </div>

          {/* Footer Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-primary-navy rounded-3xl text-center"
          >
            <Shield className="w-10 h-10 text-accent-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Your data. Your rights. Our responsibility.</h3>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">If you have any questions or concerns about this policy, our team is ready to help.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:support@guardianai.co.in" className="px-5 py-2.5 bg-accent-blue text-white text-sm font-bold rounded-xl hover:bg-accent-blue/90 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Contact Support
              </a>
              <button onClick={() => navigate('/settings')} className="px-5 py-2.5 bg-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-colors">
                Privacy Settings
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
