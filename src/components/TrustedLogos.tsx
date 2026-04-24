import { motion } from 'motion/react';
import { ShieldCheck, Rocket, Zap, Heart, CheckCircle2 } from 'lucide-react';

const trustItems = [
  { icon: Rocket, text: 'Trusted by Startups' },
  { icon: ShieldCheck, text: 'Enterprise Ready' },
  { icon: Zap, text: 'Real-Time Detection' },
  { icon: Heart, text: 'GDPR / Compliance Ready' },
  { icon: CheckCircle2, text: '99.9% Uptime' },
];

export default function TrustedLogos() {
  return (
    <section className="py-12 border-y border-border/40 bg-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none"
            >
              <item.icon className="w-5 h-5 text-primary-navy" />
              <span className="text-sm font-bold tracking-tight text-primary-navy uppercase">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
