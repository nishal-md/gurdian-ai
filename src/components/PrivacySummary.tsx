import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const highlights = [
  { icon: Lock, title: 'Data Encryption', desc: 'Enterprise-grade SSL/TLS for all data in transit and at rest.' },
  { icon: ShieldCheck, title: 'GDPR Compliant', desc: 'Fully compliant with global data protection standards.' },
  { icon: Eye, title: 'Zero Sale Policy', desc: 'We never sell your personal data to third parties.' },
];

export default function PrivacySummary() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-card relative border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-accent-blue" />
              <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Privacy First</span>
            </div>
            <h2 className="text-4xl font-bold text-primary-navy tracking-tight mb-6">
              Your Data Security is Our <br /><span className="text-accent-blue">Core Protocol</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We believe in absolute transparency. Our privacy framework is designed to give you full control over your information while maintaining peak security standards.
            </p>
            
            <div className="space-y-6 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-border/30 soft-shadow flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy mb-1">{item.title}</h4>
                    <p className="text-xs text-text-secondary leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/privacy')}
              className="flex items-center gap-2 text-sm font-bold text-accent-blue hover:gap-3 transition-all"
            >
              Read Full Privacy Policy <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-primary-navy rounded-3xl p-8 md:p-12 soft-shadow border border-white/5 relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/20 blur-3xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-blue/10 blur-3xl -ml-16 -mb-16" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <FileText className="w-6 h-6 text-accent-blue" />
                  <span className="text-xs font-mono font-bold text-white/40 tracking-[0.2em] uppercase">Security_Brief_V2</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                  "Guardian AI is built on the principle of minimal data footprint and maximum protection."
                </h3>
                
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-white/60">ENCRYPTION_STATUS</span>
                    <span className="text-[10px] font-bold text-green-400">ACTIVE</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="h-full bg-accent-blue"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[9px] font-bold text-white/20 tracking-widest">TRUSTED_BY_ENTERPRISE</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
