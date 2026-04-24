import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    title: 'CTO, AdMatrix India',
    avatar: 'AM',
    rating: 5,
    quote: 'Guardian AI reduced our fraudulent ad incidents by 94% in the first month. The real-time enforcement is unlike anything we\'ve used before. It\'s not just protection—it\'s intelligence.',
    tag: 'ENTERPRISE',
  },
  {
    name: 'Sophia Chen',
    title: 'Head of Platform Safety, MediaSync',
    avatar: 'SC',
    rating: 5,
    quote: 'The neural content engine catches nuanced threats that every other tool failed to flag. The API integration was seamless and the team support is world-class.',
    tag: 'PRO',
  },
  {
    name: 'Daniel Osei',
    title: 'VP Engineering, Cloudvertise',
    avatar: 'DO',
    rating: 5,
    quote: 'Handling 2B+ daily ad impressions required a partner that could scale with zero latency. Guardian AI delivered exactly that. Their SLA is 99.97% and they mean it.',
    tag: 'BUSINESS',
  },
  {
    name: 'Priya Nair',
    title: 'Lead Data Scientist, BrandGuard',
    avatar: 'PN',
    rating: 5,
    quote: 'What impressed me most was how fast the models adapt to new threat patterns. Within hours of a new campaign exploit emerging, Guardian AI was already blocking it.',
    tag: 'ENTERPRISE',
  },
];

const tagColors: Record<string, string> = {
  ENTERPRISE: 'bg-primary-navy/10 text-primary-navy border-primary-navy/20',
  PRO: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  BUSINESS: 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.015] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 text-accent-blue fill-accent-blue" />
            <span className="text-[10px] font-bold text-accent-blue tracking-[0.2em] uppercase">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight mb-5">
            Trusted by security teams<br />
            <span className="text-accent-blue">across the globe</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            From startups to Fortune 500s — platform security teams rely on Guardian AI every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-card-border rounded-2xl p-8 soft-shadow hover:border-accent-blue/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Quote icon decorative */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent-blue/8 group-hover:text-accent-blue/15 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(t.rating).fill(0).map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-text-body leading-relaxed text-[15px] mb-8 relative z-10">"{t.quote}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent-blue text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-heading">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.title}</p>
                  </div>
                </div>
                <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border ${tagColors[t.tag]} tracking-wide`}>
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[['4.9/5', 'Average Rating'], ['2,400+', 'Active Organizations'], ['99.97%', 'Customer Retention']].map(([val, label]) => (
            <div key={label} className="flex items-center gap-3">
              <div className="h-8 w-px bg-border/50 hidden sm:block" />
              <div>
                <p className="text-2xl font-bold text-primary-navy">{val}</p>
                <p className="text-xs text-text-secondary">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
