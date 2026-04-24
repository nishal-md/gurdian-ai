import { motion } from 'motion/react';
2: import { AlertCircle, TrendingDown, ShieldAlert, Cpu, Zap, Search, Bell, ShieldCheck } from 'lucide-react';
3: 
4: export default function ProblemsSection() {
5:   return (
6:     <section id="problems" className="py-32 bg-white relative overflow-hidden">
7:       <div className="max-w-7xl mx-auto px-6 relative z-10">
8:         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
9:           
10:           {/* Problem Side */}
11:           <motion.div
12:             initial={{ opacity: 0, x: -30 }}
13:             whileInView={{ opacity: 1, x: 0 }}
14:             viewport={{ once: true }}
15:             className="space-y-8"
16:           >
17:             <div>
20:               <h2 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-6">
21:                 Modern platforms are scaling <br />
22:                 <span className="text-red-500">faster than safety</span>
23:               </h2>
24:               <p className="text-text-secondary text-lg leading-relaxed">
25:                 Manual moderation is no longer viable in a world of billions of signals.
26:               </p>
27:             </div>
28: 
29:             <div className="space-y-6">
30:               {[
31:                 { icon: AlertCircle, title: 'Incredibly Slow', desc: 'Manual review takes hours, while threats propagate in milliseconds.' },
32:                 { icon: TrendingDown, title: 'Prohibitively Expensive', desc: 'Scaling human teams for 24/7 coverage drains resources and focus.' },
33:                 { icon: ShieldAlert, title: 'Highly Risky', desc: 'Human error leads to missed threats and significant platform liability.' }
34:               ].map((item, i) => (
35:                 <div key={i} className="flex gap-5 p-6 bg-red-50/50 border border-red-100 rounded-2xl">
36:                   <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
37:                     <item.icon className="w-5 h-5 text-red-500" />
38:                   </div>
39:                   <div>
40:                     <h4 className="font-bold text-primary-navy mb-1">{item.title}</h4>
41:                     <p className="text-sm text-text-body">{item.desc}</p>
42:                   </div>
43:                 </div>
44:               ))}
45:             </div>
46:           </motion.div>
47: 
48:           {/* Solution Side */}
49:           <motion.div
50:             initial={{ opacity: 0, x: 30 }}
51:             whileInView={{ opacity: 1, x: 0 }}
52:             viewport={{ once: true }}
53:             className="space-y-8"
54:           >
55:             <div className="p-8 md:p-12 bg-primary-navy rounded-3xl text-white soft-shadow border border-white/5 relative overflow-hidden">
56:               {/* Background Glow */}
57:               <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 blur-[100px]" />
58:               
59:               <div className="relative z-10">
60:                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue rounded-full mb-8">
61:                   <Zap className="w-3.5 h-3.5 fill-current" />
62:                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase">The Solution</span>
63:                 </div>
64:                 <h3 className="text-3xl font-bold mb-6 leading-tight">
65:                   Guardian AI automates <br />
66:                   <span className="text-accent-blue">the entire safety lifecycle</span>
67:                 </h3>
68:                 
69:                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
70:                   {[
71:                     { icon: Search, title: 'Detection', desc: 'Neural engines scan intent.' },
72:                     { icon: Cpu, title: 'Insights', desc: 'Adaptive models learn patterns.' },
73:                     { icon: Bell, title: 'Escalation', desc: 'Instant alerts for critical risks.' },
74:                     { icon: ShieldCheck, title: 'Protection', desc: 'Automated blocking at the edge.' }
75:                   ].map((item, i) => (
76:                     <div key={i} className="space-y-3">
77:                       <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
78:                         <item.icon className="w-5 h-5 text-accent-blue" />
79:                       </div>
80:                       <h5 className="font-bold">{item.title}</h5>
81:                       <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
82:                     </div>
83:                   ))}
84:                 </div>
85:               </div>
86:             </div>
87:           </motion.div>
88: 
89:         </div>
90:       </div>
91:     </section>
92:   );
93: }
