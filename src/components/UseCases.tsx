import { motion } from 'motion/react';
import { Users, ShoppingBag, Gamepad2, Layout, Users2, Building2 } from 'lucide-react';

const cases = [
  { icon: Users, title: 'Social Media Platforms', desc: 'Secure feeds and user interactions at massive scale.' },
  { icon: ShoppingBag, title: 'Marketplaces', desc: 'Protect buyers and sellers from fraud and unsafe listings.' },
  { icon: Gamepad2, title: 'Gaming Apps', desc: 'Real-time moderation for in-game chat and community hubs.' },
  { icon: Layout, title: 'Creator Platforms', desc: 'Automate content review for videos, images, and text.' },
  { icon: Users2, title: 'Communities', desc: 'Maintain guildlines and safety in private and public forums.' },
  { icon: Building2, title: 'Enterprises', desc: 'Custom policy enforcement for internal and external communication.' },
];

export default function UseCases() {
  return (
    <section className="py-32 bg-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-5">
            Protection designed for <br />
            <span className="text-accent-blue">every digital ecosystem</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Guardian AI adapts to the unique needs of different platforms, ensuring safety without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-border/40 rounded-2xl soft-shadow hover:border-accent-blue/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h4 className="text-lg font-bold text-primary-navy mb-3">{item.title}</h4>
              <p className="text-sm text-text-body leading-relaxed opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
