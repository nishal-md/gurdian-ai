import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative overflow-hidden bg-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-accent-blue" />
            <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Enterprise Ready</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary-navy">
            Start protecting your platform.
          </h2>
          <p className="text-text-body text-lg max-w-xl mx-auto leading-relaxed">
            Deploy Guardian AI in minutes. Secure your digital supply chain with autonomous intelligence and <span className="text-ai-highlight">SaaS simplicity</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={() => navigate('/settings')}
            className="bg-primary-navy hover:bg-primary-navy-hover hover:scale-[1.03] text-white px-10 py-5 rounded-sm font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto soft-shadow shadow-primary-navy/20"
          >
            Get Technical Briefing
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </section>
  );
}

