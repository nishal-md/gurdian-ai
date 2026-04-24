import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, ShieldAlert, Cpu, Zap, Search, Bell, ShieldCheck } from 'lucide-react';

export default function ProblemsSection() {
  return (
    <section id="problems" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-full mb-6">
                <AlertCircle className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">The Problem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-6">
                Modern platforms are scaling <br />
                <span className="text-red-500">faster than safety</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Manual moderation is no longer viable in a world of billions of signals.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: AlertCircle, title: 'Incredibly Slow', desc: 'Manual review takes hours, while threats propagate in milliseconds.' },
                { icon: TrendingDown, title: 'Prohibitives Expensive', desc: 'Scaling human teams for 24/7 coverage drains resources and focus.' },
                { icon: ShieldAlert, title: 'Highly Risky', desc: 'Human error leads to missed threats and significant platform liability.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-red-50/50 border border-red-100 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-1">{item.title}</h4>
                    <p className="text-sm text-text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 md:p-12 bg-primary-navy rounded-3xl text-white soft-shadow border border-white/5 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 blur-[100px]" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue rounded-full mb-8">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">The Solution</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight">
                  Guardian AI automates <br />
                  <span className="text-accent-blue">the entire safety lifecycle</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  {[
                    { icon: Search, title: 'Detection', desc: 'Neural engines scan intent.' },
                    { icon: Cpu, title: 'Insights', desc: 'Adaptive models learn patterns.' },
                    { icon: Bell, title: 'Escalation', desc: 'Instant alerts for critical risks.' },
                    { icon: ShieldCheck, title: 'Protection', desc: 'Automated blocking at the edge.' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent-blue" />
                      </div>
                      <h5 className="font-bold">{item.title}</h5>
                      <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
