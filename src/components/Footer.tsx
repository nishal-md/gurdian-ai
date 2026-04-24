import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-navy py-16 text-white/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo showTagline invert className="mb-8" />
            <p className="text-sm max-w-sm leading-relaxed mb-6">
              The world's most advanced autonomous intelligence system for advertising verification and platform security.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-bold text-white/50 hover:text-accent-blue transition-colors"
                >
                  {social.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold text-white tracking-[0.2em] mb-6 uppercase">Platform</h5>
            <ul className="space-y-4">
              {['Neural Engine', 'Flow Control', 'Edge Network', 'API Docs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold text-white tracking-[0.2em] mb-6 uppercase">Company</h5>
            <ul className="space-y-4">
              {['About', 'Research', 'Security', 'Legal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-[10px] font-mono tracking-widest uppercase">
            © {currentYear} Guardian AI Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[8px] font-mono p-1 border border-white/20 text-green-400">NODES_STABLE_41</span>
            <span className="text-[8px] font-mono p-1 border border-white/20 text-accent-blue">V_3.12.0_LATEST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

