import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Platform', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Enterprise', href: '#' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-[60] origin-left"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 navy-glass shadow-lg border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo invert />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-white hover:text-accent-blue transition-colors duration-200">
              Console
            </button>
            <button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-5 py-2.5 rounded-sm text-sm font-semibold tracking-tight transition-all duration-200 flex items-center gap-2 group shadow-lg shadow-accent-blue/20">
              Launch Shield
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

