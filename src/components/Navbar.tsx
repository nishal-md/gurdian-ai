import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronRight, Menu, X, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { name: 'Platform', href: '#platform' },
  { name: 'Research', href: '#research' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Enterprise', href: '#enterprise' },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-blue z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 navy-glass shadow-lg border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="focus:outline-none">
            <Logo invert />
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate('/settings')}
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              <Settings className="w-4 h-4" />
              Console
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="bg-accent-blue hover:bg-accent-blue/90 text-white px-5 py-2.5 rounded-sm text-sm font-semibold tracking-tight transition-all duration-200 flex items-center gap-2 group shadow-lg shadow-accent-blue/20"
            >
              Launch Shield
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-navy border-t border-white/10 px-6 pb-6 pt-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 text-sm font-medium text-white/70 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {link.name}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button onClick={() => { navigate('/settings'); setMenuOpen(false); }} className="text-sm font-medium text-white/70 py-2 text-left">Console / Settings</button>
              <button onClick={() => { navigate('/settings'); setMenuOpen(false); }} className="bg-accent-blue text-white py-3 rounded-sm text-sm font-semibold tracking-tight flex items-center justify-center gap-2">
                Launch Shield <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
