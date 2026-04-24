import { motion } from 'motion/react';
import { Check, ChevronRight, Zap, Star, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹2,999',
    unit: '/mo',
    description: 'Perfect for startups and small teams getting started with ad security.',
    tag: null,
    features: [
      '500K API calls / month',
      'Real-time content scanning',
      '7-day data retention',
      'Email notifications',
      'Standard support',
      'Basic analytics dashboard',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'border',
    icon: Zap,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹9,999',
    unit: '/mo',
    description: 'For growing businesses that need advanced intelligence and team collaboration.',
    tag: 'MOST POPULAR',
    features: [
      'Unlimited API calls',
      'Multi-platform scanning',
      '30-day data retention',
      'Slack + webhook alerts',
      'Priority support (4h SLA)',
      'Full analytics + exports',
      'Up to 10 team members',
      'GDPR compliance tools',
    ],
    cta: 'Start Pro Trial',
    ctaStyle: 'solid',
    icon: Star,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    unit: '',
    description: 'Tailored for large organizations with dedicated infrastructure and SLAs.',
    tag: null,
    features: [
      'Unlimited everything',
      'Dedicated edge nodes',
      '90-day+ data retention',
      'Custom compliance (GDPR, CCPA)',
      'White-glove onboarding',
      '99.9% SLA guarantee',
      'Unlimited team members',
      'Audit logs + SIEM export',
      'Custom AI model tuning',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border',
    icon: Building,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
            <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-5">
            Simple plans,<br />
            <span className="text-accent-blue">enterprise results</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            No hidden fees. Cancel anytime. All plans include a 14-day free trial.
          </p>

          {/* Billing toggle hint */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-section border border-border/30 rounded-full">
            <span className="text-xs font-bold text-text-secondary">Yearly billing</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Save 20%</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const isPro = plan.id === 'pro';
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${isPro
                  ? 'bg-primary-navy border-primary-navy shadow-2xl shadow-primary-navy/20 scale-[1.02]'
                  : 'bg-card border-card-border hover:border-accent-blue/30 soft-shadow'
                }`}
              >
                {plan.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent-blue text-white text-[9px] font-bold tracking-[0.2em] px-4 py-1 rounded-full shadow-lg">
                      {plan.tag}
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isPro ? 'bg-accent-blue/20' : 'bg-white border border-border/20 soft-shadow'}`}>
                  <plan.icon className={`w-5 h-5 ${isPro ? 'text-accent-blue' : 'text-accent-blue'}`} />
                </div>

                <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${isPro ? 'text-white/50' : 'text-text-secondary'}`}>{plan.name}</p>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-4xl font-bold tracking-tight ${isPro ? 'text-white' : 'text-primary-navy'}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${isPro ? 'text-white/50' : 'text-text-secondary'}`}>{plan.unit}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-8 ${isPro ? 'text-white/70' : 'text-text-secondary'}`}>{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isPro ? 'bg-accent-blue' : 'bg-accent-blue/10'}`}>
                        <Check className={`w-2.5 h-2.5 ${isPro ? 'text-white' : 'text-accent-blue'}`} />
                      </div>
                      <span className={`text-sm ${isPro ? 'text-white/80' : 'text-text-body'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/settings')}
                  className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 group ${
                    isPro
                      ? 'bg-accent-blue text-white hover:bg-accent-blue/90'
                      : 'border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white'
                  }`}
                >
                  {plan.cta}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {['14-day free trial', 'No credit card required', 'Cancel any time', 'Data export guaranteed'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-text-secondary">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
