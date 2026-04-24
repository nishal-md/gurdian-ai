import { motion } from 'motion/react';
import { TrendingUp, Clock, Globe, Award } from 'lucide-react';

const stats = [
  { value: '99.97%', label: 'Detection Accuracy', sublabel: 'Across all content types', icon: Award },
  { value: '<12ms', label: 'Avg. Response Time', sublabel: 'Real-time edge processing', icon: Clock },
  { value: '4B+', label: 'Signals Analyzed Daily', sublabel: 'Across all platform channels', icon: TrendingUp },
  { value: '138+', label: 'Countries Protected', sublabel: 'Global edge network coverage', icon: Globe },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-blue/20 border border-accent-blue/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Live System Metrics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Trusted by enterprises at scale
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent-blue/10 border border-accent-blue/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-blue/20 transition-colors">
                <stat.icon className="w-5 h-5 text-accent-blue" />
              </div>
              <p className="text-4xl font-bold text-white tracking-tight mb-2">{stat.value}</p>
              <p className="text-sm font-bold text-white/80 mb-1">{stat.label}</p>
              <p className="text-xs text-white/40">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
