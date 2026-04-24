import { motion } from 'motion/react';
import {
  MessageSquareWarning, Gavel, BarChart3, ShieldAlert, BadgeCheck, BrainCircuit
} from 'lucide-react';

const modules = [
  {
    icon: MessageSquareWarning,
    title: 'Content Moderation Dashboard',
    desc: 'Centralized command for cross-platform content analysis and human-in-the-loop audit.',
    tag: 'CORE',
    color: 'blue',
  },
  {
    icon: Gavel,
    title: 'Policy Enforcement Center',
    desc: 'Dynamic rule engine to translate complex safety guidelines into automated enforcement actions.',
    tag: 'COMPLIANCE',
    color: 'navy',
  },
  {
    icon: BarChart3,
    title: 'Research & Analytics Hub',
    desc: 'Deep-dive data signals and trend forecasting to anticipate emerging platform threats.',
    tag: 'INSIGHTS',
    color: 'blue',
  },
  {
    icon: ShieldAlert,
    title: 'Threat Detection System',
    desc: 'Real-time neural pattern recognition to identify and neutralize malicious actors at scale.',
    tag: 'REAL-TIME',
    color: 'navy',
  },
  {
    icon: BadgeCheck,
    title: 'Ad & Brand Safety Manager',
    desc: 'Customizable protection for advertisers, ensuring content alignment with brand values.',
    tag: 'AD_SAFE',
    color: 'blue',
  },
  {
    icon: BrainCircuit,
    title: 'AI Marketing Intelligence Suite',
    desc: 'Optimization engine that balances safety with growth, maximizing campaign efficiency.',
    tag: 'AI_INTEL',
    color: 'navy',
  },
];

const colorMap = {
  blue: {
    icon: 'bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white',
    tag: 'text-accent-blue bg-accent-blue/8 border-accent-blue/20',
    bar: 'bg-accent-blue',
  },
  navy: {
    icon: 'bg-primary-navy/8 text-primary-navy group-hover:bg-primary-navy group-hover:text-white',
    tag: 'text-primary-navy bg-primary-navy/8 border-primary-navy/20',
    bar: 'bg-primary-navy',
  },
};

export default function Modules() {
  return (
    <section id="platform" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle decorative bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-section/40 via-transparent to-section/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
            <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Comprehensive Protection Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-5">
            Six modules working together<br />
            <span className="text-accent-blue">seamlessly and at scale</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Six powerful modules working together to keep your platform safe, compliant, and scalable — from content to campaigns.
          </p>
        </motion.div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => {
            const c = colorMap[m.color as 'blue' | 'navy'];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-8 bg-card border border-card-border rounded-2xl hover:border-accent-blue/25 hover:shadow-lg transition-all duration-300 soft-shadow relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-accent-blue/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${c.icon}`}>
                      <m.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[8px] font-mono font-bold px-2 py-1 rounded border tracking-widest ${c.tag}`}>
                      {m.tag}
                    </span>
                  </div>

                  {/* Text */}
                  <h4 className="text-base font-bold tracking-tight text-primary-navy mb-3 group-hover:text-accent-blue transition-colors duration-200">
                    {m.title}
                  </h4>
                  <p className="text-sm text-text-body leading-relaxed opacity-80">
                    {m.desc}
                  </p>

                  {/* Bottom accent bar */}
                  <div className="mt-6 relative h-0.5 bg-border/30 rounded-full overflow-hidden">
                    <div className={`absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 rounded-full ${c.bar}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
