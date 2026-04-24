import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, FileText, Shield, CreditCard, AlertTriangle,
  Bot, Database, Code2, XCircle, ChevronRight, Mail, ExternalLink
} from 'lucide-react';
import Logo from '../components/Logo';

const sections = [
  {
    id: 'use',
    num: '01',
    title: 'Use of Services',
    icon: Shield,
    content: [
      {
        subtitle: 'Permitted Use',
        items: [
          'Use the platform only for lawful and authorized business purposes',
          'Comply with all applicable local, national, and international laws',
          'Access Guardian AI services only through official interfaces and APIs',
        ],
      },
      {
        subtitle: 'Prohibited Actions',
        items: [
          'No misuse, hacking, penetration testing, or unauthorized access attempts',
          'No copying, reverse-engineering, decompiling, or tampering with system components',
          'No use of automated bots, scrapers, or scripts not explicitly authorized',
        ],
      },
    ],
  },
  {
    id: 'account',
    num: '02',
    title: 'Account Registration',
    icon: FileText,
    content: [
      {
        subtitle: 'Registration Requirements',
        items: [
          'Provide accurate, current, and complete information during registration',
          'Maintain and promptly update your account information as needed',
          'You must be at least 18 years old to use Guardian AI services',
        ],
      },
      {
        subtitle: 'Account Security',
        items: [
          'Keep your login credentials confidential and secure at all times',
          'Account holders are fully responsible for all actions performed under their account',
          'Immediately notify Guardian AI of any unauthorized account access',
        ],
      },
    ],
  },
  {
    id: 'billing',
    num: '03',
    title: 'Subscription & Billing',
    icon: CreditCard,
    content: [
      {
        subtitle: 'Subscription Plans',
        items: [
          'Subscription options available: monthly or yearly billing cycles',
          'Yearly plans include a 20% discount compared to monthly pricing',
          'Plan features and limits are clearly documented on the Pricing page',
        ],
      },
      {
        subtitle: 'Payment & Renewal',
        items: [
          'Payments processed via Stripe (global), Razorpay (India), or other approved gateways',
          'Auto-renewal is enabled by default; users may cancel at any time from Settings',
          'Pricing and plan changes will be communicated at least 14 days in advance',
          'No refunds for used billing cycles except as required by applicable law',
        ],
      },
    ],
  },
  {
    id: 'aup',
    num: '04',
    title: 'Acceptable Use Policy',
    icon: AlertTriangle,
    content: [
      {
        subtitle: 'Strictly Prohibited',
        items: [
          'Uploading or distributing illegal, harmful, abusive, or offensive content',
          'Violating any applicable laws or infringing third-party intellectual property rights',
          'Attempting to bypass, disable, or circumvent Guardian AI system safeguards',
          'Misusing AI tools for malicious, deceptive, or unethical purposes',
          'Selling, reselling, or sublicensing access to the platform without written consent',
        ],
      },
      {
        subtitle: 'Consequences',
        items: [
          'Violations may result in immediate account suspension or permanent termination',
          'Guardian AI reserves the right to report illegal activity to relevant authorities',
          'Users remain liable for any damages caused by policy violations',
        ],
      },
    ],
  },
  {
    id: 'ai',
    num: '05',
    title: 'AI Limitations Disclaimer',
    icon: Bot,
    content: [
      {
        subtitle: 'AI Output Limitations',
        items: [
          'AI-generated outputs may not always be fully accurate, complete, or contextually appropriate',
          'Model performance may vary based on content type, language, and regional nuances',
          'Guardian AI continuously improves its models but cannot guarantee 100% accuracy',
        ],
      },
      {
        subtitle: 'User Responsibility',
        items: [
          'Users retain full responsibility for all decisions made using Guardian AI results',
          'AI outputs should be treated as advisory inputs, not definitive rulings',
          'Guardian AI is not liable for errors, omissions, or missed threat detections',
        ],
      },
    ],
  },
  {
    id: 'data',
    num: '06',
    title: 'Data & Privacy',
    icon: Database,
    content: [
      {
        subtitle: 'Data Governance',
        items: [
          'All data handling is governed by the Guardian AI Privacy Policy',
          'Data is stored in compliance with applicable regional regulations (GDPR, India IT Rules)',
          'Users may request data export or deletion at any time from Settings → Data Controls',
        ],
      },
      {
        subtitle: 'Authorized Data Use',
        items: [
          'Service delivery, maintenance, and technical support',
          'AI model improvement and performance optimization',
          'Security monitoring, fraud detection, and compliance enforcement',
        ],
      },
    ],
  },
  {
    id: 'ip',
    num: '07',
    title: 'Intellectual Property',
    icon: Code2,
    content: [
      {
        subtitle: 'Guardian AI Ownership',
        items: [
          'All software, AI models, content, branding, and interfaces are owned by Guardian AI Systems Pvt. Ltd.',
          'No copying, redistribution, or creation of derivative works without prior written consent',
          'The "Guardian AI" name, logo, and associated marks are registered trademarks',
        ],
      },
      {
        subtitle: 'User Content',
        items: [
          'Users retain full ownership of content they upload to the platform',
          'By uploading content, users grant Guardian AI a limited license to process it for service delivery',
          'Guardian AI does not claim ownership of any user-generated content',
        ],
      },
    ],
  },
  {
    id: 'termination',
    num: '08',
    title: 'Termination & Liability',
    icon: XCircle,
    content: [
      {
        subtitle: 'Account Termination',
        items: [
          'Accounts may be suspended or permanently terminated for policy violations',
          'Users may cancel their subscription at any time via Settings → Billing',
          'Upon termination, access is revoked immediately; data is retained per the Privacy Policy',
        ],
      },
      {
        subtitle: 'Limitation of Liability',
        items: [
          'Guardian AI is not liable for data loss, corruption, or accidental deletion',
          'Service interruptions, downtime, or maintenance windows are not grounds for compensation',
          'Guardian AI bears no liability for indirect, incidental, punitive, or consequential damages',
          'Total liability shall not exceed the amount paid by the user in the preceding 3 months',
        ],
      },
    ],
  },
];

export default function TermsPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('use');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(s => {
        const el = document.getElementById(`tc-${s.id}`);
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
          <span className="text-xs font-mono text-white/40">TERMS_CONDITIONS_v1.2 · Apr 2026</span>
        </div>
      </div>

      <div className="flex pt-16">
        {/* Sticky TOC */}
        <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-border overflow-y-auto">
          <div className="p-6">
            <p className="text-[9px] font-bold text-text-secondary tracking-[0.25em] uppercase mb-4">Contents</p>
            <nav className="space-y-0.5">
              {sections.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#tc-${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(`tc-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setActiveSection(s.id);
                    }}
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

          <div className="m-4 p-4 bg-primary-navy rounded-2xl border border-white/10">
            <p className="text-[9px] font-bold text-white/40 tracking-widest uppercase mb-3">Legal Inquiries</p>
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
              <FileText className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Legal · Terms & Conditions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-6">
              Guardian AI<br />
              <span className="text-accent-blue">Terms & Conditions</span>
            </h1>
            <p className="text-text-body text-lg leading-relaxed max-w-xl">
              By accessing or using Guardian AI, you agree to these terms. Please read them carefully before proceeding.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1.5 bg-section border border-border/30 rounded-lg text-xs font-bold text-text-secondary">Last Updated: April 24, 2026</span>
              <span className="px-3 py-1.5 bg-section border border-border/30 rounded-lg text-xs font-bold text-text-secondary">Effective Immediately</span>
              <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-600">Legally Binding</span>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={`tc-${section.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-navy/8 border border-primary-navy/15 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary-navy" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono font-bold text-text-secondary/50">{section.num}</span>
                      <h2 className="text-xl font-bold text-primary-navy tracking-tight">{section.title}</h2>
                    </div>
                    <div className="bg-card border border-card-border rounded-2xl p-6 soft-shadow space-y-5">
                      {section.content.map((block, bi) => (
                        <div key={bi}>
                          <p className="text-[10px] font-bold text-primary-navy tracking-[0.2em] uppercase mb-2">{block.subtitle}</p>
                          <ul className="space-y-1.5">
                            {block.items.map((item, ii) => (
                              <li key={ii} className="flex items-start gap-2.5 text-sm text-text-body leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-navy/40 flex-shrink-0 mt-2" />
                                {item}
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

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-primary-navy rounded-3xl text-center"
          >
            <FileText className="w-10 h-10 text-accent-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Questions about our Terms?</h3>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">Our legal team is ready to clarify any aspect of these terms.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:support@guardianai.co.in" className="px-5 py-2.5 bg-accent-blue text-white text-sm font-bold rounded-xl hover:bg-accent-blue/90 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Contact Support
              </a>
              <button onClick={() => navigate('/privacy')} className="px-5 py-2.5 bg-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-colors">
                Privacy Policy
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
