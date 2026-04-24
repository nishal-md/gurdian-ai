import { motion } from 'motion/react';
import { Activity, ShieldCheck, AlertTriangle, Cpu, Globe, Zap, TERMINAL, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const LOG_MESSAGES = [
  "Packet inspection initialized...",
  "Analyzing pattern: AD-FR-882",
  "Threat blocked at edge node US-W2",
  "Neural engine processing content...",
  "MD5 Hash verified: CC7A-DF46",
  "System scan completed. No critical issues.",
  "New endpoint encrypted: 10.26.3.212",
  "Updating global threat database...",
];

function LiveConsole() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)], ...prev].slice(0, 6));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary-navy/90 rounded-lg p-4 font-mono text-[10px] text-accent-blue/80 h-32 overflow-hidden border border-white/5 inner-panel-shadow">
      <div className="flex items-center gap-2 mb-2 text-white/40 border-b border-white/5 pb-1 uppercase tracking-widest text-[8px]">
        <Terminal className="w-2 h-2" />
        System Logs
      </div>
      <div className="space-y-1">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2"
          >
            <span className="text-white/20">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
            <span className={log.includes('blocked') ? 'text-red-400' : ''}>{log}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function LiveStatus() {
  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-card-border p-8 md:p-12 relative rounded-2xl soft-shadow overflow-hidden inner-panel-shadow"
        >
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-border/20 pb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShieldCheck className="w-10 h-10 text-accent-blue" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-accent-blue rounded-full -z-10"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold tracking-tight text-primary-navy">Security Dashboard</h3>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">
                    <motion.div 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                    />
                    <span className="text-[10px] font-bold text-green-600 tracking-wider">SECURE</span>
                  </div>
                </div>
                <p className="system-label text-accent-blue font-bold">
                  All systems synchronized • v.4.92.0
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-10">
              <div className="text-right">
                <p className="system-label mb-1">
                  Network Integrity
                </p>
                <div className="flex items-center justify-end gap-2 text-green-600 font-bold">
                  <Activity className="w-4 h-4" />
                  99.98%
                </div>
              </div>
              <div className="h-10 w-px bg-border/30" />
              <div className="text-right">
                <p className="system-label mb-1">
                  Session Node
                </p>
                <motion.p 
                  className="text-primary-navy font-mono font-bold tracking-tighter text-xl"
                >
                  882-QX-4
                </motion.p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Grid Inside Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3 h-3 text-text-secondary" />
                    <span className="system-label">EVENTS PROCESSED</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold tracking-tighter text-primary-navy mb-2">14,802,941</p>
                    <div className="w-full bg-white h-1.5 rounded-full overflow-hidden soft-shadow inner-panel-shadow">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-accent-blue h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-text-secondary" />
                    <span className="system-label">THREAT SUPPRESSION</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold tracking-tighter text-primary-navy mb-2">100%</p>
                    <div className="w-full bg-white h-1.5 rounded-full overflow-hidden soft-shadow inner-panel-shadow">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-accent-blue h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-text-secondary" />
                    <span className="system-label">LIVE SIGNAL INTERCEPTION</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Globe className="w-2.5 h-2.5 text-accent-blue opacity-50" />
                      <span className="text-[8px] font-mono text-text-secondary">SYNCED_REGION_EU_WEST</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-24 bg-white/50 rounded-lg p-4 border border-border/20 inner-panel-shadow group">
                  {[...Array(32)].map((_, i) => (
                    <motion.div
                      key={`signal-v2-${i}`}
                      animate={{ height: [20, Math.random() * 60 + 20, 20], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.05 }}
                      className="flex-1 bg-accent-blue/20 group-hover:bg-accent-blue/40 transition-colors rounded-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Console */}
            <div className="space-y-6">
              <LiveConsole />
              <div className="p-5 bg-white border border-card-border rounded-lg soft-shadow inner-panel-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-accent-blue" />
                  <span className="system-label">NODE RESOURCE USAGE</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'CPU', val: '42%' },
                    { label: 'MEM', val: '18%' },
                    { label: 'NET', val: '92%' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-[10px] font-mono w-8">{stat.label}</span>
                      <div className="flex-1 h-1.5 bg-section rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: stat.val }}
                          className="h-full bg-accent-blue"
                        />
                      </div>
                      <span className="text-[10px] font-mono w-8 text-right">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Micro Labels Background */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-1 opacity-30 select-none pointer-events-none">
            <span className="text-[8px] font-mono whitespace-nowrap">AUTH_SYSTEM_VERIFIED_2.4.92</span>
            <span className="text-[8px] font-mono whitespace-nowrap">REGION: US-EAST_AZ_1</span>
            <span className="text-[8px] font-mono whitespace-nowrap">COORDS: 40.7128° N, 74.0060° W</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

