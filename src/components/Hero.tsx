import { motion } from 'motion/react';
import { ShieldAlert, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-blue/5 border border-accent-blue/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Status: System Operational</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-navy leading-[1.05] mb-8">
            THE <span className="text-accent-blue">AI-DRIVEN</span> SHIELD FOR ADVERTISING
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Real-time intelligence to detect, assess, and act on digital threats. Secure your platform with <span className="text-ai-highlight">precision and authority</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            id="cta-start" 
            onClick={() => navigate('/settings')}
            className="w-full sm:w-auto bg-primary-navy hover:bg-primary-navy-hover hover:scale-[1.03] text-white px-8 py-4 rounded-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 soft-shadow group"
          >
            <ShieldAlert className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Analyzing
          </button>
          <button 
            id="cta-demo" 
            onClick={() => { const el = document.getElementById('pricing'); el?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full sm:w-auto border-2 border-border hover:bg-section hover:scale-[1.03] text-primary-navy px-8 py-4 rounded-sm font-bold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-[4/1] bg-gradient-to-t from-section to-transparent blur-3xl opacity-50 pointer-events-none -z-10" 
      />
    </motion.section>
  );
}

