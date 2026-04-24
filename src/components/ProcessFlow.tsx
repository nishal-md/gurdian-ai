import { motion } from 'motion/react';
import { Search, CheckCircle2, TrendingUp, Zap, Radar, ShieldCheck, Database, HardDrive } from 'lucide-react';

const steps = [
  {
    title: 'Detection',
    description: 'Scanning billions of signals for anomalous behavior.',
    icon: Search,
    tech: 'PATTERN_RECOGNITION'
  },
  {
    title: 'Verification',
    description: 'Cross-referencing with global threat databases.',
    icon: CheckCircle2,
    tech: 'DB_SYNC_GLOBAL'
  },
  {
    title: 'Risk Scoring',
    description: 'AI assessment of intent and impact probability.',
    icon: TrendingUp,
    tech: 'NEURAL_EVAL'
  },
  {
    title: 'Action',
    description: 'Autonomous enforcement of safety guardrails.',
    icon: Zap,
    tech: 'EDGE_ENFORCEMENT'
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-32 bg-transparent relative border-y border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary-navy">
              Autonomous Safety Lifecycle
            </h2>
            <div className="h-1.5 w-24 bg-accent-blue mx-auto rounded-full mb-6" />
            <p className="text-text-secondary max-w-2xl mx-auto font-medium">
              Four stages of real-time protection powered by our proprietary neural content engine.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line with Flow Animation */}
          <div className="absolute top-[60px] left-0 w-full h-[1px] bg-border/40 hidden lg:block z-0 overflow-hidden">
            <div className="w-full h-full animate-flow" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={`step-v2-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="group relative">
                  <div className="mb-10 relative">
                    <div className="w-16 h-16 bg-white border border-border/50 rounded-2xl flex items-center justify-center soft-shadow group-hover:border-accent-blue/50 group-hover:scale-110 transition-all duration-300 relative z-10 mx-auto">
                      <step.icon className="w-7 h-7 text-accent-blue" />
                      <div className="absolute -inset-2 bg-accent-blue/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Progress Circle Decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-accent-blue/10 rounded-full animate-spin-slow pointer-events-none" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 tracking-tight text-primary-navy group-hover:text-accent-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-body leading-relaxed mb-6 px-4">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-section border border-border/30 rounded-md inner-panel-shadow">
                      <HardDrive className="w-3 h-3 text-text-secondary opacity-50" />
                      <span className="text-[9px] font-mono font-bold text-text-secondary tracking-widest leading-none">
                        {step.tech}
                      </span>
                    </div>
                  </div>

                  {/* Connection Point */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-border/20 rounded-lg flex items-center justify-center text-[10px] font-bold text-accent-blue/40 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

