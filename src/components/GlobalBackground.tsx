import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu, Network, Shield, Binary, Lock, Eye, Zap, Database, Globe, Server, Smartphone, Radar } from 'lucide-react';
import { useRef } from 'react';

const icons = [
  { Icon: Cpu, x: '5%', y: '10%' },
  { Icon: Network, x: '85%', y: '5%' },
  { Icon: Shield, x: '12%', y: '25%' },
  { Icon: Binary, x: '78%', y: '30%' },
  { Icon: Lock, x: '5%', y: '45%' },
  { Icon: Eye, x: '92%', y: '50%' },
  { Icon: Database, x: '10%', y: '65%' },
  { Icon: Zap, x: '88%', y: '70%' },
  { Icon: Globe, x: '15%', y: '85%' },
  { Icon: Server, x: '82%', y: '90%' },
  { Icon: Smartphone, x: '45%', y: '5%' },
  { Icon: Radar, x: '55%', y: '95%' },
];

export default function GlobalBackground() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Floating Icons */}
      {icons.map((item, i) => {
        // Each icon moves at a slightly different rate based on scroll
        const yOffset = useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? 500 : -500)]);
        const rotation = useTransform(scrollYProgress, [0, 1], [0, i * 90]);
        const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.22, 0.12, 0.22, 0.12]);
        const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

        return (
          <motion.div
            key={`bg-icon-${i}`}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              y: yOffset,
              rotate: rotation,
              opacity: opacity,
              scale: scale,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            transition={{ duration: 1.5 }}
          >
            <item.Icon 
              className={`w-20 h-20 md:w-32 md:h-32 ${i % 2 === 0 ? 'text-accent-blue/30' : 'text-primary-navy/20'}`} 
              strokeWidth={0.5}
            />
          </motion.div>
        );
      })}

      {/* Static Grid Layer */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(#0B1F3A 1.5px, transparent 1.5px), linear-gradient(90deg, #0B1F3A 1.5px, transparent 1.5px)`,
        backgroundSize: '150px 150px'
      }} />
      
      {/* Animated Scan Line */}
      <motion.div 
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent pointer-events-none"
      />
    </div>
  );
}
