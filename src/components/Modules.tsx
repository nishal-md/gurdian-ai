import { motion } from 'motion/react';
import { Activity, ShieldAlert, FileText, Database, Server, Smartphone, Cpu, Box } from 'lucide-react';

const modules = [
  {
    title: 'Neural Engine',
    desc: 'Deep inspection of visual and textual ad content using proprietary models.',
    icon: Cpu,
    tag: 'CORE_V3'
  },
  {
    title: 'Policy Guard',
    desc: 'Automated compliance enforcement for enterprise-specific safety standards.',
    icon: ShieldAlert,
    tag: 'SEC_LAYER'
  },
  {
    title: 'Edge Protocol',
    desc: 'Low-latency packet filtering at the network edge for instant enforcement.',
    icon: Server,
    tag: 'GEO_DIST'
  },
  {
    title: 'Omni-Channel',
    desc: 'Unified security oversight across display, social, and video ecosystems.',
    icon: Smartphone,
    tag: 'FULL_SYNC'
  },
];

export default function Modules() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={`mod-v2-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-card border border-card-border rounded-xl hover:border-accent-blue/40 transition-all soft-shadow group inner-panel-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-border/20 soft-shadow group-hover:bg-accent-blue transition-all">
                  <m.icon className="w-6 h-6 text-accent-blue group-hover:text-white transition-colors" />
                </div>
                <span className="text-[8px] font-mono font-bold text-text-secondary bg-section px-2 py-1 rounded border border-border/30">
                  {m.tag}
                </span>
              </div>
              <h4 className="text-base font-bold tracking-tight text-primary-navy mb-3">
                {m.title}
              </h4>
              <p className="text-sm text-text-body leading-relaxed mb-4 opacity-80">
                {m.desc}
              </p>
              <div className="flex items-center gap-1 text-[10px] font-bold text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Specs</span>
                <Box className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

