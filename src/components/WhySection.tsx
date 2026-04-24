import { motion } from 'motion/react';
import { Zap, BrainCircuit, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    label: 'REAL-TIME SYSTEM',
    title: 'Real-Time Protection',
    description: 'Instantaneous detection and neutralization of complex digital threats across all ad inventory.',
    icon: Zap,
  },
  {
    label: 'ADAPTIVE MODELS',
    title: 'AI-Powered Intelligence',
    description: 'Our neural engines evolve with emerging threat patterns, ensuring your platform is always ahead.',
    icon: BrainCircuit,
  },
  {
    label: 'INFRASTRUCTURE',
    title: 'Scalable Security',
    description: 'Cloud-native architecture designed to handle billions of signals per second without latency.',
    icon: ShieldCheck,
  },
  {
    label: 'OMNI-CHANNEL',
    title: 'Multi-Platform Support',
    description: 'Unified oversight across display, native, video, and programmatic ecosystems.',
    icon: Layers,
  },
];

export default function WhySection() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-primary-navy">
                Engineered for <br /><span className="text-accent-blue">Modern Resilience</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Guardian AI isn't just a filter; it's a dynamic defense layer built on high-performance architecture.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="px-6 py-3 bg-section border border-border/30 rounded-full flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-accent-blue animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest text-primary-navy">NETWORK_SECURE_LATEST_V3</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={`why-v2-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-10 bg-card border border-card-border rounded-2xl group hover:border-accent-blue/30 soft-shadow transition-all duration-300 relative overflow-hidden inner-panel-shadow"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="system-label">
                  {item.label}
                </span>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border/20 soft-shadow group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6 text-accent-blue group-hover:text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-primary-navy flex items-center gap-2">
                {item.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              <p className="text-text-body leading-relaxed mb-8 opacity-80">
                {item.description}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 bg-accent-blue rounded-full group-hover:w-32 transition-all duration-500" />
                <span className="text-[10px] font-mono font-bold text-accent-blue/40 opacity-0 group-hover:opacity-100 transition-opacity">READY_FOR_DEPLOYMENT</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

